"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ThreadCardProps {
  id: string
  domain: string
  title: string
  author: string
  time: string
  sbtBadge?: string
}

export function ThreadCard({ id, domain, title, author, time, sbtBadge }: ThreadCardProps) {
  return (
    <Link href={`/${domain}/post/${id}`}>
      <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
        <CardHeader className="p-4 pb-2">
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 pb-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={`https://api.dicebear.com/7.x/identicon/svg?seed=${author}`} />
              <AvatarFallback>{author.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground">{author}</div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="text-xs text-muted-foreground">{time}</div>
          {sbtBadge && <Badge variant="outline">{sbtBadge}</Badge>}
        </CardFooter>
      </Card>
    </Link>
  )
} 