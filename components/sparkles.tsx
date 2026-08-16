import { Sparkle } from 'lucide-react'
import { cn } from '@/lib/utils'

type SparkleSpec = {
  top: string
  left: string
  size: number
  delay: string
  className: string
}

const SPARKLES: SparkleSpec[] = [
  { top: '12%', left: '8%', size: 20, delay: '0s', className: 'text-primary' },
  { top: '24%', left: '82%', size: 16, delay: '0.6s', className: 'text-gold' },
  { top: '62%', left: '14%', size: 14, delay: '1.2s', className: 'text-teal' },
  { top: '72%', left: '88%', size: 22, delay: '0.3s', className: 'text-primary' },
  { top: '40%', left: '48%', size: 12, delay: '1.6s', className: 'text-gold' },
  { top: '82%', left: '40%', size: 16, delay: '0.9s', className: 'text-teal' },
  { top: '16%', left: '58%', size: 14, delay: '2s', className: 'text-primary/70' },
]

export function Sparkles({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {SPARKLES.map((s, i) => (
        <Sparkle
          key={i}
          className={cn('animate-sparkle absolute', s.className)}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          width={s.size}
          height={s.size}
          fill="currentColor"
          strokeWidth={1}
        />
      ))}
    </div>
  )
}
