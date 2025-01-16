'use client';

import dynamic from 'next/dynamic';
// import Lottie from 'react-lottie-player';

interface LottieProps {
  animationData: Record<string, unknown>;
  width: number;
  height: number;
}

const PlayerWithNoSSR = dynamic(() => import(`react-lottie-player`), {
  ssr: false,
});

const LottieAnimation: React.FC<LottieProps> = ({
  animationData,
  width,
  height,
}) => {
  return (
    <div>
      <PlayerWithNoSSR
        loop
        animationData={animationData}
        play
        style={{ width, height }}
      />
    </div>
  );
};

export default LottieAnimation;
