import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './phone.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const App = () => {
  return <Lottie options={defaultOptions} height={200} width={200} />;
};

export default App;
