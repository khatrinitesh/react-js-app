import React from 'react';
import Lottie from 'react-lottie';
import LoadingLInes from "../../../assets/lottie/loading_lines.json"


const LottieApp = () => {
  return (
    <>
     <MyLottieAnimation isStopped={false} isPaused={false} speed={1} />
    </>
  )
}

export default LottieApp

const MyLottieAnimation = ({ isStopped, isPaused, speed }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLInes,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    isStopped: isStopped,
    isPaused: isPaused,
    speed: speed,
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};
