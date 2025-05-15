import { Suspense } from "react"
import { DomainContent } from "./domain-content"

interface DomainPageProps {
  params: {
    domain: string
  }
}

export default function DomainPage({ params }: DomainPageProps) {
  return (
    <div>
      <Suspense fallback={<div className="text-center py-12">Loading domain...</div>}>
        <DomainContent domain={params.domain} />
      </Suspense>
    </div>
  )
} 