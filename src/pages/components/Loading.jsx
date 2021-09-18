import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const LoadingAnime = () => {
  return (
    <>
      <Player
        autoplay
        loop
        src='../../public/13484-airplane.json'
        style={{ height: '300px', width: '300px' }}
      >
        <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </>
  );
};
