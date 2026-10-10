import React from 'react';
import { GravityStarsCanvas } from './GravityStarsCanvas';

// Re-export GravityStarsCanvas as ParticleNetworkCanvas for backward compatibility
export const ParticleNetworkCanvas: React.FC = () => {
  return <GravityStarsCanvas />;
};

export { GravityStarsCanvas };
