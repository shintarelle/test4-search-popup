'use client'

import React from 'react'
import Icon from './Icon';
import Link from 'next/link';

interface CardProps {
  item: {
    id: number;
    iconName: string;
    title: string;
    text: string[];
    color: string;
  };
}

function Card({ item }: CardProps) {

  const borderColor = `${item.color}`;

  return (
    <div className={`max-w-[424px] w-full border-2 p-[24px] flex flex-col gap-[24px] mx-[10px] sm:mx-0`} style={{ borderColor }}>
      <div className='flex justify-end items-end shrink-0'>
        <div className='max-w-fit'>
          <Icon name={item.iconName} className="icon-class animate-pulse" />
        </div>
      </div>

      <div className='flex flex-col flex-1' >
        <h2 className='text-4xl font-semibold mb-[24px]'>{item.title}</h2>
        <ul>
          {item.text.map((textItem, index) => (
            <li key={index} className='text-2xl mb-[12px] list-item'>{textItem}</li>
          ))}
        </ul>
      </div>

      <div className='flex justify-end text-2xl underline shrink-0' >
        <Link href='#'>View more</Link>
      </div>
    </div>
  )
}

export default Card
