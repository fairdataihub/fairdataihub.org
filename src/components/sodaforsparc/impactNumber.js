import React from 'react';
import { useCountUp } from 'react-countup';
import useIntersection from '../../utils/useIntersection';

const ImpactNumber = (props) => {
  const countUpRef = React.useRef(null);

  //False until element with countUpRef is in viewport
  const countUpRefInViewport = useIntersection(countUpRef, '0px');

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    duration: props.animationDuration,
  });

  //If ImpactNumber element is in view, start the animation on element with countUpRef
  if (countUpRefInViewport) {
    {
      update(props.countTo);
    }
  }
  return <span ref={countUpRef}></span>;
};
export default ImpactNumber;
