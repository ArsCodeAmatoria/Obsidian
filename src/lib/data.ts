// Sample data for demonstration purposes

export interface Thread {
  id: string;
  domain: string;
  title: string;
  content: string;
  author: string;
  time: string;
  sbtBadge?: string;
  commentCount: number;
}

export interface Comment {
  id: string;
  threadId: string;
  author: string;
  content: string;
  time: string;
}

export interface Domain {
  name: string;
  description: string;
  memberCount: number;
  threadCount: number;
}

export interface Proposal {
  id: string;
  domain: string;
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

// Sample domains
export const domains: Domain[] = [
  {
    name: 'polkadot',
    description: 'Discussion about the Polkadot ecosystem',
    memberCount: 1245,
    threadCount: 78
  },
  {
    name: 'kusama',
    description: 'Discussions about Kusama, the canary network',
    memberCount: 843,
    threadCount: 52
  },
  {
    name: 'astar',
    description: 'Astar Network discussions',
    memberCount: 422,
    threadCount: 31
  },
  {
    name: 'moonbeam',
    description: 'Smart contract platform on Polkadot',
    memberCount: 356,
    threadCount: 27
  }
]

// Sample threads
export const threads: Thread[] = [
  {
    id: '1',
    domain: 'polkadot',
    title: 'Parachain Interoperability Solutions',
    content: 'What are the best approaches for enabling seamless communication between parachains? XCM is great but has some limitations. I\'d like to discuss alternative approaches and potential improvements.',
    author: 'zk_user1',
    time: '3 hours ago',
    sbtBadge: 'Core Contributor',
    commentCount: 7
  },
  {
    id: '2',
    domain: 'kusama',
    title: 'Governance Proposal: Treasury Funding',
    content: 'I propose we allocate 5,000 KSM from the treasury to fund development of a new tools for parachain development. This would include better testing frameworks and simulation environments.',
    author: 'zk_user2',
    time: '5 hours ago',
    sbtBadge: 'Member',
    commentCount: 12
  },
  {
    id: '3',
    domain: 'astar',
    title: 'New EVM Compatibility Layer Release',
    content: 'We\'ve just released a new version of our EVM compatibility layer. It includes better gas optimization and support for newer Solidity features.',
    author: 'zk_user3',
    time: '8 hours ago',
    commentCount: 4
  },
  {
    id: '4',
    domain: 'moonbeam',
    title: 'Cross-chain Asset Transfers',
    content: 'We\'re working on improving the asset transfer mechanisms between Moonbeam and other parachains. Would love input on pain points and desired features.',
    author: 'zk_user4',
    time: '1 day ago',
    sbtBadge: 'Core Contributor',
    commentCount: 9
  },
  {
    id: '5',
    domain: 'polkadot',
    title: 'OpenGov Participation Rates',
    content: 'I\'ve been tracking participation in OpenGov referenda and noticed some interesting patterns. Overall, I think the transition has been positive, but I\'d like to discuss ways to boost engagement.',
    author: 'zk_user5',
    time: '2 days ago',
    sbtBadge: 'Member',
    commentCount: 15
  }
]

// Sample comments for Thread #1
export const sampleComments: Record<string, Comment[]> = {
  '1': [
    {
      id: 'c1',
      threadId: '1',
      author: 'zk_user2',
      content: 'I agree that XCM has limitations. One of the biggest challenges is handling conditional execution across chains.',
      time: '2 hours ago'
    },
    {
      id: 'c2',
      threadId: '1',
      author: 'zk_user3',
      content: 'Have you looked into XCMP? It addresses some of the issues you mentioned.',
      time: '1 hour ago'
    }
  ],
  '2': [
    {
      id: 'c3',
      threadId: '2',
      author: 'zk_user1',
      content: 'This sounds like a worthwhile allocation. We definitely need better testing tools.',
      time: '4 hours ago'
    },
    {
      id: 'c4',
      threadId: '2',
      author: 'zk_user4',
      content: 'I\'m concerned about the amount. Could we start with a smaller pilot project?',
      time: '3 hours ago'
    },
    {
      id: 'c5',
      threadId: '2',
      author: 'zk_user3',
      content: 'Are there any specific deliverables planned? Would help to have a concrete roadmap.',
      time: '2 hours ago'
    }
  ]
}

// Sample DAO proposals
export const proposals: Record<string, Proposal[]> = {
  'polkadot': [
    {
      id: 'p1',
      domain: 'polkadot',
      title: 'Increase Validator Set',
      description: 'Propose increasing the active validator set from 297 to 400 to improve network security and decentralization.',
      status: 'active',
      votes: { yes: 35, no: 12, abstain: 5 },
      endTime: 'in 3 days'
    },
    {
      id: 'p2',
      domain: 'polkadot',
      title: 'Community Event Funding',
      description: 'Allocate 10,000 DOT for community events over the next quarter.',
      status: 'active',
      votes: { yes: 42, no: 8, abstain: 3 },
      endTime: 'in 5 days'
    },
    {
      id: 'p3',
      domain: 'polkadot',
      title: 'Documentation Bounties',
      description: 'Create a 5,000 DOT bounty program for improving ecosystem documentation.',
      status: 'passed',
      votes: { yes: 67, no: 12, abstain: 8 },
      endTime: 'ended 1 week ago'
    }
  ],
  'kusama': [
    {
      id: 'p4',
      domain: 'kusama',
      title: 'New Parachain Slot Auction',
      description: 'Schedule the next batch of parachain slot auctions.',
      status: 'active',
      votes: { yes: 28, no: 7, abstain: 2 },
      endTime: 'in 2 days'
    },
    {
      id: 'p5',
      domain: 'kusama',
      title: 'Reduce Treasury Spend',
      description: 'Reduce quarterly treasury spending by 15% to conserve funds for future projects.',
      status: 'failed',
      votes: { yes: 18, no: 47, abstain: 5 },
      endTime: 'ended 3 days ago'
    }
  ]
} 