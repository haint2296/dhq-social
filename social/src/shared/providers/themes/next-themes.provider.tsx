"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import * as React from "react"

export function NextThemesProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  )
}
