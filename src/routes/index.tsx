import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Scissors,
  Sparkles,
  Flame,
  Brush,
  Star,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  Menu,
  X,
  Zap,
} from "lucide-react";

import heroImg from "@/assets/bb-hero.jpg";
import interiorImg from "@/assets/bb-interior.jpg";
import fadeImg from "@/assets/bb-fade.jpg";
import razorImg from "@/assets/bb-razor.jpg";
import toolsImg from "@/assets/bb-tools.jpg";
import chairImg from "@/assets/bb-chair.jpg";
import detailImg from "@/assets/bb-detail.jpg";
import storeImg from "@/assets/bb-store.jpg";
import ctaImg from "@/assets/bb-cta.jpg";
import team1 from "@/assets/bb-team-1.jpg";
import team2 from "@/assets/bb-team-2.jpg";
import team3 from "@/assets/bb-team-3.jpg";

/**
 * DEMONSTRAÇÃO FICTÍCIA.
 * Black Barber é uma barbearia inventada. Nome, endereço, telefone, preços,
 * barbeiros e avaliações abaixo são dados fictícios criados apenas para
 * apresentação comercial. Nenhuma empresa real é representada.
 */

const WHATS_NUMERO = "(98) 99999-9999";
const WHATSAPP =
  "https://wa.me/5598999999999?text=" +
  encodeURIComponent("Olá! Gostaria de agendar um horário na Black Barber.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Black Barber | Barbearia Moderna — Seu Estilo, Seu Corte" },
      {
        name: "description",
        content:
          "Black Barber: barbearia moderna com corte, barba, degradê e navalha. Agende seu horário pelo WhatsApp. Demonstração fictícia.",
      },
      { property: "og:title", content: "Black Barber | Seu Estilo. Seu Corte." },
      {
        property: "og:description",
        content:
          "Corte, barba, degradê e navalha em um ambiente moderno e descontraído. Agende pelo WhatsApp.",
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
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

const faixa = [
  { icon: Scissors, label: "Corte" },
  { icon: Flame, label: "Barba" },
  { icon: Zap, label: "Degradê" },
  { icon: Brush, label: "Navalha" },
  { icon: Sparkles, label: "Acabamento" },
];

const servicos = [
  {
    nome: "Corte Masculino",
    preco: "R$35",
    texto: "Corte na tesoura e máquina com finalização caprichada e styling na cadeira.",
    img: fadeImg,
  },
  {
    nome: "Corte + Barba",
    preco: "R$55",
    texto: "O combo da casa: corte completo mais barba desenhada com toalha quente.",
    img: razorImg,
  },
  {
    nome: "Degradê",
    preco: "R$40",
    texto: "Fade limpo do zero ao topo, transição suave e acabamento na navalha.",
    img: detailImg,
  },
  {
    nome: "Barba",
    preco: "R$25",
    texto: "Alinhamento, navalha, óleo e balm para uma barba desenhada sem irritação.",
    img: toolsImg,
  },
  {
    nome: "Corte + Sobrancelha",
    preco: "R$45",
    texto: "Corte completo com design de sobrancelha masculina no acabamento certo.",
    img: chairImg,
  },
];

const numeros = [
  ["5+", "anos de casa"],
  ["2.000+", "clientes atendidos"],
  ["4,9", "avaliação média"],
];

const time = [
  { nome: "Lucas", papel: "Especialista em degradê", img: team1 },
  { nome: "Rafael", papel: "Especialista em barba", img: team2 },
  { nome: "Pedro", papel: "Especialista em cortes clássicos", img: team3 },
];

const avaliacoes = [
  { nome: "João", texto: "Ambiente muito bom e o corte ficou exatamente como eu queria." },
  { nome: "Gabriel", texto: "Atendimento excelente. Já marquei meu próximo horário." },
  { nome: "Lucas", texto: "Os caras mandam muito bem no degradê." },
];

const galeria = [
  { src: interiorImg, alt: "Interior da barbearia com iluminação vermelha", span: "sm:col-span-2 sm:row-span-2" },
  { src: fadeImg, alt: "Degradê masculino finalizado", span: "" },
  { src: razorImg, alt: "Barba feita na navalha", span: "" },
  { src: toolsImg, alt: "Ferramentas de barbeiro", span: "" },
  { src: chairImg, alt: "Cliente na cadeira de barbeiro", span: "sm:row-span-2" },
  { src: detailImg, alt: "Acabamento da nuca com navalha", span: "sm:col-span-2" },
  { src: storeImg, alt: "Fachada da barbearia à noite", span: "" },
  { src: heroImg, alt: "Barbeiro trabalhando no corte", span: "sm:col-span-2" },
];

function Estrelas() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current text-red-brand" />
      ))}
    </div>
  );
}

function Index() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-ink/85 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:flex lg:justify-between">
          <a href="#inicio" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center bg-[var(--gradient-red)] text-foreground">
              <Scissors className="h-4 w-4" />
            </span>
            <span className="truncate font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.18em] sm:text-xl">
              Black<span className="text-red-brand"> Barber</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-red-brand"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red hidden sm:inline-flex">
              Agendar
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setAberto((v) => !v)}
              className="grid h-11 w-11 shrink-0 place-items-center border border-border text-foreground lg:hidden"
            >
              {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {aberto && (
          <nav className="border-t border-border bg-ink px-4 py-4 lg:hidden">
            <ul className="space-y-1">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setAberto(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-red mt-3 w-full"
              onClick={() => setAberto(false)}
            >
              Agendar horário
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative isolate flex min-h-[92svh] items-end pb-16 pt-32 sm:pb-24">
        <img
          src={heroImg}
          alt="Barbeiro trabalhando no corte de um cliente em ambiente escuro"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="eyebrow">Barbearia · Demonstração fictícia</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.4rem,11vw,7rem)] uppercase leading-[0.92]">
            Black <span className="text-red-brand">Barber</span>
          </h1>
          <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.1rem,4.5vw,2.1rem)] uppercase tracking-[0.08em] text-foreground/90">
            Seu estilo. Seu corte.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
            “Uma barbearia moderna para quem valoriza um bom corte e um bom atendimento.”
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red">
              <MessageCircle className="h-4 w-4" /> Agendar horário
            </a>
            <a href="#sobre" className="btn-ghost-light">
              Conhecer a barbearia
            </a>
          </div>
        </div>
      </section>

      {/* Faixa de serviços */}
      <section className="border-y border-border bg-navy-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:grid-cols-5">
          {faixa.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-3 text-center">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-ink">
                <f.icon className="h-6 w-6 text-red-brand" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.18em]">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="zoom-frame col-span-2 h-52 sm:h-64">
              <img src={interiorImg} alt="Salão da Black Barber" loading="lazy" width={1400} height={1000} />
            </div>
            <div className="zoom-frame h-44 sm:h-56">
              <img src={toolsImg} alt="Ferramentas do barbeiro" loading="lazy" width={1200} height={900} />
            </div>
            <div className="zoom-frame h-44 sm:h-56">
              <img src={razorImg} alt="Barba na navalha" loading="lazy" width={1200} height={900} />
            </div>
          </div>

          <div className="min-w-0">
            <p className="eyebrow">Sobre a casa</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
              Mais que <span className="text-red-brand">um corte</span>
            </h2>
            <p className="mt-5 text-foreground/75">
              A Black Barber une a tradição das barbearias clássicas com um ambiente moderno e
              descontraído. Nosso objetivo é fazer com que cada cliente saia daqui se sentindo bem
              com seu estilo.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-8">
              {numeros.map(([n, l]) => (
                <div key={l} className="min-w-0">
                  <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,6vw,2.6rem)] leading-none text-red-brand">
                    {n}
                  </p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              * Números fictícios, usados apenas nesta demonstração.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red mt-7">
              Quero agendar
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-navy-deep py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
              O que a gente <span className="text-red-brand">faz melhor</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <article key={s.nome} className="card-dark flex flex-col overflow-hidden">
                <div className="zoom-frame h-44">
                  <img src={s.img} alt={s.nome} loading="lazy" width={1200} height={900} />
                  <span className="absolute right-3 top-3 bg-[var(--gradient-red)] px-3 py-1 font-[family-name:var(--font-display)] text-lg leading-none text-foreground">
                    {s.preco}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl uppercase tracking-wide">
                    {s.nome}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">{s.texto}</p>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red mt-6 w-full">
                    Agendar
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            * Serviços e preços fictícios, criados apenas para esta demonstração.
          </p>
        </div>
      </section>

      {/* Imagem de destaque */}
      <section className="relative isolate flex min-h-[60svh] items-center py-20">
        <img
          src={ctaImg}
          alt="Barbeiro finalizando um corte sob luz vermelha"
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,4.5rem)] uppercase leading-[0.95]">
            Seu próximo corte <span className="text-red-brand">começa aqui.</span>
          </h2>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red mt-8">
            Agendar horário
          </a>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Galeria</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
            Resultados <span className="text-red-brand">na cadeira</span>
          </h2>
        </div>
        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[170px] sm:grid-cols-4 sm:gap-4">
          {galeria.map((g, i) => (
            <figure key={i} className={`zoom-frame ${g.span}`}>
              <img src={g.src} alt={g.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* Time */}
      <section className="bg-navy-deep py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Nosso time</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
              Quem está <span className="text-red-brand">na tesoura</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {time.map((b) => (
              <article key={b.nome} className="zoom-frame h-[380px] border border-border sm:h-[420px]">
                <img src={b.img} alt={`${b.nome}, barbeiro da Black Barber`} loading="lazy" width={900} height={1100} />
                <div
                  className="absolute inset-x-0 bottom-0 p-6"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-2xl uppercase">{b.nome}</h3>
                  <p className="mt-1 text-sm text-foreground/75">{b.papel}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            * Barbeiros fictícios, personagens desta demonstração.
          </p>
        </div>
      </section>

      {/* Avaliações */}
      <section id="avaliacoes" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">Avaliações</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
            Quem senta, <span className="text-red-brand">volta</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {avaliacoes.map((a) => (
            <figure key={a.nome} className="card-dark p-7">
              <Estrelas />
              <blockquote className="mt-5 text-sm leading-relaxed text-foreground/80">
                “{a.texto}”
              </blockquote>
              <figcaption className="mt-6 font-[family-name:var(--font-display)] uppercase tracking-wide text-red-brand">
                — {a.nome}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          * Avaliações fictícias, criadas apenas para esta demonstração.
        </p>
      </section>

      {/* CTA */}
      <section className="relative isolate flex min-h-[55svh] items-center py-20">
        <img
          src={storeImg}
          alt="Fachada da barbearia à noite"
          loading="lazy"
          width={1400}
          height={1000}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
          <h2 className="mx-auto max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2rem,7.5vw,4rem)] uppercase leading-[0.95]">
            Pronto para <span className="text-red-brand">renovar o visual?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-foreground/80">
            Agende seu horário e venha conhecer a Black Barber.
          </p>
          <div className="mt-8 flex justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red">
              <MessageCircle className="h-4 w-4" /> Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Localização / Contato */}
      <section id="contato" className="bg-navy-deep py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow">Localização</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,7vw,3.4rem)] uppercase leading-[0.95]">
              Onde a gente <span className="text-red-brand">está</span>
            </h2>
            <div className="mt-8 space-y-5 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <span className="min-w-0">Rua Exemplo, 123 — Centro</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <span className="min-w-0">{WHATS_NUMERO}</span>
              </p>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <span className="min-w-0">Segunda a sábado — 09h às 20h</span>
              </p>
              <p className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-red-brand" />
                <span className="min-w-0">@blackbarber.demo</span>
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-red">
                Falar no WhatsApp
              </a>
              <a href="tel:+5598999999999" className="btn-ghost-light">
                Ligar agora
              </a>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              * Endereço e telefone fictícios desta demonstração.
            </p>
          </div>

          {/* Mapa fictício, apenas elemento visual */}
          <div className="relative h-72 overflow-hidden border border-border bg-ink sm:h-full sm:min-h-[340px]">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.29 0.025 262) 1px, transparent 1px), linear-gradient(90deg, oklch(0.29 0.025 262) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div
              className="absolute -left-10 top-1/3 h-8 w-[140%] rotate-[-8deg]"
              style={{ background: "oklch(0.24 0.045 260)" }}
            />
            <div
              className="absolute left-1/3 top-0 h-[140%] w-6 rotate-[10deg]"
              style={{ background: "oklch(0.24 0.045 260)" }}
            />
            <div className="absolute inset-0 grid place-items-center px-6 text-center">
              <div>
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-red)]">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="mt-4 font-[family-name:var(--font-display)] text-xl uppercase tracking-wide">
                  Black Barber
                </p>
                <p className="text-sm text-foreground/70">Rua Exemplo, 123 — Centro</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Mapa ilustrativo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-[family-name:var(--font-display)] text-base uppercase tracking-[0.18em] text-foreground">
            Black<span className="text-red-brand"> Barber</span>
          </p>
          <p>© 2026 Black Barber — barbearia fictícia criada para demonstração.</p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--gradient-red)] shadow-[var(--shadow-red)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
