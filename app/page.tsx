import Image from 'next/image'
import { ArrowUpRight, Camera, Clock3, MapPin, MessageCircle, Phone, Scissors, Sparkles } from 'lucide-react'
import { BookingForm } from '@/components/booking-form'

const WHATSAPP_URL = 'https://wa.me/573170277495?text=' + encodeURIComponent('¡Hola VSC Barber! Me gustaría agendar una cita.')
const INSTAGRAM_URL = 'https://www.instagram.com/vsc.barber/'

const gallery = [
  { title: 'Corte moderno', subtitle: 'Fade & textura', image: '/gallery/corte-moderno.jpg' },
  { title: 'Corte clásico', subtitle: 'Tijera & precisión', image: '/gallery/corte-clasico-v2.jpg' },
  { title: 'Corte de barba', subtitle: 'Perfilado & ritual', image: '/gallery/corte-barba-v2.jpg' },
]

function BrandMark() { return <Image src="/logo.png" alt="" width={900} height={673} className="brand-logo" priority /> }

export default function Page() {
  return <main>
    <nav className="site-nav"><div className="shell nav-inner"><a href="#inicio" className="brand"><BrandMark /><span>VSC <em>Barber</em></span></a><div className="nav-links"><a href="#inicio">Inicio</a><a href="#galeria">Trabajos</a><a href="#reservas">Reservar</a></div><a className="nav-cta" href="#reservas">Agendar cita <ArrowUpRight size={16} /></a></div></nav>

    <header id="inicio" className="hero"><div className="hero-glow" /><div className="hero-video" aria-hidden="true"><video src="/videos/barber-cut.mp4" autoPlay muted loop playsInline preload="auto" tabIndex={-1} /></div><div className="hero-glass" aria-hidden="true" /><div className="shell hero-content"><p className="eyebrow"><Scissors size={15} /> Barbería contemporánea · Since 2018</p><h1>La excelencia<br /><span>en cada detalle.</span></h1><p className="hero-copy">Cortes clásicos, modernos, texturas y barbas. Una experiencia premium para el hombre moderno.</p><div className="hero-actions"><a className="primary-button" href="#reservas">Reserva tu espacio <ArrowUpRight size={18} /></a><a className="text-link" href="#galeria">Ver nuestros cortes <span>↓</span></a></div></div></header>

    <section id="galeria" className="gallery-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Nuestro trabajo</p><h2>El detalle habla<br /><i>por ti.</i></h2></div><p>Resultados impecables.<br />Estilo que habla por sí solo.</p></div><div className="gallery-grid">{gallery.map((item, index) => <article className="gallery-card" key={item.title}><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" priority={index === 0} /><div className="gallery-overlay"><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.subtitle}</p></div></div></article>)}</div></div></section>

    <section id="reservas" className="booking-section"><div className="shell booking-layout"><div className="booking-copy"><p className="eyebrow"><Sparkles size={15} /> Tu próxima cita</p><h2>Tu estilo,<br /><i>tu momento.</i></h2><p>Reserva tu espacio en VSC Barber y déjanos convertir tu próxima visita en un ritual.</p><div className="hours"><Clock3 size={18} /><span><strong>Lun — Sáb</strong><br />9:00 am — 8:30 pm</span></div></div><div className="booking-card"><div className="card-top"><span>Agenda tu cita</span><span className="card-line" /></div><BookingForm /></div></div></section>

    <footer><div className="shell footer-grid"><div><a className="brand" href="#inicio"><BrandMark /><span>VSC <em>Barber</em></span></a><p className="footer-note">Precisión en cada corte.<br />Carácter en cada detalle.</p></div><div><p className="footer-label">Encuéntranos</p><p className="footer-detail"><MapPin size={16} /> Calle 112 N°35-111<br /><span>B. Caldas</span></p><a className="footer-detail" href="tel:+573170277495"><Phone size={16} /> 317 027 7495</a></div><div><p className="footer-label">Síguenos</p><a className="social-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de VSC Barber"><Camera size={17} /> @VSC.BARBER <ArrowUpRight size={14} /></a><a className="social-link social-link--whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de VSC Barber"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={14} /></a></div></div><div className="shell footer-bottom"><span>© 2026 VSC Barber</span><span>Hecho para hombres con carácter.</span></div></footer>
  </main>
}
