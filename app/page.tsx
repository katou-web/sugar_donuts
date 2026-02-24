const band = {
  name: "BAND NAME",
  tagline: "New EP “TITLE” Out Now",
  heroNote: "Tokyo / Sendai / Anywhere",
  links: {
    spotify: "#",
    appleMusic: "#",
    youtube: "#",
    instagram: "#",
    x: "#",
    tiktok: "#",
    contactEmail: "booking@example.com"
  },
  news: [
    { date: "2026-03-15", title: "New single “XXXXX” released", href: "#" },
    { date: "2026-02-28", title: "MV公開：“XXXXX”", href: "#" }
  ],
  lives: [
    { date: "2026-03-20", place: "Sendai — Live House XYZ", note: "w/ ABC", href: "#" },
    { date: "2026-04-05", place: "Tokyo — Club 123", note: "One-man", href: "#" }
  ],
  videos: [
    { title: "XXXXX (Official Music Video)", youtubeId: "dQw4w9WgXcQ" }
  ],
  bio: [
    "BAND NAMEは〇〇年結成の〇〇（ジャンル）バンド。",
    "鋭さと余白、衝動と静けさの同居を軸に制作・ライブ活動を展開。"
  ]
};

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 id={id} className="text-xl md:text-2xl font-semibold tracking-wide">
        {children}
      </h2>
      <div className="h-px flex-1 bg-white/15" aria-hidden />
    </div>
  );
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 md:px-8 py-10 md:py-14">
      {/* Header */}
      <header className="flex items-center justify-between gap-4">
        <a href="#" className="font-semibold tracking-widest">
          {band.name}
        </a>
        <nav className="hidden md:flex items-center gap-5 text-sm text-white/80">
          <a className="hover:text-white" href="#news">NEWS</a>
          <a className="hover:text-white" href="#live">LIVE</a>
          <a className="hover:text-white" href="#music">MUSIC</a>
          <a className="hover:text-white" href="#video">VIDEO</a>
          <a className="hover:text-white" href="#bio">BIO</a>
          <a className="hover:text-white" href="#contact">CONTACT</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mt-12 md:mt-16">
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">
          Official Website
        </p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
          {band.name}
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
          {band.tagline} <span className="text-white/50">— {band.heroNote}</span>
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          <ButtonLink href={band.links.spotify}>Spotify</ButtonLink>
          <ButtonLink href={band.links.appleMusic}>Apple Music</ButtonLink>
          <ButtonLink href={band.links.youtube}>YouTube</ButtonLink>
          <ButtonLink href={band.links.instagram}>Instagram</ButtonLink>
          <ButtonLink href={band.links.x}>X</ButtonLink>
        </div>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <p className="text-sm text-white/60">Latest</p>
              <p className="mt-1 text-lg md:text-xl font-medium">
                {band.news[0]?.title ?? "Update soon"}
              </p>
              <p className="mt-2 text-sm text-white/60">
                {band.news[0]?.date}
              </p>
            </div>
            <a
              href="#news"
              className="text-sm underline underline-offset-4 text-white/80 hover:text-white"
            >
              View all news
            </a>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="news">NEWS</SectionTitle>
        <ul className="mt-6 space-y-3">
          {band.news.map((n) => (
            <li key={n.date + n.title} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <a href={n.href} className="block hover:opacity-90">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <p className="text-sm text-white/60">{n.date}</p>
                  <p className="text-base">{n.title}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Live */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="live">LIVE</SectionTitle>
        <ul className="mt-6 space-y-3">
          {band.lives.map((l) => (
            <li key={l.date + l.place} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <a href={l.href} className="block hover:opacity-90">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <p className="text-sm text-white/60">{l.date}</p>
                    <p className="text-base">{l.place}</p>
                  </div>
                  <p className="text-sm text-white/60">{l.note}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Music */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="music">MUSIC</SectionTitle>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Streaming</p>
            <p className="mt-2 text-lg font-medium">Listen now</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <ButtonLink href={band.links.spotify}>Spotify</ButtonLink>
              <ButtonLink href={band.links.appleMusic}>Apple Music</ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Merch / CD</p>
            <p className="mt-2 text-lg font-medium">Online store</p>
            <div className="mt-4">
              <ButtonLink href="#">Store</ButtonLink>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-white/60">Press Kit</p>
            <p className="mt-2 text-lg font-medium">Photos & logo</p>
            <div className="mt-4">
              <ButtonLink href="#">Download</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="video">VIDEO</SectionTitle>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {band.videos.map((v) => (
            <div key={v.youtubeId} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-3 text-sm text-white/80">{v.title}</p>
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="bio">BIO</SectionTitle>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <p className="text-sm text-white/60">Profile</p>
              <p className="mt-2 text-lg font-medium">{band.name}</p>
            </div>
            <div className="md:col-span-2 space-y-3 text-white/80 leading-relaxed">
              {band.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-14 md:mt-16">
        <SectionTitle id="contact">CONTACT / BOOKING</SectionTitle>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <p className="text-white/80">
            出演依頼・取材・コラボ等はこちらへ：
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              className="text-base underline underline-offset-4 hover:opacity-90"
              href={`mailto:${band.links.contactEmail}`}
            >
              {band.links.contactEmail}
            </a>
            <span className="text-white/40">/</span>
            <ButtonLink href="#">Contact Form</ButtonLink>
          </div>
          <p className="mt-4 text-sm text-white/60">
            ※返信に数日いただく場合があります。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 md:mt-20 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p>© {new Date().getFullYear()} {band.name}. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          <a className="hover:text-white" href={band.links.instagram}>Instagram</a>
          <a className="hover:text-white" href={band.links.x}>X</a>
          <a className="hover:text-white" href={band.links.youtube}>YouTube</a>
        </div>
      </footer>
    </main>
  );
}
