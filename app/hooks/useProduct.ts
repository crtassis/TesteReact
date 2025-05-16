
'use client';

export type Product = {
  id: string;
  name: string;
  model: string;
  durability: string;
  traction: string;
  temperature: string;
  speed: string;
  load: string;
  design: string;
  image: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: "TIRE 205/65R15 94V RXMOTION H12 ROADX",
    model: "RXMOTION H12",
    durability: "360",
    traction: "A",
    temperature: "A",
    speed: "V (240km/h)",
    load: "94 (670 Kg)",
    design: "Asymmetric",
    image: "/images/pneu1.jpg",
  },
  {
    id: '2',
    name: "TIRE 225/50R17 98W RXMOTION U11 ROADX",
    model: "RXMOTION U11",
    durability: "280",
    traction: "AA",
    temperature: "A",
    speed: "W (270km/h)",
    load: "98 (750 Kg)",
    design: "Asymmetric",
    image: "/images/pneu2.jpg",
  },
  {
    id: '3',
    name: "TIRE 235/50R18 101W RXMOTION U11 ROADX",
    model: "RXMOTION U11",
    durability: "280",
    traction: "AA",
    temperature: "A",
    speed: "W (270km/h)",
    load: "101 (825 Kg)",
    design: "Asymmetric",
    image: "/images/pneu2.jpg",
  },
  {
    id: '4',
    name: "TIRE 185/55R15 82V RXMOTION H12 ROADX",
    model: "RXMOTION H12",
    durability: "360",
    traction: "A",
    temperature: "A",
    speed: "V (240km/h)",
    load: "82 (475 Kg)",
    design: "Asymmetric",
    image: "/images/pneu3.jpg",
  },
  {
    id: '5',
    name: "TIRE 235/55R18 104W RXQUEST SU01 ROADX",
    model: "RXQUEST SU01",
    durability: "280",
    traction: "AA",
    temperature: "A",
    speed: "W (270km/h)",
    load: "104 (900 Kg)",
    design: "Asymmetric",
    image: "/images/pneu4.jpg",
  },
];
