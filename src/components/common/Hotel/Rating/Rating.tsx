import React from 'react';
import ReactStars from 'react-rating-stars-component';

export interface IRatingProps {
  activeColor?: string;
  count?: number;
  size?: number;
  onChange?: (newRating: number) => void;
  value: number;
}
export const Rating = ({ count, onChange, size, activeColor, value }: IRatingProps) => {
  return (
    <div>
      <ReactStars
        count={count}
        onChange={onChange}
        size={size}
        activeColor={activeColor}
        value={value}
      />
    </div>
  );
};
