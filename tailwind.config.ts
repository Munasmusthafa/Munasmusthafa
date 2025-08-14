import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Background Colors
        'bg-primary': '#121212',
        'bg-secondary': '#1E1E1E',
        'bg-tertiary': '#232323',
        'bg-quaternary': '#2C2C2C',
        'bg-dark': '#333333',
        
        // Text Colors
        'text-primary': 'rgba(255, 255, 255, 0.95)',
        'text-secondary': 'rgba(255, 255, 255, 0.87)',
        'text-tertiary': 'rgba(255, 255, 255, 0.8)',
        'text-muted': 'rgba(255, 255, 255, 0.6)',
        'text-disabled': 'rgba(255, 255, 255, 0.5)',
        'text-faint': 'rgba(255, 255, 255, 0.4)',
        'text-ghost': 'rgba(255, 255, 255, 0.3)',
        'text-minimal': 'rgba(255, 255, 255, 0.2)',
        
        // Performance Colors
        'excellent': '#4CAF50',
        'good': '#8BC34A',
        'average': '#FFC107',
        'poor': '#FF9800',
        'bad': '#F44336',
        
        // Utility Colors
        'border-default': 'rgba(255, 255, 255, 0.06)',
        'border-hover': 'rgba(255, 255, 255, 0.1)',
        'border-active': 'rgba(255, 255, 255, 0.3)',
        'overlay': 'rgba(255, 255, 255, 0.05)',
        'overlay-hover': 'rgba(255, 255, 255, 0.08)',
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '50%',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'md': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.4)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.5)',
        '2xl': '0 16px 48px rgba(0, 0, 0, 0.6)',
      },
      transitionDuration: {
        'fast': '0.15s',
        'base': '0.2s',
        'slow': '0.3s',
        'slower': '0.5s',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
