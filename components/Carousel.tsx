'use client';

import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

// กำหนด type สำหรับ items
interface ItemType {
  id: number;
  name: string;
  description: string;
}

const CarouselComponent = () => {
  const items: ItemType[] = [
    {
      id: 1,
      name: "https://www.shutterstock.com/image-vector/la-salle-colorful-typography-text-260nw-1866311473.jpg",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      id: 2,
      name: "https://www.shutterstock.com/image-vector/la-salle-colorful-typography-text-260nw-1866311473.jpg",
      description: "Hello World!"
    }
  ];

  return (
    <Carousel>
      {
        items.map((item) => <Item key={item.id} item={item} />)
      }
    </Carousel>
  );
};

export default CarouselComponent;
