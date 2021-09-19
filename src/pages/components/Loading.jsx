import { useSpring, Spring, animated } from 'react-spring';

export const Loading = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    // <animated.div
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  );
};
