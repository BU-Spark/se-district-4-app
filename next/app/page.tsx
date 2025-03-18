import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { QuickLinks } from "@/app/components/QuickLinks";
import { UpcomingEvents } from "@/app/components/UpcomingEvents";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <QuickLinks />
      <UpcomingEvents />
    </main>
  );
}
