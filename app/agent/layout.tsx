import { Sidebar } from "@/components/sidebar"

export default function AgentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
                    <h1 className="text-2xl font-bold">AI Agent</h1>
                </header>
                <div className="flex flex-1 flex-col gap-4 overflow-auto p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}