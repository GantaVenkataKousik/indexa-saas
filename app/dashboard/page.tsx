"use client"

import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar"
import { Badge } from "@/app/components/ui/badge"
import {
  Users,
  Receipt,
  Clock,
  CheckCircle,
  UserPlus,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  MoreVertical,
  CalendarIcon,
  Bell,
  MessageSquare,
  X,
  PanelRightOpen,
  PanelRightClose,
  FileText,
  DollarSign,
  Briefcase,
} from "lucide-react"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, Bar, BarChart, Cell, Pie, PieChart, YAxis, LineChart, Line, CartesianGrid } from "recharts"
import { cn } from "@/lib/utils"
import { useState } from "react"

const stats = [
  {
    title: "Visibility Score",
    value: "85",
    percentage: "+12%",
    trend: "up",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    icon: TrendingUp,
    trendColor: "text-green-600",
    subtitle: "from last month",
  },
  {
    title: "AI Citations",
    value: "1,240",
    percentage: "+24%",
    trend: "up",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: MessageSquare,
    trendColor: "text-green-600",
    subtitle: "mentions across AI",
  },
  {
    title: "Indexed Pages",
    value: "450",
    percentage: "+5%",
    trend: "up",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    icon: CheckCircle,
    trendColor: "text-green-600",
    subtitle: "total indexed",
  },
  {
    title: "Issues Fixed",
    value: "12",
    percentage: "-2",
    trend: "down",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    icon: CheckCircle,
    trendColor: "text-green-600",
    subtitle: "pending fixes",
  },
]

const chartData = [
  { month: "Jan", score: 65, lastYear: 50 },
  { month: "Feb", score: 68, lastYear: 52 },
  { month: "Mar", score: 72, lastYear: 55 },
  { month: "Apr", score: 75, lastYear: 58 },
  { month: "May", score: 82, lastYear: 60 },
  { month: "Jun", score: 85, lastYear: 62 },
]

const deviceData = [
  { name: "Desktop", value: 45, color: "#6366f1" },
  { name: "Mobile", value: 32, color: "#8b5cf6" },
  { name: "Tablet", value: 23, color: "#ec4899" },
]

const revenueData = [
  { name: "Jan", citations: 420 },
  { name: "Feb", citations: 510 },
  { name: "Mar", citations: 480 },
  { name: "Apr", citations: 620 },
  { name: "May", citations: 710 },
  { name: "Jun", citations: 840 },
]

// Content pipeline data
const contentPipelineData = [
  { stage: "Draft", count: 12, color: "#3b82f6" },
  { stage: "Review", count: 8, color: "#6366f1" },
  { stage: "Published", count: 45, color: "#8b5cf6" },
  { stage: "Indexed", count: 42, color: "#a855f7" },
  { stage: "Cited", count: 28, color: "#10b981" },
]

// Lead conversion rate over time
const conversionData = [
  { month: "Jan", rate: 18, leads: 350, conversions: 63 },
  { month: "Feb", rate: 22, leads: 380, conversions: 84 },
  { month: "Mar", rate: 19, leads: 420, conversions: 80 },
  { month: "Apr", rate: 25, leads: 390, conversions: 98 },
  { month: "May", rate: 28, leads: 450, conversions: 126 },
  { month: "Jun", rate: 31, leads: 480, conversions: 149 },
]

// Traffic source breakdown
const trafficSourceData = [
  { segment: "Organic Search", revenue: 45000, percentage: 45, color: "#6366f1" },
  { segment: "AI Referrals", revenue: 30000, percentage: 30, color: "#8b5cf6" },
  { segment: "Direct", revenue: 20000, percentage: 20, color: "#ec4899" },
  { segment: "Social", revenue: 5000, percentage: 5, color: "#f59e0b" },
]

// Client acquisition cost trend
const acquisitionCostData = [
  { month: "Jan", cost: 450, newClients: 12 },
  { month: "Feb", cost: 380, newClients: 15 },
  { month: "Mar", cost: 520, newClients: 10 },
  { month: "Apr", cost: 420, newClients: 18 },
  { month: "May", cost: 350, newClients: 22 },
  { month: "Jun", cost: 280, newClients: 25 },
]

// Task completion timeline
const taskTimelineData = [
  { week: "W1", completed: 45, planned: 50, efficiency: 90 },
  { week: "W2", completed: 52, planned: 55, efficiency: 95 },
  { week: "W3", completed: 48, planned: 60, efficiency: 80 },
  { week: "W4", completed: 63, planned: 65, efficiency: 97 },
]

// Client satisfaction scores
const satisfactionData = [
  { category: "Communication", score: 4.8, maxScore: 5 },
  { category: "Delivery Time", score: 4.5, maxScore: 5 },
  { category: "Quality", score: 4.9, maxScore: 5 },
  { category: "Support", score: 4.6, maxScore: 5 },
  { category: "Value", score: 4.4, maxScore: 5 },
]

const recentActivity = [
  {
    id: 1,
    user: "System",
    action: "crawled site",
    target: "indexa.ai",
    time: "Just now",
    avatar: "SY",
    color: "bg-blue-600",
  },
  {
    id: 2,
    user: "AI Monitor",
    action: "detected citation",
    target: "ChatGPT",
    time: "2 hours ago",
    avatar: "AI",
    color: "bg-green-600",
  },
  {
    id: 3,
    user: "Auto-Fixer",
    action: "fixed schema",
    target: "Blog Post #42",
    time: "5 hours ago",
    avatar: "AF",
    color: "bg-purple-600",
  },
  {
    id: 4,
    user: "System",
    action: "submitted sitemap",
    target: "Google Search Console",
    time: "1 day ago",
    avatar: "SY",
    color: "bg-orange-600",
  },
  {
    id: 5,
    user: "Content Engine",
    action: "published article",
    target: "AI Visibility Guide",
    time: "2 days ago",
    avatar: "CE",
    color: "bg-pink-600",
  },
  {
    id: 6,
    user: "Tom Wilson",
    action: "updated client info",
    target: "Tech Solutions Inc",
    time: "3 days ago",
    avatar: "TW",
    color: "bg-teal-600",
  },
]

const upcomingTasks = [
  { id: 1, title: "Review Q4 Budget", time: "Today, 2:00 PM", priority: "high", icon: DollarSign },
  { id: 2, title: "Client Meeting - Acme", time: "Tomorrow, 10:00 AM", priority: "medium", icon: Users },
  { id: 3, title: "Submit Monthly Report", time: "Friday, 5:00 PM", priority: "high", icon: FileText },
  { id: 4, title: "Team Standup", time: "Today, 4:00 PM", priority: "low", icon: Briefcase },
]

const recentDocuments = [
  { id: 1, name: "Q4 Financial Report.pdf", size: "2.4 MB", date: "Today", icon: FileText },
  { id: 2, name: "Client Proposal.docx", size: "1.8 MB", date: "Yesterday", icon: FileText },
  { id: 3, name: "Project Timeline.xlsx", size: "856 KB", date: "2 days ago", icon: FileText },
]

const teamPerformance = [
  { name: "Sarah Chen", tasks: 24, completion: 92, avatar: "SC", color: "bg-blue-600" },
  { name: "Mike Johnson", tasks: 18, completion: 88, avatar: "MJ", color: "bg-green-600" },
  { name: "Emma Wilson", tasks: 21, completion: 95, avatar: "EW", color: "bg-purple-600" },
]

const contacts = [
  { name: "Natali Craig", role: "Product Designer", avatar: "NC", status: "online" },
  { name: "Drew Cano", role: "Frontend Dev", avatar: "DC", status: "online" },
  { name: "Andi Lane", role: "Project Manager", avatar: "AL", status: "offline" },
  { name: "Koray Okumus", role: "UX Designer", avatar: "KO", status: "online" },
]

const initialNotifications = [
  {
    id: 1,
    title: "New client registered",
    time: "Just now",
    icon: Bell,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Expense approved",
    time: "2 hours ago",
    icon: CheckCircle,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    title: "Meeting reminder",
    time: "3 hours ago",
    icon: CalendarIcon,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    title: "New message received",
    time: "5 hours ago",
    icon: MessageSquare,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
]

export default function DashboardPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)

  const removeNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 relative">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
              <p className="text-sm sm:text-base text-gray-500">Welcome back, here's what's happening today</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-200 bg-white shadow-sm order-1 sm:order-none"
                onClick={() => setShowRightSidebar(!showRightSidebar)}
              >
                {showRightSidebar ? <PanelRightClose className="h-4 w-4" /> : <PanelRightOpen className="h-4 w-4" />}
                <span className="ml-2 hidden sm:inline">Activity</span>
              </Button>
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-200 bg-transparent relative"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="h-4 w-4" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </Button>

                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-xl border border-gray-100 z-50">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs">
                          {notifications.length} new
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => setShowNotifications(false)}
                      >
                        <X className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-gray-500 text-sm">No new notifications</div>
                      ) : (
                        <div className="p-2">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 group relative"
                            >
                              <div
                                className={cn(
                                  "flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0",
                                  notification.color,
                                )}
                              >
                                <notification.icon className={cn("h-4 w-4", notification.iconColor)} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 break-words">{notification.title}</p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                onClick={() => removeNotification(notification.id)}
                              >
                                <X className="h-3 w-3 text-gray-400" />
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Button variant="outline" className="border-gray-200 bg-transparent text-sm">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Today</span>
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 text-sm">
                <UserPlus className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Add New</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 md:mb-8">
            {stats.map((stat) => (
              <Card key={stat.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600 truncate">{stat.title}</CardTitle>
                  <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0", stat.bgColor)}>
                    <stat.icon className={cn("h-5 w-5", stat.iconColor)} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={cn("inline-flex items-center text-xs font-semibold", stat.trendColor)}>
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {stat.percentage}
                    </span>
                    <p className="text-xs text-gray-500 truncate">{stat.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3 mb-6 md:mb-8">
            <Card className="lg:col-span-2 border-0 shadow-sm">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Visibility Score Trend</CardTitle>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Comparing this year vs last year</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-gray-600">This year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gray-300" />
                    <span className="text-gray-600">Last year</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={chartData}>
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="lastYear"
                      stroke="#d1d5db"
                      strokeWidth={2}
                      fill="none"
                      strokeDasharray="5 5"
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#6366f1"
                      strokeWidth={3}
                      fill="#e0e7ff"
                      dot={{ r: 4, fill: "#6366f1" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Traffic by Device</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Last 30 days</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={deviceData}>
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="space-y-3 mt-4">
                  {deviceData.map((device) => (
                    <div key={device.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: device.color }} />
                        <span className="text-sm text-gray-600">{device.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3 mb-6 md:mb-8">
            <Card className="lg:col-span-2 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">AI Citations Trend</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Citation trend over the last 6 months</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={revenueData}>
                    <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value) => `${value}`}
                    />
                    <Bar dataKey="citations" fill="#6366f1" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Project Status</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Current distribution</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Completed", value: 45, color: "#10b981" },
                        { name: "In Progress", value: 35, color: "#6366f1" },
                        { name: "Pending", value: 20, color: "#f59e0b" },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {[
                        { name: "Completed", value: 45, color: "#10b981" },
                        { name: "In Progress", value: 35, color: "#6366f1" },
                        { name: "Pending", value: 20, color: "#f59e0b" },
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {[
                    { name: "Completed", value: 45, color: "#10b981" },
                    { name: "In Progress", value: 35, color: "#6366f1" },
                    { name: "Pending", value: 20, color: "#f59e0b" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-gray-600">{item.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Pipeline and Lead Conversion */}
          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Content Pipeline</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Current content status</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {contentPipelineData.map((stage, index) => (
                    <div key={stage.stage} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                        <span className="text-sm font-bold text-gray-900">{stage.count}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div
                          className="h-3 rounded-full transition-all duration-500"
                          style={{
                            backgroundColor: stage.color,
                            width: `${(stage.count / contentPipelineData[0].count) * 100}%`,
                          }}
                        />
                      </div>
                      {index < contentPipelineData.length - 1 && (
                        <div className="text-xs text-gray-500 mt-1 text-right">
                          {((contentPipelineData[index + 1].count / stage.count) * 100).toFixed(1)}% conversion
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Lead Conversion Rate</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Monthly conversion trend</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value, name) => {
                        if (name === "rate") return [`${value}%`, "Conversion Rate"]
                        if (name === "leads") return [value, "Total Leads"]
                        return [value, "Conversions"]
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#6366f1" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Client Acquisition Cost and Revenue by Segment */}
          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Client Acquisition Cost</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Cost per new client acquired</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={acquisitionCostData}>
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value, name) => {
                        if (name === "cost") return [`$${value}`, "Acquisition Cost"]
                        return [value, "New Clients"]
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="cost"
                      stroke="#f59e0b"
                      strokeWidth={3}
                      fill="#fef3c7"
                      dot={{ r: 4, fill: "#f59e0b" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">$280</p>
                    <p className="text-xs text-gray-500">Current CAC</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">-38%</p>
                    <p className="text-xs text-gray-500">vs last quarter</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Traffic Sources</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Traffic source breakdown</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={trafficSourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="percentage"
                    >
                      {trafficSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {trafficSourceData.map((segment) => (
                    <div key={segment.segment} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }} />
                        <span className="text-sm text-gray-600">{segment.segment}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-900">{segment.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Task Timeline and Client Satisfaction */}
          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 mb-6 md:mb-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Task Completion Timeline</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Weekly performance vs planned</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={taskTimelineData}>
                    <XAxis dataKey="week" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "white",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Bar dataKey="planned" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="completed" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <div className="flex items-center gap-4 mt-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-gray-300" />
                    <span className="text-gray-600">Planned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-gray-600">Completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Client Satisfaction</CardTitle>
                <p className="text-xs md:text-sm text-gray-500 mt-1">Average ratings across categories</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {satisfactionData.map((item) => (
                    <div key={item.category} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{item.category}</span>
                        <span className="text-sm font-bold text-gray-900">{item.score}/5</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(item.score / item.maxScore) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold text-indigo-600">4.6</div>
                  <div className="text-sm text-gray-500">Overall Satisfaction</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-3">
            <Card className="lg:col-span-2 border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-indigo-600" />
                  <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Top Performing Pages</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 text-xs md:text-sm"
                >
                  View All
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "/blog/ai-visibility-guide", hours: "2.4k visits", revenue: "145 citations", status: "indexed", avatar: "AV" },
                    { name: "/features/citation-tracking", hours: "1.8k visits", revenue: "98 citations", status: "indexed", avatar: "CT" },
                    { name: "/pricing", hours: "1.5k visits", revenue: "45 citations", status: "indexed", avatar: "PR" },
                  ].map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 md:h-11 md:w-11 bg-indigo-600">
                          <AvatarFallback className="text-xs md:text-sm font-semibold text-white bg-transparent">
                            {client.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm md:text-base font-semibold text-gray-900">{client.name}</p>
                          <p className="text-xs md:text-sm text-gray-500">{client.hours} this month</p>
                        </div>
                      </div>
                      <div className="text-right flex items-center gap-2 md:gap-3">
                        <div>
                          <p className="text-sm md:text-base font-semibold text-gray-900">{client.revenue}</p>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs mt-1">
                            {client.status}
                          </Badge>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4 text-gray-400" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base md:text-lg font-semibold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 bg-transparent text-sm"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Add New Site
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 bg-transparent text-sm"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Run AI Scan
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-green-50 hover:border-green-200 hover:text-green-600 bg-transparent text-sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Create Content
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-200 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent text-sm"
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Check Indexing
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showRightSidebar && (
        <>
          {/* Mobile Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setShowRightSidebar(false)}
          />

          {/* Right Sidebar */}
          <div className={cn(
            "fixed top-0 right-0 h-full bg-white z-50 overflow-y-auto shadow-xl lg:relative lg:shadow-none lg:border-l lg:border-gray-100",
            "w-80 transform transition-transform duration-300 ease-in-out",
            "lg:transform-none lg:translate-x-0"
          )}>
            {/* Mobile Close Button */}
            <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Activity Panel</h2>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => setShowRightSidebar(false)}
              >
                <X className="h-4 w-4 text-gray-400" />
              </Button>
            </div>

            <div className="p-6">
              {/* Activities Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Activities</h3>
                  <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 text-xs">
                    {recentActivity.length} new
                  </Badge>
                </div>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <Avatar className={cn("h-9 w-9", activity.color)}>
                        <AvatarFallback className="text-xs font-semibold text-white bg-transparent">
                          {activity.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-sm text-indigo-600 font-medium">{activity.target}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Tasks Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Upcoming Tasks</h3>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-indigo-600 hover:text-indigo-700">
                    View All
                  </Button>
                </div>
                <div className="space-y-2">
                  {upcomingTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all cursor-pointer"
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg",
                          task.priority === "high"
                            ? "bg-red-100"
                            : task.priority === "medium"
                              ? "bg-orange-100"
                              : "bg-blue-100",
                        )}
                      >
                        <task.icon
                          className={cn(
                            "h-4 w-4",
                            task.priority === "high"
                              ? "text-red-600"
                              : task.priority === "medium"
                                ? "text-orange-600"
                                : "text-blue-600",
                          )}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{task.title}</p>
                        <p className="text-xs text-gray-500">{task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Performance Section */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Team Performance</h3>
                <div className="space-y-3">
                  {teamPerformance.map((member) => (
                    <div key={member.name} className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Avatar className={cn("h-8 w-8", member.color)}>
                          <AvatarFallback className="text-xs font-semibold text-white bg-transparent">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{member.name}</p>
                            <span className="text-xs font-semibold text-gray-900">{member.completion}%</span>
                          </div>
                          <p className="text-xs text-gray-500">{member.tasks} tasks completed</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full transition-all"
                          style={{ width: `${member.completion}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Documents Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Recent Documents</h3>
                  <Button variant="ghost" size="sm" className="h-7 text-xs text-indigo-600 hover:text-indigo-700">
                    View All
                  </Button>
                </div>
                <div className="space-y-2">
                  {recentDocuments.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all cursor-pointer"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                        <doc.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.size} • {doc.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacts Section */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Contacts</h3>
                <div className="space-y-3">
                  {contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div className="relative">
                        <Avatar className="h-10 w-10 bg-indigo-600">
                          <AvatarFallback className="text-sm font-semibold text-white bg-transparent">
                            {contact.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {contact.status === "online" && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.role}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

function Plus({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  )
}
