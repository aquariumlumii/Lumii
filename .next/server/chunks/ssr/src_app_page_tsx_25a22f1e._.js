module.exports = {

"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState, useEffect } from 'react';
// import { Phone, Search, Menu, X } from 'lucide-react';
// // Header Component
// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
//   const navLinks = ["Home","About Us", "Aquarium", "Features", "Gallery", "Blog", "Contact"];
//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0a1929]' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         {/* <div className="flex items-center space-x-2">
//           <Seahorse className="h-8 w-8 text-cyan-400" />
//           <span className="text-white text-2xl font-bold">AQUAPRO</span>
//         </div> */}
//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center">
//           <ul className="flex items-center space-x-8">
//             {/* Home Dropdown */}
//             {/* Other Links */}
//             {navLinks.map((link) => (
//               <li key={link}>
//                 <a href="#" className="text-white hover:text-cyan-400 transition-colors">{link}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Right side icons - Desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <Phone className="h-5 w-5 text-cyan-400" />
//             <span className="text-white">(800) 123 4567</span>
//           </div>
//           <Search className="h-6 w-6 text-white hover:text-cyan-400 cursor-pointer" />
//         </div>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {/* Mobile Menu - Simplified for brevity, can be expanded */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#0a1929] py-4">
//           <ul className="flex flex-col items-center space-y-4">
//             <li><a href="#" className="text-cyan-400">Home</a></li>
//             {navLinks.map((link) => (
//               <li key={link}><a href="#" className="text-white hover:text-cyan-400">{link}</a></li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };
// // Preloader Component
// const Preloader = () => (
//   <div className="fixed inset-0 bg-[#0c0c0c] flex justify-center items-center z-[100]">
//     <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
//   </div>
// );
// // Main Page Component
// const HomePage = () => {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     // Simulate loading time like in the video
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <>
//       {loading && <Preloader />}
//       <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
//         <Header />
//         <main>
//           {/* Hero Section */}
//           <section className="h-screen w-full hero-bg flex items-center">
//             <div className="container mx-auto px-6">
//               <div className="text-left text-white max-w-2xl">
//                 <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                   Aquarium Installation and Maintenance
//                 </h1>
//                 <p className="mt-4 text-xl md:text-2xl text-gray-200">
//                   Fastest and easiest way to cycle your new aquarium.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-8 inline-block bg-cyan-500 text-white font-bold py-4 px-10 rounded hover:bg-cyan-600 transition-colors duration-300"
//                 >
//                   CONTACT US TODAY!
//                 </a>
//               </div>
//             </div>
//           </section>
//           {/* You can add other sections here */}
//           <section className="py-20 bg-[#0c0c0c]">
//              <div className="container mx-auto text-center">
//                 <h2 className="text-4xl text-white">Other Content Goes Here</h2>
//              </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };
// export default HomePage;
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-ssr] (ecmascript)"); // Import the new Header component
"use client";
;
;
;
// Main Page Component
const HomePage = ()=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setLoading(false), 1500);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "h-screen w-full hero-bg flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto px-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left text-white max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-5xl md:text-7xl font-bold leading-tight",
                                            children: "Aquarium Installation and Maintenance"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 text-xl md:text-2xl text-gray-200",
                                            children: "Fastest and easiest way to cycle your new aquarium."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "mt-8 inline-block bg-cyan-500 text-white font-bold py-4 px-10 rounded hover:bg-cyan-600 transition-colors duration-300",
                                            children: "CONTACT US TODAY!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "py-20 bg-[#0c0c0c]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container mx-auto text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-white",
                                    children: "Other Content Goes Here"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 175,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = HomePage;
}),

};

//# sourceMappingURL=src_app_page_tsx_25a22f1e._.js.map