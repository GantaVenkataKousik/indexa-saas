import { AIAssistant } from "@/components/ai-assistant"

export default function AgentPage() {
    return (
        <div className="flex flex-col h-full p-6 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">AI Agent</h1>
                    <p className="text-muted-foreground">
                        Interact with your intelligent assistant to analyze data and get insights.
                    </p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 lg:col-span-2 space-y-6">
                    <div className="bg-card rounded-xl border shadow-sm p-6 min-h-[500px] flex flex-col items-center justify-center text-center space-y-4">
                        <div className="bg-primary/10 p-6 rounded-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                                <path d="M12 12 2.1 12a10.1 10.1 0 0 0 1.8 3.9" />
                                <path d="M12 12 16.9 2.1a10.1 10.1 0 0 0-3.9-1.8" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold">How can I help you today?</h2>
                        <p className="text-muted-foreground max-w-md">
                            I can analyze your citation consistency, suggest new directories, or draft responses to reviews.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mt-4">
                            <button className="p-4 text-sm text-left border rounded-lg hover:bg-accent transition-colors">
                                "Analyze my citation consistency score"
                            </button>
                            <button className="p-4 text-sm text-left border rounded-lg hover:bg-accent transition-colors">
                                "Find top 5 missing directories for my niche"
                            </button>
                            <button className="p-4 text-sm text-left border rounded-lg hover:bg-accent transition-colors">
                                "Draft a response to the latest negative review"
                            </button>
                            <button className="p-4 text-sm text-left border rounded-lg hover:bg-accent transition-colors">
                                "Summarize my weekly traffic performance"
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-card rounded-xl border shadow-sm p-6">
                        <h3 className="font-semibold mb-4">Capabilities</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Real-time Data Analysis
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Competitor Insights
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Content Generation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-green-500" />
                                Automated Reporting
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
