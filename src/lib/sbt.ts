// Soul Bound Token (SBT) Verification Module (mock implementation)

interface SBT {
  id: string;
  owner: string;
  type: 'member' | 'contributor' | 'admin';
  domain: string;
  issueDate: number;
  metadata: Record<string, any>;
}

/**
 * Verify if an account has an SBT for a specific domain
 */
export async function verifySBT(address: string, domain: string): Promise<SBT | null> {
  console.log(`Verifying SBT for address ${address} on domain ${domain}`);
  
  // Mock network delay
  await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 100));
  
  // Mock implementation - in production this would query the blockchain
  // We'll randomly return null ~30% of the time to simulate not having an SBT
  if (Math.random() > 0.7) {
    return null;
  }
  
  // Generate a fake SBT
  const types: Array<'member' | 'contributor' | 'admin'> = ['member', 'contributor', 'admin'];
  const sbtType = types[Math.floor(Math.random() * types.length)];
  
  return {
    id: `sbt-${Math.floor(Math.random() * 10000)}`,
    owner: address,
    type: sbtType,
    domain: domain,
    issueDate: Date.now() - Math.floor(Math.random() * 30 * 86400000), // Random date in the last 30 days
    metadata: {
      issuer: `${domain}_dao`,
      reputation: Math.floor(Math.random() * 100),
      level: Math.floor(Math.random() * 5) + 1
    }
  };
}

/**
 * Check if an SBT gives specific permissions
 */
export function hasSBTPermission(sbt: SBT | null, requiredType: 'member' | 'contributor' | 'admin'): boolean {
  if (!sbt) return false;
  
  // Simple permission hierarchy
  if (requiredType === 'member') {
    // Any SBT type grants member permissions
    return true;
  } else if (requiredType === 'contributor') {
    // Only contributor and admin SBTs grant contributor permissions
    return sbt.type === 'contributor' || sbt.type === 'admin';
  } else if (requiredType === 'admin') {
    // Only admin SBTs grant admin permissions
    return sbt.type === 'admin';
  }
  
  return false;
}

/**
 * Get a human-readable badge name for an SBT
 */
export function getSBTBadgeName(sbt: SBT | null): string | null {
  if (!sbt) return null;
  
  switch (sbt.type) {
    case 'member':
      return 'Member';
    case 'contributor':
      return 'Core Contributor';
    case 'admin':
      return 'Admin';
    default:
      return null;
  }
}
