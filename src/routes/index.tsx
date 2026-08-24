import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  Droplets,
  Flame,
  Brush,
  Star,
  MapPin,
  Phone,
  Instagram,
  Clock,
  MessageCircle,
} from "lucide-react";

import heroImg from "@/assets/hero-barber.jpg";
import shopImg from "@/assets/shop-interior.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const WHATSAPP = "https://wa.me/5511999990000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navalha de Ouro | Barbearia Clássica em São Paulo" },
      {
        name: "description",
        content:
          "Barbearia clássica na Vila Madalena: corte, barba na navalha, tratamentos e combos. Agende pelo WhatsApp em 1 minuto.",
      },
      { property: "og:title", content: "Navalha de Ouro | Barbearia Clássica" },
      {
        property: "og:description",
        content:
          "Corte, barba na navalha e cuidados masculinos com hora marcada na Vila Madalena, São Paulo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const specialties = [
  { icon: Scissors, label: "Corte Masculino" },
  { icon: Flame, label: "Barba na Navalha" },
  { icon: Droplets, label: "Lavagem & Spa" },
  { icon: Sparkles, label: "Sobrancelha" },
  { icon: Brush, label: "Platinado" },
  { icon: Star, label: "Combo Premium" },
];

const services = [
  {
    icon: Scissors,
    name: "Corte Clássico",
    price: "R$ 60",
    text: "Tesoura, máquina e acabamento na navalha, com consultoria de estilo antes de começar.",
  },
  {
    icon: Flame,
    name: "Barba Terapia",
    price: "R$ 55",
    text: "Toalha quente, óleo essencial, navalha e balm calmante para pele sem irritação.",
  },
  {
    icon: Star,
    name: "Combo Cabelo + Barba",
    price: "R$ 99",
    text: "O pacote mais pedido da casa: corte completo e barba desenhada em uma só sessão.",
  },
  {
    icon: Droplets,
    name: "Spa Capilar",
    price: "R$ 70",
    text: "Limpeza profunda, hidratação e massagem no couro cabeludo com produtos importados.",
  },
];

const differentials = [
  "Hora marcada de verdade: atraso zero ou o próximo café é por nossa conta",
  "Barbeiros com mais de 8 anos de estrada e formação em navalha clássica",
  "Ambiente com whisky, café e sinuca enquanto você espera",
  "Produtos premium inclusos em todos os serviços",
];

const testimonials = [
  {
    name: "Rafael Monteiro",
    role: "Cliente há 3 anos",
    text: "Nunca mais troquei. Marquei pelo WhatsApp e fui atendido no horário exato. Acabamento impecável.",
  },
  {
    name: "Diego Alves",
    role: "Cliente desde 2024",
    text: "A barba terapia é outro nível. Saio da cadeira parecendo outra pessoa, e a pele não irrita.",
  },
  {
    name: "Lucas Ferrari",
    role: "Noivo atendido em 2026",
    text: "Fiz o combo premium no dia do casamento. Equipe atenciosa e resultado perfeito nas fotos.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-deep">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#inicio" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-gold" />
            <span className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-widest text-foreground">
              Navalha<span className="text-gold">.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href={WHATSAPP} className="btn-gold hidden sm:inline-flex">
            <MessageCircle className="h-4 w-4" /> Agendar
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative isolate flex min-h-[92vh] items-center">
        <img
          src={heroImg}
          alt="Barbeiro fazendo a barba de um cliente na Navalha de Ouro"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-overlay)" }}
        />
        <div className="mx-auto w-full max-w-7xl px-6 pt-24 text-center">
          <p className="eyebrow">Desde 1994 · Vila Madalena</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold uppercase leading-tight text-foreground sm:text-6xl">
            Corte e barba <span className="text-gold">com hora marcada</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/75">
            Barbearia clássica para quem não tem tempo a perder. Estilo definido em consultoria,
            executado na navalha e entregue no horário combinado.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP} className="btn-gold">
              Agendar no WhatsApp
            </a>
            <a href="#servicos" className="btn-outline-gold">
              Ver serviços e preços
            </a>
          </div>
        </div>
      </section>

      {/* Specialties strip */}
      <section className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-3 lg:grid-cols-6">
          {specialties.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-secondary transition-colors hover:border-[var(--gold)]">
                <s.icon className="h-7 w-7 text-gold" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.14em] text-foreground/85">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex h-96 items-center justify-center rounded-lg border border-dashed border-border bg-card/60 text-muted-foreground">
            <span className="text-sm uppercase tracking-widest">foto da barbearia</span>
          </div>
          <div>
            <p className="eyebrow">Tradição desde 1994</p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Um lugar onde o homem <span className="text-gold">senta e relaxa</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              Três cadeiras, quatro barbeiros e mais de 30 anos de bairro. Cada atendimento começa
              com uma conversa rápida sobre o formato do rosto e a rotina do cliente — depois é
              tesoura, navalha e acabamento sem pressa.
            </p>
            <ul className="mt-7 space-y-3">
              {differentials.map((d) => (
                <li key={d} className="flex gap-3 text-sm text-foreground/80">
                  <Star className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-7">
              {[
                ["+30", "anos de casa"],
                ["12k", "cortes por ano"],
                ["4,9", "nota média"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-gold">{n}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="eyebrow">Nossos serviços</p>
            <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
              O que a gente <span className="text-gold">faz melhor</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.name} className="card-gold p-7">
                <s.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-lg font-semibold uppercase tracking-wide">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{s.text}</p>
                <p className="mt-5 font-[family-name:var(--font-display)] text-2xl text-gold">{s.price}</p>
                <a
                  href={WHATSAPP}
                  className="mt-5 inline-block font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-gold"
                >
                  Agendar &rsaquo;
                </a>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP} className="btn-outline-gold">
              Pedir horário agora
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="eyebrow">Galeria</p>
          <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
            Resultados <span className="text-gold">na cadeira</span>
          </h2>
        </div>
        <div className="mt-12 flex h-72 items-center justify-center rounded-lg border border-dashed border-border bg-card/60 text-muted-foreground">
          <span className="text-sm uppercase tracking-widest">foto da barbearia</span>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="eyebrow">Depoimentos</p>
            <h2 className="mt-4 text-3xl font-bold uppercase sm:text-4xl">
              Quem senta, <span className="text-gold">volta</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-gold p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-relaxed text-foreground/75">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-[family-name:var(--font-display)] uppercase tracking-wide text-gold">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contato" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contato</p>
            <h2 className="mt-4 text-3xl font-bold uppercase leading-tight sm:text-4xl">
              Garanta sua cadeira <span className="text-gold">esta semana</span>
            </h2>
            <p className="mt-5 max-w-md text-foreground/70">
              Agenda limitada a 3 cadeiras por horário. Chame no WhatsApp e confirme em menos de um
              minuto.
            </p>
            <div className="mt-9 space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" /> Rua das Navalhas, 128 — Vila Madalena, São Paulo/SP
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" /> (11) 99999-0000
              </p>
              <p className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-gold" /> @navalhadeouro
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" /> Ter a Sáb · 09h às 20h
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={WHATSAPP} className="btn-gold">
                Falar no WhatsApp
              </a>
              <a href="tel:+5511999990000" className="btn-outline-gold">
                Ligar agora
              </a>
            </div>
          </div>
          <div className="card-gold p-8">
            <h3 className="text-lg font-semibold uppercase tracking-wide">Pedido de agendamento</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Seu nome"
                className="w-full border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
              />
              <input
                placeholder="WhatsApp"
                className="w-full border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
              />
              <select className="w-full border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[var(--gold)]">
                {services.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder="Dia e horário de preferência"
                className="w-full border border-border bg-secondary px-4 py-3 text-sm outline-none focus:border-[var(--gold)]"
              />
              <button type="submit" className="btn-gold w-full">
                Enviar pedido
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Demonstração — formulário sem envio real.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Navalha de Ouro Barbearia — projeto fictício de demonstração.</p>
          <p>Vila Madalena · São Paulo/SP</p>
        </div>
      </footer>
    </div>
  );
}
