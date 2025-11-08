"use client";

import { useState } from 'react';
import { Search, Sparkles, Globe, Instagram, Building2, MapPin, TrendingUp, Filter, Download } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  industry: string;
  location: string;
  instagram?: string;
  website?: string;
  score: number;
  reasoning: string;
  engagement: string;
  visualStyle: string;
}

export default function Home() {
  const [industry, setIndustry] = useState<string>('all');
  const [location, setLocation] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);

  const sampleLeads: Lead[] = [
    {
      id: '1',
      name: 'Minimalist Fashion Co.',
      industry: 'Fashion',
      location: 'India',
      instagram: '@minimalist.fashion',
      website: 'minimalistfashion.com',
      score: 95,
      reasoning: 'Premium minimalist aesthetic, high-quality visual content, actively posts cinematic brand videos',
      engagement: 'High engagement rate (4.5%), consistent posting schedule',
      visualStyle: 'Clean, monochrome, minimal - perfect alignment with Nodi Verse palette'
    },
    {
      id: '2',
      name: 'FutureTech Labs',
      industry: 'Tech',
      location: 'UAE',
      instagram: '@futuretech.labs',
      website: 'futuretechlabs.io',
      score: 92,
      reasoning: 'AI-focused startup, appreciates design, needs brand identity refresh',
      engagement: 'Medium-high engagement (3.8%), growing follower base',
      visualStyle: 'Futuristic, tech-forward, uses red accents - brand alignment strong'
    },
    {
      id: '3',
      name: 'Artisan Coffee House',
      industry: 'F&B',
      location: 'UK',
      instagram: '@artisan.coffee.uk',
      website: 'artisancoffee.uk',
      score: 88,
      reasoning: 'Premium coffee brand, storytelling focus, values craftsmanship',
      engagement: 'High engagement (4.2%), strong community',
      visualStyle: 'Warm aesthetics with minimal design, uses video storytelling'
    },
    {
      id: '4',
      name: 'Nova Beauty Lab',
      industry: 'Beauty',
      location: 'USA',
      instagram: '@nova.beauty.lab',
      website: 'novabeautylab.com',
      score: 90,
      reasoning: 'Emerging beauty brand, science-meets-art positioning, premium target audience',
      engagement: 'Medium-high engagement (3.9%), consistent content',
      visualStyle: 'Clean, clinical yet artistic - appreciates high-quality visuals'
    },
    {
      id: '5',
      name: 'Urban Lifestyle Studio',
      industry: 'Lifestyle',
      location: 'India',
      instagram: '@urbanlifestyle.studio',
      website: 'urbanlifestyle.in',
      score: 87,
      reasoning: 'Lifestyle brand targeting young professionals, design-conscious',
      engagement: 'High engagement (4.0%), trendy content',
      visualStyle: 'Modern, minimal, uses black-white-red palette occasionally'
    }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      let filteredLeads = [...sampleLeads];

      if (industry !== 'all') {
        filteredLeads = filteredLeads.filter(lead => lead.industry.toLowerCase() === industry.toLowerCase());
      }

      if (location !== 'all') {
        filteredLeads = filteredLeads.filter(lead => lead.location.toLowerCase() === location.toLowerCase());
      }

      setLeads(filteredLeads);
      setIsSearching(false);
    }, 1500);
  };

  const exportLeads = () => {
    const csv = [
      ['Name', 'Industry', 'Location', 'Instagram', 'Website', 'Score', 'Reasoning', 'Engagement', 'Visual Style'],
      ...leads.map(lead => [
        lead.name,
        lead.industry,
        lead.location,
        lead.instagram || '',
        lead.website || '',
        lead.score.toString(),
        lead.reasoning,
        lead.engagement,
        lead.visualStyle
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nodi-verse-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-red-900/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Nodi Verse</h1>
                <p className="text-sm text-gray-400">Lead Research Agent</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Discover Premium Creative Collaboration Opportunities
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            AI-powered research to identify high-value brands that align with your cinematic vision
          </p>
        </div>

        {/* Search Controls */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-black border border-red-900/20 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="all">All Industries</option>
                <option value="fashion">Fashion</option>
                <option value="tech">Tech</option>
                <option value="f&b">F&B</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="beauty">Beauty</option>
                <option value="entertainment">Entertainment</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
              >
                <option value="all">All Locations</option>
                <option value="india">India</option>
                <option value="uae">UAE</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-700 disabled:to-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Find Leads
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filtering for: Premium brands, Regular posting, High visual quality
            </p>
            {leads.length > 0 && (
              <button
                onClick={exportLeads}
                className="text-sm text-red-400 hover:text-red-300 flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {leads.length > 0 && (
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Research Results</h3>
              <span className="text-gray-400">{leads.length} leads found</span>
            </div>

            <div className="space-y-6">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="bg-gradient-to-br from-zinc-900 to-black border border-red-900/20 rounded-xl p-6 hover:border-red-700/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{lead.name}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {lead.industry}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {lead.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2 bg-red-900/20 px-3 py-1 rounded-full">
                        <TrendingUp className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 font-bold">{lead.score}/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Why This Lead?</p>
                      <p className="text-gray-400">{lead.reasoning}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Engagement Analysis</p>
                      <p className="text-gray-400">{lead.engagement}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Visual Style Match</p>
                      <p className="text-gray-400">{lead.visualStyle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    {lead.instagram && (
                      <a
                        href={`https://instagram.com/${lead.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        {lead.instagram}
                      </a>
                    )}
                    {lead.website && (
                      <a
                        href={`https://${lead.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                        {lead.website}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {leads.length === 0 && !isSearching && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-20 h-20 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ready to Find Premium Leads</h3>
            <p className="text-gray-400">
              Select your target industry and location, then click "Find Leads" to discover brands that align with Nodi Verse's creative vision
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/30 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p>© 2025 Nodi Verse. AI-powered creative intelligence.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span>Agent Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
