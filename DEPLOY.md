# 🚀 Guía de Despliegue - GitHub Pages

## Configuración Completa para GitHub Pages

Este proyecto está **100% configurado** para desplegarse automáticamente en GitHub Pages.

## 📋 Lista de Verificación Pre-Despliegue

- ✅ `gh-pages` instalado como dependencia de desarrollo
- ✅ Scripts de deploy configurados en `package.json`
- ✅ Homepage URL configurada
- ✅ Script automático de despliegue (`deploy.sh`)
- ✅ `.gitignore` configurado correctamente

## 🌐 Proceso de Despliegue Paso a Paso

### 1. **Preparar Repositorio GitHub**

```bash
# 1. Crear repositorio en GitHub (público)
# 2. Clonar o inicializar localmente

# Si es proyecto nuevo:
git init
git add .
git commit -m "Initial commit: Clubes omegaUp Landing Page"

# Conectar con GitHub (cambiar URL por la tuya)
git remote add origin https://github.com/miguelNitbit/omegaClub.git
git branch -M main
git push -u origin main
```

### 2. **Configurar URL en package.json**

**⚠️ IMPORTANTE:** Actualiza la URL en `package.json`:

```json
{
  "homepage": "https://miguelNitbit.github.io/omegaClub"
}
```

### 3. **Desplegar Automáticamente**

#### Opción A: Script Automático (Recomendado)
```bash
# Ejecutar desde la raíz del proyecto
./deploy.sh
```

#### Opción B: Manual
```bash
npm run deploy
```

## 🔧 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run deploy` | Desplegar en GitHub Pages |
| `npm run predeploy` | Pre-deploy (ejecuta build automáticamente) |
| `./deploy.sh` | Script automático completo |

## 🌍 URLs Resultantes

- **Desarrollo**: `http://localhost:3000`
- **Producción**: `https://miguelNitbit.github.io/omegaClub`

## ⚡ Flujo de Trabajo Recomendado

### Para Nuevos Cambios:

```bash
# 1. Hacer cambios al código
# 2. Probar localmente
npm start

# 3. Commit de cambios
git add .
git commit -m "feat: descripción del cambio"
git push origin main

# 4. Desplegar nueva versión
./deploy.sh
```

## 🛠️ Configuración Técnica

### En `package.json`:
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

### Script `deploy.sh`:
- ✅ Verifica dependencies
- ✅ Limpia builds anteriores
- ✅ Ejecuta build de producción
- ✅ Despliega en GitHub Pages
- ✅ Muestra URLs y status

## 🔍 Troubleshooting

### Error: "Permission denied"
```bash
chmod +x deploy.sh
```

### Error: "gh-pages not found"
```bash
npm install
```

### Error: "Build failed"
```bash
# Verificar errores en consola
npm run build

# Limpiar y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error: "Remote repository not found"
```bash
# Verificar conexión a GitHub
git remote -v

# Actualizar URL si es necesario
git remote set-url origin https://github.com/miguelNitbit/omegaClub.git
```

## 📝 Notas Importantes

1. **Repositorio Público**: GitHub Pages gratis requiere repositorio público
2. **Tiempo de Propagación**: 5-10 minutos para ver cambios online
3. **Branch gh-pages**: Se crea automáticamente, no tocar manualmente
4. **HTTPS**: GitHub Pages sirve automáticamente con HTTPS
5. **Custom Domain**: Se puede configurar dominio personalizado después

## 🎯 Configuración Post-Despliegue

### En GitHub Repository Settings:

1. Ve a **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` / `/ (root)`
4. **Custom domain** (opcional): tu-dominio.com

### Verificación:

- ✅ Sitio accesible en la URL
- ✅ Todos los enlaces funcionan
- ✅ Imágenes cargan correctamente
- ✅ WhatsApp links funcionan
- ✅ YouTube video integrado

---

**¡Tu Landing Page de Clubes omegaUp está lista para el mundo! 🚀🇲🇽**
