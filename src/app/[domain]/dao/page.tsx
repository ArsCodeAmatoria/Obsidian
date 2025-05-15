"use client"

import React, { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { proposals as sampleProposals } from "@/lib/data"
import { DAOContent } from "./dao-content"

interface DAOPageProps {
  params: {
    domain: string
  }
}

export default function DAOPage({ params }: DAOPageProps) {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-12">Loading DAO...</div>}>
        <DAOContent domain={params.domain} />
      </Suspense>
    </div>
  )
} 