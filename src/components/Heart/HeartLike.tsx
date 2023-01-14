import { useState } from 'react';
import Heart from 'react-heart';

export function HeartLike() {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div style={{ width: '2rem' }}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationTrigger="both"
        inactiveColor="#878787"
        activeColor="red"
        style={{
          marginTop: '1rem',
          width: '21px',
          height: '18px',
          marginLeft: 'auto',
          marginRight: '0',
        }}
        animationDuration={0.1}
      />
    </div>
  );
}
