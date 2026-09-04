
import { useState,useEffect } from "react";
import { categories, products, formatPrice } from "./data/products";


const ANNOUNCEMENTS = [
  "Free shipping across India",
  "Cash on delivery available",
  "Use code WELCOME10 for 10% off your first order",
  "Handwoven, not power loom — every single piece",
];

function MotifDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rotate-45 bg-[#E35336]/60"
          style={{ opacity: i % 2 === 0 ? 1 : 0.4 }}
        />
      ))}
    </div>
  );
}

function CategoryTile({ name, origin, image, href = "#", tall = false }) {
  return (
    <a href={href} className="group block">
      <div
        className={`relative w-full overflow-hidden rounded-sm bg-[#e7ddd0] ${
          tall ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <img
          src={image}
          alt={`${name} saree`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 w-fit max-w-[85%] rounded-sm bg-[#E35336] px-3 py-1.5 font-['Fraunces'] text-sm leading-snug text-[#FAF3EC] shadow-sm">
          {name}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-[#3A2E27]/65">{origin}</p>
        <span className="mt-2 block h-px w-8 bg-[#E35336] transition-all duration-300 group-hover:w-14" />
      </div>
    </a>
  );
}

function ProductCard({ name, price, image, tag }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#e7ddd0]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-sm bg-[#E35336] px-2 py-1 text-xs font-medium text-[#FAF3EC]">
            {tag}
          </span>
        )}
      </div>
      <div className="mt-3">
        <h4 className="font-['Fraunces'] text-base text-[#3A2E27]">{name}</h4>
        <p className="mt-1 text-sm text-[#3A2E27]/70">{price}</p>
        <button
          type="button"
          className="mt-3 w-full rounded-sm bg-[#E35336] py-2 text-sm font-medium text-[#FAF3EC] transition-colors hover:bg-[#c8462e]"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
function WeaveStory({ name, region, description, image, reverse = false }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-0">
      <div
        className={`relative md:col-span-7 ${
          reverse ? "md:order-2 md:-ml-10" : "md:-mr-10"
        }`}
      >
        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#e7ddd0]">
          <img src={image} alt={`${name} weave detail`} className="h-full w-full object-cover" />
        </div>
        {/* Selvedge-style region tag, echoing the woven edge label on a real saree */}
        <div
          className={`absolute top-6 hidden md:flex ${reverse ? "-right-4" : "-left-4"}`}
        >
          <span
            className="bg-[#2F5D5A] px-2 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#FAF3EC]"
            style={{ writingMode: "vertical-rl" }}
          >
            {region}
          </span>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center md:col-span-5 ${
          reverse ? "md:order-1 md:items-end md:text-right md:pr-10" : "md:pl-10"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#E35336] md:hidden">{region}</p>
        <h3 className="mt-2 font-['Fraunces'] text-3xl text-[#3A2E27] md:text-4xl">{name}</h3>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#3A2E27]/80 first-letter:float-left first-letter:mr-2 first-letter:font-['Fraunces'] first-letter:text-5xl first-letter:leading-[0.8] first-letter:text-[#E35336]">
          {description}
        </p>
      </div>
    </div>
  );
}
// function WeaveStory({ name, description, image, reverse = false }) {
//   return (
//     <div
//       className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 ${
//         reverse ? "md:[&>*:first-child]:order-2" : ""
//       }`}
//     >
//       <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#e7ddd0]">
//         <img src={image} alt={`${name} weave detail`} className="h-full w-full object-cover" />
//       </div>
//       <div className="max-w-md">
//         <h3 className="font-['Fraunces'] text-2xl text-[#3A2E27] md:text-3xl">{name}</h3>
//         <p className="mt-4 text-[15px] leading-relaxed text-[#3A2E27]/80">{description}</p>
//       </div>
//     </div>
//   );
// }
function ImpactStat({ value, label, flip }) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className={`font-['Fraunces'] text-4xl text-[#FAF3EC] md:text-5xl ${flip ? "md:order-3" : "md:order-1"}`}>
        {value}
      </p>
      <span className="my-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#E35336] ring-4 ring-[#3A2E27] md:order-2" />
      <p
        className={`max-w-[9.5rem] text-[11px] uppercase tracking-[0.15em] text-[#FAF3EC]/60 ${
          flip ? "md:order-1 md:mb-1" : "md:order-3 md:mt-1"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export default function App() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
const [cartCount, setCartCount] = useState(0);
const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
 
  const featured = products.slice(0, 6);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF3EC] font-['Karla'] text-[#3A2E27]">
     
<div className="relative overflow-hidden bg-[#E35336] px-4 py-2.5 text-center text-sm text-[#FAF3EC]">
  <p key={announcementIndex} className="animate-[fadeIn_0.4s_ease-out]">
    {ANNOUNCEMENTS[announcementIndex]}
  </p>
</div>

      
      <header className="border-b border-[#3A2E27]/10">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
    <a href="#" className="flex items-center gap-2">
      <img src="/logo-f.jpg" alt="Fyunli Blossoms" className="h-10 w-10 rounded-full object-cover" />
      <span className="font-['Fraunces'] text-xl text-[#3A2E27]">Fyunli Blossoms</span>
    </a>
    <nav className="hidden gap-8 text-sm md:flex">
      <a href="#dhaniakhali" className="hover:text-[#E35336]">Dhaniakhali</a>
      <a href="#begumpuri" className="hover:text-[#E35336]">Begumpuri</a>
      <a href="#bhujodi" className="hover:text-[#E35336]">Kala Cotton Bhujodi</a>
      <a href="#baawanbuti" className="hover:text-[#E35336]">Baawan Buti</a>
    </nav>
    <div className="flex items-center gap-4">
  <button aria-label="Search" className="text-[#3A2E27]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  </button>

  <button aria-label="Account" className="text-[#3A2E27]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  </button>

  <button aria-label="Cart" className="relative text-[#3A2E27]">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M6 6L4 2H2" />
    </svg>
    {cartCount > 0 && (
      <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#E35336] text-[10px] font-medium text-[#FAF3EC]">
        {cartCount}
      </span>
    )}
  </button>
</div>
  </div>
</header>
     
      <section className="relative">
        <div className="aspect-[4/5] w-full overflow-hidden md:aspect-[16/9]">
       
          <img
            src="/hero-f.png"
            alt="Woman wearing a handwoven saree"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A2E27]/70 via-[#3A2E27]/10 to-transparent" />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-4 pb-10 md:px-8 md:pb-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="max-w-xl font-['Fraunces'] text-3xl leading-tight text-[#FAF3EC] md:text-5xl">
              Woven slowly, worn for years
            </h1>
            <p className="mt-3 max-w-md text-[#FAF3EC]/90">
              Handloom sarees from the weavers of Bengal, Kutch and Bihar — no two pieces alike.
            </p>
            <a
              href="#collection"
              className="mt-6 inline-block rounded-sm bg-[#E35336] px-6 py-3 text-sm font-medium text-[#FAF3EC] transition-colors hover:bg-[#c8462e]"
            >
              Explore the collection
            </a>
          </div>
        </div>
      </section>

     
      <section id="collection" className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
  <div>
    
    <h2 className="mt-3 max-w-lg font-['Fraunces'] text-4xl leading-[1.05] text-[#3A2E27] md:text-5xl">
      Four weaves,<br className="hidden md:block" /> four regions of India
    </h2>
  </div>
  <p className="max-w-sm text-[15px] leading-relaxed text-[#3A2E27]/70 md:text-right">
    Each saree belongs to specific weaving tradition carried from one region not a trend chased across all four
  </p>
</div>
       
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {categories.map((cat) => (
            <CategoryTile
              key={cat.slug}
              name={cat.name}
              origin={cat.origin}
              image={cat.detailImage}
              href={`#${cat.slug}`}
            />
          ))}
        </div>
      </section>

     
      <section className="bg-[#f3e9dd] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-['Fraunces'] text-2xl text-[#3A2E27] md:text-3xl">
              New arrivals
            </h2>
            <a href="#" className="text-sm text-[#2F5D5A] hover:text-[#E35336]">
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
            {featured.map((item) => (
              <ProductCard
                key={item.id}
                name={item.name}
                price={formatPrice(item.price)}
                image={item.image}
                tag={item.tag}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Weave stories */}
      {/* <section className="mx-auto max-w-6xl overflow-hidden px-4 py-16 md:px-8 md:py-24">
  <h2 className="font-['Fraunces'] text-2xl text-[#3A2E27] md:text-3xl">
    The craft behind each drape
  </h2>
  <MotifDivider className="my-8" />
  <div className="space-y-20 md:space-y-32">
    {categories.map((cat, i) => (
      <WeaveStory
        key={cat.slug}
        name={cat.name}
        region={cat.region}
        description={cat.description}
        image={cat.detailImage}
        reverse={i % 2 === 1}
      />
    ))}
  </div>
</section> */}
      
<section className="relative overflow-hidden bg-[#3A2E27] px-4 py-15 md:px-8 md:py-28">
  
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(45deg, #FAF3EC 0, #FAF3EC 1px, transparent 1px, transparent 14px)",
    }}
    aria-hidden="true"
  />

  <div className="relative mx-auto max-w-5xl">
    <p className="text-center font-['Fraunces'] text-xl italic text-[#FAF3EC]/80 md:text-2xl">
      Every thread accounted for
    </p>

    <div className="relative mt-10 md:mt-8">
      
      <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-[#FAF3EC]/15 md:block" />
      <div className="relative grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-y-0">
        <ImpactStat value="4" label="Weaving traditions" flip={false} />
        <ImpactStat value="100%" label="Handloom, no power loom" flip={true} />
        <ImpactStat value="3" label="States sourced from" flip={false} />
        <ImpactStat value="COD" label="Available across India" flip={true} />
      </div>
    </div>
  </div>
  
</section>
     
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="mb-10 font-['Fraunces'] text-2xl text-[#3A2E27] md:text-3xl">
          From women who wear these
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            "The Begumpuri cotton I ordered was even softer than I expected, and it held up through a full day at a wedding.",
            "I've never had a saree with this much character in the border. Every fold looks slightly different.",
            "Ordered the Kala Cotton one on COD — arrived well packed, exactly the indigo I saw in photos.",
          ].map((quote, i) => (
            <div key={i} className="border-l-2 border-[#E35336]/50 pl-5">
              <p className="text-[15px] leading-relaxed text-[#3A2E27]/85">&ldquo;{quote}&rdquo;</p>
              <p className="mt-3 text-sm text-[#3A2E27]/60">— Riya , Delhi</p>
            </div>
          ))}
        </div>
      
      </section>

      
<section className="relative overflow-hidden bg-[#f3e9dd] px-4 py-20 md:px-8 md:py-28">
 
  <span
    className="pointer-events-none absolute -left-4 top-6 select-none font-['Fraunces'] text-[220px] leading-none text-[#E35336]/[0.06] md:text-[320px]"
    aria-hidden="true"
  >
    “
  </span>

  <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 md:grid-cols-[300px_1fr]">
    <div className="relative mx-auto w-full max-w-[280px] md:mx-0">
     
      <div className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-[#2F5D5A]/40 md:-bottom-5 md:-right-5" />
      <div className="relative aspect-[4/5] w-full -rotate-1 overflow-hidden rounded-sm shadow-[0_18px_40px_-12px_rgba(58,46,39,0.35)]">
        <img
          src="/founder-f.jpg"
          alt="Founder portrait"
          className="h-full w-full object-cover"
        />
        
        <div className="absolute inset-0 bg-[#E35336] mix-blend-multiply opacity-[0.08]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#3A2E27] mix-blend-multiply opacity-[0.06]" aria-hidden="true" />
      </div>
    </div>

    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-[#2F5D5A]">A note from the founder</p>
      <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-[#3A2E27]/85">
        I started Fyunli Blossoms because I kept meeting the same weavers whose
        work never made it past their own village. Every saree here comes from a
        handloom, not a factory — Dhaniakhali and Begumpuri cotton from Bengal,
        Kala Cotton from Kutch, Baawan Buti from Bihar. Authentic, to me, just
        means I can tell you exactly whose hands made what you're wearing.
      </p>
      <p className="mt-5 font-['Fraunces'] text-xl italic text-[#3A2E27]">— Dr. Vijji</p>
    </div>
  </div>
</section>
      
       <section className="relative">
      <div className="aspect-[3/4] w-full overflow-hidden md:aspect-[21/9]">
        
        <img
          src="/hero-f.png"
          alt="Follow Fyunli Blossoms on Instagram"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3A2E27]/55" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#FAF3EC]/80">
          @fyunliblossoms
        </p>
        <h2 className="mt-4 max-w-md font-['Fraunces'] text-3xl text-[#FAF3EC] md:text-4xl">
          Follow the loom, not just the shop
        </h2>
        <p className="mt-3 max-w-sm text-[15px] text-[#FAF3EC]/85">
          New weaves, behind-the-scenes from our artisan partners, and the odd
          styling idea — posted before it ever reaches the site.
        </p>
        <a
          href="https://instagram.com/fyunliblossoms"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-sm bg-[#E35336] px-6 py-3 text-sm font-medium text-[#FAF3EC] transition-colors hover:bg-[#c8462e]"
        >
          Follow on Instagram
        </a>
      </div>
    </section>

     
      <section className="mx-auto max-w-6xl px-4 py-16 text-center md:px-8">
        <h2 className="font-['Fraunces'] text-2xl text-[#3A2E27] md:text-3xl">
          Hear about new drops first
        </h2>
        <p className="mt-2 text-[#3A2E27]/70">Get 10% off your first order.</p>
        {subscribed ? (
          <p className="mt-6 text-[#2F5D5A]">You're on the list — thank you.</p>
        ) : (
          <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-md gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 rounded-sm border border-[#3A2E27]/20 bg-white px-4 py-2.5 text-sm text-[#3A2E27] placeholder:text-[#3A2E27]/40 focus:outline-none focus:ring-2 focus:ring-[#2F5D5A]"
            />
            <button
              type="submit"
              className="rounded-sm bg-[#E35336] px-5 py-2.5 text-sm font-medium text-[#FAF3EC] transition-colors hover:bg-[#c8462e]"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>

      
      <footer className="border-t border-[#3A2E27]/10 bg-[#3A2E27] px-4 py-12 text-[#FAF3EC]/85 md:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-sm md:grid-cols-4">
          <div>
            <h3 className="font-['Fraunces'] text-lg text-[#FAF3EC]">Fyunli Blossoms</h3>
            <p className="mt-3 text-[#FAF3EC]/70">Handloom sarees, woven by hand across India.</p>
          </div>
          <div>
            <p className="mb-3 text-[#FAF3EC]">Shop</p>
            <ul className="space-y-2 text-[#FAF3EC]/70">
              <li><a href="#dhaniakhali" className="hover:text-[#FAF3EC]">Dhaniakhali</a></li>
              <li><a href="#begumpuri" className="hover:text-[#FAF3EC]">Begumpuri</a></li>
              <li><a href="#bhujodi" className="hover:text-[#FAF3EC]">Kala Cotton Bhujodi</a></li>
              <li><a href="#baawanbuti" className="hover:text-[#FAF3EC]">Baawan Buti</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[#FAF3EC]">Support</p>
            <ul className="space-y-2 text-[#FAF3EC]/70">
              <li><a href="#" className="hover:text-[#FAF3EC]">Shipping & returns</a></li>
              <li><a href="#" className="hover:text-[#FAF3EC]">Privacy policy</a></li>
              <li><a href="#" className="hover:text-[#FAF3EC]">Contact us</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-[#FAF3EC]">Reach us</p>
            <ul className="space-y-2 text-[#FAF3EC]/70">
              <li>hello@fyunliblossoms.com</li>
              <li>+91 00000 00000</li>
              <li>
                <a href="https://instagram.com/fyunliblossoms" className="hover:text-[#FAF3EC]">
                  @fyunliblossoms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl text-xs text-[#FAF3EC]/50">
          © {new Date().getFullYear()} Fyunli Blossoms. All rights reserved.
        </p>
      </footer>
    </div>
  );
}