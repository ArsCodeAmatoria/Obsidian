"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Comment } from "@/components/threads/comment"
import { CommentForm } from "@/components/threads/comment-form"
import { sampleComments } from "@/lib/data"

interface PostPageProps {
  params: {
    domain: string
    id: string
  }
}

interface Post {
  id: string;
  domain: string;
  title: string;
  content: string;
  author: string;
  time: string;
}

interface CommentType {
  author: string;
  content: string;
  time: string;
}

export default function PostPage(props: PostPageProps) {
  // Using destructuring with default values to safely access params
  const domain = props.params?.domain || '';
  const id = props.params?.id || '';
  
  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<CommentType[]>([])
  const [loading, setLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    if (!domain || !id) return;
    
    // Mock data fetch
    const mockPost: Post = {
      id,
      domain,
      title: `Thread #${id} in ${domain}`,
      content: `This is a detailed discussion about topic #${id} in the ${domain} domain. It includes technical details and proposals for improvement.`,
      author: 'zk_user1',
      time: '3 hours ago'
    }

    // Get comments from sample data if available, otherwise use empty array
    const mockComments = sampleComments[id] || [];
    
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
    const newComment: CommentType = {
      author: 'You',
      content,
      time: 'Just now'
    }
    setComments([...comments, newComment])
  }

  if (loading) {
    return <div className="text-center py-12">Loading...</div>
  }

  if (!post) {
    return <div className="text-center py-12">Thread not found</div>
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