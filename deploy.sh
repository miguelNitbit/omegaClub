#!/bin/bash

# Script automático para despliegue en GitHub Pages
# Clubes de Programación omegaUp Landing Page

echo "🚀 Iniciando despliegue en GitHub Pages..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Verificar que gh-pages está instalado
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Instalando gh-pages..."
    npm install --save-dev gh-pages
fi

# Limpiar directorio build anterior si existe
if [ -d "build" ]; then
    echo "🧹 Limpiando build anterior..."
    rm -rf build
fi

echo "🔨 Construyendo proyecto para producción..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente"
    echo "🌐 Desplegando en GitHub Pages..."
    npm run deploy
    
    if [ $? -eq 0 ]; then
        echo "✅ ¡Despliegue completado exitosamente!"
        echo "🌍 Tu sitio estará disponible en: https://miguelNitbit.github.io/omegaClub"
        echo "⏳ Puede tomar unos minutos en estar disponible"
    else
        echo "❌ Error durante el despliegue"
        exit 1
    fi
else
    echo "❌ Error durante el build"
    exit 1
fi
