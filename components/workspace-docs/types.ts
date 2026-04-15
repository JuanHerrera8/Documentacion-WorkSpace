export interface SlideSection {
  id: string;
  step: number;
  title: string;
  subtitle: string;
  block: string;
  blockLabel: string;
}

export const SLIDES: SlideSection[] = [
  { id: 'paso1', step: 1, title: 'Introducción al Módulo Workspace', subtitle: 'Descripción del documento y convenciones de diseño', block: '1', blockLabel: 'Bloque 1 — Fundamentos' },
  { id: 'paso2', step: 2, title: 'Índice de Contenidos', subtitle: 'Mapa de navegación de las 20 secciones de este documento', block: '1', blockLabel: 'Bloque 1 — Fundamentos' },
  { id: 'paso3', step: 3, title: 'Resumen Ejecutivo del Módulo', subtitle: 'Qué es, para qué sirve, quiénes lo usan y cuál es el resultado final', block: '1', blockLabel: 'Bloque 1 — Fundamentos' },
  { id: 'paso4', step: 4, title: 'Flujo General del Proceso', subtitle: 'De la creación del borrador al radicado oficial — actores y condiciones', block: '2', blockLabel: 'Bloque 2 — Flujos' },
  { id: 'paso5', step: 5, title: 'Diagrama de Estados del Documento', subtitle: 'Combinación de PASO, STATUS e IND_LISTO — todos los estados posibles', block: '2', blockLabel: 'Bloque 2 — Flujos' },
  { id: 'paso6', step: 6, title: 'Roles y Acciones Permitidas', subtitle: 'Qué puede hacer cada rol en cada etapa del proceso', block: '2', blockLabel: 'Bloque 2 — Flujos' },
  { id: 'paso7', step: 7, title: 'Tabla MERT_WORKSPACE', subtitle: 'Una fila por usuario asignado al documento borrador — tabla principal del módulo', block: '3', blockLabel: 'Bloque 3 — Base de Datos' },
  { id: 'paso8', step: 8, title: 'Tabla MERT_WORKSPACE_DATOS_RAD', subtitle: 'Una fila por documento — almacena los datos del formulario en JSON (CLOB)', block: '3', blockLabel: 'Bloque 3 — Base de Datos' },
  { id: 'paso9', step: 9, title: 'Tablas Relacionadas', subtitle: 'Tablas de soporte que participan en el ciclo de vida del workspace', block: '3', blockLabel: 'Bloque 3 — Base de Datos' },
  { id: 'paso10', step: 10, title: 'JSPs — Vistas de Usuario', subtitle: 'Archivos de interfaz que conforman el módulo workspace', block: '4', blockLabel: 'Bloque 4 — Interfaz JSP' },
  { id: 'paso11', step: 11, title: 'Lógica de Presentación JSP', subtitle: 'Condiciones que controlan qué botones y campos se muestran según rol, etapa y lock', block: '4', blockLabel: 'Bloque 4 — Interfaz JSP' },
  { id: 'paso12', step: 12, title: 'CommandWorkspaceInterno y Externo', subtitle: 'Controladores que orquestan todas las operaciones del ciclo de vida del workspace', block: '5', blockLabel: 'Bloque 5 — Commands y Servlets' },
  { id: 'paso13', step: 13, title: 'Servicios del Workspace', subtitle: 'Las 6 clases de servicio que encapsulan la lógica de negocio del módulo', block: '5', blockLabel: 'Bloque 5 — Commands y Servlets' },
  { id: 'paso14', step: 14, title: 'Servlets de Archivos y Firma', subtitle: 'Servlets especializados para carga de Word, envío y gestión de firma digital', block: '5', blockLabel: 'Bloque 5 — Commands y Servlets' },
  { id: 'paso15', step: 15, title: 'Reglas de Transición de Estados', subtitle: 'Máquina de estados del documento: cuándo y cómo cambian PASO, STATUS e IND_LISTO', block: '6', blockLabel: 'Bloque 6 — Reglas de Negocio' },
  { id: 'paso16', step: 16, title: 'Regla de Visibilidad en Bandeja', subtitle: 'Lógica SQL que determina qué documentos ve cada usuario en su bandeja', block: '6', blockLabel: 'Bloque 6 — Reglas de Negocio' },
  { id: 'paso17', step: 17, title: 'Manual del Editor', subtitle: 'Guía paso a paso para el usuario con rol de editor en el módulo Workspace', block: '7', blockLabel: 'Bloque 7 — Manuales' },
  { id: 'paso18', step: 18, title: 'Manual del Aprobador y Lector', subtitle: 'Guía paso a paso para los roles de aprobador y lector', block: '7', blockLabel: 'Bloque 7 — Manuales' },
  { id: 'paso19', step: 19, title: 'Mapa de Archivos del Módulo', subtitle: 'Inventario completo de todos los archivos Java, JSP y SQL del módulo Workspace', block: '7', blockLabel: 'Bloque 7 — Manuales' },
  { id: 'paso20', step: 20, title: 'Glosario y FAQ Técnico', subtitle: 'Términos clave y preguntas frecuentes', block: '7', blockLabel: 'Bloque 7 — Manuales' },
];

export const BLOCK_COLORS: Record<string, { bg: string; text: string }> = {
  '1': { bg: 'bg-slate-700/50', text: 'text-slate-300' },
  '2': { bg: 'bg-blue-500/20', text: 'text-blue-400' },
  '3': { bg: 'bg-purple-500/20', text: 'text-purple-400' },
  '4': { bg: 'bg-amber-500/20', text: 'text-amber-400' },
  '5': { bg: 'bg-indigo-500/20', text: 'text-indigo-400' },
  '6': { bg: 'bg-emerald-500/20', text: 'text-emerald-400' },
  '7': { bg: 'bg-teal-500/20', text: 'text-teal-400' },
};
