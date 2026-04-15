"use client";

import { Badge, Table, SectionTitle, Code, AllowedIcon, DeniedIcon, ConditionalIcon } from "../ui-components";

export function Slide06() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        La siguiente tabla cruzada muestra exactamente qué acciones puede realizar cada rol en cada etapa.
        Las condiciones son evaluadas en tiempo real por <Code>WorkspaceService</Code> antes de ejecutar cualquier operación.
      </p>

      {/* Legend */}
      <div className="flex gap-6 flex-wrap mb-4">
        <span className="flex items-center gap-2 text-sm text-slate-300">
          <AllowedIcon /> Permitido
        </span>
        <span className="flex items-center gap-2 text-sm text-slate-300">
          <DeniedIcon /> No permitido
        </span>
        <span className="flex items-center gap-2 text-sm text-slate-300">
          <ConditionalIcon /> Condicional
        </span>
      </div>

      <SectionTitle>Matriz de permisos por rol y etapa</SectionTitle>
      <Table headers={['Acción', 'Editor (E)', 'Aprobador (A)', 'Lector (L)', 'Condición adicional']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Ver el documento (vista previa PDF)</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><AllowedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Editor: solo cuando PASO=&apos;E&apos;. Aprobador: solo cuando PASO=&apos;A&apos;. Lector: siempre con STATUS=&apos;N&apos;.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Descargar Word para editar</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Requiere: ESTADO=&apos;E&apos; AND PASO=&apos;E&apos; AND STATUS=&apos;N&apos;. Si hay lock de otro usuario, se bloquea.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Subir Word editado</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Vía <Code>WorkspaceWordServlet</Code>. Requiere lock activo del mismo usuario.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Marcar como &quot;Listo&quot;</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Solo si ESTADO=&apos;E&apos; AND PASO=&apos;E&apos; AND IND_LISTO=&apos;N&apos;. Dispara la evaluación de transición.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Desmarcar &quot;Listo&quot;</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Solo si PASO=&apos;E&apos; y STATUS=&apos;N&apos;. No aplica si el documento ya pasó a PASO=&apos;A&apos;.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Solicitar aprobación (PASO E→A)</td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Método <Code>solicitarAprobacion()</Code>. Alternativa manual al mecanismo automático de marcarListo.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Abrir visor de aprobación</td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Solo cuando ESTADO=&apos;A&apos; AND PASO=&apos;A&apos; AND STATUS=&apos;N&apos;. Abre <Code>visorAprobarWorkspace.jsp</Code>.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Estampar firma digital</td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><AllowedIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Se verifica con <Code>wsService.esAprobador(fila)</Code>.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Convertir a radicado oficial</td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-center"><ConditionalIcon /></td>
          <td className="px-4 py-3 text-center"><DeniedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Ejecutado automáticamente por <Code>WorkspaceFirmaService.guardarFirma()</Code>.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Ver lista de participantes</td>
          <td className="px-4 py-3 text-center"><AllowedIcon /></td>
          <td className="px-4 py-3 text-center"><AllowedIcon /></td>
          <td className="px-4 py-3 text-center"><AllowedIcon /></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Cualquier participante puede ver todos los asignados vía <Code>wsService.obtenerParticipantes()</Code>.</td>
        </tr>
      </Table>

      <SectionTitle>Condiciones de permisos — código fuente</SectionTitle>
      <Table headers={['Método', 'Clase', 'Condición']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>puedeEditar(fila)</Code></td>
          <td className="px-4 py-3"><Code>WorkspaceService</Code></td>
          <td className="px-4 py-3"><Code>ESTADO=&apos;E&apos; AND PASO=&apos;E&apos; AND STATUS=&apos;N&apos;</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>puedeAprobar(fila)</Code></td>
          <td className="px-4 py-3"><Code>WorkspaceService</Code></td>
          <td className="px-4 py-3"><Code>ESTADO=&apos;A&apos; AND PASO=&apos;A&apos; AND STATUS=&apos;N&apos;</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>esAprobador(fila)</Code></td>
          <td className="px-4 py-3"><Code>WorkspaceService</Code></td>
          <td className="px-4 py-3"><Code>ESTADO=&apos;A&apos;</Code> <span className="text-slate-500">(sin verificar PASO ni STATUS)</span></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>todosEditoresListos(id)</Code></td>
          <td className="px-4 py-3"><Code>OracleJWorkspaceDAO</Code></td>
          <td className="px-4 py-3"><Code>COUNT(*) WHERE ESTADO=&apos;E&apos; AND IND_LISTO=&apos;N&apos; = 0</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>listarBandejaPorUsuario(id)</Code></td>
          <td className="px-4 py-3"><Code>OracleJWorkspaceDAO</Code></td>
          <td className="px-4 py-3"><Code>UBICACION=:id AND STATUS=&apos;N&apos; AND (ESTADO=PASO OR ESTADO=&apos;L&apos;)</Code></td>
        </tr>
      </Table>
    </div>
  );
}
