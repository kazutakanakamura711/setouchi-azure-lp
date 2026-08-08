import { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'STAY', href: '#stay' },
  { label: 'DINING', href: '#dining' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SPA', href: '#spa' },
  { label: 'ACCESS', href: '#access' },
]

const rooms = [
  {
    number: '01',
    name: 'AZURE SUITE',
    image: '/images/azure-suite.avif',
    alt: '海を望む窓辺に立つ着物姿の女性',
    details: ['100㎡', 'Private Terrace', 'Ocean View'],
    featured: true,
  },
  {
    number: '02',
    name: 'TERRACE SUITE',
    image: '/images/terrace-suite.avif',
    alt: 'ホテルの回廊から望む瀬戸内の海辺',
    details: ['75㎡', 'Private Bath', 'Ocean View'],
  },
  {
    number: '03',
    name: 'DELUXE OCEAN',
    image: '/images/deluxe-ocean.avif',
    alt: '客室の窓辺から夕暮れの海を眺める人',
    details: ['55㎡', 'Ocean View'],
  },
]

const experiences = [
  {
    number: '01',
    name: 'PRIVATE CRUISE',
    image: '/images/private-cruise.avif',
    alt: '夕暮れの穏やかな海を進む白いボート',
    description: '夕暮れの瀬戸内海を巡る\n宿泊者限定のプライベートクルーズ。',
  },
  {
    number: '02',
    name: 'ISLAND JOURNEY',
    image: '/images/island-journey.avif',
    alt: '山々に囲まれた静かな瀬戸内海',
    description: '瀬戸内の島々を巡り、\n文化・建築・自然を楽しむ旅。',
  },
  {
    number: '03',
    name: 'MORNING YOGA',
    image: '/images/morning-yoga.avif',
    alt: '朝日の海辺でヨガをする人',
    description: '朝日と海を眺めながら行う\nテラスでのモーニングヨガ。',
  },
]

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand${compact ? ' brand--compact' : ''}`} href="#top" aria-label="SETOUCHI AZURE トップへ">
      <span>SETOUCHI</span>
      <strong>AZURE</strong>
    </a>
  )
}

function TextLink({ children, href }: { children: string; href: string }) {
  return (
    <a className="text-link" href={href}>
      <span>{children}</span>
      <span className="text-link__line" aria-hidden="true" />
    </a>
  )
}

function SectionIntro({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="section-intro reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{children}</h2>
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const background = [document.querySelector('main'), document.querySelector('footer')]
      .filter((element): element is HTMLElement => element instanceof HTMLElement)
    background.forEach((element) => element.setAttribute('inert', ''))

    const navLinks = Array.from(
      mobileNavRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [],
    )
    const focusable = [menuButtonRef.current, ...navLinks]
      .filter((element): element is HTMLElement => element instanceof HTMLElement)
    const focusFrame = window.requestAnimationFrame(() => navLinks[0]?.focus())

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        return
      }

      if (event.key !== 'Tab' || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.removeEventListener('keydown', onKeyDown)
      background.forEach((element) => element.removeAttribute('inert'))
      menuButtonRef.current?.focus()
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled || menuOpen ? ' site-header--solid' : ''}`}>
      <BrandMark compact />
      <nav className="desktop-nav" aria-label="メインナビゲーション">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <a className="header-booking" href="#booking">BOOK NOW</a>
      </nav>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? 'CLOSE' : 'MENU'}
      </button>
      <nav
        ref={mobileNavRef}
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        aria-label="モバイルナビゲーション"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            <span>0{index + 1}</span>{item.label}
          </a>
        ))}
        <a className="mobile-booking" href="#booking" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>BOOK NOW</a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="/images/hero.avif"
        alt="夕暮れの瀬戸内海と島々"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="hero__eyebrow">SETOUCHI AZURE</p>
        <h1 id="hero-title">瀬戸内の静けさに、<br />泊まる。</h1>
        <p className="hero__copy">A private retreat surrounded by sea, light, and silence.</p>
      </div>
      <a className="scroll-cue" href="#concept">
        <span>SCROLL</span>
        <span className="scroll-cue__line" aria-hidden="true" />
      </a>
    </section>
  )
}

function Concept() {
  return (
    <section className="concept section-shell" id="concept">
      <div className="concept__text reveal">
        <p className="eyebrow">THE ART OF SILENCE</p>
        <h2>何もしない時間が、<br />いちばん贅沢になる。</h2>
        <p className="body-copy">
          穏やかな瀬戸内海。<br />
          ゆっくりと移ろう光。<br />
          土地の恵みを味わう料理。
        </p>
        <p className="body-copy">
          SETOUCHI AZUREは、<br />
          日常から少し離れ、<br />
          本来の時間を取り戻すための場所です。
        </p>
      </div>
      <figure className="concept__figure image-reveal reveal">
        <img src="/images/concept.avif" alt="島々が浮かぶ静かな瀬戸内海" width="900" height="1200" loading="lazy" />
      </figure>
    </section>
  )
}

function Stay() {
  return (
    <section className="stay section-shell" id="stay">
      <SectionIntro eyebrow="STAY">すべての客室から、<br />瀬戸内海を。</SectionIntro>
      <div className="rooms">
        {rooms.map((room) => (
          <article className={`room reveal${room.featured ? ' room--featured' : ''}`} key={room.name}>
            <a className="room__image image-hover" href="#booking" aria-label={`${room.name}の予約へ`}>
              <img src={room.image} alt={room.alt} width={room.featured ? 1200 : 900} height={room.featured ? 800 : 1200} loading="lazy" />
            </a>
            <div className="room__meta">
              <p className="item-number">{room.number}</p>
              <div>
                <h3>{room.name}</h3>
                <p>{room.details.join('　')}</p>
                <TextLink href="#booking">VIEW ROOM</TextLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Dining() {
  return (
    <section className="dining" id="dining">
      <div className="dining__image image-reveal reveal">
        <img src="/images/dining.avif" alt="瀬戸内の魚介と旬菜を使った会席料理" width="900" height="1100" loading="lazy" />
      </div>
      <div className="dining__content reveal">
        <p className="eyebrow">DINING</p>
        <h2>瀬戸内を、<br />一皿の中に。</h2>
        <p className="body-copy">Executive Chefが、<br />その日の海と畑から届いた食材をもとに<br />一皿ずつ仕立てます。</p>
        <p className="body-copy">季節と土地を感じる、<br />ここでしか味わえないディナーを。</p>
        <div className="dining__hours">
          <span>RESTAURANT</span>
          <span>DINNER 18:00 – 22:00</span>
        </div>
        <TextLink href="#booking">VIEW DINING</TextLink>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience section-shell" id="experience">
      <p className="eyebrow reveal">EXPERIENCE</p>
      <div className="experience__list">
        {experiences.map((item) => (
          <article className="experience-item reveal" key={item.name}>
            <div className="experience-item__image image-hover">
              <img src={item.image} alt={item.alt} width="900" height="600" loading="lazy" />
            </div>
            <div className="experience-item__copy">
              <p className="item-number">{item.number}</p>
              <h3>{item.name}</h3>
              <p>{item.description.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Spa() {
  return (
    <section className="spa" id="spa">
      <img className="spa__backdrop" src="/images/spa-wide.avif" alt="" width="1600" height="900" loading="lazy" />
      <div className="spa__shade" />
      <div className="spa__grid section-shell">
        <figure className="spa__detail image-reveal reveal">
          <img src="/images/spa-detail.avif" alt="静かな水面に浮かぶ一艘の舟" width="800" height="1100" loading="lazy" />
        </figure>
        <div className="spa__content reveal">
          <p className="eyebrow">SPA</p>
          <h2>海に身をゆだねるような、<br />静かな時間。</h2>
          <h3>Ocean View Spa</h3>
          <p className="body-copy">海を眺めながら受ける<br />オリジナルトリートメント。</p>
          <TextLink href="#booking">VIEW SPA</TextLink>
        </div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section className="location section-shell" id="access">
      <div className="location__heading reveal">
        <p className="eyebrow">LOCATION</p>
        <h2>Setouchi,<br />Japan.</h2>
      </div>
      <figure className="location__image image-reveal reveal">
        <img src="/images/location.avif" alt="木々と海に沿って続く瀬戸内の散歩道" width="1000" height="750" loading="lazy" />
      </figure>
      <div className="location__details reveal">
        <p className="body-copy">瀬戸内海の穏やかな景色に<br />囲まれた場所。</p>
        <dl>
          <div><dt>松山空港から</dt><dd>車で約45分</dd></div>
          <div><dt>JR松山駅から</dt><dd>車で約35分</dd></div>
          <div><dt>専用送迎</dt><dd>サービスあり</dd></div>
        </dl>
      </div>
    </section>
  )
}

function Booking() {
  return (
    <section className="booking" id="booking">
      <img src="/images/booking.avif" alt="夕暮れの瀬戸内海に浮かぶ船" width="1600" height="900" loading="lazy" />
      <div className="booking__shade" />
      <div className="booking__content reveal">
        <p className="eyebrow">A JOURNEY INTO STILLNESS</p>
        <h2>ここでしか流れない時間を。</h2>
        <a className="booking__button" href="#contact">BOOK YOUR STAY</a>
        <a className="booking__contact" href="#contact">CONTACT US</a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <BrandMark />
        <nav className="footer__nav" aria-label="フッターナビゲーション">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="footer__social">
          <div><span>Instagram</span><span>Facebook</span></div>
          <div><span>Privacy Policy</span><span>Terms</span></div>
        </div>
      </div>
      <p className="footer__copyright">© SETOUCHI AZURE</p>
    </footer>
  )
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Stay />
        <Dining />
        <Experience />
        <Spa />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  )
}

export default App
