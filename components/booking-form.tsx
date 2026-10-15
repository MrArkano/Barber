'use client'

import { useState } from 'react'
import { CalendarDays, Clock3, Scissors, UserRound, MessageCircle } from 'lucide-react'

const services = [
  'Corte Clásico',
  'Corte Moderno / Fade',
  'Corte + Texturas',
  'Corte a Tijera',
  'Corte + Barba',
  'Arreglo de Cejas',
]

export function BookingForm() {
  const [date, setDate] = useState('')

  function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const service = String(form.get('service') || '')
    const time = String(form.get('time') || '')
    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString('es-CO', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    })
    const message = `¡Hola VSC Barber!%0A%0ASoy *${name}*. Me gustaría agendar una cita.%0A%0A*Servicio:* ${service}%0A*Fecha:* ${formattedDate}%0A*Hora:* ${time}%0A%0A¿Tienen disponibilidad?`
    window.open(`https://wa.me/573170277495?text=${message}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={submitBooking} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label"><span><UserRound size={15} /> Nombre completo</span><input name="name" required placeholder="Ej. Juan Pérez" /></label>
        <label className="field-label"><span><Scissors size={15} /> Servicio</span><select name="service" defaultValue={services[0]}>{services.map((service) => <option key={service}>{service}</option>)}</select></label>
        <label className="field-label"><span><CalendarDays size={15} /> Fecha</span><input name="date" type="date" required min={new Date().toISOString().split('T')[0]} value={date} onChange={(event) => setDate(event.target.value)} /></label>
        <label className="field-label"><span><Clock3 size={15} /> Hora preferida</span><input name="time" type="time" min="09:00" max="20:30" required /></label>
      </div>
      <button className="primary-button w-full" type="submit"><MessageCircle size={19} /> Agendar por WhatsApp</button>
      <p className="text-center text-xs text-white/40">Serás redirigido a WhatsApp para confirmar tu cita con VSC Barber.</p>
    </form>
  )
}
