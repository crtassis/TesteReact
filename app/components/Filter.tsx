'use client';

import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

type FilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <div className="w-full max-w-xl mx-auto mb-4">
      <label htmlFor="search" className="block text-sm font-medium text-gray-900 mb-1">
        Pesquisa
      </label>
      <div className="relative">
        <MagnifyingGlassIcon
          aria-hidden="true"
          className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400 sm:size-4"
        />
        <Input
          id="search"
          name="search"
          type="search"
          placeholder="Pesquisar produtos"
          className="pl-10"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
