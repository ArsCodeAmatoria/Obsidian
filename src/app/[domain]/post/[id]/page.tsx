"use client"

import React, { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Comment } from "@/components/threads/comment"
import { CommentForm } from "@/components/threads/comment-form"
import { sampleComments } from "@/lib/data"
import { PostContent } from "./post-content"

interface PostPageProps {
  params: {
    domain: string;
    id: string;
  }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-12">Loading post...</div>}>
        <PostContent domain={params.domain} id={params.id} />
      </Suspense>
    </div>
  )
} 