import React from 'react';
import ShoeVideoCard from './ShoeVideoCard';

// Replaces 3D model with loop video of the shoe that feels like an interactive 3D model
export default function ThreeHeroShoe(props) {
  return <ShoeVideoCard {...props} videoSrc="/shoe-loop-1.mp4" />;
}
