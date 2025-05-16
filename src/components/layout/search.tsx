"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/components/ui/command"
import { threads } from "@/lib/data"
import Link from "next/link"

export function SearchBar() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  
  const filteredThreads = threads.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.domain.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Button 
        variant="outline" 
        className="w-full justify-start text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search...</span>
      </Button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search threads, domains, users..." 
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Threads">
            {filteredThreads.map(thread => (
              <Link href={`/${thread.domain}/post/${thread.id}`} key={thread.id} onClick={() => setOpen(false)}>
                <CommandItem className="cursor-pointer">
                  <div className="flex flex-col">
                    <span className="font-medium">{thread.title}</span>
                    <span className="text-xs text-muted-foreground">
                      in {thread.domain} • by {thread.author}
                    </span>
                  </div>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
} 