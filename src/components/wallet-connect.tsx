"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

// Import types only - not the actual implementation
import type { InjectedExtension } from "@polkadot/extension-inject/types"
import type { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // This effect runs only on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const connectWallet = async () => {
    try {
      setConnecting(true)
      
      if (typeof window === 'undefined') {
        return
      }

      // Dynamically import the extension only on the client side
      const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp')
      
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

  // Don't render anything meaningful during SSR
  if (!isClient) {
    return (
      <div>
        <Button disabled>
          Connect Wallet
        </Button>
      </div>
    )
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