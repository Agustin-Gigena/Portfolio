import puppeteer from 'puppeteer';
import { marked } from 'marked';
import fs from 'fs';

/**
 * Workflow para adaptar CV y generar PDF ATS-Friendly.
 * 
 * Uso:
 * node scripts/tailor-resume.mjs --job-desc "..." [--resume-path "./resume.md"]
 */
const args = process.argv.slice(2);
const jobDescIdx = args.indexOf('--job-desc');
const resumePathIdx = args.indexOf('--resume-path');
const langIdx = args.indexOf('--lang');

const jobDescription = jobDescIdx !== -1 ? args[jobDescIdx + 1] : null;
const resumePath = resumePathIdx !== -1 ? args[resumePathIdx + 1] : './resume.md';
const lang = langIdx !== -1 ? args[langIdx + 1] : 'es';

if (!jobDescription) {
  console.error("Error: --job-desc es obligatorio.");
  process.exit(1);
}

async function run() {
    // 1. Adaptar el contenido (simulado: aquí integraremos la skill)
    console.log("🛠️  Adaptando currículum...");
    const baseResume = fs.readFileSync(resumePath, 'utf-8');
    const tailoredContent = baseResume;

    const tailoredResumePath = './resume-tailored.md';
    fs.writeFileSync(tailoredResumePath, tailoredContent);
    console.log(`✅ Currículum adaptado generado en ${tailoredResumePath}`);

    // 2. Generar PDF ATS-Friendly vía puppeteer
    console.log("📄 Generando PDF ATS-Friendly...");

    const htmlContent = marked.parse(tailoredContent);
    const fullHtml = `
    <html>
      <head>
        <style>
          body { font-family: Helvetica, sans-serif; font-size: 11pt; line-height: 1.5; margin: 1in; }
          .footer-link { font-size: 9pt; color: #555; margin-top: 50px; border-top: 1px solid #ccc; padding-top: 10px; }
        </style>
      </head>
      <body>
        ${htmlContent}
        <div class="footer-link">
          <p>${lang === 'es' ? 'Puedes obtener más información sobre mí y mis proyectos en mi sitio web:' : 'You can find more information about me and my projects on my website:'} <a href="https://agigena.com">https://agigena.com</a></p>
        </div>
      </body>
    </html>`;

    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setContent(fullHtml);
    await page.pdf({
        path: 'resume-ats.pdf',
        format: 'A4',
        printBackground: true,
        margin: { top: '1in', bottom: '1in', left: '1in', right: '1in' }
    });

    await browser.close();
    console.log("✅ PDF generado exitosamente: resume-ats.pdf");
}

// Instalamos marked si no existe antes de correr (para el parser)
try {
  run();
} catch (e) {
  console.error(e);
}
