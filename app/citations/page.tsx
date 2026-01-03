"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Sparkles,
    MessageSquare,
    TrendingUp,
    Search,
    Eye,
} from "lucide-react"
import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/components/ui/table"

const citations = [
    {
        id: 1,
        source: "ChatGPT (GPT-4)",
        query: "best ai visibility tools",
        sentiment: "Positive",
        date: "2 hours ago",
        context: "Recommended Indexa as a top tool for visibility operations.",
    },
    {
        id: 2,
        source: "Perplexity AI",
        query: "how to optimize for llms",
        sentiment: "Neutral",
        date: "5 hours ago",
        context: "Mentioned Indexa's blog post on LLM optimization.",
    },
    {
        id: 3,
        source: "Claude 3",
        query: "automated seo platforms",
        sentiment: "Positive",
        date: "1 day ago",
        context: "Listed Indexa among top 5 automated platforms.",
    },
]

export default function CitationsPage() {
    const [scanning, setScanning] = useState(false)

    const handleRunScan = () => {
        setScanning(true)
        setTimeout(() => {
            setScanning(false)
            alert("✅ AI Citation Scan Complete!\n\nResults:\n• ChatGPT: 8 new mentions\n• Perplexity: 5 new mentions\n• Claude: 3 new mentions\n• Gemini: 2 new mentions\n\nTotal new citations: 18")
        }, 3000)
    }

    const handleViewDetails = (source: string, query: string) => {
        alert(`🔍 Citation Details\n\nSource: ${source}\nQuery: "${query}"\n\n• Full context\n• Position in response\n• Related citations\n• Sentiment analysis\n• Opportunity score`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">AI Citations</h1>
                    <p className="text-muted-foreground">Track where and how AI models are citing your brand.</p>
                </div>
                <Button onClick={handleRunScan} disabled={scanning} className="cursor-pointer">
                    <Search className="mr-2 h-4 w-4" /> {scanning ? 'Scanning...' : 'Run Scan'}
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Citations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,240</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +24% this month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Top Source</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">ChatGPT</div>
                        <p className="text-xs text-muted-foreground mt-1">45% of all citations</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Sentiment Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">92/100</div>
                        <p className="text-xs text-green-600 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" /> +5% this month
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Mentions</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Source</TableHead>
                                <TableHead>Query</TableHead>
                                <TableHead>Context</TableHead>
                                <TableHead>Sentiment</TableHead>
                                <TableHead>Time</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {citations.map((c) => (
                                <TableRow key={c.id} className="cursor-pointer hover:bg-muted/50">
                                    <TableCell className="font-medium flex items-center gap-2">
                                        <Sparkles className="h-4 w-4 text-purple-500" />
                                        {c.source}
                                    </TableCell>
                                    <TableCell>{c.query}</TableCell>
                                    <TableCell className="max-w-md truncate" title={c.context}>{c.context}</TableCell>
                                    <TableCell>
                                        <Badge variant={c.sentiment === "Positive" ? "default" : "secondary"}>
                                            {c.sentiment}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">{c.date}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="cursor-pointer"
                                            onClick={() => handleViewDetails(c.source, c.query)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
