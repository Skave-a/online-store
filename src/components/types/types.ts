export interface FlowersType {
  //[key: string]: number | string | undefined | string[];
  id?: number;
  name: string;
  photos: string[];
  description: string;
  discount?: number;
  rating?: number;
  stock?: number;
  family?: string;
  genus?: string;
  price: number;
  quantity: number;
  priceTotal?: number;
}

// type FlowersMainType = number | string | undefined | string[];
