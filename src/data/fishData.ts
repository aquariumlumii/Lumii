// src/data/fishData.ts

// 1. Define and Export the 'Fish' Type
// This is what your FishCard.tsx component is missing. It describes the
// "shape" of a single fish object for TypeScript.
export type Fish = {
  id: number;
  name: string;
  primaryImage: string;
  category: 'Glow' | 'Pattern' | 'Crew';
  species: string;
  description: string;
  width:number;
  height:number;
};

// 2. Your Existing Data Array
// By adding ': Fish[]', we tell TypeScript that this is an array of 'Fish' objects.
// This is good practice as it will show an error if an object doesn't match the type.
export const fishData: Fish[] = [
          {
    id: 1,
    name: 'Oscar',
    primaryImage: '/images/Collection/Oscar Fish.png',
    category: 'Pattern',
    species: 'Astronotus ocellatus',
    description: 'Large, intelligent cichlids known for their strong personalities. They can recognize their owners but are aggressive and need big tanks.',
    width: 800,
    height: 400,
  },
  {
    id: 2,
    name: 'Discus',
    primaryImage: '/images/Collection/Discus Fish.png',
    category: 'Glow',
    species: 'Symphysodon',
    description: 'Known as the “king of freshwater aquariums,” Discus are round, flat-bodied cichlids with vibrant colors and patterns. They require very clean, warm water and thrive in groups.',
    width: 400,
    height: 400,
  },
  {
    id: 3,
    name: 'Fighters',
    primaryImage: '/images/Collection/Betta Fish.png',
    category: 'Glow',
    species: 'Betta splendens',
    description: 'opular for their long, flowing fins and aggressive behavior, Betta fish are territorial and best kept alone or with very peaceful tank mates.',
    width: 400,
    height: 400, 
  },
  {
    id: 4,
    name: 'Scavengers',
    primaryImage: '/images/Collection/Scavenger Fish.png',
    category: 'Crew',
    species: 'fish',
    description: 'Fish that feed on leftover food, algae, or debris in the aquarium. They help keep the tank clean but still need proper feeding.',
    width: 800,
    height: 400,
  },
  {
    id: 5,
    name: 'Goldfish',
    primaryImage: '/images/Collection/Goldfish.png',
    category: 'Glow',
    species: 'Carassius auratus',
    description: 'Hardy, long-lived fish that come in many varieties. They grow larger than most people expect and need spacious, well-filtered tanks.',
    width: 800,
    height: 400,
    },
  {
    id: 6,
    name: 'Gourami',
    primaryImage: '/images/Collection/Gourami Fish.png',
    category: 'Glow',
    species: '',
    description: 'Peaceful fish with a labyrinth organ that lets them breathe air. They come in many colorful varieties and prefer planted tanks.',
    width: 400,
    height: 600,
    },
  {
    id: 7,
    name: 'Guppy',
    primaryImage: '/images/Collection/Gappy Fish.png',
    category: 'Glow',
    species: 'Poecilia reticulata',
    description: 'Small, hardy livebearers famous for their bright colors and flowing tails. They breed easily and are great for beginners.',
    width: 800,
    height: 600,
    },
  {
    id: 8,
    name: 'Platy',
    primaryImage: '/images/Collection/Platy Fish.png',
    category: 'Glow',
    species: 'Xiphophorus maculatus',
    description: 'Active, friendly livebearers with bright colors and easy care needs. They adapt well to community tanks.',
    width: 800,
    height: 400,
    },
    {
    id: 9,
    name: 'Swordtail',
    primaryImage: '/images/Collection/Swordtail Fish.png',
    category: 'Glow',
    species: 'Xiphophorus hellerii',
    description: 'Named for the elongated lower tail fin of the males, these livebearers are hardy, peaceful, and prolific breeders.',
    width: 800,
    height: 400,
    },
          {
    id: 10,
    name: 'Tiger Barb',
    primaryImage: '/images/Collection/Tiger Barb Fish.png',
    category: 'Pattern',
    species: '',
    description: 'Active schooling fish, often brightly colored. Some species can be fin-nippers, so tank mates must be chosen carefully.',
    width: 800,
    height: 600,
    },
    {
    id: 11,
    name: 'Ramrezi',
    primaryImage: '/images/Collection/Ramirezi Fish.png',
    category: 'Pattern',
    species: 'Mikrogeophagus ramirezi',
    description: 'Popular and vibrant dwarf cichlid native to the Orinoco River basin in Venezuela and Colombia, South America. It is a beloved species in the aquarium hobby, admired for its striking colors and interesting behavior.',
    width: 800,
    height: 600,
    },    
  {
    id: 12,
    name: 'Tetra',
    primaryImage: '/images/Collection/Tetra Fish.png',
    category: 'Glow',
    species: '',
    description: 'A large group of small, schooling fish. They are peaceful, colorful, and do best in groups, adding movement to community tanks.',
    width: 400,
    height: 800,
    },
      {
    id: 13,
    name: 'Malawi Cichlid',
    primaryImage: '/images/Collection/Malawi Fish.png',
    category: 'Glow',
    species: 'fish',
    description: 'Brightly colored African cichlids from Lake Malawi. They are territorial, active, and need rocky aquascapes with plenty of space.',
    width: 800,
    height: 400,
    },

        {
    id: 14,
    name: 'Angelfish',
    primaryImage: '/images/Collection/Angelfish.png',
    category: 'Pattern',
    species: 'Pterophyllum scalare',
    description: 'Graceful cichlids with tall, triangular bodies. They are semi-aggressive but make striking additions to community tanks.',
    width: 400,
    height: 800,
    },
        {
    id: 15,
    name: 'Catfish',
    primaryImage: '/images/Fish/Catfish.jpg',
    category: 'Crew',
    species: 'fish',
    description: 'A large group of bottom-dwelling fish, often with whisker-like barbels. Popular species like Corydoras and Plecos are peaceful and useful for cleaning algae or debris.',
    width: 800,
    height: 300,
  },
  // add more as needed, keeping absolute paths starting with `/`
];