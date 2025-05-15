"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface CommentFormProps {
  onSubmit: (content: string) => void
  hasAccess: boolean
}

export function CommentForm({ onSubmit, hasAccess }: CommentFormProps) {
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent("")
    }
  }

  if (!hasAccess) {
    return (
      <div className="mt-6 p-4 border rounded-lg bg-muted/30">
        <p className="text-sm text-muted-foreground text-center">
          You need appropriate SBT or ZK verification to comment.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write a comment..."
        className="min-h-[100px] mb-2"
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={!content.trim()}>
          Post Comment
        </Button>
      </div>
    </form>
  )
} 