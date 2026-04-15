import { cn } from "@/lib/utils";

// Badge Component
interface BadgeProps {
  variant: 'editor' | 'aprobador' | 'lector' | 'edicion' | 'aprobacion' | 'definitivo' | 'primary' | 'muted' | 'success' | 'warning' | 'danger';
  children: React.ReactNode;
  className?: string;
}

const badgeStyles: Record<BadgeProps['variant'], string> = {
  editor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  aprobador: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  lector: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  edicion: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  aprobacion: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  definitivo: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  primary: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
  muted: 'bg-slate-700/50 text-slate-400 border-slate-600/50',
  success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  danger: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border',
      badgeStyles[variant],
      className
    )}>
      {children}
    </span>
  );
}

// Code Component
export function Code({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={cn(
      'font-mono text-sm bg-slate-800/80 text-indigo-300 px-1.5 py-0.5 rounded border border-slate-700/50',
      className
    )}>
      {children}
    </code>
  );
}

// CodeBlock Component
export function CodeBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <pre className={cn(
      'bg-slate-900/80 border border-slate-700/50 rounded-xl p-4 overflow-x-auto font-mono text-sm text-slate-300 leading-relaxed',
      className
    )}>
      <code>{children}</code>
    </pre>
  );
}

// Card Component
interface CardProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export function Card({ children, accent, className }: CardProps) {
  return (
    <div className={cn(
      'bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6',
      accent && 'border-l-4 border-l-indigo-500',
      className
    )}>
      {children}
    </div>
  );
}

// Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBg: string;
}

export function StatCard({ icon, value, label, iconBg }: StatCardProps) {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
      <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3', iconBg)}>
        {icon}
      </div>
      <div className="font-mono text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}

// Table Component
interface TableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export function Table({ headers, children, className }: TableProps) {
  return (
    <div className={cn('overflow-x-auto rounded-xl border border-white/10', className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/80">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-left font-mono text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-white/10">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-slate-900/50 divide-y divide-white/5">
          {children}
        </tbody>
      </table>
    </div>
  );
}

// Callout Component
interface CalloutProps {
  type: 'info' | 'success' | 'warning' | 'danger';
  title: string;
  children: React.ReactNode;
  className?: string;
}

const calloutStyles = {
  info: { bg: 'bg-blue-500/10 border-blue-500/30', text: 'text-blue-400' },
  success: { bg: 'bg-emerald-500/10 border-emerald-500/30', text: 'text-emerald-400' },
  warning: { bg: 'bg-amber-500/10 border-amber-500/30', text: 'text-amber-400' },
  danger: { bg: 'bg-red-500/10 border-red-500/30', text: 'text-red-400' },
};

export function Callout({ type, title, children, className }: CalloutProps) {
  const styles = calloutStyles[type];
  return (
    <div className={cn('rounded-xl border p-4', styles.bg, className)}>
      <div className={cn('font-mono text-sm font-bold mb-2', styles.text)}>{title}</div>
      <div className="text-sm text-slate-300 leading-relaxed">{children}</div>
    </div>
  );
}

// Section Title
export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('font-mono text-lg font-bold text-white mt-8 mb-4 flex items-center gap-2', className)}>
      <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
      {children}
    </h2>
  );
}

// Flow Step Component
interface FlowStepProps {
  icon: React.ReactNode;
  label: string;
  actor: string;
  condition: string;
  nodeClass: string;
  isLast?: boolean;
}

export function FlowStep({ icon, label, actor, condition, nodeClass, isLast }: FlowStepProps) {
  return (
    <>
      <div className="flex flex-col items-center flex-1">
        <div className={cn(
          'w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg border-[3px]',
          nodeClass
        )}>
          {icon}
        </div>
        <div className="font-mono text-xs font-bold text-center mt-2 text-white">{label}</div>
        <div className="text-[10px] text-slate-400 text-center mt-1">{actor}</div>
        <div className="text-[10px] text-slate-500 text-center mt-1 italic max-w-[80px]">{condition}</div>
      </div>
      {!isLast && (
        <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 mt-8 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-blue-500"></div>
        </div>
      )}
    </>
  );
}

// Allowed/Denied/Conditional icons for permission matrix
export function AllowedIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 bg-emerald-500/20 text-emerald-400 rounded-full">
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export function DeniedIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 bg-red-500/20 text-red-400 rounded-full">
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

export function ConditionalIcon() {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 bg-amber-500/20 text-amber-400 rounded-full">
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
      </svg>
    </span>
  );
}
