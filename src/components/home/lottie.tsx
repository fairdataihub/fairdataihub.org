import React, { useRef } from 'react';

export default function Lottie() {
  const ref = useRef(null);
  React.useEffect(() => {
    import(`@lottiefiles/lottie-player`);
  });
  return (
    <div>
      <div>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
          style={{ width: `300px`, height: `300px` }}
        ></lottie-player>
      </div>
    </div>
  );
}
