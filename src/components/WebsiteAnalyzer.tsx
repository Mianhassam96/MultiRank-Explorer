import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Globe, Search, Award, Database, Link2, Zap, BarChart3, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AnalysisResult {
  da: number;
  pa: number;
  keywords: string[];
  ranking: number;
  backlinks: number;
  loadTime: number;
  trafficScore: number;
  competitors: string[];
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
        keywords: ["seo", "digital marketing", "web analytics", "search engine", "optimization", "traffic"],
        ranking: 125000,
        backlinks: 1500,
        loadTime: 2.3,
        trafficScore: 78,
        competitors: ["competitor1.com", "competitor2.com", "competitor3.com"]
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
    <div className="w-full max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent gradient-bg">
          Website Analyzer
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get comprehensive insights about your website's performance, authority, and ranking
        </p>
      </div>

      <form onSubmit={handleAnalyze} className="space-y-4 animate-fade-in">
        <div className="flex gap-4 max-w-2xl mx-auto">
          <Input
            type="url"
            placeholder="Enter website URL (e.g., https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 h-12 text-lg"
            required
          />
          <Button type="submit" disabled={loading} className="gradient-bg h-12 px-8 text-lg font-semibold hover:opacity-90 transition-opacity">
            {loading ? "Analyzing..." : "Analyze"}
          </Button>
        </div>
      </form>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Authority Scores</h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Domain Authority</span>
                  <span className="font-semibold">{result.da}/100</span>
                </div>
                <Progress value={result.da} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Page Authority</span>
                  <span className="font-semibold">{result.pa}/100</span>
                </div>
                <Progress value={result.pa} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <Search className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Top Keywords</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {result.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <Link2 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Backlinks</h3>
            </div>
            <div className="text-3xl font-bold text-primary">
              {result.backlinks.toLocaleString()}
            </div>
            <p className="text-gray-600">Total backlinks found</p>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Performance</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Load Time</span>
                <span className="font-semibold">{result.loadTime}s</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Traffic Score</span>
                <span className="font-semibold">{result.trafficScore}/100</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Competitors</h3>
            </div>
            <ul className="space-y-2">
              {result.competitors.map((competitor, index) => (
                <li key={index} className="text-gray-600">{competitor}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Global Ranking</h3>
            </div>
            <div className="text-3xl font-bold text-primary">
              #{result.ranking.toLocaleString()}
            </div>
            <p className="text-gray-600">Alexa Global Rank</p>
          </Card>
        </div>
      )}
    </div>
  );
};