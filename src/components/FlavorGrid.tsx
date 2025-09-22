import FlavorCard from './FlavorCard'
import { flavors } from '../data/flavors'

type Flavor = typeof flavors[number];

export default function FlavorGrid() {
return (
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
{flavors.map((f: Flavor) => (
<FlavorCard key={f.name} {...f} />
))}
</div>
)
}