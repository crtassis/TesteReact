'use client';

import { useState, useMemo } from "react";
import useSWR from "swr"; 

export type Product = {
  name: string;
  image: string;
  model: string;
  treadwear: number;
  traction: string;
  temperature: string;
  pattern: string;
  loadIndex: string;
  speedRating: string;
  noise: number;
  rollingResistance: string;
  wetGrip: string;
  cars: string[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProductFilter() {
  const [query, setQuery] = useState("");

  const { data: products = [], isLoading, error } = useSWR<Product[]>('/api/products', fetcher);

  const filteredProducts = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      [
        product.name,
        product.model,
        product.traction,
        product.temperature,
        product.pattern,
        product.loadIndex,
        product.speedRating,
        product.rollingResistance,
        product.wetGrip,
        ...product.cars,
      ].some(field => field.toString().toLowerCase().includes(lowerQuery))
    );
  }, [query, products]);

  return {
    query,
    setQuery,
    filteredProducts,
    isLoading,
    error,
  };
}
