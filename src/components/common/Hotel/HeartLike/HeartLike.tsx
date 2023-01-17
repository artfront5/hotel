import { useState } from 'react';
import Heart from 'react-heart';

type Props = {
  containerClass: string;
  onClick?: () => void;
  isActive?: boolean;
};

export function HeartLike({ onClick, isActive, containerClass }: Props) {
  return (
    <div className={containerClass}>
      <Heart
        isActive={isActive ? true : false}
        onClick={onClick}
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
