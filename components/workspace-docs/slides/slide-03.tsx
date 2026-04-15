"use client";

import { Card, Badge, Table, SectionTitle, Callout, Code } from "../ui-components";

export function Slide03() {
  return (
    <div className="space-y-6">
      <Card accent>
        <h2 className="font-mono text-lg font-bold text-white mb-4">Qué es el Módulo Workspace</h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          El <strong className="text-white">Módulo Workspace</strong> es el subsistema de <em className="text-indigo-300">elaboración colaborativa de documentos borrador</em>{" "}
          dentro de <strong className="text-white">Mercurio SED</strong>. Permite que uno o varios usuarios redacten, revisen y aprueben
          un documento antes de convertirlo en un radicado oficial del sistema de gestión documental.
        </p>
        <p className="text-slate-300 leading-relaxed">
          A diferencia de la radicación directa (donde el documento ya existe), el Workspace provee un{" "}
          <strong className="text-white">ciclo de vida previo a la radicación</strong> con control de versiones, bloqueos de edición concurrente,
          firma digital del aprobador y trazabilidad completa.
        </p>
      </Card>

      <SectionTitle>Problema que resuelve</SectionTitle>
      <p className="text-slate-300 leading-relaxed">
        Sin el Workspace, un documento que requiere múltiples revisores debía ser elaborado fuera del sistema
        y luego importado manualmente. El módulo centraliza ese proceso dentro de Mercurio SED, garantizando que
        el documento aprobado y firmado sea el mismo que queda radicado.
      </p>

      <SectionTitle>Actores del proceso</SectionTitle>
      <Table headers={['Actor', 'Código ESTADO', 'Responsabilidad principal', 'Puede radicar']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Editor</td>
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Redacta y edita el borrador. Descarga el Word, lo modifica y lo sube. Marca el documento como listo cuando termina.</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Aprobador</td>
          <td className="px-4 py-3"><Code>&apos;A&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Revisa el borrador aprobado por todos los editores. Estampa su firma digital y convierte el documento en radicado oficial.</td>
          <td className="px-4 py-3"><Badge variant="success">Sí</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Lector</td>
          <td className="px-4 py-3"><Code>&apos;L&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Consulta el documento en cualquier etapa. No puede editar ni aprobar. Visible en su bandeja siempre que el STATUS sea activo.</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Sistema</td>
          <td className="px-4 py-3"><span className="text-slate-500">N/A</span></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Ejecuta la transición automática de Edición a Aprobación cuando todos los editores marcan IND_LISTO=&apos;S&apos;. Job nocturno de fechas límite.</td>
          <td className="px-4 py-3"><Badge variant="muted">Automático</Badge></td>
        </tr>
      </Table>

      <SectionTitle>Tipos de documento soportados</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-l-4 border-l-blue-500">
          <h3 className="font-mono text-base font-bold text-white mb-2">Documento Interno</h3>
          <p className="text-sm text-slate-400 mb-2">Código: <Code>&apos;I&apos;</Code></p>
          <p className="text-sm text-slate-300">
            Se radicará en <strong className="text-white">MERT_INTERNO</strong>. Procesado por <Code>CommandWorkspaceInterno</Code>.
            Formulario: <Code>fichaWorkspaceInterno.jsp</Code>
          </p>
        </Card>
        <Card className="border-l-4 border-l-orange-500">
          <h3 className="font-mono text-base font-bold text-white mb-2">Documento Externo</h3>
          <p className="text-sm text-slate-400 mb-2">Código: <Code>&apos;E&apos;</Code></p>
          <p className="text-sm text-slate-300">
            Se radicará en <strong className="text-white">MERT_EXTERNO</strong>. Procesado por <Code>CommandWorkspaceExterno</Code>.
            Formulario: <Code>fichaWorkspaceExterno.jsp</Code>
          </p>
        </Card>
      </div>

      <Callout type="success" title="Radicado Oficial Generado">
        Al completarse el proceso, el sistema genera un <strong>número de radicado oficial</strong> (consecutivo CARTA).
        El documento queda insertado en <Code>MERT_INTERNO</Code> o <Code>MERT_EXTERNO</Code>,
        el STATUS del workspace cambia a <Code>&apos;S&apos;</Code> (definitivo) y desaparece de todas las bandejas.
        El PDF firmado queda almacenado en la ruta configurada en <Code>MERT_CONFIG</Code>.
      </Callout>

      <SectionTitle>Dependencias del módulo</SectionTitle>
      <Table headers={['Dependencia', 'Tipo', 'Propósito']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>MERT_CONFIG (RUTA_ARCH / PREVIEWCARTA)</Code></td>
          <td className="px-4 py-3 text-slate-400">Configuración</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Ruta en disco donde se almacenan los archivos Word .docx del borrador</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>MERT_CONFIG (NUM_CONSEC / CARTA)</Code></td>
          <td className="px-4 py-3 text-slate-400">Consecutivo</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Generador del número de radicado oficial al convertir el borrador</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>MERT_RUTA_IMAGEN</Code></td>
          <td className="px-4 py-3 text-slate-400">Catálogo</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Identificador de la ruta de imágenes para generar la plantilla Word</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>MERT_DATOS_CARTA</Code></td>
          <td className="px-4 py-3 text-slate-400">Persistencia</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Almacena los campos de la plantilla Word para recuperarlos al reabrir</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>Aspose.Words</Code></td>
          <td className="px-4 py-3 text-slate-400">Librería</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Conversión de .docx a PDF para vista previa y firma</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>SEQ_WORKSPACE</Code></td>
          <td className="px-4 py-3 text-slate-400">Secuencia BD</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Genera el ID_WS (clave primaria) de cada fila en MERT_WORKSPACE</td>
        </tr>
      </Table>
    </div>
  );
}
