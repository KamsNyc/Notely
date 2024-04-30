import Image from "next/image";
import Header from './../components/Header';
import Hero from './../components/Hero';
import Features from './../components/Features';

export default function Home() {
  return (
    <main className="max-w-sm mx-auto">
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <Hero />
      {/* FEATURES */}
      <Features />
      {/* CONTACT */}

      {/* FOOTER */}
    </main>
  );
}
