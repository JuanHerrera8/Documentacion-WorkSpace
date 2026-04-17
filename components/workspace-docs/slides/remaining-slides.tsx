"use client";

import { Shield, RefreshCw, FileText, PenTool, Lock, Key, Database, Server, Terminal, Settings, BookOpen, Users, Layers } from "lucide-react";
import { Card, Badge, Table, SectionTitle, Callout, CodeBlock, Code, StatCard } from "../ui-components";

// Slide 07 - MERT_WORKSPACE Table
export function Slide07() {
  return (
    <div className="space-y-6">
      <Callout type="info" title="Modelo de datos — una fila por participante">
        Para un documento con 2 editores, 1 aprobador y 1 lector se generan <strong>4 filas</strong> en esta tabla,
        todas con el mismo <Code>IDDOCUMENTO</Code>. El campo <Code>UBICACION</Code> identifica a qué usuario
        pertenece cada fila. El campo <Code>PASO</Code> es compartido: cuando cambia, cambia en todas las filas.
      </Callout>

      <SectionTitle>Estructura de la tabla</SectionTitle>
      <Table headers={['Columna', 'Tipo', 'Nulo', 'Valores', 'Descripción', 'PK/FK']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ID_WS</Code></td>
          <td className="px-4 py-3"><Code>NUMBER</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">Autoincremental</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Clave primaria. Generada por <Code>SEQ_WORKSPACE.NEXTVAL</Code></td>
          <td className="px-4 py-3"><Badge variant="primary">PK</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>IDDOCUMENTO</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">Código tipo CARTA</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Identificador del documento borrador</td>
          <td className="px-4 py-3"><Badge variant="warning">FK</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>TIPDOCUMENTO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;I&apos;</Code> / <Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Tipo de documento: I=Interno, E=Externo</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>UBICACION</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">ID del usuario</td>
          <td className="px-4 py-3 text-slate-300 text-xs">ID del usuario dueño de esta fila</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>ESTADO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code> / <Code>&apos;A&apos;</Code> / <Code>&apos;L&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><strong className="text-white">Rol del usuario.</strong> E=Editor, A=Aprobador, L=Lector</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>PASO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;E&apos;</Code> / <Code>&apos;A&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><strong className="text-white">Etapa actual del documento.</strong> E=Edición, A=Aprobación</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>FECASIGNACION</Code></td>
          <td className="px-4 py-3"><Code>DATE</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>SYSDATE</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Fecha y hora de asignación</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-emerald-500/5">
          <td className="px-4 py-3"><Code>STATUS</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code> / <Code>&apos;S&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs"><strong className="text-white">Visibilidad en bandeja.</strong> N=Activo, S=Definitivo</td>
          <td className="px-4 py-3"></td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-emerald-500/5">
          <td className="px-4 py-3"><Code>IND_LISTO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code> / <Code>&apos;S&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Indicador de &quot;listo para aprobación&quot; del editor</td>
          <td className="px-4 py-3"></td>
        </tr>
      </Table>

      <SectionTitle>Secuencia de creación (INSERT)</SectionTitle>
      <CodeBlock>{`-- Estructura del INSERT al crear un workspace (1 fila por participante)
INSERT INTO MERT_WORKSPACE
  (ID_WS, IDDOCUMENTO, TIPDOCUMENTO, UBICACION, ESTADO, PASO,
   FECASIGNACION, FECLIMIT, FECPASOAPROBACION, STATUS)
VALUES
  (SEQ_WORKSPACE.NEXTVAL, :idDoc, :tip, :idUsuario, :estado, :paso,
   SYSDATE, :fecLimit, NULL, 'N')

-- Ejemplo: doc C2026001 con 2 editores, 1 aprobador, 1 lector
-- Fila 1: editor1  ESTADO='E' PASO='E' IND_LISTO='N' STATUS='N'
-- Fila 2: editor2  ESTADO='E' PASO='E' IND_LISTO='N' STATUS='N'
-- Fila 3: aprobador ESTADO='A' PASO='E' IND_LISTO='N' STATUS='N'
-- Fila 4: lector   ESTADO='L' PASO='E' IND_LISTO='N' STATUS='N'`}</CodeBlock>

      <SectionTitle>Operaciones DML principales</SectionTitle>
      <Table headers={['Operación', 'Método DAO', 'Columnas afectadas']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Crear participante</td>
          <td className="px-4 py-3"><Code>insertarFila(ws)</Code></td>
          <td className="px-4 py-3 text-slate-400">Todas (INSERT)</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Marcar listo un editor</td>
          <td className="px-4 py-3"><Code>marcarListo(id, usr)</Code></td>
          <td className="px-4 py-3"><Code>IND_LISTO = &apos;S&apos;</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Avanzar de etapa</td>
          <td className="px-4 py-3"><Code>actualizarPaso(id, paso, fec)</Code></td>
          <td className="px-4 py-3"><Code>PASO, FECPASOAPROBACION, FECLIMIT</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Cerrar workspace</td>
          <td className="px-4 py-3"><Code>marcarDefinitivo(id)</Code></td>
          <td className="px-4 py-3"><Code>STATUS = &apos;S&apos;</Code></td>
        </tr>
      </Table>
    </div>
  );
}

// Slide 08 - MERT_WORKSPACE_DATOS_RAD Table
export function Slide08() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        Esta tabla es el <strong className="text-white">repositorio de datos del formulario</strong>. Mientras <Code>MERT_WORKSPACE</Code>{" "}
        controla roles y etapas, esta tabla guarda el contenido: título, asunto, remitente, destinatario, texto, etc.
        Todo se serializa en un campo <Code>CLOB</Code> llamado <Code>DATOS_JSON</Code>.
      </p>

      <SectionTitle>Estructura de la tabla</SectionTitle>
      <Table headers={['Columna', 'Tipo', 'Nulo', 'Valores', 'Descripción']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>IDDOCUMENTO</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">Código CARTA</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Clave primaria. 1 sola fila por documento.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>TIP_DOCUMENTO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;I&apos;</Code> / <Code>&apos;E&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Tipo de documento: I=Interno, E=Externo</td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>VERSION_DATOS</Code></td>
          <td className="px-4 py-3"><Code>NUMBER</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">Entero positivo</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Contador de versiones del JSON. Se incrementa en cada guardado.</td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>DATOS_JSON</Code></td>
          <td className="px-4 py-3"><Code>CLOB</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3 text-slate-400">JSON válido</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Contenido completo del formulario serializado como JSON</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>DEFINITIVO</Code></td>
          <td className="px-4 py-3"><Code>CHAR(1)</Code></td>
          <td className="px-4 py-3">NO</td>
          <td className="px-4 py-3"><Code>&apos;N&apos;</Code> / <Code>&apos;S&apos;</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Indica si el documento fue convertido a radicado oficial</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>IDDOCUMENTO_DEF</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3">SÍ</td>
          <td className="px-4 py-3 text-slate-400">Número de radicado</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Número de radicado oficial generado. Permite trazabilidad.</td>
        </tr>
      </Table>

      <SectionTitle>Ejemplo real del DATOS_JSON</SectionTitle>
      <CodeBlock>{`{
  "tipDocumento": "I",
  "titulo":       "Circular informativa de seguridad",
  "nomAutor":     "JPEREZ",
  "asunto":       "Actualización de políticas de acceso",
  "idPlantilla":  "PL001",
  "idasunto":     "AS045",
  "nomasunto":    "Seguridad Informática",
  "idtipo":       "TI002",
  "idPrioridad":  "PR01",
  "remitente":    "DEP_TI",
  "nomRemitente": "Departamento de Tecnología",
  "idDestinatario":"ALL_STAFF",
  "nomDestinatario":"Todos los funcionarios",
  "privacidad":   "PB",
  "folios":       "3",
  "textoAux":     "Se comunica a todos los funcionarios...\\nFirmado: Director TI"
}`}</CodeBlock>
    </div>
  );
}

// Slide 09 - Related Tables
export function Slide09() {
  return (
    <div className="space-y-6">
      <SectionTitle>MERT_WORKSPACE_LOCK — Control de edición exclusiva</SectionTitle>
      <p className="text-slate-300 leading-relaxed mb-4">
        Implementa el mecanismo de <strong className="text-white">bloqueo pesimista</strong> para evitar que dos editores
        editen el mismo documento simultáneamente. La constraint <Code>UNIQUE(IDDOCUMENTO)</Code>{" "}
        garantiza exclusión mutua a nivel de base de datos.
      </p>
      <Table headers={['Columna', 'Tipo', 'Descripción']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ID_LOCK</Code></td>
          <td className="px-4 py-3"><Code>NUMBER</Code></td>
          <td className="px-4 py-3 text-slate-300">PK. Secuencia <Code>SEQ_WS_LOCK.NEXTVAL</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>IDDOCUMENTO</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3 text-slate-300"><strong className="text-white">UNIQUE.</strong> ID del documento bloqueado.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ID_USUARIO</Code></td>
          <td className="px-4 py-3"><Code>VARCHAR2</Code></td>
          <td className="px-4 py-3 text-slate-300">ID del usuario que tiene el lock activo.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>FECHA_EXPIRACION</Code></td>
          <td className="px-4 py-3"><Code>DATE</Code></td>
          <td className="px-4 py-3 text-slate-300">Vencimiento del lock: <Code>SYSDATE + timeout/1440</Code></td>
        </tr>
      </Table>

      <Callout type="info" title="Flujo del lock">
        1. Al abrir/descargar: DELETE locks expirados → INSERT nuevo lock.<br />
        2. Si el INSERT falla con ORA-00001: el documento está bloqueado por otro usuario → modo solo lectura.<br />
        3. Al solicitar aprobación o cerrar la ventana: DELETE del lock del usuario.<br />
        4. El lock expira automáticamente según FECHA_EXPIRACION {"<"} SYSDATE.
      </Callout>

      <SectionTitle>Diagrama de relación entre tablas</SectionTitle>
      <div className="flex gap-4 flex-wrap justify-center items-start">
        <Card className="border-2 border-blue-500 min-w-[200px]">
          <div className="font-mono text-sm font-bold text-blue-400 mb-2">MERT_WORKSPACE</div>
          <div className="text-xs text-slate-400 leading-relaxed">
            <strong>ID_WS</strong> (PK)<br />
            IDDOCUMENTO (FK)<br />
            TIPDOCUMENTO<br />
            UBICACION<br />
            ESTADO / PASO<br />
            STATUS / IND_LISTO
          </div>
        </Card>
        <div className="flex flex-col items-center justify-center gap-1 text-slate-500 text-xs pt-8">
          <div className="w-10 h-0.5 bg-indigo-500"></div>
          <span>1:1</span>
          <div className="w-10 h-0.5 bg-indigo-500"></div>
        </div>
        <Card className="border-2 border-emerald-500 min-w-[200px]">
          <div className="font-mono text-sm font-bold text-emerald-400 mb-2">MERT_WORKSPACE_DATOS_RAD</div>
          <div className="text-xs text-slate-400 leading-relaxed">
            <strong>IDDOCUMENTO</strong> (PK)<br />
            TIP_DOCUMENTO<br />
            VERSION_DATOS<br />
            DATOS_JSON (CLOB)<br />
            DEFINITIVO<br />
            IDDOCUMENTO_DEF
          </div>
        </Card>
      </div>
    </div>
  );
}

// Slide 10 - JSPs
export function Slide10() {
  return (
    <div className="space-y-6">
      <Table headers={['Archivo JSP', 'Ruta', 'Propósito principal', 'Command asociado']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>bandejaWorkspace.jsp</Code></td>
          <td className="px-4 py-3"><Code>web/ControlDoc/</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Bandeja principal: lista todos los documentos activos del usuario</td>
          <td className="px-4 py-3"><Code>CommandWorkspaceBandeja</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>fichaWorkspaceInterno.jsp</Code></td>
          <td className="px-4 py-3"><Code>web/ControlDoc/</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Formulario para crear y editar borradores internos</td>
          <td className="px-4 py-3"><Code>CommandWorkspaceInterno</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>fichaWorkspaceExterno.jsp</Code></td>
          <td className="px-4 py-3"><Code>web/ControlDoc/</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Formulario para crear y editar borradores externos</td>
          <td className="px-4 py-3"><Code>CommandWorkspaceExterno</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>visorAprobarWorkspace.jsp</Code></td>
          <td className="px-4 py-3"><Code>web/ControlDoc/</Code></td>
          <td className="px-4 py-3 text-slate-300 text-sm">Visor PDF (PDF.js + canvas) con panel de firma arrastrable</td>
          <td className="px-4 py-3"><Code>CommandWorkspaceInterno</Code></td>
        </tr>
      </Table>

      <SectionTitle>Componentes visuales de bandejaWorkspace.jsp</SectionTitle>
      <Table headers={['Componente', 'ID HTML', 'Descripción']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Barra de filtros</td>
          <td className="px-4 py-3"><Code>bwsFilterBar</Code></td>
          <td className="px-4 py-3 text-slate-400 text-sm">Filtros por ID, Tipo, Título, Rol, Estado, Autor. Filtrado en cliente (JavaScript).</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Toggle de vista</td>
          <td className="px-4 py-3"><Code>btnList / btnGrid</Code></td>
          <td className="px-4 py-3 text-slate-400 text-sm">Cambia entre vista tabla y vista tarjetas. Estado guardado en localStorage.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Tabla lista</td>
          <td className="px-4 py-3"><Code>tablaWorkspace</Code></td>
          <td className="px-4 py-3 text-slate-400 text-sm">Columnas: ID, Tipo, Fecha Asignación, Fecha Límite, Título, Rol, Estado, Acciones.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Badge de lock</td>
          <td className="px-4 py-3"><Code>lock-{'{idDoc}'}</Code></td>
          <td className="px-4 py-3 text-slate-400 text-sm">Indicador visual cuando otro usuario tiene el lock activo. Se actualiza vía AJAX.</td>
        </tr>
      </Table>
    </div>
  );
}

// Slide 11 - JSP Presentation Logic
export function Slide11() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        La lógica de presentación se evalúa en el JSP combinando el estado del workspace (<Code>JWorkspace</Code>)
        con el resultado del lock. Es la capa que traduce las reglas de negocio en botones visibles para el usuario.
      </p>

      <SectionTitle>Variables de presentación — bandejaWorkspace.jsp</SectionTitle>
      <CodeBlock>{`// Por cada item en la bandeja:
String tipLabel  = "I".equals(item.getTipDocumento()) ? "Interno" : "Externo";
String pasoLabel = "E".equals(item.getPaso())  ? "Edicion" : "Aprobacion";
String rolLabel  = "E".equals(item.getEstado()) ? "Editor"
                 : "A".equals(item.getEstado()) ? "Aprobador" : "Lector";
String cmdAbrir  = "I".equals(item.getTipDocumento()) ? "WorkspaceInterno" : "WorkspaceExterno";

// Condiciones de visibilidad de botones:
boolean esLector              = "L".equals(item.getEstado());
boolean esEditorEnEdicion     = "E".equals(item.getEstado()) && "E".equals(item.getPaso());
boolean esAprobadorEnAprobacion = "A".equals(item.getEstado()) && "A".equals(item.getPaso());
boolean mostrarVer            = esLector || esEditorEnEdicion || esAprobadorEnAprobacion;`}</CodeBlock>

      <SectionTitle>Condición clave para puedeEditar</SectionTitle>
      <CodeBlock>{`// CONDICIÓN CLAVE: el usuario puede editar si es editor, el doc está en edición,
// Y obtuvo el lock exitosamente en este request
boolean puedeEditar = modoAbrir
    && WorkspaceService.ESTADO_EDITOR.equals(workspace.getEstado())   // ESTADO='E'
    && WorkspaceService.PASO_EDICION.equals(workspace.getPaso())      // PASO='E'
    && "LOCK_OK".equals(resultadoLock);                               // Lock adquirido`}</CodeBlock>

      <Callout type="warning" title="Triple condición para puedeEditar">
        A diferencia del service (<Code>puedeEditar(fila)</Code> que verifica ESTADO+PASO+STATUS),
        el JSP agrega una <strong>cuarta condición</strong>: <Code>resultadoLock = &quot;LOCK_OK&quot;</Code>.
        Esto significa que aunque el usuario sea editor y el documento esté en edición, si otro usuario
        tiene el lock, el formulario se abre en <strong>modo solo lectura</strong> con un aviso visible.
      </Callout>
    </div>
  );
}

// Slide 12 - Commands
export function Slide12() {
  return (
    <div className="space-y-6">
      <Callout type="info" title="Patrón Command — Front Controller">
        Ambos commands siguen el patrón <strong>Front Controller</strong> del sistema. Se invocan a través
        del servlet central <Code>/servlet/ControllerMercurio</Code> con el parámetro
        <Code>command=WorkspaceInterno</Code> o <Code>command=WorkspaceExterno</Code>.
        El parámetro <Code>operacion</Code> determina la acción específica a ejecutar.
      </Callout>

      <SectionTitle>URL de invocación</SectionTitle>
      <CodeBlock>{`-- Invocar desde formulario HTML
POST /mercurio/servlet/ControllerMercurio
  command     = WorkspaceInterno   | WorkspaceExterno
  operacion   = nuevo | guardar | abrir | actualizar | solicitar
              | marcarListo | desmarcarListo | firmar
              | descargar | verPdf | verBorrador | guardarFirma
  idDocumento = {codigo_borrador}   (requerido para operaciones sobre doc existente)`}</CodeBlock>

      <SectionTitle>Tabla completa de operaciones</SectionTitle>
      <Table headers={['operacion', 'Método privado', 'Pre-condición', 'Redirección / Respuesta']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>nuevo</Code></td>
          <td className="px-4 py-3 text-slate-400">—</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Usuario con sesión activa</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>fichaWorkspaceInterno.jsp</Code> (modo nuevo)</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>guardar</Code></td>
          <td className="px-4 py-3"><Code>accionGuardar()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Parámetros: editores[], aprobador, lector[], fechas límite</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>fichaWorkspaceInterno.jsp</Code> (modo abrir)</td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-emerald-500/5">
          <td className="px-4 py-3"><Code>marcarListo</Code></td>
          <td className="px-4 py-3"><Code>accionMarcarListo()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">ESTADO=&apos;E&apos;, PASO=&apos;E&apos;, IND_LISTO=&apos;N&apos;, STATUS=&apos;N&apos;</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>bandejaWorkspace.jsp</Code> con mensaje</td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-blue-500/5">
          <td className="px-4 py-3"><Code>descargar</Code></td>
          <td className="px-4 py-3"><Code>accionDescargar()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">ESTADO=&apos;E&apos;, PASO=&apos;E&apos;. Lock no ocupado.</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Streaming del archivo .docx al navegador</td>
        </tr>
        <tr className="hover:bg-slate-800/50 bg-amber-500/5">
          <td className="px-4 py-3"><Code>guardarFirma</Code></td>
          <td className="px-4 py-3"><Code>accionGuardarFirma()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Usuario debe ser APROBADOR. Parámetros: página, posX, posY</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>visorAprobarWorkspace.jsp</Code> con mensaje</td>
        </tr>
      </Table>
    </div>
  );
}

// Slide 13 - Services
export function Slide13() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard
          icon={<Shield className="w-5 h-5 text-blue-400" />}
          value="WorkspaceService"
          label="CRUD principal y reglas de negocio"
          iconBg="bg-blue-500/20"
        />
        <StatCard
          icon={<RefreshCw className="w-5 h-5 text-emerald-400" />}
          value="ConversionService"
          label="Borrador a radicado oficial"
          iconBg="bg-emerald-500/20"
        />
        <StatCard
          icon={<FileText className="w-5 h-5 text-amber-400" />}
          value="RadicacionService"
          label="INSERT en MERT_INTERNO/EXTERNO"
          iconBg="bg-amber-500/20"
        />
        <StatCard
          icon={<PenTool className="w-5 h-5 text-pink-400" />}
          value="FirmaService"
          label="PDF, firma y código de barras"
          iconBg="bg-pink-500/20"
        />
        <StatCard
          icon={<Lock className="w-5 h-5 text-amber-400" />}
          value="LockService"
          label="Bloqueo de edición exclusiva"
          iconBg="bg-amber-500/20"
        />
        <StatCard
          icon={<Key className="w-5 h-5 text-purple-400" />}
          value="PrivacidadService"
          label="Control de acceso al documento"
          iconBg="bg-purple-500/20"
        />
      </div>

      <SectionTitle>WorkspaceService — Métodos principales</SectionTitle>
      <Table headers={['Método', 'Parámetros clave', 'Retorno']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>crearWorkspace()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">tip, json, editores, aprobador, lectores, fecLimits</td>
          <td className="px-4 py-3"><Code>String idDocumento</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>marcarListo()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">idDocumento, idUsuario</td>
          <td className="px-4 py-3"><Code>boolean</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>puedeEditar(fila)</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">JWorkspace</td>
          <td className="px-4 py-3"><Code>boolean</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>puedeAprobar(fila)</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">JWorkspace</td>
          <td className="px-4 py-3"><Code>boolean</Code></td>
        </tr>
      </Table>

      <p className="text-sm text-slate-400">
        <strong className="text-white">Constantes útiles:</strong> <Code>PASO_EDICION=&apos;E&apos;</Code>, <Code>PASO_APROBACION=&apos;A&apos;</Code>, <Code>ESTADO_EDITOR=&apos;E&apos;</Code>, <Code>ESTADO_APROBADOR=&apos;A&apos;</Code>, <Code>ESTADO_LECTOR=&apos;L&apos;</Code>, <Code>STATUS_ACTIVO=&apos;N&apos;</Code>, <Code>STATUS_DEFINITIVO=&apos;S&apos;</Code>.
      </p>
    </div>
  );
}

// Slide 14 - Servlets
export function Slide14() {
  return (
    <div className="space-y-6">
      <Table headers={['Clase', 'URL', 'Método', 'Función principal']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>WorkspaceWordServlet</Code></td>
          <td className="px-4 py-3"><Code>/WorkspaceWordServlet</Code></td>
          <td className="px-4 py-3 text-slate-400">POST multipart</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Recibe el Word editado y lo sobreescribe</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>WorkspaceEnvioServlet</Code></td>
          <td className="px-4 py-3"><Code>/WorkspaceEnvioServlet</Code></td>
          <td className="px-4 py-3 text-slate-400">POST JSON</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Inicia la ruta o envío al destinatario</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>WorkspaceDownloadServlet</Code></td>
          <td className="px-4 py-3"><Code>/WorkspaceDownloadServlet</Code></td>
          <td className="px-4 py-3 text-slate-400">GET/POST</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Descarga el archivo Word al navegador</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>CommandWorkspaceFirmaImagen</Code></td>
          <td className="px-4 py-3 text-xs"><Code>?command=WorkspaceFirmaImagen</Code></td>
          <td className="px-4 py-3 text-slate-400">GET</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Sirve la imagen PNG/JPG de firma</td>
        </tr>
      </Table>

      <SectionTitle>Flujo completo de subida del Word editado</SectionTitle>
      <Table headers={['#', 'Paso', 'Validación / Acción']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3">1</td>
          <td className="px-4 py-3 text-slate-300">Recibir multipart POST</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Apache Commons FileUpload: parsea el request</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3">2</td>
          <td className="px-4 py-3 text-slate-300">Verificar lock activo</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>lockService.consultarLock(idDocumento)</Code></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3">3</td>
          <td className="px-4 py-3 text-slate-300">Validar propietario</td>
          <td className="px-4 py-3 text-slate-400 text-xs">Compara lock.getIdUsuario() con sesión</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3">4</td>
          <td className="px-4 py-3 text-slate-300">Guardar archivo</td>
          <td className="px-4 py-3 text-slate-400 text-xs">FileItem.write() — sobreescribe el existente</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3">5</td>
          <td className="px-4 py-3 text-slate-300">Liberar lock</td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>lockService.liberarLock()</Code></td>
        </tr>
      </Table>
    </div>
  );
}

// Slide 15 - State Transitions
export function Slide15() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        El Workspace implementa una máquina de estados compuesta por tres dimensiones ortogonales que en
        conjunto determinan el comportamiento del documento en cada momento. Las transiciones son atómicas
        (dentro de una transacción) y solo las puede ejecutar la lógica del servicio Java.
      </p>

      <SectionTitle>Las tres dimensiones de estado</SectionTitle>
      <Table headers={['Columna', 'Valores posibles', 'Quién la controla', 'Granularidad']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>PASO</Code></td>
          <td className="px-4 py-3"><Badge variant="edicion">E</Badge> <Badge variant="aprobacion">A</Badge></td>
          <td className="px-4 py-3"><Code>WorkspaceService.actualizarPaso()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Compartida: misma para todas las filas</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>ESTADO</Code></td>
          <td className="px-4 py-3"><Badge variant="editor">E</Badge> <Badge variant="aprobador">A</Badge> <Badge variant="lector">L</Badge></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Asignado en crearWorkspace(), inmutable</td>
          <td className="px-4 py-3 text-slate-300 text-xs">Individual: única por usuario/fila</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>STATUS</Code></td>
          <td className="px-4 py-3"><Code>N</Code> Activo / <Code>S</Code> Definitivo</td>
          <td className="px-4 py-3"><Code>WorkspaceService.marcarDefinitivo()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Compartida: cambia todas las filas</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>IND_LISTO</Code></td>
          <td className="px-4 py-3"><Code>N</Code> Pendiente / <Code>S</Code> Listo</td>
          <td className="px-4 py-3"><Code>marcarListo() / desmarcarListo()</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Individual: solo filas con ESTADO=&apos;E&apos;</td>
        </tr>
      </Table>

      <SectionTitle>Diagrama de la máquina de estados</SectionTitle>
      <CodeBlock>{`ESTADOS del DOCUMENTO (PASO x STATUS)

  [CREACIÓN]
      │
      ▼
  ┌──────────────────────┐
  │  PASO=E  STATUS=N    │  ◄── Estado inicial de todos los usuarios
  │  (Edición activa)    │
  └──────────┬───────────┘
             │
     Todos los editores marcan IND_LISTO='S'
             │
             ▼
  ┌──────────────────────┐
  │  PASO=A  STATUS=N    │  ◄── Aprobador puede firmar
  │  (Aprobación activa) │
  └──────────┬───────────┘
             │
     WorkspaceFirmaService.guardarFirma() exitoso
             │
             ▼
  ┌──────────────────────┐
  │  PASO=A  STATUS=S    │  ◄── Documento cerrado. Solo lectura.
  │  (Definitivo)        │
  └──────────────────────┘`}</CodeBlock>

      <Callout type="warning" title="Transición irreversible">
        Una vez que <Code>STATUS=&apos;S&apos;</Code> (definitivo), no hay transición de retorno en el modelo v2.
        El documento queda permanentemente cerrado. Si se requiere una nueva versión, se debe crear
        un nuevo workspace desde cero con <Code>crearWorkspace()</Code>.
      </Callout>
    </div>
  );
}

// Slide 16 - Visibility Rules
export function Slide16() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        La bandeja del workspace (<Code>bandejaWorkspace.jsp</Code>) muestra exactamente los documentos
        que cada usuario debe ver. La lógica central vive en el DAO y está gobernada por una regla
        compuesta de tres condiciones obligatorias.
      </p>

      <SectionTitle>La regla de tres condiciones</SectionTitle>
      <CodeBlock>{`-- listarBandejaPorUsuario(:idUsuario)
SELECT w.*, d.DATOS_JSON,
       JSON_VALUE(d.DATOS_JSON, '$.titulo')    AS TITULO_WS,
       JSON_VALUE(d.DATOS_JSON, '$.nomAutor')  AS NOM_AUTOR
  FROM MERT_WORKSPACE w
  JOIN MERT_WORKSPACE_DATOS_RAD d ON d.IDDOCUMENTO = w.IDDOCUMENTO
 WHERE w.UBICACION = :idUsuario     -- (1) Solo filas del usuario solicitante
   AND w.STATUS    = 'N'            -- (2) Solo documentos activos (no definitivos)
   AND (w.ESTADO = w.PASO           -- (3a) Su turno: rol coincide con etapa actual
    OR  w.ESTADO = 'L')             -- (3b) O es lector (siempre visible)
 ORDER BY w.FECASIGNACION DESC`}</CodeBlock>

      <SectionTitle>Matriz completa de visibilidad</SectionTitle>
      <Table headers={['Rol (ESTADO)', 'PASO=E STATUS=N', 'PASO=A STATUS=N', 'STATUS=S']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="editor">Editor (E)</Badge></td>
          <td className="px-4 py-3"><Badge variant="success">Visible</Badge> <span className="text-xs text-slate-500">(E=E)</span></td>
          <td className="px-4 py-3"><Badge variant="muted">Oculto</Badge> <span className="text-xs text-slate-500">(E≠A)</span></td>
          <td className="px-4 py-3"><Badge variant="muted">Oculto</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="aprobador">Aprobador (A)</Badge></td>
          <td className="px-4 py-3"><Badge variant="muted">Oculto</Badge> <span className="text-xs text-slate-500">(A≠E)</span></td>
          <td className="px-4 py-3"><Badge variant="success">Visible</Badge> <span className="text-xs text-slate-500">(A=A)</span></td>
          <td className="px-4 py-3"><Badge variant="muted">Oculto</Badge></td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="lector">Lector (L)</Badge></td>
          <td className="px-4 py-3"><Badge variant="success">Visible</Badge> <span className="text-xs text-slate-500">(L)</span></td>
          <td className="px-4 py-3"><Badge variant="success">Visible</Badge> <span className="text-xs text-slate-500">(L)</span></td>
          <td className="px-4 py-3"><Badge variant="muted">Oculto</Badge></td>
        </tr>
      </Table>

      <Callout type="info" title="Comportamiento cuando el PASO avanza">
        Cuando <Code>PASO</Code> cambia de <Code>&apos;E&apos;</Code> a <Code>&apos;A&apos;</Code>, los editores <strong>dejan de
          ver el documento en su bandeja automáticamente</strong> — sin ninguna acción adicional. El cambio es inmediato
        en la siguiente recarga de la bandeja.
      </Callout>
    </div>
  );
}

// Slide 17 - Editor Manual
export function Slide17() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        El <strong className="text-white">Editor</strong> es el usuario responsable de crear y redactar el contenido del documento
        borrador. Puede haber más de un editor por documento; todos comparten el mismo Word y deben coordinarse
        usando el sistema de lock para edición concurrente.
      </p>

      <SectionTitle>1. Crear un nuevo documento borrador</SectionTitle>
      <Card accent>
        <ol className="list-decimal list-inside text-slate-300 space-y-2">
          <li>Ingresar al módulo Workspace desde el menú principal de Mercurio SED.</li>
          <li>Hacer clic en el botón <strong className="text-white">&quot;Nuevo Documento Interno&quot;</strong> o <strong className="text-white">&quot;Nuevo Documento Externo&quot;</strong>.</li>
          <li>Completar el formulario: <strong className="text-white">Título</strong>, <strong className="text-white">Asunto</strong>, <strong className="text-white">Plantilla</strong>, <strong className="text-white">Aprobador</strong>, <strong className="text-white">Lectores</strong>, <strong className="text-white">Fechas límite</strong>.</li>
          <li>Hacer clic en <strong className="text-white">&quot;Guardar&quot;</strong> (<Code>operacion=guardar</Code>). El sistema asigna un ID de documento borrador.</li>
        </ol>
      </Card>

      <SectionTitle>2. Editar el documento</SectionTitle>
      <Card accent>
        <ol className="list-decimal list-inside text-slate-300 space-y-2">
          <li>En la bandeja, localizar el documento en estado <Badge variant="edicion">Edición</Badge>.</li>
          <li>Hacer clic en <strong className="text-white">&quot;Editar&quot;</strong>. El sistema solicita el lock (30 minutos por defecto).</li>
          <li>El botón <strong className="text-white">&quot;Descargar Word&quot;</strong> descarga el archivo .docx.</li>
          <li>Editar el archivo localmente con Microsoft Word.</li>
          <li>Subir el archivo modificado usando <Code>WorkspaceWordServlet</Code>. Esto libera automáticamente el lock.</li>
        </ol>
      </Card>

      <Callout type="warning" title="Lock expira en 30 minutos">
        Si no subes el archivo antes de que expire el lock, otro editor podrá tomar el control. Tu descarga local se perdería si ambos suben versiones. Siempre sube el archivo antes de cerrar la sesión.
      </Callout>

      <SectionTitle>Resumen del flujo del editor</SectionTitle>
      <CodeBlock>{`Nuevo → Guardar → bandeja [PASO=E]
   └─ Editar (lock) → Descargar Word → editar en Word → Subir Word
         └─ [lock liberado] → Marcar Listo
               ├─ Faltan editores → sigue en PASO=E (indicador de progreso)
               └─ Todos listos   → auto-transición PASO=A
                                    → documento sale de bandeja del editor
                                    → aprobador puede actuar`}</CodeBlock>
    </div>
  );
}

// Slide 18 - Approver Manual
export function Slide18() {
  return (
    <div className="space-y-6">
      <SectionTitle>Rol Aprobador — flujo de aprobación y firma</SectionTitle>
      <p className="text-slate-300 leading-relaxed">
        El <strong className="text-white">Aprobador</strong> es el único usuario con autoridad para firmar digitalmente y
        convertir el borrador en un radicado oficial. Solo puede actuar cuando <Code>PASO=&apos;A&apos;</Code>.
      </p>

      <Card accent>
        <h3 className="font-mono text-base font-bold text-white mb-4">Paso 1 — Verificar credenciales</h3>
        <ol className="list-decimal list-inside text-slate-300 space-y-2">
          <li>En la bandeja, el documento aparece con botón <strong className="text-white">&quot;Aprobar&quot;</strong>.</li>
          <li>Al hacer clic, el sistema muestra un diálogo de validación de credenciales.</li>
          <li>Se realiza una llamada AJAX a <Code>CommandWorkspaceValidarFirma</Code>.</li>
          <li>Si son correctas: se abre el visor de aprobación.</li>
        </ol>
      </Card>

      <Card accent>
        <h3 className="font-mono text-base font-bold text-white mb-4">Paso 2 — Posicionar y confirmar la firma</h3>
        <ol className="list-decimal list-inside text-slate-300 space-y-2">
          <li>El visor carga el PDF con <Code>WorkspaceFirmaService.servirPdf()</Code>.</li>
          <li>Arrastrar la imagen de firma a la posición deseada en el PDF.</li>
          <li>Seleccionar el <strong className="text-white">Tipo de Envío</strong>: <Code>ruta</Code> o <Code>destinatario</Code>.</li>
          <li>Hacer clic en <strong className="text-white">&quot;Confirmar y Radicar&quot;</strong>.</li>
        </ol>
      </Card>

      <SectionTitle>Rol Lector — consulta y seguimiento</SectionTitle>
      <p className="text-slate-300 leading-relaxed">
        El <strong className="text-white">Lector</strong> tiene acceso de solo lectura al documento durante todo su ciclo de vida activo.
        Aparece en la bandeja tanto en fase de edición como de aprobación.
      </p>

      <Table headers={['Acción', 'Disponible', 'Descripción']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Ver ficha del documento</td>
          <td className="px-4 py-3"><Badge variant="success">Sí</Badge></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Accede a la ficha en modo solo lectura.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Ver borrador PDF</td>
          <td className="px-4 py-3"><Badge variant="success">Sí</Badge></td>
          <td className="px-4 py-3 text-slate-400 text-xs"><Code>operacion=verBorrador</Code> — PDF de vista previa.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Editar el Word</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Botón de descarga/subida no visible para lectores.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 text-slate-300">Firmar</td>
          <td className="px-4 py-3"><Badge variant="danger">No</Badge></td>
          <td className="px-4 py-3 text-slate-400 text-xs">Solo para el aprobador.</td>
        </tr>
      </Table>
    </div>
  );
}

// Slide 19 - File Map
export function Slide19() {
  return (
    <div className="space-y-6">
      <p className="text-slate-300 leading-relaxed">
        El módulo Workspace involucra archivos distribuidos en cuatro paquetes Java, tres directorios web
        y el esquema de base de datos Oracle.
      </p>

      <SectionTitle>Beans del modelo (co.com.servisoft.mercurio.workspace)</SectionTitle>
      <Table headers={['Archivo', 'Clase', 'Responsabilidad']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>JWorkspace.java</Code></td>
          <td className="px-4 py-3"><Code>JWorkspace</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Bean para MERT_WORKSPACE. Campos: idWs, idDocumento, tipDocumento, ubicacion, estado, paso, etc.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>JWorkspaceDatosRad.java</Code></td>
          <td className="px-4 py-3"><Code>JWorkspaceDatosRad</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Bean para MERT_WORKSPACE_DATOS_RAD. Campos: idDocumento, tipDocumento, versionDatos, datosJson (CLOB), etc.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Code>JWorkspaceLock.java</Code></td>
          <td className="px-4 py-3"><Code>JWorkspaceLock</Code></td>
          <td className="px-4 py-3 text-slate-300 text-xs">Bean para MERT_WORKSPACE_LOCK. Campos: idLock, idDocumento, idUsuario, nomUsuario, fecInicio, fecExpiracion.</td>
        </tr>
      </Table>

      <SectionTitle>Resumen de estructura de archivos</SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <Database className="w-5 h-5 text-blue-400" />
            <span className="font-mono text-sm font-bold text-white">Base de Datos</span>
          </div>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• MERT_WORKSPACE</li>
            <li>• MERT_WORKSPACE_DATOS_RAD</li>
            <li>• MERT_WORKSPACE_LOCK</li>
            <li>• SEQ_WORKSPACE</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <Server className="w-5 h-5 text-emerald-400" />
            <span className="font-mono text-sm font-bold text-white">Servicios Java</span>
          </div>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• WorkspaceService</li>
            <li>• WorkspaceConversionService</li>
            <li>• WorkspaceFirmaService</li>
            <li>• WorkspaceLockService</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <Terminal className="w-5 h-5 text-amber-400" />
            <span className="font-mono text-sm font-bold text-white">Commands</span>
          </div>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• CommandWorkspaceInterno</li>
            <li>• CommandWorkspaceExterno</li>
            <li>• CommandWorkspaceBandeja</li>
            <li>• CommandWorkspaceFirmaImagen</li>
          </ul>
        </Card>
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <Layers className="w-5 h-5 text-purple-400" />
            <span className="font-mono text-sm font-bold text-white">JSPs</span>
          </div>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>• bandejaWorkspace.jsp</li>
            <li>• fichaWorkspaceInterno.jsp</li>
            <li>• fichaWorkspaceExterno.jsp</li>
            <li>• visorAprobarWorkspace.jsp</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

// Slide 20 - Glossary
export function Slide20() {
  return (
    <div className="space-y-6">
      <SectionTitle>Glosario de términos</SectionTitle>
      <Table headers={['Término', 'Definición']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Workspace</td>
          <td className="px-4 py-3 text-slate-300">Espacio de trabajo colaborativo para la elaboración de documentos borrador antes de su radicación oficial.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Borrador</td>
          <td className="px-4 py-3 text-slate-300">Documento en estado de elaboración que aún no ha sido convertido a radicado oficial.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Radicado</td>
          <td className="px-4 py-3 text-slate-300">Documento oficial con número de consecutivo asignado, almacenado en MERT_INTERNO o MERT_EXTERNO.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">Lock</td>
          <td className="px-4 py-3 text-slate-300">Bloqueo pesimista que impide la edición concurrente del mismo documento por múltiples usuarios.</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">PASO</td>
          <td className="px-4 py-3 text-slate-300">Etapa actual del documento: &apos;E&apos; (Edición) o &apos;A&apos; (Aprobación).</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">ESTADO</td>
          <td className="px-4 py-3 text-slate-300">Rol del usuario en el documento: &apos;E&apos; (Editor), &apos;A&apos; (Aprobador), &apos;L&apos; (Lector).</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">STATUS</td>
          <td className="px-4 py-3 text-slate-300">Estado de visibilidad: &apos;N&apos; (Activo) o &apos;S&apos; (Definitivo/Cerrado).</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3 font-semibold text-white">IND_LISTO</td>
          <td className="px-4 py-3 text-slate-300">Indicador de que un editor ha terminado su trabajo y el documento está listo para aprobación.</td>
        </tr>
      </Table>

      <SectionTitle>Preguntas frecuentes</SectionTitle>
      <Card accent>
        <h3 className="font-mono text-base font-bold text-white mb-2">¿Qué pasa si el lock expira mientras edito?</h3>
        <p className="text-slate-300 text-sm">
          Otro usuario podrá tomar el control del documento. Tu versión local quedará desincronizada.
          Se recomienda siempre subir el archivo antes de que expire el lock (30 minutos por defecto).
        </p>
      </Card>
      <Card accent>
        <h3 className="font-mono text-base font-bold text-white mb-2">¿Puedo deshacer un &quot;Marcar Listo&quot;?</h3>
        <p className="text-slate-300 text-sm">
          Sí, mientras el documento siga en PASO=&apos;E&apos;. Una vez que todos los editores marquen listo y el sistema
          transicione a PASO=&apos;A&apos;, ya no es posible deshacer.
        </p>
      </Card>
      <Card accent>
        <h3 className="font-mono text-base font-bold text-white mb-2">¿Puedo reabrir un documento radicado?</h3>
        <p className="text-slate-300 text-sm">
          No. Una vez que STATUS=&apos;S&apos;, el documento queda permanentemente cerrado. Si se necesita una nueva versión,
          debe crearse un nuevo workspace desde cero.
        </p>
      </Card>
    </div>
  );
}

// Credits Slide
export function SlideCredits() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8">
      <div>
        <h2 className="font-mono text-3xl font-bold text-white mb-4">Documentación Técnica</h2>
        <p className="text-xl text-indigo-400">Módulo Workspace — Mercurio SED</p>
        <p className="text-slate-500 mt-2">v2.0 | Abril 2026</p>
      </div>

      <div className="border-t border-white/10 pt-8 w-full max-w-md">
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Desarrollado por: Equipo Alpha</p>
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-lg text-white font-semibold">Juan Esteban</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-lg text-white font-semibold">Juan Herrera</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-lg text-white font-semibold">Santiago David</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-lg text-white font-semibold">Juan Pablo</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="text-lg text-white font-semibold">Brando Yesid</span>
          </div>
        </div>
      </div>

      <div className="text-slate-500 text-sm mt-8">
        © 2026 Mercurio SED — Sistema Electrónico de Documentos
      </div>
    </div>
  );
}
