# Calculadora de Precios con Impuestos

## Descripción
Proyecto mínimo en JavaScript que incluye las siguientes funciones:

1. Calculadora del precio final de un producto aplicando impuestos (IVA).
2. Simulador de inversión que calcula el crecimiento del capital con intereses más la inversión.

## Requisitos
* Tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).
* Gestor de paquetes **npm** (incluido con Node.js).

## Instalación
1. Clona este repositorio o descarga los archivos en tu equipo.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias de desarrollo ejecutando:
   ```bash
   npm install
   ```

## Uso
Para ejecutar el programa y ver los resultados de los cálculos en la consola, lanza el siguiente comando:
```bash
node scripts/index.js
```

## Resolución de conflictos
Para practicar la gestión de conflictos en Git, se provocó y resolvió un conflicto de fusión siguiendo estos pasos:

1. **Provocación del conflicto:** Se modificó la misma línea de código que define el color del mensaje de error (`errorSimulador.style.color`) con valores distintos en dos ramas:
   * En la rama `main` se estableció el valor `"purple"`.
   * En la rama `fix/estilo-error` se estableció el valor `"darkred"`.
2. **Detección:** Al intentar integrar los cambios desde `main` mediante `git merge fix/estilo-error`, Git detuvo la fusión mostrando un mensaje de `CONFLICT (content)` al detectar cambios incompatibles en la misma línea.
3. **Resolución:** Se abrió el archivo en Visual Studio Code, se revisaron los bloques delimitados por `<<<<<<< HEAD` y `>>>>>>> fix/estilo-error`, y se seleccionó la opción **Accept Incoming Change** para conservar el color `"darkred"`. Finalmente, se guardó el archivo y se registró la solución mediante un nuevo `git commit`.


