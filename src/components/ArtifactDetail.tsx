import { Lock, Unlock, Calendar, MapPin, DollarSign, FileText, History } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

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

interface ArtifactDetailProps {
  artifact: Artifact | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDecrypt: () => void;
}

export const ArtifactDetail = ({ artifact, open, onOpenChange, onDecrypt }: ArtifactDetailProps) => {
  if (!artifact) return null;

  const isEncrypted = artifact.status === 'encrypted';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif flex items-center gap-2">
            {artifact.name}
            {isEncrypted ? (
              <Badge variant="secondary" className="bg-encrypted text-white">
                <Lock className="h-3 w-3 mr-1" />
                Encrypted
              </Badge>
            ) : (
              <Badge variant="default" className="bg-decrypted text-white">
                <Unlock className="h-3 w-3 mr-1" />
                Decrypted
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[70vh]">
          <div className="space-y-6 pr-4">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-museum-stone">
              <img 
                src={artifact.image} 
                alt={artifact.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{artifact.description}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Origin</p>
                    <p className="text-sm text-muted-foreground">{artifact.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Date Acquired</p>
                    <p className="text-sm text-muted-foreground">{artifact.dateAcquired}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {isEncrypted ? (
                <div className="bg-encrypted/10 border border-encrypted rounded-lg p-6 text-center space-y-4">
                  <Lock className="h-12 w-12 mx-auto text-encrypted" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Encrypted Sensitive Data</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect your wallet to decrypt condition reports, valuation records, and movement history.
                    </p>
                    <Button onClick={onDecrypt} className="bg-encrypted hover:bg-encrypted/90">
                      <Unlock className="h-4 w-4 mr-2" />
                      Decrypt with Wallet
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Valuation</h3>
                    </div>
                    <p className="text-muted-foreground">{artifact.valuation}</p>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Condition Report</h3>
                    </div>
                    <p className="text-muted-foreground">{artifact.conditionReport}</p>
                  </div>

                  <Separator />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <History className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Movement History</h3>
                    </div>
                    <div className="space-y-3">
                      {artifact.movementHistory.map((entry, index) => (
                        <div key={index} className="flex gap-3 text-sm">
                          <div className="flex-shrink-0 w-24 text-muted-foreground">{entry.date}</div>
                          <div className="flex-1">
                            <p className="font-medium">{entry.action}</p>
                            <p className="text-muted-foreground">by {entry.curator}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
