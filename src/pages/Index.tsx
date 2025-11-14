import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArtifactCard } from '@/components/ArtifactCard';
import { ArtifactDetail } from '@/components/ArtifactDetail';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';
import artifact1 from '@/assets/artifact-1.jpg';
import artifact2 from '@/assets/artifact-2.jpg';
import artifact3 from '@/assets/artifact-3.jpg';

interface Artifact {
  id: string;
  name: string;
  image: string;
  status: 'encrypted' | 'decrypted';
  lastMovement: string;
  condition: string;
  description: string;
  origin: string;
  dateAcquired: string;
  valuation: string;
  conditionReport: string;
  movementHistory: Array<{
    date: string;
    action: string;
    curator: string;
  }>;
}

const initialArtifacts: Artifact[] = [
  {
    id: '1',
    name: 'Ancient Greek Amphora',
    image: artifact1,
    status: 'encrypted',
    lastMovement: '2024-01-15',
    condition: 'Excellent',
    description: 'A rare example of black-figure pottery from the 6th century BCE, featuring intricate geometric patterns and mythological scenes.',
    origin: 'Athens, Greece',
    dateAcquired: '2023-06-12',
    valuation: '$2,450,000 USD',
    conditionReport: 'Artifact displays minimal surface wear consistent with age. No cracks or repairs detected. Original pigments retain 85% vibrancy. Recommended for display in climate-controlled environment with 45-55% humidity.',
    movementHistory: [
      { date: '2024-01-15', action: 'Moved to Conservation Lab', curator: 'Dr. Sarah Mitchell' },
      { date: '2023-12-20', action: 'Returned from Exhibition', curator: 'James Wilson' },
      { date: '2023-10-05', action: 'Loaned to National Museum', curator: 'Dr. Sarah Mitchell' },
    ]
  },
  {
    id: '2',
    name: 'Egyptian Pharaoh Bust',
    image: artifact2,
    status: 'encrypted',
    lastMovement: '2024-02-03',
    condition: 'Good',
    description: 'Limestone bust of an unidentified pharaoh from the New Kingdom period, showcasing the refined artistic techniques of ancient Egyptian sculptors.',
    origin: 'Luxor, Egypt',
    dateAcquired: '2022-11-08',
    valuation: '$3,800,000 USD',
    conditionReport: 'Minor erosion on the base. Headdress details remain remarkably intact. Slight discoloration on left shoulder requires monitoring. Overall structural integrity is sound.',
    movementHistory: [
      { date: '2024-02-03', action: 'Transferred to Main Gallery', curator: 'Dr. Ahmed Hassan' },
      { date: '2024-01-12', action: 'Documentation Photography', curator: 'Lisa Chen' },
      { date: '2023-09-15', action: 'Condition Assessment', curator: 'Dr. Ahmed Hassan' },
    ]
  },
  {
    id: '3',
    name: 'Roman Bronze Statue',
    image: artifact3,
    status: 'encrypted',
    lastMovement: '2024-01-28',
    condition: 'Very Good',
    description: 'A well-preserved bronze statue from the Roman Imperial period, depicting a classical deity in dynamic pose.',
    origin: 'Rome, Italy',
    dateAcquired: '2023-03-22',
    valuation: '$1,950,000 USD',
    conditionReport: 'Excellent patina preservation. Some surface oxidation presents no structural concerns. Base inscription legible and documented. Requires specialized bronze conservation protocols.',
    movementHistory: [
      { date: '2024-01-28', action: 'Moved to Restoration Workshop', curator: 'Marco Rossi' },
      { date: '2023-11-30', action: 'Public Exhibition Opening', curator: 'Dr. Sarah Mitchell' },
      { date: '2023-08-14', action: 'Initial Cataloging', curator: 'James Wilson' },
    ]
  },
];

const Index = () => {
  const [artifacts, setArtifacts] = useState<Artifact[]>(initialArtifacts);
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const { isConnected } = useAccount();

  const handleArtifactClick = (artifact: Artifact) => {
    setSelectedArtifact(artifact);
    setDetailOpen(true);
  };

  const handleDecrypt = () => {
    if (!isConnected) {
      toast.error('Please connect your wallet to decrypt artifact data');
      return;
    }

    if (selectedArtifact) {
      setArtifacts(prev => 
        prev.map(art => 
          art.id === selectedArtifact.id 
            ? { ...art, status: 'decrypted' as const }
            : art
        )
      );
      setSelectedArtifact({ ...selectedArtifact, status: 'decrypted' });
      toast.success('Artifact data decrypted successfully');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-1">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Museum Collection Ledger
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure blockchain-based artifact management system ensuring transparent custody and encrypted sensitive data protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <ArtifactCard
              key={artifact.id}
              {...artifact}
              onClick={() => handleArtifactClick(artifact)}
            />
          ))}
        </div>

        {artifacts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No artifacts in the collection yet.</p>
          </div>
        )}
      </main>

      <ArtifactDetail
        artifact={selectedArtifact}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onDecrypt={handleDecrypt}
      />

      <Footer />
    </div>
  );
};

export default Index;
