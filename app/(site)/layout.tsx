import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingFeedbackButton from "@/components/FloatingFeedbackButton";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 lg:pt-24">{children}</main>
      <Footer />
      <FloatingFeedbackButton />
    </>
  );
}
