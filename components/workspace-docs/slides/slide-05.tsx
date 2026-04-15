"use client";

import { Card, Badge, Table, SectionTitle, Callout, CodeBlock, Code } from "../ui-components";

export function Slide05() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        El estado de un workspace se determina por la combinación de tres columnas en <Code>MERT_WORKSPACE</Code>.
        A continuación se documentan todos los estados posibles y su significado en el negocio.
      </p>

      <SectionTitle>Matriz de estados del documento</SectionTitle>
      <Table headers={['PASO', 'STATUS', 'IND_LISTO', 'ESTADO (rol)', 'Estado del sistema', 'Descripción', 'Visible en bandeja']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3"><Badge variant="editor">E</Badge></td>
          <td className="px-4 py-3"><Badge variant="edicion">En Edición</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">El editor tiene el documento pendiente de edición</td>
          <td className="px-4 py-3"><Badge variant="success">Sí (Editor)</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;S&apos;</Code></td>
          <td className="px-4 py-3"><Badge variant="editor">E</Badge></td>
          <td className="px-4 py-3"><Badge variant="edicion">Listo — Esperando</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Este editor marcó su trabajo como listo. Espera que los demás marquen listo.</td>
          <td className="px-4 py-3"><Badge variant="success">Sí (Editor)</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3"><Badge variant="aprobador">A</Badge></td>
          <td className="px-4 py-3"><Badge variant="muted">Aprobador en espera</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">El aprobador está asignado pero el documento aún está en edición</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3 text-slate-500">N/A</td>
          <td className="px-4 py-3"><Badge variant="lector">L</Badge></td>
          <td className="px-4 py-3"><Badge variant="muted">Lector en espera</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">El lector puede ver el documento en cualquier etapa</td>
          <td className="px-4 py-3"><Badge variant="success">Sí (Lector)</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>&apos;A&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3 text-slate-500">N/A</td>
          <td className="px-4 py-3"><Badge variant="aprobador">A</Badge></td>
          <td className="px-4 py-3"><Badge variant="aprobacion">Pendiente Aprobación</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Todos los editores marcaron listo. El aprobador puede firmar.</td>
          <td className="px-4 py-3"><Badge variant="success">Sí (Aprobador)</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>&apos;A&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code></td>
          <td className="px-4 py-3 text-slate-500">N/A</td>
          <td className="px-4 py-3"><Badge variant="editor">E</Badge></td>
          <td className="px-4 py-3"><Badge variant="muted">Editor en espera aprobación</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">El editor ya terminó. No aparece en su bandeja.</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-emerald-500/5">
          <td className="px-4 py-3"><Code>&apos;A&apos;</Code></td>
          <td className="px-4 py-3"><Code>&apos;S&apos;</Code></td>
          <td className="px-4 py-3 text-slate-500">N/A</td>
          <td className="px-4 py-3 text-slate-400">Todos</td>
          <td className="px-4 py-3"><Badge variant="definitivo">Definitivo / Radicado</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">La firma fue estampada y se generó el radicado oficial</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
        </tr>
      </Table>

      <SectionTitle>Resumen visual de estados</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="font-mono text-sm font-bold text-white">PASO = E | STATUS = N</span>
          </div>
          <p className="text-sm text-slate-300">El documento está siendo elaborado. Los editores tienen acceso completo para descargar y subir el Word.</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="edicion">Edición Activa</Badge>
            <Badge variant="editor">Editor actúa</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="font-mono text-sm font-bold text-white">PASO = E | IND_LISTO = S</span>
          </div>
          <p className="text-sm text-slate-300">Al menos un editor marcó su listo pero faltan otros. El sistema mantiene PASO=&apos;E&apos; hasta que TODOS sean S.</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="warning">Parcialmente listo</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="font-mono text-sm font-bold text-white">PASO = A | STATUS = N</span>
          </div>
          <p className="text-sm text-slate-300">Todos los editores marcaron listo. El PASO cambió automáticamente a &apos;A&apos;. El aprobador puede actuar ahora.</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="aprobacion">En Aprobación</Badge>
            <Badge variant="aprobador">Aprobador actúa</Badge>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-sm font-bold text-white">PASO = A | STATUS = S</span>
          </div>
          <p className="text-sm text-slate-300">El aprobador firmó. El radicado oficial existe. El workspace está cerrado definitivamente.</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="definitivo">Radicado</Badge>
            <Badge variant="success">Cerrado</Badge>
          </div>
        </Card>
      </div>

      <SectionTitle>Regla SQL de visibilidad en bandeja</SectionTitle>
      <Callout type="info" title="Condición WHERE de la bandeja">
        Un documento aparece en la bandeja de un usuario cuando se cumplen las tres condiciones simultáneamente.
      </Callout>
      <CodeBlock>{`SELECT * FROM MERT_WORKSPACE w
WHERE  UPPER(w.UBICACION) = UPPER(:idUsuario)  -- es de este usuario
  AND  w.STATUS = 'N'                          -- no está cerrado
  AND  (w.ESTADO = w.PASO OR w.ESTADO = 'L')   -- puede actuar O es lector
ORDER BY w.FECASIGNACION DESC`}</CodeBlock>

      <Table headers={['Condición', 'Valor', 'Significado']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>UBICACION = :usuario</Code></td>
          <td className="px-4 py-3 text-slate-400">ID del usuario en sesión</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Solo muestra documentos asignados a este usuario</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>STATUS = &apos;N&apos;</Code></td>
          <td className="px-4 py-3 text-slate-400">N = Activo</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Excluye documentos ya definitivos (STATUS=&apos;S&apos;)</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ESTADO = PASO</Code></td>
          <td className="px-4 py-3 text-slate-400">Editor en Edición / Aprobador en Aprobación</td>
          <td className="px-4 py-3 text-slate-300 text-sm">Solo muestra cuando el rol puede actuar en la etapa actual</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ESTADO = &apos;L&apos;</Code></td>
          <td className="px-4 py-3 text-slate-400">Lector</td>
          <td className="px-4 py-3 text-slate-300 text-sm">El lector siempre ve el documento si sigue activo</td>
        </tr>
      </Table>
    </div>
  );
}
