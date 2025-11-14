import { useEffect, useState } from 'react';

const conservationStatuses = [
  "Artifact Conservation: 98.7% Integrity Maintained",
  "Climate Control: Optimal Conditions Active",
  "Security Status: All Systems Encrypted",
  "Last Audit: All Records Verified",
  "Storage Conditions: Museum-Grade Environment",
  "Digital Signatures: Blockchain Verified",
  "Transfer Protocol: Zero Unauthorized Access",
  "Preservation Index: Excellent Standing"
];

export const Footer = () => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const randomStatus = conservationStatuses[Math.floor(Math.random() * conservationStatuses.length)];
    setStatus(randomStatus);
  }, []);

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Secure Artifact Ledger. All cultural heritage protected.
          </p>
          <p className="text-sm font-medium text-secondary">
            {status}
          </p>
        </div>
      </div>
    </footer>
  );
};
