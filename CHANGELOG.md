# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com),
y este proyecto adhiere a [Semantic Versioning](https://semver.org).

### Añadido (Added)
- Estructura inicial del proyecto, configuración de `.gitignore` y gestor de paquetes.
- Funciones principales de cálculo de precios e impuestos (`feature/impuestos`).
- Documentación técnica de las funciones generada en `docs/api`.
- Documentación general del proyecto (`README.md`) con guía de instalación, uso, resolución de conflictos y medidas de seguridad.
- Archivo `CHANGELOG.md` para el registro de versiones.

### Corregido (Fixed)
- Ajustes aplicados tras la revisión de código en la solicitud de incorporación (*Pull Request*) de la rama de impuestos.
- Resolución de conflicto de fusión entre ramas sobre la lógica de cálculo.

### Seguridad (Security)
- Configuración de reglas de protección (*Rulesets*) en la rama principal `main` para bloquear borrados, reescritura de historial y *pushes* directos.