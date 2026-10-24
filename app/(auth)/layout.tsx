import Image from 'next/image'
import { BRAND_LOGO, BRAND_NAME } from '@/lib/brand'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 flex flex-col items-center gap-3">
          <Image src={BRAND_LOGO} alt={BRAND_NAME} width={168} height={40} priority />
          <p className="text-sm text-slate-500">
            Gestão simples para o seu negócio
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}