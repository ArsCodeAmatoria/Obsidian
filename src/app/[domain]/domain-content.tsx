"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThreadCard } from "@/components/threads/thread-card"
import { Button } from "@/components/ui/button"
import { threads as sampleThreads } from "@/lib/data"

interface Thread {
  id: string;
  domain: string;
  title: string;
  author: string;
  time: string;
  sbtBadge?: string;
}

export function DomainContent({ domain }: { domain: string }) {
  const [threads, setThreads] = useState<Thread[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!domain) return;
    
    // Filter the sample threads for this domain
    const domainThreads = sampleThreads.filter(thread => thread.domain === domain);
    
    // Simulate network delay
    setTimeout(() => {
      setThreads(domainThreads)
      setLoading(false)
    }, 500)
  }, [domain])

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold capitalize">{domain}</h1>
          <span className="text-muted-foreground">.dot</span>
        </div>
        <div className="flex gap-2">
          <Link href={`/${domain}/dao`}>
            <Button variant="outline" size="sm">DAO</Button>
          </Link>
          <Button size="sm">New Thread</Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid gap-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadCard
                key={thread.id}
                id={thread.id}
                domain={thread.domain}
                title={thread.title}
                author={thread.author}
                time={thread.time}
                sbtBadge={thread.sbtBadge}
              />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">No threads found in this domain</div>
          )}
        </div>
      )}
    </>
  )
} 