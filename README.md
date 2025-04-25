# Primer Servidor con Node y Express
Este proyecto se trata de un servidor utilizando Node.js y Express que devuelve la hora actual y la fecha completa. Además, incorpora HTTP cats para mostrar una imagen correspondiente para el error 404.  

Instrucciones de uso:

# 🕒 Servidor con Node.js y Express - Hora Actual

Este proyecto es un servidor HTTP básico creado con **Node.js**, **Express** y módulos ES (`import/export`). Permite consultar la hora actual en distintos formatos a través de rutas específicas.

## 📁 Estructura del proyecto
/proyecto-hora │ ├── time.js # Módulo que devuelve la hora actual ├── app.js # Configuración de Express y las rutas ├── index.js # Punto de entrada del servidor 

## 🌐 Rutas disponibles

| Ruta               | Descripción                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `/`                | Muestra un mensaje de bienvenida.                                           |
| `/hora`            | Devuelve la hora actual en formato `HH:MM:SS`.                              |
| `/fecha-completa`  | Devuelve la fecha y hora completa                                           |

## ❌ Rutas inexistentes

El servidor devuelve una imagen personalizado de error 404 de HTTP cats para rutas no válidas.

## 🧪 Cómo probar

Podés probar las rutas usando:
- Tu navegador: [http://localhost:3000](http://localhost:3000)
- Postman

## 🛠 Tecnologías utilizadas

- Node.js
- Express
- ES Modules (`import` / `export`)
- Objeto nativo `Date` de JavaScript
