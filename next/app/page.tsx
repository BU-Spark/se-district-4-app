import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { QuickLinks } from "@/app/components/QuickLinks";
import { UpcomingEvents } from "@/app/components/UpcomingEvents";
import Dfour from "./components/Dfour";
import ResourcePage from "@/resources/ResourcePage";
import { MailingListBanner } from "./components/mailingList";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <QuickLinks />
      <UpcomingEvents />
      <Dfour />
      <ResourcePage />
      <MailingListBanner />
    </main>
  );
}
