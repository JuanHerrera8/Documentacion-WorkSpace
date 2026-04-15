# Sed Workspace - Documentación Interactiva

Presentación interactiva de 20 diapositivas que documenta de manera integral el módulo Workspace. Este proyecto combina Next.js, React y una biblioteca completa de componentes UI de Radix UI para crear una experiencia de aprendizaje visualmente atractiva.

## 📋 Descripción

Este proyecto es una aplicación web moderna construida con **Next.js 16** que presenta documentación técnica estructurada en 7 bloques temáticos:

1. **Bloque 1 — Fundamentos**: Introducción, índice y resumen ejecutivo
2. **Bloque 2 — Flujos**: Procesos, diagrama de estados y roles
3. **Bloque 3 — Base de Datos**: Estructura de tablas relacionadas
4. **Bloque 4 — Interfaz JSP**: Vistas de usuario y lógica de presentación
5. **Bloque 5 — Commands y Servlets**: Controladores y servicios
6. **Bloque 6 — Reglas de Negocio**: Transiciones de estado y visibilidad
7. **Bloque 7 — Manuales**: Guías de usuario y glosario técnico

## 🚀 Características

- ✨ Presentación interactiva con 20 diapositivas
- 🎨 Sistema de componentes UI profesional (50+ componentes)
- 🌙 Soporte para modo oscuro y tema personalizado
- 📱 Responsive design para desktop y móvil
- ⚡ Rendimiento optimizado con Next.js 16
- 🎭 Componentes de Radix UI accesibles
- 📊 Integración con Vercel Analytics

## 🛠 Stack Tecnológico

- **Framework**: Next.js 16.2
- **Lenguaje**: TypeScript
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Iconos**: Lucide React
- **Package Manager**: pnpm
- **Formularios**: React Hook Form

## 📦 Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar en desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint
```

## 📂 Estructura del Proyecto

```
├── app/                           # Aplicación Next.js
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Página de inicio
│   └── globals.css               # Estilos globales
├── components/
│   ├── ui/                       # 50+ componentes reutilizables
│   ├── theme-provider.tsx        # Proveedor de tema
│   └── workspace-docs/           # Componentes de presentación
│       ├── slideshow.tsx         # Reproductor de diapositivas
│       ├── types.ts              # Tipos de datos
│       └── slides/               # 20 diapositivas individuales
├── hooks/                        # Hooks personalizados
├── lib/                          # Utilidades
└── styles/                       # Estilos compartidos
```

## 🎯 Uso

La presentación se ejecuta directamente en la página principal. Navega entre las 20 diapositivas usando los controles interactivos para explorar la documentación completa del módulo Workspace.

## 📝 Licencia

Proyecto privado. Todos los derechos reservados.

---

**Versión**: 0.1.0 | **Última actualización**: Abril 2026
