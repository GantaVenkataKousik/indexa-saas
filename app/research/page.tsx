"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"
import {
    Search,
    TrendingUp,
    ArrowUpRight,
    Filter,
    Download,
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

const keywords = [
    {
        keyword: "ai visibility tools",
        volume: "1.2k",
        difficulty: "Medium",
        opportunity: 85,
        intent: "Commercial",
    },
    {
        keyword: "how to rank in chatgpt",
        volume: "850",
        difficulty: "Low",
        opportunity: 92,
        intent: "Informational",
    },
    {
        keyword: "seo for llms",
        volume: "2.4k",
        difficulty: "High",
        opportunity: 78,
        intent: "Informational",
    },
    {
        keyword: "perplexity optimization",
        volume: "500",
        difficulty: "Low",
        opportunity: 88,
        intent: "Commercial",
    },
]

export default function ResearchPage() {
    const [analyzing, setAnalyzing] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const handleAnalyze = () => {
        if (!searchTerm.trim()) {
            alert("⚠️ Please enter a keyword to analyze")
            return
        }
        setAnalyzing(true)
        setTimeout(() => {
            setAnalyzing(false)
            alert(`🔍 Analysis complete for "${searchTerm}"!\n\n• Found 47 related keywords\n• 12 high-opportunity topics\n• 8 AI citation opportunities\n• Competition: Medium`)
        }, 2000)
    }

    const handleExport = () => {
        alert("📥 Exporting keyword research data...\n\nFormats available:\n• CSV\n• Excel\n• PDF Report\n• Google Sheets")
    }

    const handleCreateContent = (keyword: string) => {
        alert(`✍️ Creating content for "${keyword}"\n\nSuggested structure:\n• Title optimization\n• H2/H3 outline\n• FAQ schema\n• AI citation strategy\n• Internal linking`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Keyword Research</h1>
                    <p className="text-muted-foreground">Discover topics to improve your AI visibility.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleExport} className="cursor-pointer">
                        <Download className="mr-2 h-4 w-4" /> Export
                    </Button>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Topic Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Enter a seed keyword..."
                                className="pl-10"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
                            />
                        </div>
                        <Button onClick={handleAnalyze} disabled={analyzing} className="cursor-pointer">
                            {analyzing ? 'Analyzing...' : 'Analyze'}
                        </Button>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Keyword</TableHead>
                                <TableHead>Volume</TableHead>
                                <TableHead>Difficulty</TableHead>
                                <TableHead>Intent</TableHead>
                                <TableHead>Opp. Score</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {keywords.map((k, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{k.keyword}</TableCell>
                                    <TableCell>{k.volume}</TableCell>
                                    <TableCell>
                                        <Badge variant={k.difficulty === "Low" ? "secondary" : k.difficulty === "Medium" ? "default" : "destructive"}>
                                            {k.difficulty}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{k.intent}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <span className="font-bold mr-2">{k.opportunity}</span>
                                            <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                                                <div className="h-full bg-green-500" style={{ width: `${k.opportunity}%` }} />
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="cursor-pointer"
                                            onClick={() => handleCreateContent(k.keyword)}
                                            title="Create content for this keyword"
                                        >
                                            <ArrowUpRight className="h-4 w-4" />
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
