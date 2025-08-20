module.exports = {

"[project]/src/components/HeroCarousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// 'use client';
// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import Image from 'next/image'; // <-- 3. Using Next.js Image component again
// // Using your provided slide data
// const slides = [
//   {
//     title: "Vibrant & Healthy Species",
//     subtitle: "Ethically raised and carefully selected for your aquarium.",
//     backgroundText: "FISH", // Renamed for clarity
//     image: "/images/aquarium-banner.jpg",
//     link: "/shop",
//     buttonText: "Shop by Category",
//   },
//   {
//     title: "Our Commitment to Quality",
//     subtitle: "State-of-the-art facilities ensure the best for our aquatic life.",
//     backgroundText: "FARM",
//     image: "/images/farm-photo.jpg",
//     link: "/farm",
//     buttonText: "Learn More",
//   },
// ];
// export const HeroCarousel = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );
//   return (
//     // The main relative container for positioning the overlay
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <div className="min-h-[70vh] flex-[0_0_100%] flex items-center" key={index}>
//               <div className="relative flex w-full max-w-7xl mx-auto items-center justify-between px-4 md:px-8">
//                 {/* Left Content Section */}
//                 <div className="flex flex-col items-start text-gray-900 dark:text-white z-10 w-full md:w-1/2">
//                   <p className="text-lg md:text-xl font-light text-primary">{slide.title}</p>
//                   <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2">
//                     {slide.subtitle}
//                   </h1>
//                   {/* The giant background text with adaptive colors */}
//                   <p className="text-8xl md:text-[10rem] font-black text-gray-200 dark:text-gray-800 opacity-80 absolute left-0 bottom-1/2 translate-y-1/2 tracking-widest pointer-events-none -z-10 hidden md:block">
//                     {slide.backgroundText}
//                   </p>
//                   {/* 2. Using your brand's primary color for the button */}
//                   <Link 
//                     href={slide.link} 
//                     className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                 </div>
//                 {/* Right Image Section (hidden on mobile) */}
//                 <div className="hidden md:flex w-1/2 justify-center items-center relative h-96">
//                   <Image
//                     src={slide.image} 
//                     alt={`${slide.title} ${slide.subtitle}`} 
//                     fill
//                     style={{ objectFit: 'contain' }}
//                     className="drop-shadow-2xl"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* 1. The Gradient Fade Overlay - MOVED OUTSIDE the .map() loop */}
//       {/* This is the single, static overlay for the whole carousel */}
//       <div className="
//         absolute inset-y-0 left-0 w-1/3 h-full
//         bg-gradient-to-r from-white dark:from-dark-bg to-transparent
//         pointer-events-none"
//       ></div>
//     </div>
//   );
// };
// src/components/HeroCarousel.tsx
// src/components/HeroCarousel.tsx
// src/components/HeroCarousel.tsx
__turbopack_context__.s({
    "HeroCarousel": ()=>HeroCarousel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-autoplay/esm/embla-carousel-autoplay.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const slides = [
    {
        title: "Vibrant & Healthy",
        subtitle: "Clownfish",
        image: "/images/aquarium-banner.jpg",
        link: "/products",
        buttonText: "View Details"
    },
    {
        title: "Stunning Centerpiece",
        subtitle: "Blue Tang",
        image: "/images/aquarium-banner2.png",
        link: "/products",
        buttonText: "View Details"
    },
    {
        title: "Our Commitment to",
        subtitle: "Quality",
        image: "/images/aquarium-banner.jpg",
        link: "/products",
        buttonText: "Learn More"
    }
];
const HeroCarousel = ()=>{
    const [emblaRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        align: 'start'
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$autoplay$2f$esm$2f$embla$2d$carousel$2d$autoplay$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
        })
    ]);
    return(// Outer wrapper for padding, giving space around the panel
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 md:p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative overflow-hidden rounded-3xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-white dark:from-dark-bg via-neutral-100 dark:via-dark-surface to-neutral-100 dark:to-dark-surface"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden relative",
                    ref: emblaRef,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-h-[70vh] flex-[0_0_100%] flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start w-full md:w-1/2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-light text-primary",
                                                    children: slide.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-5xl md:text-7xl font-bold leading-tight mt-2    bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900   dark:from-white dark:via-gray-400 dark:to-white    bg-clip-text text-transparent",
                                                    children: slide.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: slide.link,
                                                    className: "mt-8 inline-block bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-opacity",
                                                    children: slide.buttonText
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 162,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden md:flex w-1/2 justify-center items-center relative h-96",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: slide.image,
                                                alt: slide.subtitle,
                                                fill: true,
                                                style: {
                                                    objectFit: 'contain'
                                                },
                                                className: "drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                                lineNumber: 181,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroCarousel.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroCarousel.tsx",
                                    lineNumber: 159,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, index, false, {
                                fileName: "[project]/src/components/HeroCarousel.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroCarousel.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroCarousel.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/HeroCarousel.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/HeroCarousel.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
}),
"[project]/src/components/AnimateOnView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/components/AnimateOnView.tsx
__turbopack_context__.s({
    "AnimateOnView": ()=>AnimateOnView
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const AnimateOnView = ({ children, delay = 0, className })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.3
    });
    const variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        variants: variants,
        initial: "hidden",
        animate: isInView ? 'visible' : 'hidden',
        transition: {
            duration: 0.5,
            delay
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AnimateOnView.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),

};

//# sourceMappingURL=src_components_8cec83c2._.js.map