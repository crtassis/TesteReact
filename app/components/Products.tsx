'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useProductFilter } from "../hooks/useProductFilter";
import { Label } from "@/components/ui/label";

function Filter({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <Label htmlFor="search" className="sr-only">
        Buscar produtos
      </Label>
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          id="search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar produtos..."
          className="pl-10"
          autoComplete="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default function Products() {
  const { query, setQuery, filteredProducts, isLoading, error } = useProductFilter();

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col h-full px-4 sm:px-6 lg:px-8 py-6">
      <Filter value={query} onChange={setQuery} />

      <div className="mb-4 border-b border-gray-300" />

      {isLoading ? (
        <div className="text-center text-gray-500 text-sm mt-8">Carregando produtos...</div>
      ) : error ? (
        <div className="text-center text-red-500 text-sm mt-8">Erro ao carregar produtos.</div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-sm mt-8">Nenhum produto encontrado</div>
      ) : (
        <div data-testid="products" className="space-y-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.name}
              className="mx-auto w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 p-6"
            >
              <div className="w-full sm:w-32 flex flex-col items-center">
                <div className="w-full sm:w-32 aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 128px"
                    priority
                  />
                </div>
                <span className="mt-2 text-sm text-gray-600 font-medium text-center">
                  {product.model}
                </span>
              </div>

              <div className="hidden sm:block w-px bg-black h-32 mx-2" />

              <div className="flex-1 w-full">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 p-0 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold block mb-1">Treadwear:</span>
                    <span>{product.treadwear}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Tração:</span>
                    <span>{product.traction}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Temperatura:</span>
                    <span>{product.temperature}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Desenho:</span>
                    <span>{product.pattern}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Índice de carga:</span>
                    <span>{product.loadIndex}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Índice de velocidade:</span>
                    <span>{product.speedRating}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Ruído:</span>
                    <span>{product.noise} dB</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Resistência ao rolamento:</span>
                    <span>{product.rollingResistance}</span>
                  </div>
                  <div>
                    <span className="font-semibold block mb-1">Aderência em pista molhada:</span>
                    <span>{product.wetGrip}</span>
                  </div>
                  <div className="sm:col-span-2 md:col-span-3">
                    <span className="font-semibold block mb-1">Carros compatíveis:</span>
                    <span>{product.cars.join(", ")}</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
