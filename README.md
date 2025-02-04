# Vite + React + TypeScript + React Hook Form + Zod

Este proyecto es una plantilla que integra Vite, React y TypeScript con React Hook Form para la gestión de formularios y Zod para la validación de esquemas.

## Tecnologías Utilizadas

- **Vite**: Herramienta de construcción rápida para proyectos web modernos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset tipado de JavaScript que mejora la robustez del código.
- **React Hook Form**: Biblioteca para manejar formularios en React de manera eficiente.
- **Zod**: Biblioteca de validación de esquemas para TypeScript y JavaScript.

## Requisitos Previos

- **Node.js**: Asegúrate de tener instalada la versión recomendada de Node.js. Puedes gestionar versiones de Node.js utilizando herramientas como Volta.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/lfrdcp/vite-ts-react-hook-form-zod.git
   cd vite-ts-react-hook-form-zod
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Previsualiza la aplicación construida.
- `npm run lint`: Ejecuta ESLint para analizar el código.
- `npm run format`: Formatea el código utilizando Prettier.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
vite-ts-react-hook-form-zod/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables de React.
  - **hooks/**: Hooks personalizados.
  - **pages/**: Componentes de página.
  - **App.tsx**: Componente principal de la aplicación.
  - **main.tsx**: Punto de entrada de la aplicación.
- **public/**: Archivos estáticos públicos.
- **index.html**: Archivo HTML principal.
- **package.json**: Archivo de configuración de npm.
- **tsconfig.json**: Configuración de TypeScript.
- **vite.config.ts**: Configuración de Vite.

## Uso de React Hook Form y Zod

Este proyecto utiliza React Hook Form para la gestión eficiente de formularios y Zod para la validación de esquemas. Puedes encontrar ejemplos de cómo implementar formularios con validación en los componentes dentro de la carpeta `src/components`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
