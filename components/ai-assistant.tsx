"use client"

import * as React from "react"
import { Send, Bot, User, Loader2, Sparkles, X, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { geminiService, ChatMessage } from "@/services/gemini"

export function AIAssistant() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState<ChatMessage[]>([
        { role: 'model', parts: 'Hello! I am your Indexa AI assistant. How can I help you optimize your visibility today?' }
    ])
    const [input, setInput] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)
    const scrollAreaRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
        }
    }, [messages, isOpen])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage: ChatMessage = { role: 'user', parts: input }
        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            // Pass history excluding the last user message we just added locally for the API call if needed, 
            // but the service handles it.
            const responseText = await geminiService.askQuestion(input, messages)

            const botMessage: ChatMessage = { role: 'model', parts: responseText }
            setMessages(prev => [...prev, botMessage])
        } catch (error) {
            console.error("Failed to get response", error)
            setMessages(prev => [...prev, { role: 'model', parts: "I'm sorry, I encountered an error. Please try again." }])
        } finally {
            setIsLoading(false)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <>
            {/* Floating Trigger Button */}
            <div className="fixed bottom-6 right-6 z-50">
                {!isOpen && (
                    <Button
                        onClick={() => setIsOpen(true)}
                        size="icon"
                        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110"
                    >
                        <Sparkles className="h-6 w-6 text-primary-foreground" />
                    </Button>
                )}
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 z-50 w-[380px] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in">
                    <Card className="border-primary/20">
                        <CardHeader className="bg-primary/5 p-4 flex flex-row items-center justify-between space-y-0 rounded-t-lg">
                            <div className="flex items-center gap-2">
                                <div className="bg-primary/10 p-2 rounded-full">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <CardTitle className="text-base">Indexa AI</CardTitle>
                                    <CardDescription className="text-xs">Powered by Gemini</CardDescription>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                                <X className="h-4 w-4" />
                            </Button>
                        </CardHeader>

                        <CardContent className="p-0">
                            <ScrollArea className="h-[400px] p-4" ref={scrollAreaRef}>
                                <div className="flex flex-col gap-4">
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                "flex gap-2 max-w-[85%]",
                                                msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                                            )}
                                        >
                                            <div className={cn(
                                                "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                                                msg.role === 'user' ? "bg-primary text-primary-foreground" : "bg-muted"
                                            )}>
                                                {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                            </div>
                                            <div className={cn(
                                                "p-3 rounded-lg text-sm",
                                                msg.role === 'user'
                                                    ? "bg-primary text-primary-foreground rounded-tr-none"
                                                    : "bg-muted text-foreground rounded-tl-none"
                                            )}>
                                                {msg.parts}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex gap-2 mr-auto max-w-[85%]">
                                            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                                                <Bot className="h-4 w-4" />
                                            </div>
                                            <div className="bg-muted p-3 rounded-lg rounded-tl-none flex items-center">
                                                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </CardContent>

                        <CardFooter className="p-3 bg-background border-t">
                            <div className="flex w-full items-center gap-2">
                                <Input
                                    placeholder="Ask about your citations..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="flex-1 focus-visible:ring-1"
                                />
                                <Button size="icon" onClick={handleSend} disabled={isLoading || !input.trim()}>
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            )}
        </>
    )
}
