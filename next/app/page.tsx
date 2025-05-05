import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { QuickLinks } from "@/app/components/QuickLinks";
import { UpcomingEvents } from "@/app/components/UpcomingEvents";
import Dfour from "./components/Dfour";
import { MailingPopup } from "./components/mailingpopup";
import { MailingListBanner } from "./components/MailingBanner";
import { FooterBanner } from "./components/footer";


export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <QuickLinks />
      <UpcomingEvents />
      <Dfour />
      <MailingListBanner />
      <MailingPopup />
    </main>
  );
}
