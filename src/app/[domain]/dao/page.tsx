"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface DAOPageProps {
  params: {
    domain: string
  }
}

interface Proposal {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'passed' | 'failed';
  votes: {
    yes: number;
    no: number;
    abstain: number;
  };
  endTime: string;
}

export default function DAOPage({ params }: DAOPageProps) {
  const { domain } = params
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for demonstration
    const mockProposals: Proposal[] = [
      {
        id: '1',
        title: 'Treasury Funding Allocation',
        description: 'Allocate 1000 DOT to fund development of new features',
        status: 'active',
        votes: { yes: 15, no: 5, abstain: 2 },
        endTime: 'in 2 days'
      },
      {
        id: '2',
        title: 'Governance Parameter Change',
        description: 'Change voting period from 7 days to 5 days',
        status: 'active',
        votes: { yes: 12, no: 8, abstain: 1 },
        endTime: 'in 4 days'
      },
      {
        id: '3',
        title: 'Add New Admin',
        description: 'Add user 0x1234... as domain admin',
        status: 'passed',
        votes: { yes: 20, no: 3, abstain: 0 },
        endTime: 'ended 1 day ago'
      }
    ]
    
    setTimeout(() => {
      setProposals(mockProposals)
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div>
      <div className="mb-4">
        <Link href={`/${domain}`} className="flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft size={16} className="mr-1" />
          Back to {domain}
        </Link>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold capitalize">{domain} DAO</h1>
          <p className="text-muted-foreground">Governance for {domain}.dot</p>
        </div>
        <Button>New Proposal</Button>
      </div>

      <Tabs defaultValue="active" className="mb-8">
        <TabsList>
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="passed">Passed</TabsTrigger>
          <TabsTrigger value="failed">Failed</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <div className="grid gap-4">
              {proposals
                .filter(p => p.status === 'active')
                .map(proposal => (
                  <Card key={proposal.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{proposal.title}</CardTitle>
                        <Badge>{proposal.endTime}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{proposal.description}</p>
                      <div className="flex gap-2 mb-2">
                        <div className="text-sm">Yes: {proposal.votes.yes}</div>
                        <div className="text-sm">No: {proposal.votes.no}</div>
                        <div className="text-sm">Abstain: {proposal.votes.abstain}</div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-4">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ 
                            width: `${Math.round(
                              (proposal.votes.yes / 
                              (proposal.votes.yes + proposal.votes.no + proposal.votes.abstain)) * 100
                            )}%` 
                          }}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button variant="outline" size="sm">Yes</Button>
                      <Button variant="outline" size="sm">No</Button>
                      <Button variant="outline" size="sm">Abstain</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          )}
        </TabsContent>
        <TabsContent value="passed" className="mt-4">
          <div className="grid gap-4">
            {proposals
              .filter(p => p.status === 'passed')
              .map(proposal => (
                <Card key={proposal.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{proposal.title}</CardTitle>
                      <Badge variant="outline" className="bg-green-100 dark:bg-green-900">Passed</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{proposal.description}</p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        <TabsContent value="failed" className="mt-4">
          <div className="text-center py-12 text-muted-foreground">No failed proposals</div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 