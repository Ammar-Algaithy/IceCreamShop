import { cn } from '../utils/cn'


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: 'primary' | 'ghost'
}


export default function Button({ variant = 'primary', className, ...rest }: Props) {
return <button className={cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)} {...rest} />
}