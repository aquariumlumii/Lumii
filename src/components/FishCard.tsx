import Image from 'next/image';
import type { Fish } from '@/data/fishData';

// The card now accepts a function to call when it's clicked
interface FishCardProps {
  fish: Fish;
  onCardClick: (fish: Fish) => void;
}

export const FishCard = ({ fish, onCardClick }: FishCardProps) => {
  return (
    // 1. Add `relative` to this container so the overlay can be positioned inside it.
    <div
      className="relative rounded-lg overflow-hidden font-serif shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group break-inside-avoid mb-8"
      onClick={() => onCardClick(fish)}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={fish.primaryImage}
          alt={fish.name}
          width={fish.width}
          height={fish.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 2. Add the overlay element here */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-2xl font-bold text-center drop-shadow-md px-4">
          {fish.name}
        </h3>
      </div>
    </div>
  );
};