"use client"

import type React from "react"
import { Sidebar } from "@/app/components/sidebar"
import { Button } from "@/app/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-4 left-4 z-60 lg:hidden bg-white border-gray-200 shadow-sm"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-4 w-4" />
      </Button>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
