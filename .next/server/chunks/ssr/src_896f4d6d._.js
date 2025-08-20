module.exports = {

"[project]/src/data/fishData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/data/fishData.ts
// 1. Define and Export the 'Fish' Type
// This is what your FishCard.tsx component is missing. It describes the
// "shape" of a single fish object for TypeScript.
__turbopack_context__.s({
    "fishData": ()=>fishData
});
const fishData = [
    {
        id: 1,
        name: 'Goldfish',
        primaryImage: '/images/gallery/sample-13.jpg',
        category: 'beginner'
    },
    {
        id: 2,
        name: 'Betta Fish',
        primaryImage: '/images/gallery/sample-12.jpg',
        category: 'centerpiece'
    },
    {
        id: 3,
        name: 'Neon Tetra',
        primaryImage: '/images/gallery/sample-7.jpeg',
        category: 'community'
    },
    {
        id: 4,
        name: 'Guppy',
        primaryImage: '/images/gallery/sample-6.jpeg',
        category: 'beginner'
    },
    {
        id: 5,
        name: 'Angelfish',
        primaryImage: '/images/gallery/sample-4.jpeg',
        category: 'centerpiece'
    },
    {
        id: 6,
        name: 'Molly Fish',
        primaryImage: '/images/gallery/sample-3.jpeg',
        category: 'community'
    }
];
}),
"[project]/src/app/products/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// // src/app/gallery/page.tsx
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search } from 'lucide-react';
// // --- Data for our gallery ---
// // In a real app, you would fetch this from a CMS or API
// const galleryItems = [
//   { id: 1, src: '/images/gallery/sample-3.jpeg', title: 'Fishes, Corals and More', category: 'freshwater-fish' },
//   { id: 2, src: '/images/gallery/sample-4.jpeg', title: 'Modern Wall Aquarium', category: 'Rare & Exotic' },
//   { id: 3, src: '/images/gallery/sample-6.jpeg', title: 'Stunning Discus Fish', category: 'freshwater-fish' },
//   { id: 4, src: '/images/gallery/sample-7.jpeg', title: 'Acclimating Saltwater Fish', category: 'interesting' },
//   { id: 5, src: '/images/gallery/sample-12.jpg', title: 'Living Room Centerpiece', category: 'Rare & Exotic' },
//   { id: 6, src: '/images/gallery/sample-13.jpg', title: 'Lush Planted Tank', category: 'Beginner’s Picks' },
//   { id: 7, src: '/images/gallery/sample-3.jpeg', title: 'Colorful Community Tank', category: 'freshwater-fish' },
//   { id: 8, src: '/images/gallery/sample-4.jpeg', title: 'Minimalist Aquarium Setup', category: 'Rare & Exotic' },
//   { id: 9, src: '/images/gallery/sample-6.jpeg', title: 'Crystal Clear Water', category: 'Beginner’s Picks' },
//   { id: 10, src: '/images/gallery/sample-7.jpeg', title: 'Betta Fish Beauty', category: 'interesting' },
//   { id: 11, src: '/images/gallery/sample-12.jpg', title: 'Bespoke Kitchen Aquarium', category: 'Rare & Exotic' },
//   { id: 12, src: '/images/gallery/sample-13.jpg', title: 'Aquascaping Details', category: 'Beginner’s Picks' },
// ];
// const categories = [
//   { id: 'all', title: 'FILTER - ALL' },
//   { id: 'interesting', title: 'INTERESTING TO KNOW' },
//   { id: 'freshwater-fish', title: 'FRESHWATER FISH' },
//   { id: 'Rare & Exotic', title: 'RARE & EXOTIC ' },
//   { id: 'Beginner’s Picks', title: 'BEGINNER’S PICKS' },
// ];
// const ITEMS_PER_PAGE = 6;
// const GalleryPage = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [filtered, setFiltered] = useState(galleryItems);
//   const [currentPage, setCurrentPage] = useState(1);
//   useEffect(() => {
//     if (activeFilter === 'all') {
//       setFiltered(galleryItems);
//     } else {
//       setFiltered(galleryItems.filter(item => item.category === activeFilter));
//     }
//     setCurrentPage(1); // Reset to the first page on filter change
//   }, [activeFilter]);
//   // Pagination logic
//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
//   const paginatedItems = filtered.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );
//   return (
//     <div className="bg-darkteal py-16 px-4 md:px-8">
//       <div className="container mx-auto">
//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveFilter(category.id)}
//               className={`
//                 px-6 py-2 text-sm font-semibold border rounded-sm transition-colors duration-300
//                 ${activeFilter === category.id
//                   ? 'bg-teal-500 text-white border-teal-500'
//                   : 'bg-white text-gray-600 border-gray-200 hover:bg-teal-500 hover:text-white hover:border-teal-500'
//                 }
//               `}
//             >
//               {category.title}
//             </button>
//           ))}
//         </div>
//         {/* Image Grid */}
//         <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {paginatedItems.map((item) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative overflow-hidden rounded-lg shadow-lg group"
//               >
//                 <Image
//                   src={item.src}
//                   alt={item.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-center items-center p-4">
//                   <Search className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
//                   <p className="text-white font-bold mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
//                     {item.title}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-12">
//           {totalPages > 1 && Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               className={`
//                 w-10 h-10 mx-1 flex items-center justify-center font-semibold border transition-colors duration-300
//                 ${currentPage === index + 1
//                   ? 'bg-teal-500 text-white border-teal-500'
//                   : 'bg-white text-gray-600 border-gray-200 hover:bg-teal-400 hover:text-white'
//                 }
//               `}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default GalleryPage;
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fishData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/fishData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const categories = [
    {
        id: 'all',
        title: 'Filter - All Species'
    },
    {
        id: 'beginner',
        title: 'Beginner’s Picks'
    },
    {
        id: 'centerpiece',
        title: 'Centerpiece Fish'
    },
    {
        id: 'community',
        title: 'Community Fish'
    }
];
const ITEMS_PER_PAGE = 6;
const GalleryPage = ()=>{
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [filtered, setFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fishData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fishData"]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeFilter === 'all') {
            setFiltered(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fishData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fishData"]);
        } else {
            setFiltered(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$fishData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fishData"].filter((item)=>item.category === activeFilter));
        }
        setCurrentPage(1);
    }, [
        activeFilter
    ]);
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginatedItems = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 dark:bg-dark-bg py-16 px-4 md:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-2 md:gap-4 mb-12",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveFilter(category.id),
                            className: `
                px-6 py-2 text-sm font-semibold border rounded-sm transition-colors duration-300
                ${activeFilter === category.id ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-dark-surface dark:text-gray-300 text-gray-600 border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary'}
              `,
                            children: category.title
                        }, category.id, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        children: paginatedItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "relative overflow-hidden rounded-lg shadow-lg group cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.primaryImage,
                                        alt: item.name,
                                        width: 600,
                                        height: 400,
                                        className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "h-10 w-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white font-bold mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/products/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/products/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/app/products/page.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/app/products/page.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 198,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-12",
                    children: totalPages > 1 && Array.from({
                        length: totalPages
                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setCurrentPage(index + 1),
                            className: `
                w-10 h-10 mx-1 flex items-center justify-center font-semibold border rounded-sm transition-colors duration-300
                ${currentPage === index + 1 ? 'bg-primary text-white border-primary' : 'bg-white dark:bg-dark-surface dark:text-gray-300 text-gray-600 border-gray-200 dark:border-gray-700 hover:bg-primary/80 hover:text-white'}
              `,
                            children: index + 1
                        }, index, false, {
                            fileName: "[project]/src/app/products/page.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/products/page.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/products/page.tsx",
            lineNumber: 176,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/products/page.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GalleryPage;
}),

};

//# sourceMappingURL=src_896f4d6d._.js.map