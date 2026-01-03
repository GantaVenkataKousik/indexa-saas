"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
  Moon,
  Sun,
  LogIn,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useAuthContext } from "@/app/components/auth-provider"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sites", href: "/sites", icon: Globe, badge: "3" },
  { name: "Research", href: "/research", icon: Search },
  { name: "Content", href: "/content", icon: FileText },
  { name: "Distribution", href: "/distribution", icon: Share2 },
  { name: "AI Citations", href: "/citations", icon: Sparkles },
  { name: "Agent", href: "/agent", icon: Sparkles },
  { name: "Settings", href: "/settings", icon: Settings },
]

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export function Sidebar({ isOpen = true, onClose, className }: SidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { user, logout } = useAuthContext()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
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
          "flex h-screen flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300",
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
        <div className="flex h-20 items-center justify-between px-6 border-b border-sidebar-border">
          {/* Mobile Close Button */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-sidebar-accent lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar-primary shadow-lg shadow-sidebar-primary/30">
                <FileText className="h-6 w-6 text-sidebar-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-base text-sidebar-foreground">Indexa</div>
                <div className="text-xs text-muted-foreground">Visibility Operations</div>
              </div>
            </div>
          )}
          {isCollapsed && !isMobile && (
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sidebar-primary shadow-lg shadow-sidebar-primary/30 mx-auto">
              <FileText className="h-6 w-6 text-sidebar-primary-foreground" />
            </div>
          )}

          {/* Desktop Collapse Button */}
          {!isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className={cn("h-8 w-8 p-0 hover:bg-sidebar-accent", isCollapsed && "mx-auto mt-2")}
            >
              {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          )}
        </div>

        <nav className="flex-1 px-4 py-6">
          {!isCollapsed && (
            <div className="mb-3 px-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Main Menu</div>
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
                      ? "bg-sidebar-accent text-sidebar-primary shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                    isCollapsed && !isMobile && "justify-center",
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {(!isCollapsed || isMobile) && <span>{item.name}</span>}
                  </div>
                  {item.badge && (!isCollapsed || isMobile) && (
                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900 dark:text-orange-300 text-xs px-2 py-0.5 font-semibold">
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
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
                disabled={!mounted}
              >
                {mounted && theme === 'dark' ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                <Headphones className="h-5 w-5" />
                <span>Contact Support</span>
              </button>
              <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 p-4 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-amber-900/50 shadow-sm">
                    <Gift className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Free Gift Awaits You!</div>
                    <button className="text-xs text-orange-600 dark:text-orange-400 font-medium hover:text-orange-700 dark:hover:text-orange-300 flex items-center gap-1">
                      Upgrade your account
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-sidebar-border p-4">
              <div className="flex items-center gap-3 mb-3 p-2 rounded-xl hover:bg-sidebar-accent transition-colors cursor-pointer">
                <Avatar className="h-10 w-10 bg-sidebar-primary shadow-sm">
                  <AvatarFallback className="text-sm font-semibold text-sidebar-primary-foreground bg-transparent">
                    {user?.displayName ? user.displayName.substring(0, 2).toUpperCase() : "GU"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-sidebar-foreground">
                    {user?.displayName || "Guest User"}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    {user?.email || "guest@indexa.ai"}
                  </div>
                </div>
              </div>
              {user ? (
                <button
                  onClick={() => {
                    logout()
                    if (isMobile && onClose) onClose()
                  }}
                  className="flex w-full items-center gap-2 px-2 py-2 text-sm text-sidebar-foreground hover:text-sidebar-primary rounded-lg hover:bg-sidebar-accent transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <Link
                  href="/sign-in"
                  onClick={() => {
                    if (isMobile && onClose) onClose()
                  }}
                  className="flex items-center gap-2 px-2 py-2 text-sm text-sidebar-foreground hover:text-sidebar-primary rounded-lg hover:bg-sidebar-accent transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              )}
            </div>
          </>
        )}

        {isCollapsed && !isMobile && (
          <div className="border-t border-sidebar-border p-4">
            {/* Theme Toggle Icon Only */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="flex items-center justify-center p-2 mb-3 text-sm text-sidebar-foreground hover:text-sidebar-primary rounded-lg hover:bg-sidebar-accent transition-colors mx-auto"
              title={mounted && theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              disabled={!mounted}
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Avatar className="h-10 w-10 bg-sidebar-primary shadow-sm mx-auto mb-3 cursor-pointer">
              <AvatarFallback className="text-sm font-semibold text-sidebar-primary-foreground bg-transparent">
                {user?.displayName ? user.displayName.substring(0, 2).toUpperCase() : "GU"}
              </AvatarFallback>
            </Avatar>
            {user ? (
              <button
                onClick={() => logout()}
                className="flex items-center justify-center p-2 text-sm text-sidebar-foreground hover:text-sidebar-primary rounded-lg hover:bg-sidebar-accent transition-colors w-full"
                title="Sign Out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            ) : (
              <Link
                href="/sign-in"
                className="flex items-center justify-center p-2 text-sm text-sidebar-foreground hover:text-sidebar-primary rounded-lg hover:bg-sidebar-accent transition-colors"
                title="Sign In"
              >
                <LogIn className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  )
}
