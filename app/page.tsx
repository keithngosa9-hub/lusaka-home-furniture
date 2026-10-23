"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Replace this URL with the exact Facebook Page URL for Lusaka Home Furniture.
const facebookPageUrl = "https://www.facebook.com/";

const products = [
  {
    name: "Modern Sofa",
    category: "Living Room",
    price: "K4,500",
    image: "/images/sofa.jpg.webp",
    tag: "Best Seller",
    description: "A modern, comfortable sofa designed to bring style and everyday comfort into your living room.",
    availability: "Available",
  },
  {
    name: "Cream Bedroom Set",
    category: "Bedroom",
    price: "K8,500",
    image: "/images/bedroom-cream.png",
    tag: "Popular",
    description: "A coordinated cream bedroom set for a calm, polished and welcoming space.",
    availability: "Available",
  },
  {
    name: "Classic Wardrobe",
    category: "Storage",
    price: "K3,800",
    image: "/images/classic-wardrobe.png",
    tag: "Classic",
    description: "A practical wardrobe with a timeless look and useful everyday storage.",
    availability: "Available",
  },
  {
    name: "Classic Wooden Bed",
    category: "Bedroom",
    price: "K5,200",
    image: "/images/classic-wooden-bed.png",
    tag: "Timeless",
    description: "A sturdy wooden bed with a classic design that suits a range of bedroom styles.",
    availability: "Available",
  },
  {
    name: "Dark Wood Wardrobe",
    category: "Storage",
    price: "K4,200",
    image: "/images/dark-wood-wardrobe.png",
    tag: "Elegant",
    description: "A dark wood-finish wardrobe that adds a warm, refined touch to your bedroom.",
    availability: "Available",
  },
  {
    name: "Dining Room Art Set",
    category: "Dining Room",
    price: "K6,500",
    image: "/images/dining-room-art.png",
    tag: "Featured",
    description: "A coordinated dining-room furniture look designed to make family meals feel special.",
    availability: "Available",
  },
  {
    name: "Classic Dining Set",
    category: "Dining Room",
    price: "K5,800",
    image: "/images/dining-set-classic.png",
    tag: "Classic",
    description: "A traditional dining set for comfortable meals and gatherings with family and friends.",
    availability: "Available",
  },
  {
    name: "Modern Dining Set",
    category: "Dining Room",
    price: "K7,200",
    image: "/images/dining-set-modern.png",
    tag: "Modern",
    description: "A contemporary dining set with clean lines for a fresh, modern home.",
    availability: "Available",
  },
  {
    name: "Luxury Lounge",
    category: "Living Room",
    price: "K6,800",
    image: "/images/dining.jpg",
    tag: "Popular",
    description: "A premium lounge piece for customers looking for a sophisticated look and everyday comfort.",
    availability: "Available",
  },
  {
    name: "Modern Bedroom Set",
    category: "Bedroom",
    price: "K9,500",
    image: "/images/modern-bedroom.png",
    tag: "New",
    description: "A modern bedroom set with a coordinated finish for a clean, comfortable retreat.",
    availability: "Available",
  },
  {
    name: "Round Dining Table",
    category: "Dining Room",
    price: "K3,200",
    image: "/images/round-dining-table.png",
    tag: "Space Saver",
    description: "A round dining table that works well in compact dining areas and casual spaces.",
    availability: "Available",
  },
  {
    name: "Premium Bed",
    category: "Bedroom",
    price: "K5,500",
    image: "/images/bed.jpg",
    tag: "Premium",
    description: "A premium bed designed to give your bedroom a refined appearance and comfortable feel.",
    availability: "Available",
  },
  {
    name: "Wooden Wardrobe",
    category: "Storage",
    price: "K4,000",
    image: "/images/wooden-wardrobe.png",
    tag: "Practical",
    description: "A versatile wooden wardrobe that keeps clothes and essentials neatly organised.",
    availability: "Available",
  },
];

const testimonials = [
  {
    text: "The team helped us find exactly what we needed for our new home.",
    name: "Chanda M.",
    location: "Lusaka",
  },
  {
    text: "Beautiful furniture and excellent customer service. Very happy with our purchase.",
    name: "Brian K.",
    location: "Lusaka",
  },
  {
    text: "The quality was even better than we expected. Highly recommended.",
    name: "Natasha M.",
    location: "Lusaka",
  },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[number] | null
  >(null);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("lusaka-theme");

    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lusaka-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen || selectedProduct ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, selectedProduct]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProduct(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openProduct = (product: (typeof products)[number]) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  const whatsappMessage = selectedProduct
    ? `Hi! I'm interested in the ${selectedProduct.name} (${selectedProduct.price}) from Lusaka Home Furniture. Is it available?`
    : "";

  const whatsappUrl = `https://wa.me/260971087663?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <main
        className={`min-h-screen overflow-hidden transition-colors duration-700 ${
          dark
            ? "bg-[#0b0b0b] text-white"
            : "bg-[#f6f2eb] text-[#151515]"
        }`}
      >
        {/* =========================
            NAVIGATION
        ========================== */}

        <nav
          className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500 ${
            dark
              ? "border-white/10 bg-[#0b0b0b]/90"
              : "border-black/10 bg-[#f6f2eb]/90"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
            <a
              href="#home"
              onClick={closeMenu}
              className="text-xl font-black tracking-tight"
            >
              LUSAKA
              <span className="text-[#b4874d]">.</span>
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a
                href="#home"
                className="transition hover:text-[#b4874d]"
              >
                Home
              </a>

              <a
                href="#collection"
                className="transition hover:text-[#b4874d]"
              >
                Collection
              </a>

              <a
                href="#story"
                className="transition hover:text-[#b4874d]"
              >
                Our Story
              </a>

              <a
                href="#reviews"
                className="transition hover:text-[#b4874d]"
              >
                Reviews
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#b4874d]"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
                className={`flex h-11 items-center gap-2 rounded-full border px-3 text-sm transition duration-300 ${
                  dark
                    ? "border-white/15 bg-white/10 hover:bg-white/15"
                    : "border-black/10 bg-white hover:bg-black hover:text-white"
                }`}
              >
                <span className="text-base">
                  {dark ? "☀️" : "🌙"}
                </span>

                <span className="hidden sm:inline">
                  {dark ? "Light" : "Dark"}
                </span>
              </button>

              <a
                href="#contact"
                className="hidden rounded-full bg-[#151515] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#b4874d] sm:block"
              >
                Get In Touch
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition md:hidden ${
                  dark
                    ? "border-white/15 bg-white/10"
                    : "border-black/10 bg-white"
                }`}
              >
                <div className="flex w-5 flex-col gap-1.5">
                  <span
                    className={`h-0.5 w-full transition duration-300 ${
                      dark ? "bg-white" : "bg-black"
                    } ${
                      menuOpen ? "translate-y-2 rotate-45" : ""
                    }`}
                  />

                  <span
                    className={`h-0.5 w-full transition duration-300 ${
                      dark ? "bg-white" : "bg-black"
                    } ${menuOpen ? "opacity-0" : ""}`}
                  />

                  <span
                    className={`h-0.5 w-full transition duration-300 ${
                      dark ? "bg-white" : "bg-black"
                    } ${
                      menuOpen
                        ? "-translate-y-2 -rotate-45"
                        : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}

          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              menuOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`border-t px-5 pb-6 pt-4 sm:px-8 ${
                dark ? "border-white/10" : "border-black/10"
              }`}
            >
              <div className="flex flex-col gap-2">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                    dark
                      ? "hover:bg-white/10"
                      : "hover:bg-black/5"
                  }`}
                >
                  Home
                </a>

                <a
                  href="#collection"
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                    dark
                      ? "hover:bg-white/10"
                      : "hover:bg-black/5"
                  }`}
                >
                  Collection
                </a>

                <a
                  href="#story"
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                    dark
                      ? "hover:bg-white/10"
                      : "hover:bg-black/5"
                  }`}
                >
                  Our Story
                </a>

                <a
                  href="#reviews"
                  onClick={closeMenu}
                  className={`rounded-2xl px-5 py-4 text-lg font-semibold transition ${
                    dark
                      ? "hover:bg-white/10"
                      : "hover:bg-black/5"
                  }`}
                >
                  Reviews
                </a>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 rounded-2xl bg-[#b4874d] px-5 py-4 text-center font-bold text-white transition hover:bg-[#9a703d]"
                >
                  Get In Touch →
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* HERO */}

        <section id="home" className="relative">
          <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-[#b4874d]/10 blur-[100px]" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:py-28">
            <div className="relative z-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#b4874d]" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4874d]">
                  Furniture • Lusaka • Zambia
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
                Make your
                <span className="block text-[#b4874d]">
                  space matter.
                </span>
              </h1>

              <p
                className={`mt-8 max-w-xl text-lg leading-8 ${
                  dark ? "text-white/55" : "text-black/55"
                }`}
              >
                Carefully selected furniture for homes and spaces
                that deserve more than ordinary. Discover comfort,
                character and timeless design in Lusaka.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#collection"
                  className="rounded-full bg-[#151515] px-7 py-4 font-bold text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#b4874d]"
                >
                  Explore Collection →
                </a>

                <a
                  href="#contact"
                  className={`rounded-full border px-7 py-4 font-bold transition duration-300 hover:-translate-y-1 ${
                    dark
                      ? "border-white/15 hover:bg-white hover:text-black"
                      : "border-black/15 hover:bg-white"
                  }`}
                >
                  Talk to Us
                </a>
              </div>

              <div
                className={`mt-14 grid max-w-xl grid-cols-3 border-t pt-7 ${
                  dark ? "border-white/10" : "border-black/10"
                }`}
              >
                <div>
                  <p className="text-2xl font-black">500+</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-50">
                    Customers
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">5+</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-50">
                    Years
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black">LUSAKA</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-50">
                    Zambia
                  </p>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}

            <div className="relative">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#b4874d]/20 blur-3xl" />

              <div className="group relative overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/images/sofa.jpg.webp"
                  alt="Luxury furniture"
                  width={1000}
                  height={1200}
                  priority
                  className="h-[520px] w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/20 bg-black/55 p-5 text-white backdrop-blur-xl">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                          Featured Collection
                        </p>

                        <h3 className="mt-2 text-xl font-bold">
                          Modern Living
                        </h3>
                      </div>

                      <span className="text-lg font-bold">
                        K4,500+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}

        <section
          className={`overflow-hidden border-y py-5 ${
            dark
              ? "border-white/10 bg-white/[0.02]"
              : "border-black/10 bg-white/40"
          }`}
        >
          <div className="flex min-w-max gap-12 text-xs font-bold uppercase tracking-[0.3em] opacity-50">
            <span>Quality Furniture</span>
            <span>✦</span>
            <span>Modern Design</span>
            <span>✦</span>
            <span>Made For Zambia</span>
            <span>✦</span>
            <span>Premium Comfort</span>
            <span>✦</span>
            <span>Quality Furniture</span>
            <span>✦</span>
          </div>
        </section>

        {/* COLLECTION */}

        <section
          id="collection"
          className="px-5 py-24 sm:px-8 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4874d]">
                  The Collection
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                  Pieces worth
                  <span className="block text-[#b4874d]">
                    coming home to.
                  </span>
                </h2>
              </div>

              <p
                className={`leading-7 ${
                  dark ? "text-white/50" : "text-black/50"
                }`}
              >
                A selection of our most popular pieces. When we
                build this website for a real business, these
                products, photographs and prices can all be replaced
                with the client's actual catalogue.
              </p>
            </div>

            <div className="mt-14 grid gap-7 md:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.name}
                  onClick={() => openProduct(product)}
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {
                      event.preventDefault();
                      openProduct(product);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`group cursor-pointer overflow-hidden rounded-[2rem] border transition duration-500 hover:-translate-y-2 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                      : "border-black/10 bg-white hover:shadow-2xl"
                  }`}
                >
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-lg">
                      {product.tag}
                    </span>

                    <span className="absolute bottom-5 left-5 rounded-full bg-black/70 px-4 py-2 text-xs font-medium text-white opacity-0 backdrop-blur transition duration-500 group-hover:opacity-100">
                      View details →
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#b4874d]">
                      {product.category}
                    </p>

                    <div className="mt-2 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold">
                        {product.name}
                      </h3>

                      <p className="font-black">
                        {product.price}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        openProduct(product);
                      }}
                      className={`mt-6 block w-full rounded-full border py-3 text-center text-sm font-bold transition ${
                        dark
                          ? "border-white/15 hover:bg-white hover:text-black"
                          : "border-black/15 hover:bg-black hover:text-white"
                      }`}
                    >
                      Enquire About This
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}

        <section
          id="story"
          className="px-5 py-24 sm:px-8 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <Image
                src="/images/dining.jpg"
                alt="Furniture interior"
                width={1000}
                height={900}
                className="h-[550px] w-full object-cover"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-black/70 px-6 py-5 text-white backdrop-blur">
                <p className="text-3xl font-black">5+</p>

                <p className="text-xs uppercase tracking-wider text-white/50">
                  Years of experience
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4874d]">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                Your home should tell your story.
              </h2>

              <p
                className={`mt-7 text-lg leading-8 ${
                  dark ? "text-white/55" : "text-black/55"
                }`}
              >
                Furniture isn't just about filling empty space.
                It's about creating somewhere you want to spend
                time.
              </p>

              <p
                className={`mt-5 text-lg leading-8 ${
                  dark ? "text-white/55" : "text-black/55"
                }`}
              >
                We help customers across Lusaka find pieces that
                combine comfort, quality and personality.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-block rounded-full bg-[#b4874d] px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#9a703d]"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

        {/* REVIEWS */}

        <section
          id="reviews"
          className={`px-5 py-24 sm:px-8 lg:py-32 ${
            dark ? "bg-white/[0.03]" : "bg-white"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4874d]">
                Customer Stories
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                People remember how
                <span className="text-[#b4874d]">
                  {" "}
                  you made them feel.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className={`rounded-[2rem] border p-8 transition hover:-translate-y-1 ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-black/10 bg-[#f6f2eb]"
                  }`}
                >
                  <div className="text-xl text-[#b4874d]">
                    ★★★★★
                  </div>

                  <p
                    className={`mt-6 text-lg leading-8 ${
                      dark ? "text-white/70" : "text-black/70"
                    }`}
                  >
                    “{review.text}”
                  </p>

                  <div className="mt-8 border-t border-current/10 pt-5">
                    <p className="font-bold">{review.name}</p>

                    <p className="mt-1 text-sm opacity-50">
                      {review.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       {/* =========================
    CONTACT / ENQUIRY FORM
========================== */}

<section
  id="contact"
  className="px-5 py-24 sm:px-8 lg:py-32"
>
  <div className="mx-auto max-w-7xl">
    <div
      className={`overflow-hidden rounded-[2.5rem] border ${
        dark
          ? "border-white/10 bg-white/[0.04]"
          : "border-black/10 bg-white"
      }`}
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}

        <div className="bg-[#b4874d] p-8 text-white sm:p-12 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            Let's Talk
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            Have a question about a product?
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">
            Send us an enquiry and tell us what you're looking for.
            Our team will get back to you through your preferred
            contact method.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                📱
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  WhatsApp
                </p>

                <p className="font-bold">
                  +260 971 087 663
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                ✉️
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Email
                </p>

                <p className="font-bold">
                  info@lusakahomefurniture.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}

        <div className="p-8 sm:p-12 lg:p-16">
          <form
            onSubmit={async (event) => {
              event.preventDefault();

              if (submitting) return;

              const form = event.currentTarget;
              const formData = new FormData(form);

              const enquiry = {
                name: String(formData.get("name") || ""),
                phone: String(formData.get("phone") || ""),
                email: String(formData.get("email") || ""),
                product: String(formData.get("product") || ""),
                message: String(formData.get("message") || ""),
                preferredContact: String(
                  formData.get("preferredContact") || ""
                ),
              };

              setSubmitting(true);

              try {
                const response = await fetch(
                  "http://localhost:5678/webhook-test/739d7d39-d4b5-4a1b-8e39-9e9d2952e756",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(enquiry),
                  }
                );

                if (!response.ok) {
                  throw new Error(
                    `Webhook request failed with status ${response.status}`
                  );
                }

                alert(
                  "Thank you! Your enquiry has been sent successfully."
                );

                form.reset();
              } catch (error) {
                console.error("Enquiry submission error:", error);

                alert(
                  "Sorry, we couldn't send your enquiry. Please make sure n8n is listening for the test event and try again."
                );
              } finally {
                setSubmitting(false);
              }
            }}
            className="space-y-6"
          >

            {/* NAME */}

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-[#b4874d] ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border-black/10 bg-[#f6f2eb] text-black placeholder:text-black/35"
                }`}
              />
            </div>

            {/* PHONE */}

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 0971234567"
                required
                className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-[#b4874d] ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border-black/10 bg-[#f6f2eb] text-black placeholder:text-black/35"
                }`}
              />
            </div>

            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-[#b4874d] ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border-black/10 bg-[#f6f2eb] text-black placeholder:text-black/35"
                }`}
              />
            </div>

            {/* PRODUCT */}

            <div>
              <label
                htmlFor="product"
                className="mb-2 block text-sm font-bold"
              >
                Product You're Interested In
              </label>

              <select
                id="product"
                name="product"
                defaultValue=""
                className={`w-full rounded-2xl border px-5 py-4 outline-none transition focus:border-[#b4874d] ${
                  dark
                    ? "border-white/10 bg-[#151515] text-white"
                    : "border-black/10 bg-[#f6f2eb] text-black"
                }`}
              >
                <option value="" disabled>
                  Select a product
                </option>

                {products.map((product) => (
                  <option
                    key={product.name}
                    value={product.name}
                  >
                    {product.name} — {product.price}
                  </option>
                ))}
              </select>
            </div>

            {/* MESSAGE */}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what you would like to know..."
                required
                className={`w-full resize-none rounded-2xl border px-5 py-4 outline-none transition focus:border-[#b4874d] ${
                  dark
                    ? "border-white/10 bg-white/5 text-white placeholder:text-white/30"
                    : "border-black/10 bg-[#f6f2eb] text-black placeholder:text-black/35"
                }`}
              />
            </div>

            {/* CONTACT PREFERENCE */}

            <div>
              <p className="mb-3 text-sm font-bold">
                How would you like us to respond?
              </p>

              <div className="grid gap-3 sm:grid-cols-3">

                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    dark
                      ? "border-white/10 hover:border-[#b4874d]"
                      : "border-black/10 hover:border-[#b4874d]"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    defaultChecked
                    className="mr-2"
                  />

                  <span className="text-sm font-medium">
                    WhatsApp
                  </span>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    dark
                      ? "border-white/10 hover:border-[#b4874d]"
                      : "border-black/10 hover:border-[#b4874d]"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    className="mr-2"
                  />

                  <span className="text-sm font-medium">
                    Email
                  </span>
                </label>

                <label
                  className={`cursor-pointer rounded-2xl border p-4 transition ${
                    dark
                      ? "border-white/10 hover:border-[#b4874d]"
                      : "border-black/10 hover:border-[#b4874d]"
                  }`}
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value="both"
                    className="mr-2"
                  />

                  <span className="text-sm font-medium">
                    Both
                  </span>
                </label>

              </div>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[#151515] px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b4874d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Sending Enquiry..." : "Send Enquiry →"}
            </button>

            <p
              className={`text-center text-xs ${
                dark ? "text-white/35" : "text-black/35"
              }`}
            >
              Your information will only be used to respond to
              your enquiry.
            </p>

          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* FOOTER */}

        <footer
          className={`border-t px-5 py-10 sm:px-8 ${
            dark ? "border-white/10" : "border-black/10"
          }`}
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xl font-black">
                LUSAKA<span className="text-[#b4874d]">.</span>
              </p>
              <p className="mt-1 text-sm opacity-50">Quality furniture in Zambia.</p>
            </div>

            <p className="text-sm opacity-40 md:text-right">
              © {new Date().getFullYear()} Lusaka Home Furniture. All rights reserved.
            </p>
          </div>
          <div className="mx-auto mt-7 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-current/10 pt-5 text-center text-sm sm:flex-row sm:text-left">
            <p>
              <span className="opacity-50">Website designed by </span>
              <span className="font-bold text-[#b4874d]">
                Zambia Digital Solutions
              </span>
            </p>

            <a
              href={facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Lusaka Home Furniture on Facebook"
              className="inline-flex items-center gap-2 rounded-full border border-current/15 px-4 py-2 font-semibold transition hover:border-[#b4874d] hover:text-[#b4874d]"
            >
              <span aria-hidden="true">f</span>
              Follow us on Facebook ↗
            </a>
          </div>
        </footer>

        {showBackToTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to top"
            className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#b4874d] text-2xl font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#9a703d] focus:outline-none focus:ring-2 focus:ring-[#b4874d] focus:ring-offset-2"
          >
            ↑
          </button>
        )}
      </main>

      {/* =========================
          PRODUCT MODAL
      ========================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProduct.name} details`}
        >
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close product details"
            onClick={closeProduct}
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
          />

          {/* MODAL */}

          <div
            className={`relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border shadow-2xl sm:rounded-[2.5rem] ${
              dark
                ? "border-white/10 bg-[#111111] text-white"
                : "border-black/10 bg-[#f6f2eb] text-[#151515]"
            }`}
            style={{
              animation: "productModalIn 220ms ease-out",
            }}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={closeProduct}
              aria-label="Close"
              className={`absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border text-xl transition sm:right-6 sm:top-6 ${
                dark
                  ? "border-white/15 bg-black/50 hover:bg-white hover:text-black"
                  : "border-black/10 bg-white/80 hover:bg-black hover:text-white"
              }`}
            >
              ×
            </button>

            <div className="grid lg:grid-cols-2">
              {/* MODAL IMAGE */}

              <div className="relative min-h-[360px] overflow-hidden lg:min-h-[620px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <span className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-xl">
                  {selectedProduct.tag}
                </span>
              </div>

              {/* MODAL CONTENT */}

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b4874d]">
                  {selectedProduct.category}
                </p>

                <h2 className="mt-4 pr-8 text-4xl font-black tracking-tight sm:text-5xl">
                  {selectedProduct.name}
                </h2>

                <p className="mt-5 text-3xl font-black text-[#b4874d]">
                  {selectedProduct.price}
                </p>

                <div
                  className={`mt-6 flex items-center gap-2 text-sm font-semibold ${
                    dark ? "text-white/70" : "text-black/60"
                  }`}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  {selectedProduct.availability}
                </div>

                <div
                  className={`my-8 h-px ${
                    dark ? "bg-white/10" : "bg-black/10"
                  }`}
                />

                <p
                  className={`text-base leading-8 ${
                    dark ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {selectedProduct.description}
                </p>

                <button
  type="button"
  onClick={() => {
    setSelectedProduct(null);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }}
  className="mt-9 flex w-full items-center justify-center gap-3 rounded-full bg-[#b4874d] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#9a703d] hover:shadow-xl"
>
  <span className="text-xl">📝</span>
  Fill Enquiry Form
</button>

                <button
                  type="button"
                  onClick={closeProduct}
                  className={`mt-3 rounded-full border px-7 py-4 font-bold transition ${
                    dark
                      ? "border-white/15 hover:bg-white hover:text-black"
                      : "border-black/15 hover:bg-black hover:text-white"
                  }`}
                >
                  Continue Browsing
                </button>

                <p
                  className={`mt-5 text-center text-xs ${
                    dark ? "text-white/30" : "text-black/35"
                  }`}
                >
                  WhatsApp: +260 971 087 663
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ANIMATION */}

      <style jsx global>{`
        @keyframes productModalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}