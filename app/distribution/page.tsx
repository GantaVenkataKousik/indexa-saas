"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    Share2,
    Twitter,
    Linkedin,
    Facebook,
    ExternalLink,
    BarChart2,
    Plus,
} from "lucide-react"
import { useState } from "react"

const channels = [
    {
        id: 1,
        name: "LinkedIn",
        icon: Linkedin,
        status: "Connected",
        followers: "12.5k",
        engagement: "+5.2%",
        color: "text-blue-600",
    },
    {
        id: 2,
        name: "Twitter / X",
        icon: Twitter,
        status: "Connected",
        followers: "8.2k",
        engagement: "+12.4%",
        color: "text-sky-500",
    },
    {
        id: 3,
        name: "Medium",
        icon: Share2,
        status: "Not Connected",
        followers: "-",
        engagement: "-",
        color: "text-gray-800",
    },
]

export default function DistributionPage() {
    const handleManageConnections = () => {
        alert("🔗 Manage Connections\n\nAvailable platforms:\n✅ LinkedIn\n✅ Twitter/X\n• Medium\n• Dev.to\n• Hashnode\n• Substack\n• Reddit\n• Facebook")
    }

    const handleViewAnalytics = (channelName: string) => {
        alert(`📊 Analytics for ${channelName}\n\n• Impressions: 45.2K\n• Engagement rate: 12.4%\n• Click-through: 3.8%\n• Best posting time: 9-11 AM\n• Top content: AI Visibility Guide`)
    }

    const handleConnect = (channelName: string) => {
        alert(`🔗 Connecting to ${channelName}...\n\nSteps:\n1. OAuth authentication\n2. Select posting preferences\n3. Configure auto-scheduling\n4. Test connection`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Distribution Channels</h1>
                    <p className="text-muted-foreground">Amplify your content across multiple platforms.</p>
                </div>
                <Button variant="outline" onClick={handleManageConnections} className="cursor-pointer">
                    <Plus className="mr-2 h-4 w-4" /> Manage Connections
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {channels.map((channel) => (
                    <Card key={channel.id}>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-lg font-medium flex items-center gap-2">
                                <channel.icon className={`h-5 w-5 ${channel.color}`} />
                                {channel.name}
                            </CardTitle>
                            <Badge variant={channel.status === "Connected" ? "default" : "secondary"}>
                                {channel.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <div className="text-2xl font-bold">{channel.followers}</div>
                                    <p className="text-xs text-muted-foreground">Followers</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-green-600">{channel.engagement}</div>
                                    <p className="text-xs text-muted-foreground">Engagement</p>
                                </div>
                            </div>
                            {channel.status === "Connected" ? (
                                <Button
                                    className="w-full mt-6 cursor-pointer"
                                    variant="outline"
                                    onClick={() => handleViewAnalytics(channel.name)}
                                >
                                    View Analytics <BarChart2 className="ml-2 h-4 w-4" />
                                </Button>
                            ) : (
                                <Button
                                    className="w-full mt-6 cursor-pointer"
                                    onClick={() => handleConnect(channel.name)}
                                >
                                    Connect <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
