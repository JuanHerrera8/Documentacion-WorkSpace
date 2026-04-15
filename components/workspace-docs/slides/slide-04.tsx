"use client";

import { Plus, Edit, CheckCircle, Eye, PenTool, Check } from "lucide-react";
import { Card, Badge, Table, SectionTitle, Callout, CodeBlock, Code, FlowStep } from "../ui-components";

export function Slide04() {
  return (
    <div className="space-y-6">
      {/* Flow Diagram */}
      <Card>
        <div className="font-mono text-xs text-slate-500 uppercase tracking-wider text-center mb-6">
          Ciclo de vida del documento workspace
        </div>
        <div className="flex items-start gap-0 overflow-x-auto pb-4 min-w-[700px]">
          <FlowStep
            icon={<Plus className="w-5 h-5" />}
            label="Crear Borrador"
            actor="Editor"
            condition="Formulario nuevo"
            nodeClass="bg-blue-500/20 border-blue-500 text-blue-400"
          />
          <FlowStep
            icon={<Edit className="w-5 h-5" />}
            label="Editar Word"
            actor="Editor(es)"
            condition="PASO='E' Lock activo"
            nodeClass="bg-amber-500/20 border-amber-500 text-amber-400"
          />
          <FlowStep
            icon={<CheckCircle className="w-5 h-5" />}
            label="Marcar Listo"
            actor="Editor(es)"
            condition="IND_LISTO='S' todos listos"
            nodeClass="bg-emerald-500/20 border-emerald-500 text-emerald-400"
          />
          <FlowStep
            icon={<Eye className="w-5 h-5" />}
            label="Revisar PDF"
            actor="Aprobador"
            condition="PASO='A' Visor PDF"
            nodeClass="bg-purple-500/20 border-purple-500 text-purple-400"
          />
          <FlowStep
            icon={<PenTool className="w-5 h-5" />}
            label="Firmar Digital"
            actor="Aprobador"
            condition="Posición en PDF"
            nodeClass="bg-pink-500/20 border-pink-500 text-pink-400"
          />
          <FlowStep
            icon={<Check className="w-5 h-5" />}
            label="Radicado Oficial"
            actor="Sistema"
            condition="STATUS='S' Consecutivo"
            nodeClass="bg-emerald-500/20 border-emerald-600 text-emerald-400"
            isLast
          />
        </div>
      </Card>

      <SectionTitle>Detalle de cada etapa</SectionTitle>
      <Table headers={['#', 'Etapa', 'Actor', 'Acción técnica', 'Tabla / Campo', 'Siguiente estado']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>1</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Crear borrador</td>
          <td className="px-4 py-3"><Badge variant="editor">Editor</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Llena el formulario <Code>fichaWorkspaceInterno.jsp</Code>. Se ejecuta <Code>operacion=guardar</Code></td>
          <td className="px-4 py-3 text-slate-400 text-xs">INSERT en MERT_WORKSPACE<br/>INSERT en MERT_WORKSPACE_DATOS_RAD</td>
          <td className="px-4 py-3"><Badge variant="edicion">Edición</Badge><span className="text-xs text-slate-500 block">PASO=&apos;E&apos;, STATUS=&apos;N&apos;</span></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>2</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Generar plantilla Word</td>
          <td className="px-4 py-3"><Badge variant="muted">Sistema</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Se ejecuta <Code>GenerarDocumento</Code> con la plantilla seleccionada</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Sistema de archivos<br/>MERT_DATOS_CARTA</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Archivo .docx disponible</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>3</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Editar documento</td>
          <td className="px-4 py-3"><Badge variant="editor">Editor</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><Code>operacion=descargar</Code> — descarga el .docx con lock</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Lock en MERT_WORKSPACE_LOCK<br/>Archivo .docx actualizado</td>
          <td className="px-4 py-3 text-slate-400 text-xs">PASO=&apos;E&apos;, IND_LISTO=&apos;N&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>4</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Marcar listo</td>
          <td className="px-4 py-3"><Badge variant="editor">Editor</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><Code>operacion=marcarListo</Code>. Se actualiza IND_LISTO=&apos;S&apos;</td>
          <td className="px-4 py-3 text-slate-400 text-xs">UPDATE MERT_WORKSPACE<br/>IND_LISTO = &apos;S&apos;</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Si todos listos: PASO=&apos;A&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>5</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Transición automática</td>
          <td className="px-4 py-3"><Badge variant="muted">Sistema</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><Code>wsDAO.todosEditoresListos()</Code> retorna true. Se llama <Code>actualizarPaso(idDoc, &apos;A&apos;)</Code></td>
          <td className="px-4 py-3 text-slate-400 text-xs">UPDATE MERT_WORKSPACE<br/>PASO = &apos;A&apos; para todas las filas</td>
          <td className="px-4 py-3"><Badge variant="aprobacion">Aprobación</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>6</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Revisar y firmar</td>
          <td className="px-4 py-3"><Badge variant="aprobador">Aprobador</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><Code>operacion=verPdf</Code> abre el visor PDF. <Code>operacion=guardarFirma</Code> estampa la firma</td>
          <td className="px-4 py-3 text-slate-400 text-xs">WorkspaceFirmaService<br/>PDF firmado en disco</td>
          <td className="px-4 py-3 text-slate-400 text-xs">STATUS=&apos;S&apos; en MERT_WORKSPACE</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>7</Code></td>
          <td className="px-4 py-3 font-semibold text-white">Radicar oficialmente</td>
          <td className="px-4 py-3"><Badge variant="muted">Sistema</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><Code>WorkspaceRadicacionService.radicar()</Code> inserta en MERT_INTERNO o MERT_EXTERNO</td>
          <td className="px-4 py-3 text-slate-400 text-xs">INSERT MERT_INTERNO / MERT_EXTERNO<br/>UPDATE STATUS=&apos;S&apos;</td>
          <td className="px-4 py-3"><Badge variant="definitivo">Definitivo</Badge></td>
        </tr>
      </Table>

      <Callout type="warning" title="Caso especial: múltiples editores">
        Si el documento tiene más de 1 editor, la bandeja muestra el contador
        <strong> &quot;X/Y editores listos&quot;</strong>. La transición a PASO=&apos;A&apos; solo ocurre cuando
        <em> todos</em> los editores han marcado IND_LISTO=&apos;S&apos;. Un editor puede desmarcar su listo
        con <Code>operacion=desmarcarListo</Code> mientras el documento siga en PASO=&apos;E&apos;.
      </Callout>

      <SectionTitle>Lógica de transición: Edición a Aprobación</SectionTitle>
      <CodeBlock>{`-- Regla ejecutada en WorkspaceService.marcarListo()
UPDATE MERT_WORKSPACE SET IND_LISTO = 'S'
WHERE  IDDOCUMENTO = :id AND UBICACION = :usuario

-- Verificación: ¿todos los editores listos?
SELECT COUNT(*) FROM MERT_WORKSPACE
WHERE  IDDOCUMENTO = :id AND ESTADO = 'E' AND IND_LISTO = 'N'
-- Si resultado = 0 => todos listos => transición automática

-- Transición automática (todas las filas del documento)
UPDATE MERT_WORKSPACE SET PASO = 'A'
WHERE  IDDOCUMENTO = :id`}</CodeBlock>
    </div>
  );
}
