"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Share2,
  Calendar,
  Receipt,
  LogOut,
  FileText,
  Headphones,
  Gift,
  ChevronLeft,
  ChevronRight,
  X,
  Search,
  Settings,
  Sparkles,
  Globe,
  BarChart3,
  AlertCircle,
  Sun,
  Moon,
} from "lucide-react"
import { useState, useEffect } from "react"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sites", href: "/sites", icon: Globe, badge: "3" },
  { name: "Research", href: "/research", icon: Search },
  { name: "Content", href: "/content", icon: FileText },
  { name: "Distribution", href: "/distribution", icon: Share2 },
  { name: "AI Citations", href: "/citations", icon: Sparkles },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Issues", href: "/issues", icon: AlertCircle, badge: "5" },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export function Sidebar({ isOpen = true, onClose, className }: SidebarProps) {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={cn(
          "flex h-screen flex-col bg-white border-r border-gray-100 transition-all duration-300 dark:bg-slate-950 dark:border-slate-800",
          // Mobile: Fixed positioning with transform
          "fixed top-0 left-0 z-50 lg:relative lg:z-auto",
          // Width and transform based on state
          isCollapsed && !isMobile ? "w-20" : "w-64",
          // Mobile transform
          isMobile && !isOpen && "-translate-x-full",
          isMobile && isOpen && "translate-x-0",
          // Desktop always visible
          "lg:translate-x-0",
          className
        )}
      >
        <div className="flex h-20 items-center justify-between px-6 border-b border-gray-100 dark:border-slate-800">
          {/* Mobile Close Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-slate-800 lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/30">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-base dark:text-white">Indexa</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Visibility Operations</div>
              </div>
            </div>
          )}
          {isCollapsed && !isMobile && (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-500/30 mx-auto">
              <FileText className="h-6 w-6 text-white" />
            </div>
          )}

          {/* Desktop Collapse Button */}
          {!isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn("h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-slate-800", isCollapsed && "mx-auto mt-2")}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          )}
        </div>

        <nav className="flex-1 px-4 py-6">
          {!isCollapsed && (
            <div className="mb-3 px-3 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Main Menu</div>
          )}
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    if (isMobile && onClose) {
                      onClose()
                    }
                  }}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-indigo-50 text-indigo-600 shadow-sm dark:bg-indigo-900/20 dark:text-indigo-400"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white",
                    isCollapsed && !isMobile && "justify-center",
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {(!isCollapsed || isMobile) && <span>{item.name}</span>}
                  </div>
                  {item.badge && (!isCollapsed || isMobile) && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs px-2 py-0.5 font-semibold">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {(!isCollapsed || isMobile) && (
          <>
            <div className="px-4 pb-4 space-y-2">
              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors">
                <Headphones className="h-5 w-5" />
                <span>Contact Support</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
              >
                {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span>{mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>

            <div className="border-t border-gray-100 dark:border-slate-800 p-4">
              <div className="flex items-center gap-3 mb-3 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <Avatar className="h-10 w-10 bg-indigo-600 shadow-sm">
                  <AvatarFallback className="text-sm font-semibold text-white bg-transparent">GV</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">GVK</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">venkatakousikse01@gmail...</div>
                </div>
              </div>
              <Link
                href="/sign-in"
                onClick={() => {
                  if (isMobile && onClose) {
                    onClose()
                  }
                }}
                className="flex items-center gap-2 px-2 py-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Link>
            </div>
          </>
        )}

        {isCollapsed && !isMobile && (
          <div className="border-t border-gray-100 dark:border-slate-800 p-4 flex flex-col items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center p-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              title={mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}
            >
              {mounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <Avatar className="h-10 w-10 bg-indigo-600 shadow-sm cursor-pointer">
              <AvatarFallback className="text-sm font-semibold text-white bg-transparent">GV</AvatarFallback>
            </Avatar>
            <Link
              href="/sign-in"
              className="flex items-center justify-center p-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              title="Sign Out"
            >
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
