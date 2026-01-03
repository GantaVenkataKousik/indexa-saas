"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    TrendingUp,
    TrendingDown,
    Users,
    Eye,
    MousePointer,
    Clock,
    Download,
    Filter,
} from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar, BarChart, Line, LineChart, CartesianGrid } from "recharts"
import { useState } from "react"

const trafficData = [
    { date: "Dec 1", organic: 1200, ai: 450, direct: 230 },
    { date: "Dec 7", organic: 1450, ai: 680, direct: 290 },
    { date: "Dec 14", organic: 1680, ai: 920, direct: 310 },
    { date: "Dec 21", organic: 1890, ai: 1240, direct: 380 },
    { date: "Dec 27", organic: 2100, ai: 1580, direct: 420 },
]

const topPages = [
    { page: "/blog/ai-visibility-guide", visits: 4520, citations: 145, score: 92 },
    { page: "/features/citation-tracking", visits: 3210, citations: 98, score: 88 },
    { page: "/pricing", visits: 2890, citations: 45, score: 85 },
    { page: "/blog/seo-for-llms", visits: 2450, citations: 120, score: 90 },
]

const aiSources = [
    { source: "ChatGPT", mentions: 560, trend: "+24%" },
    { source: "Perplexity AI", mentions: 420, trend: "+31%" },
    { source: "Claude", mentions: 380, trend: "+18%" },
    { source: "Gemini", mentions: 220, trend: "+45%" },
]

export default function AnalyticsPage() {
    const [timeRange, setTimeRange] = useState("7d")

    const handleExport = () => {
        alert("📊 Exporting Analytics Report...\n\nFormats:\n• PDF Report\n• Excel Spreadsheet\n• CSV Data\n• Google Sheets\n\nDate range: Last 30 days")
    }

    const handleFilterChange = () => {
        alert("🔍 Filter Options:\n\n• Date range\n• Traffic source\n• Device type\n• Geographic location\n• AI model\n• Page category")
    }

    const handleViewPage = (page: string) => {
        alert(`📄 Page Analytics: ${page}\n\n• Traffic trends\n• Bounce rate: 32%\n• Avg. time: 3m 24s\n• Citations breakdown\n• Top queries\n• Conversion rate`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h1>
                    <p className="text-muted-foreground">Comprehensive visibility and traffic insights.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleFilterChange} className="cursor-pointer">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button variant="outline" onClick={handleExport} className="cursor-pointer">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Visits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24,680</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +18.2% vs last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">AI Referrals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,580</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +24.5% vs last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">3m 24s</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +8.3% vs last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bounce Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">32.4%</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingDown className="h-3 w-3 mr-1" /> -5.2% vs last week
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Traffic Sources Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={trafficData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                            <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                            <YAxis stroke="#9ca3af" fontSize={12} />
                            <Tooltip />
                            <Area type="monotone" dataKey="organic" stackId="1" stroke="#6366f1" fill="#6366f1" opacity={0.6} />
                            <Area type="monotone" dataKey="ai" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" opacity={0.6} />
                            <Area type="monotone" dataKey="direct" stackId="1" stroke="#ec4899" fill="#ec4899" opacity={0.6} />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-indigo-500" />
                            <span>Organic Search</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-purple-500" />
                            <span>AI Referrals</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-pink-500" />
                            <span>Direct</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Top Performing Pages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {topPages.map((page, i) => (
                                <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{page.page}</p>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                                            <span className="flex items-center gap-1">
                                                <Eye className="h-3 w-3" /> {page.visits.toLocaleString()}
                                            </span>
                                            <span>{page.citations} citations</span>
                                            <Badge variant="secondary" className="text-xs">Score: {page.score}</Badge>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={() => handleViewPage(page.page)}
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>AI Citation Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {aiSources.map((source, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">{source.source}</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-bold">{source.mentions}</span>
                                            <Badge variant="secondary" className="text-xs text-green-600">
                                                {source.trend}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <div
                                            className="bg-purple-500 h-2 rounded-full transition-all"
                                            style={{ width: `${(source.mentions / 560) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
