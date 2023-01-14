import React from 'react';
import ReactStars from 'react-rating-stars-component';

export interface IRatingProps {
  activeColor?: string;
  count?: number;
  size?: number;
  onChange?: (newRating: number) => void;
}
export const Rating = ({ count, onChange, size, activeColor }: IRatingProps) => {
  return (
    <div>
      <ReactStars
        count={count}
        onChange={onChange}
        size={size}
        activeColor={activeColor}
      />
    </div>
  );
};
