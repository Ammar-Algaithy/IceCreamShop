import Section from '../components/Section'
import Button from '../components/Button'
import { useState } from 'react'


export default function Contact() {
const [sent, setSent] = useState(false)


return (
<Section>
<h1 className="section-title mb-2">Contact</h1>
<p className="section-subtitle mb-8">Questions, catering, or wholesale? We’d love to hear from you.</p>


<div className="card p-6 max-w-2xl">
{sent ? (
<p className="text-green-700">Thanks! We’ll reply within 1 business day.</p>
) : (
<form
onSubmit={(e) => {
e.preventDefault()
setSent(true)
}}
className="space-y-4"
>
<div>
<label className="block text-sm font-medium mb-1">Name</label>
<input className="w-full rounded-xl border px-3 py-2" required />
</div>
<div>
<label className="block text-sm font-medium mb-1">Email</label>
<input type="email" className="w-full rounded-xl border px-3 py-2" required />
</div>
<div>
<label className="block text-sm font-medium mb-1">Message</label>
<textarea className="w-full rounded-xl border px-3 py-2 min-h-[120px]" required />
</div>
<Button type="submit">Send</Button>
</form>
)}
</div>
</Section>
)
}