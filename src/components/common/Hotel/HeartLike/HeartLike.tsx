import { useState } from 'react';
import Heart from 'react-heart';

type Props = {
  containerClass?: string;
};

export function HeartLike({ containerClass }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={containerClass}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationTrigger="both"
        inactiveColor="#878787"
        activeColor="red"
        style={{
          width: '21px',
          height: '18px',
        }}
        animationDuration={0.1}
      />
    </div>
  );
}
