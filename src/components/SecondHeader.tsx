// import {
//   Building2,
//   Megaphone,
//   TrendingUp,
//   Shield,
//   FileText,
//   Star,
//   BarChart3,
//   MessageCircle,
//   Users,
//   Train,
//   Menu,
//   X,
// } from "lucide-react";
// import { useState } from "react";
// import React from "react";

// export function SecondHeader() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const categories = [
//     { id: "1", title: "स्थानीय सुशासन", subtitle: "आपके शहर/ इलाके की हर खबर", icon: Building2 },
//     { id: "2", title: "जनता की आवाज", subtitle: "सीधे नागरिकों द्वारा उठाए गए मुद्दे और जनमत", icon: Megaphone },
//     { id: "3", title: "प्रगति पथ", subtitle: "आपके क्षेत्र में चल रहे विकास कार्यों की गति", icon: TrendingUp },
//     { id: "4", title: "आपराधिक सतर्कता", subtitle: "अपराध और सुरक्षा से जुड़ी जरूरी जानकारी", icon: Shield },
//     { id: "5", title: "ग्राउंड रिपोर्ट", subtitle: "जमीनी हकीकत और सच्चाई", icon: FileText },
//     { id: "6", title: "Civic कॉस्ट स्पेशल", subtitle: "जो खबरें आपको कहीं और नहीं मिलेंगी", icon: Star },
//     { id: "7", title: "जवाबदेही मीटर", subtitle: "कौन सा विभाग आपके वादे निभा रहा", icon: BarChart3 },
//     { id: "8", title: "आज का सवाल", subtitle: "जिस मुद्दे पर शहर को सोचना जरूरी", icon: MessageCircle },
//     { id: "9", title: "सीधे नागरिक से", subtitle: "किसी एक नागरिक के जरूरी अनुभव की कहानी", icon: Users },
//     { id: "10", title: "पटरी पर भारत", subtitle: "भारतीय रेल्वे की कहानी", icon: Train },
//   ];

//   return (
//     <div className="bg-gray-100 border-b border-gray-300">
//       <div className="container mx-auto px-4">
//         {/* ===== TABLET & DESKTOP ===== */}
//         <div
//           className="
//             hidden md:flex
//             md:flex-wrap lg:flex-nowrap
//             items-center justify-center
//             gap-x-6 gap-y-2
//             py-2
//             overflow-x-hidden
//           "
//         >
//           {categories.map((category) => {
//             const Icon = category.icon;
//             return (
//               <button
//                 key={category.id}
//                 title={category.subtitle}
//                 className="
//                   flex items-center gap-2
//                   px-2 py-1
//                   hover:text-blue-600 transition-colors
//                   group
//                 "
//               >
//                 <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 group-hover:text-blue-600" />
//                 <span className="text-xs lg:text-sm font-medium text-gray-800 whitespace-nowrap group-hover:text-blue-600">
//                   {category.title}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* ===== MOBILE ===== */}
//         <div className="md:hidden py-2">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="
//               flex items-center justify-between w-full
//               px-4 py-2 bg-white hover:bg-gray-50
//               text-gray-700 rounded-lg font-medium
//               shadow-sm border border-gray-300
//             "
//           >
//             <span className="text-sm font-semibold">Categories</span>
//             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>

//           {isMobileMenuOpen && (
//             <div className="mt-2 space-y-2 max-h-96 overflow-y-auto bg-white rounded-lg shadow-lg border border-gray-300 p-2">
//               {categories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     className="
//                       w-full flex items-start gap-3
//                       px-4 py-3 hover:bg-gray-100
//                       rounded-lg transition-colors text-left
//                     "
//                   >
//                     <Icon className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" />
//                     <div className="flex-1">
//                       <div className="font-medium text-sm text-gray-800">
//                         {category.title}
//                       </div>
//                       <div className="text-xs text-gray-600 mt-0.5">
//                         {category.subtitle}
//                       </div>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import {
  Building2,
  Megaphone,
  TrendingUp,
  Shield,
  FileText,
  Star,
  BarChart3,
  MessageCircle,
  Users,
  Train,
  Menu,
  X,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import React from "react";

export function SecondHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const headerRef = useRef(null);

  const categories = [
    { id: "1", title: "स्थानीय सुशासन", subtitle: "आपके शहर/ इलाके की हर खबर", icon: Building2 },
    { id: "2", title: "जनता की आवाज", subtitle: "सीधे नागरिकों द्वारा उठाए गए मुद्दे और जनमत", icon: Megaphone },
    { id: "3", title: "प्रगति पथ", subtitle: "आपके क्षेत्र में चल रहे विकास कार्यों की गति", icon: TrendingUp },
    { id: "4", title: "आपराधिक सतर्कता", subtitle: "अपराध और सुरक्षा से जुड़ी जरूरी जानकारी", icon: Shield },
    { id: "5", title: "ग्राउंड रिपोर्ट", subtitle: "जमीनी हकीकत और सच्चाई", icon: FileText },
    { id: "6", title: "Civic कॉस्ट स्पेशल", subtitle: "जो खबरें आपको कहीं और नहीं मिलेंगी", icon: Star },
    { id: "7", title: "जवाबदेही मीटर", subtitle: "कौन सा विभाग आपके वादे निभा रहा", icon: BarChart3 },
    { id: "8", title: "आज का सवाल", subtitle: "जिस मुद्दे पर शहर को सोचना जरूरी", icon: MessageCircle },
    { id: "9", title: "सीधे नागरिक से", subtitle: "किसी एक नागरिक के जरूरी अनुभव की कहानी", icon: Users },
    { id: "10", title: "पटरी पर भारत", subtitle: "भारतीय रेल्वे की कहानी", icon: Train },
  ];

  /* 🔹 Close subtitle when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={headerRef} className="w-full bg-blue-900 border-b-4 border-yellow-400">
      {/* ===== DESKTOP & TABLET ===== */}
      <div className="hidden md:flex flex-wrap justify-center gap-x-10 gap-y-4 px-6 lg:px-16 py-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeId === category.id;

          return (
            <div key={category.id} className="relative">
              {/* TITLE BUTTON */}
              <button
                onClick={() =>
                  setActiveId(isActive ? null : category.id)
                }
                className="
                  flex items-center gap-4
                  text-black font-bold
                  px-3 py-1.5
                  hover:text-yellow-300
                  transition-colors
                "
              >
                <Icon className="w-5 h-5 text-yellow-300" />
                <span className="whitespace-nowrap text-sm lg:text-base">
                  {category.title}
                </span>
              </button>

              {/* Yellow underline */}
              {isActive && (
                <div className="h-0.5 bg-yellow-400 mt-1" />
              )}

              {/* SUBTITLE (on click only) */}
              {isActive && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white text-blue-900 text-xs rounded-lg shadow-xl p-3 z-50">
                  {category.subtitle}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ===== MOBILE ===== */}
      <div className="md:hidden px-4 py-3 bg-blue-900">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="
            w-full flex items-center justify-between
            px-4 py-2
            bg-white text-blue-900
            rounded-lg font-semibold
            border border-yellow-400
          "
        >
          <span>Categories</span>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMobileMenuOpen && (
          <div className="mt-2 bg-white border border-yellow-400 rounded-lg shadow-lg overflow-hidden">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="px-4 py-3 border-b last:border-b-0 hover:bg-blue-50"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-700" />
                    <div>
                      <div className="text-sm font-semibold text-blue-900">
                        {category.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {category.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
