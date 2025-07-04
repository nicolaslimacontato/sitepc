import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JiuJitsuSection from "@/components/JiuJitsuSection";
import ConversionSection from "@/components/ConversionSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <div id="jiujitsu">
          <JiuJitsuSection />
        </div>
        <div id="conversion">
          <ConversionSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
    </>
  );
}
