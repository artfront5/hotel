import { useState } from 'react';
import Heart from 'react-heart';

type Props = {
  containerClass?: string;
  onClick?: (active: boolean) => void;
};

export function HeartLike({ containerClass, onClick }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className={containerClass}>
      <Heart
        isActive={active}
        onClick={() => {
          setActive(!active);

          onClick && onClick(!active);
        }}
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
