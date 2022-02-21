import React, { useRef, useState } from 'react';

interface LottieProps {
  id: string;
  width: number;
  height: number;
}

const Lottie: React.FC<LottieProps> = ({ id, width, height }) => {
  const ref = useRef(null);

  const [animationLink, setAnimationLink] = useState(``);
  const [containerID, setContainerID] = useState(``);

  React.useEffect(() => {
    setContainerID(`lottie-animation-${id}`);

    if (id === `home-page-hero`) {
      setAnimationLink(
        `https://assets2.lottiefiles.com/packages/lf20_gtbdf5vn.json`,
      );
    } else if (id === `home-page-team`) {
      setAnimationLink(
        `https://assets6.lottiefiles.com/packages/lf20_l98g20x2.json`,
      );
    }

    import(`@lottiefiles/lottie-player`);
  }, [id]);
  return (
    <div>
      <div>
        <lottie-player
          id={containerID}
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={animationLink}
          style={{ width: `${width}px`, height: `${height}px` }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default Lottie;
