import Lottie from 'react-lottie-player';

interface LottieProps {
  animationData: Record<string, unknown>;
  width: number;
  height: number;
}

const LottieAnimation: React.FC<LottieProps> = ({
  animationData,
  width,
  height,
}) => {
  return (
    <div>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width, height }}
      />
    </div>
  );
};

export default LottieAnimation;
