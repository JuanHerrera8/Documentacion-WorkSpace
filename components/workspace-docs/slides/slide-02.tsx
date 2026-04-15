"use client";

import { Badge, Table, Code } from "../ui-components";

export function Slide02() {
  const contentIndex = [
    { paso: '01', titulo: 'Introducción al Módulo Workspace', bloque: '1', bloqueLabel: 'Bloque 1 — Fundamentos', variant: 'muted' as const },
    { paso: '02', titulo: 'Índice de Contenidos', bloque: '1', bloqueLabel: 'Bloque 1 — Fundamentos', variant: 'muted' as const },
    { paso: '03', titulo: 'Resumen Ejecutivo del Módulo', bloque: '1', bloqueLabel: 'Bloque 1 — Fundamentos', variant: 'muted' as const },
    { paso: '04', titulo: 'Flujo General del Proceso', bloque: '2', bloqueLabel: 'Bloque 2 — Flujos', variant: 'primary' as const },
    { paso: '05', titulo: 'Diagrama de Estados del Documento', bloque: '2', bloqueLabel: 'Bloque 2 — Flujos', variant: 'primary' as const },
    { paso: '06', titulo: 'Roles y Acciones Permitidas', bloque: '2', bloqueLabel: 'Bloque 2 — Flujos', variant: 'primary' as const },
    { paso: '07', titulo: 'Tabla MERT_WORKSPACE', bloque: '3', bloqueLabel: 'Bloque 3 — Base de Datos', variant: 'lector' as const },
    { paso: '08', titulo: 'Tabla MERT_WORKSPACE_DATOS_RAD', bloque: '3', bloqueLabel: 'Bloque 3 — Base de Datos', variant: 'lector' as const },
    { paso: '09', titulo: 'Tablas Relacionadas', bloque: '3', bloqueLabel: 'Bloque 3 — Base de Datos', variant: 'lector' as const },
    { paso: '10', titulo: 'JSPs — Vistas de Usuario', bloque: '4', bloqueLabel: 'Bloque 4 — Interfaz JSP', variant: 'edicion' as const },
    { paso: '11', titulo: 'Lógica de Presentación JSP', bloque: '4', bloqueLabel: 'Bloque 4 — Interfaz JSP', variant: 'edicion' as const },
    { paso: '12', titulo: 'CommandWorkspaceInterno y Externo', bloque: '5', bloqueLabel: 'Bloque 5 — Commands y Servlets', variant: 'aprobacion' as const },
    { paso: '13', titulo: 'Servicios del Workspace', bloque: '5', bloqueLabel: 'Bloque 5 — Commands y Servlets', variant: 'aprobacion' as const },
    { paso: '14', titulo: 'Servlets de Archivos y Firma', bloque: '5', bloqueLabel: 'Bloque 5 — Commands y Servlets', variant: 'aprobacion' as const },
    { paso: '15', titulo: 'Reglas de Transición de Estados', bloque: '6', bloqueLabel: 'Bloque 6 — Reglas de Negocio', variant: 'editor' as const },
    { paso: '16', titulo: 'Regla de Visibilidad en Bandeja', bloque: '6', bloqueLabel: 'Bloque 6 — Reglas de Negocio', variant: 'editor' as const },
    { paso: '17', titulo: 'Manual del Editor', bloque: '7', bloqueLabel: 'Bloque 7 — Manuales', variant: 'definitivo' as const },
    { paso: '18', titulo: 'Manual del Aprobador y Lector', bloque: '7', bloqueLabel: 'Bloque 7 — Manuales', variant: 'definitivo' as const },
    { paso: '19', titulo: 'Mapa de Archivos del Módulo', bloque: '7', bloqueLabel: 'Bloque 7 — Manuales', variant: 'definitivo' as const },
    { paso: '20', titulo: 'Glosario y FAQ Técnico', bloque: '7', bloqueLabel: 'Bloque 7 — Manuales', variant: 'definitivo' as const },
  ];

  return (
    <div className="space-y-6">
      <Table headers={['Paso', 'Título', 'Bloque']}>
        {contentIndex.map((item) => (
          <tr key={item.paso} className="hover:bg-slate-800/50 transition-colors">
            <td className="px-4 py-2.5">
              <Code>{item.paso}</Code>
            </td>
            <td className="px-4 py-2.5">
              <span className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">
                {item.titulo}
              </span>
            </td>
            <td className="px-4 py-2.5">
              <Badge variant={item.variant}>{item.bloqueLabel}</Badge>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
