"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Badge } from "@/app/components/ui/badge"
import {
    Search,
    Plus,
    Globe,
    CheckCircle,
    AlertCircle,
    MoreVertical,
    ExternalLink,
    RefreshCw,
    Settings as SettingsIcon,
    Eye,
} from "lucide-react"
import { useState } from "react"

const sites = [
    {
        id: 1,
        name: "TechBlog Pro",
        url: "https://techblog.pro",
        platform: "WordPress",
        status: "connected",
        pages: 145,
        lastSync: "2 mins ago",
        visibilityScore: 85,
    },
    {
        id: 2,
        name: "SaaS Landing",
        url: "https://saas-landing.com",
        platform: "Next.js",
        status: "connected",
        pages: 12,
        lastSync: "1 hour ago",
        visibilityScore: 92,
    },
    {
        id: 3,
        name: "E-Shop Direct",
        url: "https://eshop-direct.store",
        platform: "Shopify",
        status: "error",
        pages: 560,
        lastSync: "2 days ago",
        visibilityScore: 64,
    },
]

export default function SitesPage() {
    const [syncing, setSyncing] = useState<number | null>(null)

    const handleAddSite = () => {
        alert("🚀 Add New Site Modal would open here!\n\nYou would connect:\n• WordPress\n• Shopify\n• Next.js\n• Custom API")
    }

    const handleSync = (siteId: number, siteName: string) => {
        setSyncing(siteId)
        setTimeout(() => {
            setSyncing(null)
            alert(`✅ Site "${siteName}" synced successfully!\n\n• Pages crawled: Updated\n• Visibility score: Recalculated\n• Issues detected: 2 new`)
        }, 1500)
    }

    const handleViewDetails = (siteName: string) => {
        alert(`📊 Viewing details for "${siteName}"\n\n• Page-by-page analysis\n• Indexing status\n• AI readability score\n• Schema validation\n• Link structure`)
    }

    const handleSettings = (siteName: string) => {
        alert(`⚙️ Settings for "${siteName}"\n\n• API credentials\n• Sync frequency\n• Notification preferences\n• Auto-fix settings`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Connected Sites</h1>
                    <p className="text-muted-foreground">Manage your websites and integrations.</p>
                </div>
                <Button onClick={handleAddSite} className="cursor-pointer">
                    <Plus className="mr-2 h-4 w-4" /> Add Site
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sites.map((site) => (
                    <Card key={site.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {site.name}
                            </CardTitle>
                            <Badge variant={site.status === "connected" ? "default" : "destructive"}>
                                {site.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                                <Globe className="h-4 w-4" />
                                <a href={site.url} target="_blank" rel="noreferrer" className="hover:underline flex items-center">
                                    {site.url} <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <div className="text-2xl font-bold">{site.visibilityScore}</div>
                                    <p className="text-xs text-muted-foreground">Visibility Score</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">{site.pages}</div>
                                    <p className="text-xs text-muted-foreground">Pages Indexed</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                <div className="flex items-center">
                                    <RefreshCw className="mr-1 h-3 w-3" />
                                    {site.lastSync}
                                </div>
                                <div className="font-medium">{site.platform}</div>
                            </div>

                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 cursor-pointer"
                                    onClick={() => handleViewDetails(site.name)}
                                >
                                    <Eye className="mr-2 h-4 w-4" /> View
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 cursor-pointer"
                                    onClick={() => handleSync(site.id, site.name)}
                                    disabled={syncing === site.id}
                                >
                                    <RefreshCw className={`mr-2 h-4 w-4 ${syncing === site.id ? 'animate-spin' : ''}`} />
                                    {syncing === site.id ? 'Syncing...' : 'Sync'}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="cursor-pointer"
                                    onClick={() => handleSettings(site.name)}
                                >
                                    <SettingsIcon className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
