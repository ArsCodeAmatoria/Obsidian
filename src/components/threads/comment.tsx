"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface CommentProps {
  author: string
  content: string
  time: string
}

export function Comment({ author, content, time }: CommentProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={`https://api.dicebear.com/7.x/identicon/svg?seed=${author}`} />
            <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{author}</div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 pb-2">
        <div className="text-sm">{content}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="text-xs text-muted-foreground">{time}</div>
      </CardFooter>
    </Card>
  )
} 