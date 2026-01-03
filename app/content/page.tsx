"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import {
    FileText,
    Plus,
    Calendar as CalendarIcon,
    MoreVertical,
    CheckCircle2,
    Clock,
    Edit,
    Eye,
    Share2,
} from "lucide-react"
import { useState } from "react"

const posts = [
    {
        id: 1,
        title: "The Future of AI Search",
        status: "Published",
        date: "Oct 24, 2025",
        author: "Sarah M.",
        views: 1240,
    },
    {
        id: 2,
        title: "Optimizing for Perplexity",
        status: "Draft",
        date: "Oct 28, 2025",
        author: "Sarah M.",
        views: 0,
    },
    {
        id: 3,
        title: "Understanding LLM Citations",
        status: "Scheduled",
        date: "Nov 01, 2025",
        author: "Mike R.",
        views: 0,
    },
]

export default function ContentPage() {
    const handleCreatePost = () => {
        alert("✍️ Creating new post...\n\nEditor features:\n• AI writing assistant\n• SEO optimization\n• Schema markup\n• Multi-platform publishing\n• Citation optimization")
    }

    const handleEdit = (title: string) => {
        alert(`✏️ Editing "${title}"\n\n• Rich text editor\n• AI suggestions\n• SEO analysis\n• Preview mode`)
    }

    const handleView = (title: string) => {
        alert(`👁️ Viewing "${title}"\n\n• Live preview\n• Mobile view\n• Desktop view\n• SEO preview`)
    }

    const handleDistribute = (title: string) => {
        alert(`🚀 Distributing "${title}"\n\nChannels:\n✅ LinkedIn\n✅ Twitter/X\n✅ Medium\n✅ Dev.to\n• Newsletter`)
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Content Calendar</h1>
                    <p className="text-muted-foreground">Manage and schedule your blog posts.</p>
                </div>
                <Button onClick={handleCreatePost} className="cursor-pointer w-full sm:w-auto">
                    <Plus className="mr-2 h-4 w-4" /> Create Post
                </Button>
            </div>

            <div className="grid gap-4">
                {posts.map((post) => (
                    <Card key={post.id}>
                        <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-indigo-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{post.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center">
                                            <CalendarIcon className="mr-1 h-3 w-3" /> {post.date}
                                        </span>
                                        <span>By {post.author}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <Badge variant={post.status === "Published" ? "default" : post.status === "Draft" ? "secondary" : "outline"}>
                                        {post.status}
                                    </Badge>
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={() => handleView(post.title)}
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="cursor-pointer"
                                        onClick={() => handleEdit(post.title)}
                                    >
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    {post.status === "Published" && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="cursor-pointer"
                                            onClick={() => handleDistribute(post.title)}
                                        >
                                            <Share2 className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
