"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThreadCard } from "@/components/threads/thread-card"
import { Badge } from "@/components/ui/badge"
import { threads, domains } from "@/lib/data"

export default function Home() {
  const [displayedThreads, setDisplayedThreads] = useState<typeof threads>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading from an API
    setTimeout(() => {
      setDisplayedThreads(threads)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recent Discussions</h1>
        <div className="flex gap-2">
          {domains.slice(0, 4).map(domain => (
            <Link key={domain.name} href={`/${domain.name}`}>
              <Badge variant="outline" className="cursor-pointer">{domain.name}</Badge>
            </Link>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {displayedThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              id={thread.id}
              domain={thread.domain}
              title={thread.title}
              author={thread.author}
              time={thread.time}
              sbtBadge={thread.sbtBadge}
            />
          ))}
        </div>
      )}
    </div>
  )
}
