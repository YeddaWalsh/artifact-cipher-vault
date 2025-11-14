import { Lock, Unlock, Eye, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ArtifactCardProps {
  id: string;
  name: string;
  image: string;
  status: 'encrypted' | 'decrypted';
  lastMovement: string;
  condition: string;
  onClick: () => void;
}

export const ArtifactCard = ({
  name,
  image,
  status,
  lastMovement,
  condition,
  onClick
}: ArtifactCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={onClick}>
      <div className="relative aspect-square overflow-hidden bg-museum-stone">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Loading...</div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          {status === 'encrypted' ? (
            <Badge variant="secondary" className="bg-encrypted/90 text-white backdrop-blur-sm">
              <Lock className="h-3 w-3 mr-1" />
              Encrypted
            </Badge>
          ) : (
            <Badge variant="default" className="bg-decrypted/90 text-white backdrop-blur-sm">
              <Unlock className="h-3 w-3 mr-1" />
              Decrypted
            </Badge>
          )}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-serif">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{lastMovement}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Condition: {condition}</span>
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
