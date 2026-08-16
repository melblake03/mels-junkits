import { Heart, MapPin, Truck } from 'lucide-react'

const ITEMS = [
  { icon: Heart, label: 'Black Woman-Owned' },
  { icon: MapPin, label: 'Handmade in Kansas City, Missouri' },
  { icon: Truck, label: 'Shipping Nationwide + Local Pickup' },
]

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-grape to-accent text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 px-4 py-2 text-center text-xs font-medium sm:flex-row sm:gap-6 sm:text-sm">
        {ITEMS.map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-1.5">
            <Icon className="size-3.5 shrink-0" strokeWidth={2} />
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
