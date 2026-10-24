import { SUPPORT_EMAIL } from '@/lib/brand'

export function PlanHelpPanel() {
  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h3 className="mb-1 font-medium text-slate-900">Precisa de ajuda para escolher?</h3>
      <p className="text-sm text-slate-500">
        Entre em contato pelo email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-slate-900 underline underline-offset-4">
          {SUPPORT_EMAIL}
        </a>{' '}
        e nossa equipe te ajuda a encontrar o melhor plano para o seu negócio.
      </p>
    </div>
  )
}
