import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Search, Award, Database } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AnalysisResult {
  da: number;
  pa: number;
  keywords: string[];
  ranking: number;
}

export const WebsiteAnalyzer = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setResult({
        da: 45,
        pa: 38,
        keywords: ["seo", "digital marketing", "web analytics", "search engine"],
        ranking: 125000
      });

      toast({
        title: "Analysis Complete",
        description: "Website analysis has been completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to analyze website. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent gradient-bg">
          Website Analyzer
        </h1>
        <p className="text-gray-600">
          Analyze your website's Domain Authority, Page Authority, Keywords, and Ranking
        </p>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4">
        <div className="flex gap-4">
          <Input
            type="url"
            placeholder="Enter website URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={loading} className="gradient-bg">
            {loading ? "Analyzing..." : "Analyze"}
          </Button>
        </div>
      </form>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Authority Scores</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Domain Authority</span>
                  <span>{result.da}/100</span>
                </div>
                <Progress value={result.da} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Page Authority</span>
                  <span>{result.pa}/100</span>
                </div>
                <Progress value={result.pa} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Top Keywords</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Global Ranking</h3>
            </div>
            <div className="text-3xl font-bold text-primary">
              #{result.ranking.toLocaleString()}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};