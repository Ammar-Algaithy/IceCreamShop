type Props = {
name: string
description: string
badge?: string
image?: string
}


export default function FlavorCard({ name, description, badge, image }: Props) {
return (
<div className="card p-4 hover:shadow-lg transition group">
<div className="aspect-square rounded-xl overflow-hidden mb-3 bg-neutral-100">
{image ? (
<img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
) : (
<div className="w-full h-full grid place-content-center text-neutral-400">🍨</div>
)}
</div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-semibold text-lg">{name}</h3>
{badge && <span className="text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{badge}</span>}
</div>
<p className="text-sm text-neutral-600">{description}</p>
</div>
)
}