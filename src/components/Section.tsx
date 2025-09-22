import type { ReactNode } from 'react';


export default function Section({ children, className = '' }: { children: ReactNode; className?: string }) {
return (
<section className={`container-px mx-auto max-w-7xl py-12 md:py-20 ${className}`}>
{children}
</section>
)
}