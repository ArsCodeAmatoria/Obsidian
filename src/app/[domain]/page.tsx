"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ThreadCard } from "@/components/threads/thread-card"
import { Button } from "@/components/ui/button"

interface DomainPageProps {
  params: {
    domain: string
  }
}

interface Thread {
  id: string;
  domain: string;
  title: string;
  author: string;
  time: string;
  sbtBadge?: string;
}

export default function DomainPage({ params }: DomainPageProps) {
  const { domain } = params
  const [threads, setThreads] = useState<Thread[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockThreads: Thread[] = [
      {
        id: '1',
        domain,
        title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} Thread 1`,
        author: 'zk_user1',
        time: '2 hours ago',
        sbtBadge: 'Core Contributor'
      },
      {
        id: '2',
        domain,
        title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} Thread 2`,
        author: 'zk_user2',
        time: '5 hours ago',
        sbtBadge: 'Member'
      },
      {
        id: '3',
        domain,
        title: `${domain.charAt(0).toUpperCase() + domain.slice(1)} Thread 3`,
        author: 'zk_user3',
        time: '1 day ago'
      }
    ]
    
    setTimeout(() => {
      setThreads(mockThreads)
      setLoading(false)
    }, 500)
  }, [domain])

  return (
    <div>
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
          {threads.map((thread) => (
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