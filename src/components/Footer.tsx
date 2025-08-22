"use client";

import { MapPin, Mail, Facebook, Instagram, Music2 } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#12121A] text-gray-400 py-12 px-4 md:px-8 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Use a 12-column grid for more control over layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-center md:text-left">
          
          {/* Left Section - Logo and Description (takes up 5 of 12 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Image
                src={logo}
                alt="Lumii Aquarium Logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-2xl font-bold text-white">Lumii Aquarium</span>
            </div>
            <p className="text-sm">
              Lumii Aquarium specializes in breeding and exporting freshwater ornamental fish. 
              With strict care, quarantine, and global standards, we deliver young, healthy, and 
              vibrant species to aquariums worldwide with confidence.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-sm mt-4">
              <Link href="/" className="hover:text-white transition-colors duration-300">
                Home
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/about" className="hover:text-white transition-colors duration-300">
                About Us
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/farm" className="hover:text-white transition-colors duration-300">
                Our Farms
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/products" className="hover:text-white transition-colors duration-300">
                Our Collection
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/contact" className="hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Middle Section - Contact Information (takes up 4 of 12 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xl font-semibold text-white">Our Location</h3>
            <div className="flex items-start justify-center md:justify-start space-x-2">
              <MapPin className="h-5 w-5 text-cyan-400 mt-0.5" />
              <p className="text-sm">
                No. 40/1, Mahavidana Watta,<br />
                Kalapugama,<br />
                Moronthuduwa,<br />
                Sri Lanka
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="h-5 w-5 text-cyan-400" />
              <p className="text-sm">lumii.go2@gmail.com</p>
            </div>
          </div>

          {/* Right Section - Social Media (takes up 3 of 12 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <p className="text-sm">
              Stay connected with us on our journey to create the best aquatic
              environments.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/1DH9zpprdc/"
                className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/lumii__aquarium_/"
                className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.tiktok.com/@lumii__aquarium_?_t=ZS-8z1vQaISUr4&_r=1"
                className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <Music2 className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright Notice */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lumii Aquarium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// "use client";

// import { MapPin, Phone, Mail, Facebook, Instagram, Music2 } from "lucide-react";
// import Image from "next/image";
// import logo from "@/../public/images/logo.png";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#12121A] text-gray-400 py-12 px-4 md:px-8 font-serif">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
//         {/* Left Section - Logo and Description */}
//         <div className="space-y-4">
//      <div className="flex items-center justify-center md:justify-start space-x-2">
//   <Image
//     src={logo}
//     alt="Lumii Aquarium Logo"
//     width={50} // Increased width
//     height={50} // Increased height
//     priority
//   />
//   <span className="text-2xl font-bold text-white">Lumii Aquarium</span>
// </div>

//           <p className="text-sm">
//             Lumii Aquarium specializes in breeding and exporting freshwater ornamental fish. 
//             With strict care, quarantine, and global standards, we deliver young, healthy, and 
//             vibrant species to aquariums worldwide with confidence.
//           </p>
//           <div className="flex justify-center md:justify-start space-x-4 text-sm mt-4">
//             <Link href="/" className="hover:text-white transition-colors duration-300">
//               Home
//             </Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/about" className="hover:text-white transition-colors duration-300">
//               About Us
//             </Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/farm" className="hover:text-white transition-colors duration-300">
//               Our Farms
//             </Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/products" className="hover:text-white transition-colors duration-300">
//               Our Collection
//             </Link>
//             <span className="text-gray-600">|</span>
//             <Link href="/contact" className="hover:text-white transition-colors duration-300">
//               Contact
//             </Link>
//           </div>
//         </div>

//         {/* Middle Section - Contact Information */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-white">Our Location</h3>
//           <div className="flex items-start justify-center md:justify-start space-x-2">
//             <MapPin className="h-5 w-5 text-cyan-400 mt-0.5" />
//             <p className="text-sm">
//               No. 40/1, Mahavidana Watta,<br />
//               Kalapugama,<br />
//               Moronthuduwa,<br />
//               Sri Lanka
//             </p>
//           </div>

//           {/* Phone */}
//           {/* <div className="flex items-center justify-center md:justify-start space-x-2">
//             <Phone className="h-5 w-5 text-cyan-400" />
//             <p className="text-sm">+94 77 123456</p>
//           </div> */}

//           {/* Email */}
//           <div className="flex items-center justify-center md:justify-start space-x-2">
//             <Mail className="h-5 w-5 text-cyan-400" />
//             <p className="text-sm">lumii.go2@gmail.com</p>
//           </div>
//         </div>

//         {/* Right Section - Social Media */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-white">Follow Us</h3>
//           <p className="text-sm">
//             Stay connected with us on our journey to create the best aquatic
//             environments.
//           </p>
//           <div className="flex justify-center md:justify-start space-x-4">
//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/share/1DH9zpprdc/"
//               className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
//             >
//               <Facebook className="w-6 h-6" />
//             </a>
//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/lumii__aquarium_/"
//               className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
//             >
//               <Instagram className="w-6 h-6" />
//             </a>
//             {/* TikTok */}
//             <a
//               href="https://www.tiktok.com/@lumii__aquarium_?_t=ZS-8z1vQaISUr4&_r=1"
//               className="text-cyan-500 hover:text-cyan-400 transition-colors duration-300"
//             >
//               <Music2 className="w-6 h-6" />
//             </a>
//           </div>
//         </div>
//         <div>
//           <p className="text-sm mt-4">
//             &copy; {new Date().getFullYear()} Lumii Aquarium. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;