"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    AlertCircle,
    CheckCircle,
    Clock,
    Zap,
    XCircle,
    Eye,
    Wrench,
    ChevronRight,
} from "lucide-react"
import { useState } from "react"

const issues = [
    {
        id: 1,
        severity: "high",
        title: "Missing Schema Markup on 12 Pages",
        description: "Critical pages lack structured data for AI understanding",
        affected: 12,
        impact: "High - Reduces AI citation probability",
        autoFix: true,
        status: "pending",
    },
    {
        id: 2,
        severity: "medium",
        title: "Slow Page Load Time (4.2s avg)",
        description: "5 pages exceed recommended load time threshold",
        affected: 5,
        impact: "Medium - May affect crawl budget",
        autoFix: false,
        status: "pending",
    },
    {
        id: 3,
        severity: "high",
        title: "Broken Internal Links",
        description: "18 internal links pointing to 404 pages",
        affected: 18,
        impact: "High - Damages site structure",
        autoFix: true,
        status: "pending",
    },
    {
        id: 4,
        severity: "low",
        title: "Outdated Sitemap",
        description: "Sitemap hasn't been updated in 14 days",
        affected: 1,
        impact: "Low - May delay new content indexing",
        autoFix: true,
        status: "pending",
    },
    {
        id: 5,
        severity: "medium",
        title: "Duplicate Meta Descriptions",
        description: "8 pages share identical meta descriptions",
        affected: 8,
        impact: "Medium - Reduces click-through rate",
        autoFix: true,
        status: "pending",
    },
]

export default function IssuesPage() {
    const [fixingIssue, setFixingIssue] = useState<number | null>(null)

    const handleAutoFix = (issueId: number, title: string) => {
        setFixingIssue(issueId)
        setTimeout(() => {
            setFixingIssue(null)
            alert(`✅ Auto-fix completed for:\n"${title}"\n\n• Changes applied\n• Sites updated\n• Validation queued\n• Re-indexing requested`)
        }, 2000)
    }

    const handleViewDetails = (title: string, description: string) => {
        alert(`🔍 Issue Details:\n\n${title}\n\n${description}\n\nRecommended actions:\n• Review affected pages\n• Check error logs\n• Test fixes in staging\n• Monitor after deployment`)
    }

    const handleManualFix = (title: string) => {
        alert(`🛠️ Manual Fix Guide:\n\n"${title}"\n\n1. Access affected pages\n2. Review recommendations\n3. Implement changes\n4. Test thoroughly\n5. Request validation\n6. Monitor results`)
    }

    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case "high": return "text-red-600 bg-red-100"
            case "medium": return "text-orange-600 bg-orange-100"
            case "low": return "text-yellow-600 bg-yellow-100"
            default: return "text-gray-600 bg-gray-100"
        }
    }

    const getSeverityIcon = (severity: string) => {
        switch (severity) {
            case "high": return XCircle
            case "medium": return AlertCircle
            case "low": return Clock
            default: return AlertCircle
        }
    }

    const pendingCount = issues.filter(i => i.status === "pending").length
    const highSeverity = issues.filter(i => i.severity === "high").length
    const autoFixable = issues.filter(i => i.autoFix).length

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Issues & Fixes</h1>
                    <p className="text-muted-foreground">Identify and resolve visibility blockers.</p>
                </div>
                <Button
                    variant="outline"
                    className="cursor-pointer w-full sm:w-auto"
                    onClick={() => alert("🔄 Running full site scan...\n\n• Crawl analysis\n• Schema validation\n• Link checking\n• Performance audit\n• Indexing status\n• AI readability")}
                >
                    Run Full Scan
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{pendingCount}</div>
                        <p className="text-xs text-muted-foreground mt-1">Require attention</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">High Severity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{highSeverity}</div>
                        <p className="text-xs text-muted-foreground mt-1">Critical fixes needed</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Auto-Fixable</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">{autoFixable}</div>
                        <p className="text-xs text-muted-foreground mt-1">One-click resolution</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                {issues.map((issue) => {
                    const SeverityIcon = getSeverityIcon(issue.severity)
                    return (
                        <Card key={issue.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-2 rounded-lg ${getSeverityColor(issue.severity)}`}>
                                        <SeverityIcon className="h-5 w-5" />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="font-semibold text-lg">{issue.title}</h3>
                                                <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                                            </div>
                                            <Badge variant="secondary" className="ml-2">
                                                {issue.affected} affected
                                            </Badge>
                                        </div>

                                        <div className="flex items-center gap-6 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1">
                                                <AlertCircle className="h-3 w-3" /> {issue.impact}
                                            </span>
                                            {issue.autoFix && (
                                                <span className="flex items-center gap-1 text-green-600">
                                                    <Zap className="h-3 w-3" /> Auto-fix available
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="cursor-pointer"
                                                onClick={() => handleViewDetails(issue.title, issue.description)}
                                            >
                                                <Eye className="mr-2 h-4 w-4" /> View Details
                                            </Button>
                                            {issue.autoFix ? (
                                                <Button
                                                    size="sm"
                                                    className="cursor-pointer"
                                                    onClick={() => handleAutoFix(issue.id, issue.title)}
                                                    disabled={fixingIssue === issue.id}
                                                >
                                                    <Zap className="mr-2 h-4 w-4" />
                                                    {fixingIssue === issue.id ? 'Fixing...' : 'Auto-Fix'}
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    className="cursor-pointer"
                                                    onClick={() => handleManualFix(issue.title)}
                                                >
                                                    <Wrench className="mr-2 h-4 w-4" /> Manual Fix Guide
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
