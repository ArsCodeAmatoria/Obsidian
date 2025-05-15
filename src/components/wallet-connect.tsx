"use client"

import { useState, useEffect } from "react"
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp"
import { Button } from "@/components/ui/button"

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)

  const connectWallet = async () => {
    try {
      setConnecting(true)
      
      // Enable the extension
      const extensions = await web3Enable("Obsidian")
      
      if (extensions.length === 0) {
        console.error("No extension found")
        return
      }
      
      // Get all accounts
      const allAccounts = await web3Accounts()
      
      if (allAccounts.length > 0) {
        setAddress(allAccounts[0].address)
      } else {
        console.error("No accounts found")
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error)
    } finally {
      setConnecting(false)
    }
  }

  return (
    <div>
      {address ? (
        <Button variant="outline">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </Button>
      ) : (
        <Button onClick={connectWallet} disabled={connecting}>
          {connecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  )
} 