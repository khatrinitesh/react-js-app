import React from 'react';
import Lottie from 'react-lottie';
import GoldenConfetti from "../../../assets/lottie/golden_confetti.json"

const LottieApp = () => {
  return (
    <>
      <MyLottieAnimation isStopped={false} isPaused={false} speed={1}/>
    </>
  )
}

export default LottieApp

const MyLottieAnimation = ({ isStopped, isPaused, speed }) => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: GoldenConfetti,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
      isStopped: isStopped,
      isPaused: isPaused,
      speed: speed,
    };
  
    return <Lottie options={defaultOptions} height={400} width={400} />;
  };
  
