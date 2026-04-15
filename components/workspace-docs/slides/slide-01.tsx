"use client";

import { FileText, Terminal, Database, Users } from "lucide-react";
import { Card, Badge, Table, StatCard, SectionTitle } from "../ui-components";

export function Slide01() {
  return (
    <div className="space-y-6">
      <Card accent>
        <h2 className="font-mono text-lg font-bold text-white mb-4">Acerca de este documento</h2>
        <p className="text-slate-300 leading-relaxed mb-3">
          Este archivo es la documentación técnica oficial del <strong className="text-white">Módulo Workspace</strong> del sistema{" "}
          <strong className="text-white">Mercurio SED</strong>. Cubre el ciclo de vida completo de un documento borrador: desde su creación
          hasta su conversión a un radicado oficial, pasando por las etapas de edición, revisión y aprobación.
        </p>
        <p className="text-slate-300 leading-relaxed">
          El documento está estructurado en 20 secciones que abarcan: flujos de proceso, diagramas de estados,
          tablas de base de datos, servlets y servicios Java, JSPs de interfaz, reglas de negocio críticas,
          manual de usuario y glosario técnico.
        </p>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard 
          icon={<FileText className="w-5 h-5 text-blue-400" />}
          value="20"
          label="Secciones documentadas"
          iconBg="bg-blue-500/20"
        />
        <StatCard 
          icon={<Terminal className="w-5 h-5 text-emerald-400" />}
          value="29+"
          label="Archivos Java involucrados"
          iconBg="bg-emerald-500/20"
        />
        <StatCard 
          icon={<Database className="w-5 h-5 text-purple-400" />}
          value="3"
          label="Tablas BD principales"
          iconBg="bg-purple-500/20"
        />
        <StatCard 
          icon={<Users className="w-5 h-5 text-amber-400" />}
          value="3"
          label="Roles de usuario"
          iconBg="bg-amber-500/20"
        />
      </div>

      <SectionTitle>Convención de iconos de estado</SectionTitle>
      <Table headers={['Insignia', 'Significado', 'Uso']}>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="editor">Editor</Badge></td>
          <td className="px-4 py-3 text-slate-300">Rol de usuario: puede editar el documento</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">ESTADO = &apos;E&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="aprobador">Aprobador</Badge></td>
          <td className="px-4 py-3 text-slate-300">Rol de usuario: puede aprobar y firmar</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">ESTADO = &apos;A&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="lector">Lector</Badge></td>
          <td className="px-4 py-3 text-slate-300">Rol de usuario: solo puede consultar</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">ESTADO = &apos;L&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="edicion">Edición</Badge></td>
          <td className="px-4 py-3 text-slate-300">Etapa actual del documento: borrador en edición</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">PASO = &apos;E&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="aprobacion">Aprobación</Badge></td>
          <td className="px-4 py-3 text-slate-300">Etapa actual: esperando firma del aprobador</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">PASO = &apos;A&apos;</td>
        </tr>
        <tr className="hover:bg-slate-800/50">
          <td className="px-4 py-3"><Badge variant="definitivo">Definitivo</Badge></td>
          <td className="px-4 py-3 text-slate-300">Radicado oficial generado, cerrado</td>
          <td className="px-4 py-3 text-slate-400 font-mono text-xs">STATUS = &apos;S&apos;</td>
        </tr>
      </Table>
    </div>
  );
}
