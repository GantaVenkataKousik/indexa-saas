"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { useState } from "react"

export default function SettingsPage() {
    const handleSaveProfile = () => {
        alert("✅ Profile updated successfully!\n\n• Name updated\n• Email verified\n• Settings saved")
    }

    const handleRegenerateKey = () => {
        alert("🔑 API Key Regenerated!\n\nNew key: sk-proj-abc123xyz...\n\n⚠️ Update this key in your applications.\nOld key will expire in 24 hours.")
    }

    const handleManageSubscription = () => {
        alert("💳 Subscription Management\n\nCurrent plan: Pro ($49/month)\n\nOptions:\n• Upgrade to Growth\n• Downgrade to Free\n• Update payment method\n• View billing history\n• Cancel subscription")
    }

    return (
        <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">Manage your account and preferences.</p>
                </div>
            </div>

            <Tabs defaultValue="general" className="w-full">
                <TabsList>
                    <TabsTrigger value="general" className="cursor-pointer">General</TabsTrigger>
                    <TabsTrigger value="integrations" className="cursor-pointer">Integrations</TabsTrigger>
                    <TabsTrigger value="billing" className="cursor-pointer">Billing</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your personal details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="John Doe" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" defaultValue="john@example.com" />
                            </div>
                            <Button onClick={handleSaveProfile} className="cursor-pointer">Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="integrations" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>API Keys</CardTitle>
                            <CardDescription>Manage your API keys for external access.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label>OpenAI API Key</Label>
                                <Input type="password" value="sk-................" readOnly />
                            </div>
                            <Button variant="outline" onClick={handleRegenerateKey} className="cursor-pointer">Regenerate Key</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="billing" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Subscription</CardTitle>
                            <CardDescription>Manage your plan and billing details.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <p className="font-medium">Pro Plan</p>
                                    <p className="text-sm text-muted-foreground">$49/month</p>
                                </div>
                                <Button variant="outline" onClick={handleManageSubscription} className="cursor-pointer">Manage Subscription</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
