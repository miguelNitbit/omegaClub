# Clubes de Programación omegaUp - Landing Page Completa

Una landing page completa y profesional para los **Clubes de Programación omegaUp**, diseñada con los colores oficiales de omegaUp.org. Esta versión incluye navegación por secciones, contenido detallado y funcionalidad completa de WhatsApp.

## 🚀 Características Principales

- **Navegación completa** con menú fijo y scroll suave entre secciones
- **Diseño minimalista** pero informativo con colores oficiales omegaUp
- **Enlaces de WhatsApp inteligentes** con mensajes predefinidos específicos
- **Contenido extenso** dividido en múltiples secciones informativas
- **FAQ interactiva** con preguntas expandibles
- **Video de YouTube integrado**: [https://www.youtube.com/watch?v=g703ZvnZu18](https://www.youtube.com/watch?v=g703ZvnZu18)
- **Proceso de inscripción detallado** con fechas y requisitos

## 🎨 Colores Oficiales omegaUp

- **Azul Primario**: `#004165` - Color principal de la marca
- **Azul Secundario**: `#75AADB` - Variación más clara  
- **Azul Claro**: `#f0f7ff` - Backgrounds sutiles
- **Azul Accent**: `#0080c7` - Enlaces y elementos destacados
- **Blanco**: `#FFFFFF` - Fondo principal
- **Gris Claro**: `#A9B2B1` - Texto secundario

## 📋 Estructura Completa de la Landing Page

### 1. **Navegación Fija**
- Menú con scroll suave a todas las secciones
- Logo omegaUp interactivo
- Responsive y con efecto blur al hacer scroll

### 2. **Hero Section (Inicio)**
- Logo omegaUp estilizado
- Propuesta de valor clara
- CTAs principales con mensajes WhatsApp específicos
- Información sobre audiencia objetivo

### 3. **Acerca de**
- Explicación detallada del programa
- Los 3 pilares presentados de forma simple
- **Sin comparación de modelos** (sección removida)

### 4. **Cómo Funciona**
- Explicación detallada de los 3 pilares estratégicos:
  - 🚀 **La Chispa (Liderazgo Viral)**
  - 🏆 **La Senda del Campeón (Rutas de Aprendizaje)**  
  - 🎮 **Arena omegaUp (Gamificación Total)**

### 5. **Beneficios**
- Beneficios específicos para cada audiencia:
  - Estudiantes (Preparatoria y Universidad)
  - Docentes e Instituciones
  - Líderes de Club
- Beneficios generales del programa

### 6. **Recursos de Aprendizaje**
- **Ruta del Novato**: [Introducción a C++](https://omegaup.com/course/introduccion_a_cpp/)
- **Ruta del Programador**: [Curso OMI](https://omegaup.com/course/Curso-OMI/)
- **Ruta del Hacker**: [Algoritmos Avanzados](https://omegaup.com/course/introduccion_a_algoritmos/)
- Recursos adicionales y herramientas

### 7. **Video Presentación**
- Video de YouTube integrado: [https://www.youtube.com/watch?v=g703ZvnZu18](https://www.youtube.com/watch?v=g703ZvnZu18)
- Información complementaria sobre el contenido

### 8. **Proceso de Inscripción**
- Requisitos detallados para fundar un club
- Proceso paso a paso con 3 etapas claras
- Fechas importantes: **1-17 de Septiembre 2024**
- Email oficial: **hello@omegaup.com**

### 9. **FAQ Interactiva**
- 12 preguntas frecuentes con respuestas detalladas
- Interfaz expandible/colapsable
- CTA al final para contacto adicional

### 10. **Contacto Final**
- Opciones diferenciadas para crear vs unirse a clubes
- CTAs con mensajes específicos de WhatsApp

### 11. **Footer Completo**
- Información de contacto
- Enlaces a recursos principales
- Resumen de pilares estratégicos

## 📞 Funcionalidad de WhatsApp

**Mensajes Predefinidos Específicos:**

### Para Crear un Club:
```
"Hola, me interesa crear un Club de Programación omegaUp en mi institución. ¿Podrían proporcionarme más información sobre el proceso?"
```

### Para Unirse a un Club:
```
"Hola, me gustaría unirme a un Club de Programación omegaUp. ¿Podrían ayudarme a encontrar un club cerca de mi ubicación?"
```

### Para Inscripción:
```
"Hola, he visto la información sobre el proceso de inscripción para crear un Club de Programación omegaUp y me gustaría recibir más detalles sobre los requisitos y el procedimiento."
```

### Contacto General:
```
"Hola, me gustaría recibir más información sobre los Clubes de Programación omegaUp. ¿Podrían ayudarme?"
```


## 🚀 Instalación y Uso

```bash
# Navegar al directorio


# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

La página se abrirá en `http://localhost:3000`

## 🌐 Despliegue en GitHub Pages

### Configuración Automática ✅

El proyecto ya está **completamente configurado** para GitHub Pages:

- ✅ `gh-pages` instalado como dependencia de desarrollo
- ✅ Scripts de deploy configurados en `package.json`
- ✅ Homepage URL configurada
- ✅ Script automático de despliegue incluido

### Pasos para Desplegar:

#### 1. **Crear repositorio en GitHub**
```bash
# Inicializar repositorio local
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Initial commit: Clubes omegaUp Landing Page"

# Conectar con repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/miguelNitbit/omegaClub.git

# Subir a GitHub
git push -u origin main
```

#### 2. **Desplegar con Script Automático** (Recomendado)
```bash
# Ejecutar script de deploy automático
./deploy.sh
```

#### 3. **Desplegar Manualmente**
```bash
# Construir para producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

### 🔧 **Configuración Incluida:**

**En `package.json`:**
```json
{
  "homepage": "https://miguelNitbit.github.io/omegaClub",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "devDependencies": {
    "gh-pages": "^6.3.0"
  }
}
```

### 🌍 **URL del Sitio:**
Una vez desplegado, tu landing page estará disponible en:
**https://miguelNitbit.github.io/omegaClub**

### ⚠️ **Importante:**
- La URL ya está configurada para tu usuario: `miguelNitbit` y repositorio: `omegaClub`
- Asegúrate de que el repositorio sea público para GitHub Pages gratuito
- El despliegue puede tardar 5-10 minutos en estar disponible

### 🔄 **Para Actualizaciones:**
Cada vez que quieras actualizar el sitio:
```bash
git add .
git commit -m "Update: descripción de cambios"
git push origin main
./deploy.sh
```

## 🎯 Audiencias Objetivo

### Estudiantes de Preparatoria y Universidad
- Rutas de aprendizaje desde principiante hasta avanzado
- Oportunidades de liderazgo y crecimiento personal
- Preparación para competencias nacionales e internacionales

### Docentes y Educadores
- Recursos pedagógicos estructurados
- Soporte técnico y metodológico
- Red nacional de educadores

### Líderes de Club
- Kit completo de fundación
- Desarrollo de habilidades de liderazgo
- Reconocimiento y certificación oficial

## 📋 Requisitos para Fundar un Club

1. **Afiliación Institucional**: Ser alumno o docente de una institución educativa
2. **Motivación**: Ganas de crear comunidad e impactar a otros estudiantes
3. **Liderazgo**: Disposición para facilitar y organizar actividades

## 📅 Fechas Importantes 2024

- **Inicio de Inscripciones**: 1 de Septiembre
- **Cierre de Inscripciones**: 17 de Septiembre
- **Email de Aplicación**: hello@omegaup.com

## 🛠️ Tecnologías

- **React 18**: Framework principal
- **CSS3**: Variables CSS y diseño responsivo
- **Font Awesome**: Iconografía profesional
- **Google Fonts (Inter)**: Tipografía moderna
- **YouTube Embed**: Video integrado

## 📱 Características Responsive

- **Mobile-first**: Optimizado para dispositivos móviles
- **Navegación adaptativa**: Menú colapsable en pantallas pequeñas
- **Grids flexibles**: Contenido que se adapta a cualquier tamaño
- **Botones táctiles**: CTAs optimizados para touch

## 🎨 Personalización

### Para Cambiar el Video de YouTube:
1. Editar `/src/components/VideoSection.js`
2. Reemplazar el URL en el src del iframe
3. Cambiar `g703ZvnZu18` por el nuevo ID del video

### Para Actualizar Fechas:
1. Editar `/src/components/RegistrationSection.js`
2. Modificar las fechas en la sección correspondiente

### Para Cambiar Mensajes de WhatsApp:
1. Editar los mensajes predefinidos en cada componente
2. Los mensajes están en constantes al inicio de cada archivo

## ✨ Diferencias con la Versión Anterior

- ✅ **Mantenido**: Toda la funcionalidad de WhatsApp
- ✅ **Mantenido**: Video de YouTube específico integrado
- ✅ **Mantenido**: Navegación completa y todas las secciones
- ✅ **Mantenido**: Colores oficiales y diseño minimalista

---

**Una experiencia completa e informativa para formar parte del futuro de la programación competitiva en México 🇲🇽🚀**
