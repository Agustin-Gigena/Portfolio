# Portfolio — AWS/DevOps Experience + Blog Removal

**Fecha:** 2026-06-25
**Estado:** Aprobado

---

## 1. Resumen

Modificar el portfolio para eliminar la sección Blog y agregar experiencia en AWS y DevOps integrada en las entradas existentes de Experiencia. Agregar sección de Certificaciones. Todo mantiene la estructura actual sin agregar secciones nuevas innecesarias.

---

## 2. Cambios Generales

| Cambio | Descripción |
|---|---|
| Hero título | "Desarrollador .NET Full Stack" |
| Blog | Eliminada completamente (HTML, CSS, referencias) |
| Experiencia Alephoo | Título actualizado, bullets de AWS/DevOps/ISO |
| Experiencia Independiente | Bullet nuevo de Oracle Cloud DevOps |
| Skills | Nueva categoría "Cloud & DevOps" |
| Certifications | Sección nueva después de Educación |
| Navbar | Sin cambios (no tiene link a Blog) |

---

## 3. Hero

**Título actual:** "Desarrollador Full Stack / .NET Developer"
**Título nuevo:** "Desarrollador .NET Full Stack"
**Tagline:** Sin cambios

---

## 4. Experiencia — Alephoo

**Título actual:** Desarrollador de Soluciones
**Título nuevo:** Reliability & Security, Infraestructura
**Subtitle:** Infraestructura Cloud y Seguridad

**Bullets nuevos:**
- Configuré sistema de CI/CD automatizado con ECS y GitHub
- Gestión de servicios AWS: EC2, ECS, ECR, Lambda, RDS, IAM, CloudFormation, CloudWatch, S3, EventBridge, Secret Manager, Amplify
- Dashboards de monitoreo con CloudWatch
- Dumps automáticos de base de datos con backup en disco físico
- Oficial de Seguridad — Responsable de ISO 27001

**Bullets existentes que se mantienen:**
- Lideré el equipo de soporte técnico avanzado
- Sistema turnero con notificaciones en tiempo real

---

## 5. Experiencia — Independiente

**Bullet nuevo:**
- Deploy de RugbyEngine en VPC de Oracle Cloud con CI/CD automático (GitHub Actions + scripts custom) sobre Docker, Docker Compose y Kubernetes

**Bullets existentes que se mantienen:**
- Aplicación .NET Core con Entity Framework
- Sistema de actualización automática con GitHub
- Herramientas de automatización en C# y Linux

---

## 6. Skills — Nueva Categoría

**Cloud & DevOps:**
- AWS (EC2, ECS, ECR, Lambda, RDS, IAM, CloudFormation, CloudWatch, S3)
- Docker / Docker Compose
- Kubernetes
- GitHub Actions
- CI/CD
- Linux

**Categorías existentes que se mantienen:**
- Backend
- Frontend
- Bases de datos
- Herramientas (se remueven CI/CD y Linux de aquí para no duplicar)

---

## 7. Certificaciones (nueva sección)

Después de Educación, antes de Proyectos:

- **ISO 27001:2022** — Oficial de Seguridad (Alephoo, actualidad)

---

## 8. Blog (eliminada)

Se elimina completamente:
- HTML: sección `#blog`
- CSS: estilos `.blog`, `.blog__placeholder`
- spec anterior: referencia en secciones del diseño

---

## 9. Archivos a Modificar

| Archivo | Cambio |
|---|---|
| `index.html` | Hero title, Alephoo experience, Independiente experience, Skills, quitar Blog, agregar Certificaciones |
| `css/styles.css` | Estilos para Certificaciones (similar a Education), quitar estilos Blog |
| `ts/main.ts` | Sin cambios necesarios |
| `DESIGN.md` | Actualizar título del hero |
| `PRODUCT.md` | Sin cambios |
| `docs/superpowers/specs/2026-06-21-portfolio-design.md` | Actualizar sección de contenido |

---

## 10. Orden de Secciones (post-cambio)

1. Hero
2. About
3. Experience
4. Skills
5. Education
6. **Certifications** (nueva)
7. Projects
8. Contact
