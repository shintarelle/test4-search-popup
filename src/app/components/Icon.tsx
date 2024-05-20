// components/Icon.tsx
import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => (
  <svg className={className}>
    {/* <use xlinkHref={`#icon-${name}`} /> */}
    {/* <use xlinkHref={`/icons/${name}.svg#${name}`} /> */}
    <use xlinkHref={`/static/sprites/icons.svg#${name}`} />
  </svg>
);

export default Icon;
