import type { App, Location, User } from "../types"

export const mockApps: App[] = [
  {
    id: "bookings",
    name: "Bookings",
    icon: "📅",
    color: "#2196F3",
    badge: 12,
    roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "waitlist",
    name: "Waitlist",
    icon: "⏰",
    color: "#FF9800",
    badge: 8,
    roles: ["host", "manager", "area-manager", "franchisee"],
  },
  {
    id: "crm",
    name: "CRM & Marketing",
    icon: "👥",
    color: "#1DE9B6",
    roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner", "group-marketing-director"],
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: "⭐",
    color: "#FFC107",
    badge: 3,
    roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "remy",
    name: "Remy AI",
    icon: "🤖",
    color: "#7C4DFF",
    badge: 2,
    roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "insights",
    name: "Insights",
    icon: "📊",
    color: "#9C27B0",
    roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "ordering",
    name: "Ordering & Menu",
    icon: "🍽️",
    color: "#4CAF50",
    roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "users",
    name: "Users",
    icon: "👤",
    color: "#607D8B",
    roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "communication",
    name: "Communication Hub",
    icon: "💬",
    color: "#1DE9B6",
    badge: 5,
    roles: ["host", "manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "🔧",
    color: "#795548",
    roles: ["manager", "area-manager", "franchisee", "owner"],
  },
  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",
    color: "#9E9E9E",
    roles: ["manager", "area-manager", "franchisee", "brand-manager", "owner"],
  },
  { id: "billing", name: "Billing", icon: "💳", color: "#FF5722", roles: ["franchisee", "owner"] },
]

export const mockLocations: Location[] = [
  { id: "1", name: "Downtown", occupancy: 78, revenue: 12450, covers: 234, rating: 4.8, status: "good" },
  { id: "2", name: "Mall Plaza", occupancy: 92, revenue: 15200, covers: 287, rating: 4.6, status: "warning" },
  { id: "3", name: "Airport", occupancy: 65, revenue: 9800, covers: 189, rating: 4.9, status: "good" },
  { id: "4", name: "Beachfront", occupancy: 45, revenue: 7200, covers: 145, rating: 4.4, status: "critical" },
]

export const mockUsers: Record<string, User> = {
  "demo@restoguru.com": {
    id: "1",
    email: "demo@restoguru.com",
    name: "Demo User",
    role: "manager",
    avatar: "/diverse-avatars.png",
    locations: ["1"],
    brands: ["brand1"],
  },
}
