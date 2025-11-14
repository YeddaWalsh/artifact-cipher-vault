import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '@/assets/logo.png';
import { Shield } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Secure Artifact Ledger" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Secure Artifact Ledger</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Protect Culture, Secure Every Transfer.
              </p>
            </div>
          </div>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};
