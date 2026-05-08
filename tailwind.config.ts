import type { Config } from "tailwindcss"

export default {
  content: ["./Frontend/index.html", "./Frontend/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: "hsl(var(--popover))",
        card: "hsl(var(--card))",
      },
      borderRadius: {
        lg: "var(--radius-lg, 1.25rem)",
        md: "var(--radius-md, 0.75rem)",
        sm: "var(--radius-sm, 0.5rem)",
      },
    },
  },
} satisfies Config