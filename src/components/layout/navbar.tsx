"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { WalletConnect } from "@/components/wallet-connect"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl">
            Obsidian
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <WalletConnect />
        </div>
      </div>
    </header>
  )
} 