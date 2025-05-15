"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Comment } from "@/components/threads/comment"
import { CommentForm } from "@/components/threads/comment-form"
import { Button } from "@/components/ui/button"
import { hasAccessToContent } from "@/lib/sbt"
import { hasZKAccess } from "@/lib/zk"

interface PostPageProps {
  params: {
    domain: string
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const { domain, id } = params
  const [post, setPost] = useState<any>(null)
  const [comments, setComments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    // Mock data fetch
    const mockPost = {
      id,
      domain,
      title: `Thread #${id} in ${domain}`,
      content: `This is a detailed discussion about topic #${id} in the ${domain} domain. It includes technical details and proposals for improvement.`,
      author: 'zk_user1',
      time: '3 hours ago'
    }

    const mockComments = [
      {
        author: 'zk_user2',
        content: 'I agree with this proposal. It would solve several issues we\'ve been facing.',
        time: '2 hours ago'
      },
      {
        author: 'zk_user3',
        content: 'Have you considered the impact on storage requirements?',
        time: '1 hour ago'
      }
    ]

    // Simulate network delay
    setTimeout(() => {
      setPost(mockPost)
      setComments(mockComments)
      setLoading(false)

      // Check if user has access (would connect to wallet and verify SBT/ZK proofs)
      setHasAccess(true) // For demo purposes
    }, 500)
  }, [domain, id])

  const handleSubmitComment = (content: string) => {
    // Would actually submit to chain/IPFS
    const newComment = {
      author: 'You',
      content,
      time: 'Just now'
    }
    setComments([...comments, newComment])
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div>
      <div className="mb-4">
        <Link href={`/${domain}`} className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} className="mr-1" />
          Back to {domain}
        </Link>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">{post.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.time}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{post.content}</p>
        </CardContent>
      </Card>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        {comments.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">No comments yet</div>
        ) : (
          comments.map((comment, index) => (
            <Comment 
              key={index}
              author={comment.author}
              content={comment.content}
              time={comment.time}
            />
          ))
        )}
      </div>

      <CommentForm onSubmit={handleSubmitComment} hasAccess={hasAccess} />
    </div>
  )
} 