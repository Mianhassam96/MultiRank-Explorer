import { WebsiteAnalyzer } from "@/components/WebsiteAnalyzer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary to-background">
      <Header />
      <main className="flex-1 py-12 px-4">
        <WebsiteAnalyzer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;