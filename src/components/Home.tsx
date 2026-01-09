// import { ImageWithFallback } from './figma/ImageWithFallback';
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
//   ChevronRight,
//   Newspaper,
// } from 'lucide-react';

// const categories = [
//   {
//     id: 'local-governance',
//     title: 'स्थानीय सुशासन',
//     titleEn: 'Local Governance',
//     description: 'Every important update of your city and locality',
//     descriptionHi: 'आपके शहर और इलाके की हर महत्वपूर्ण अपडेट',
//     icon: Building2,
//     color: 'from-blue-500 to-blue-600',
//   },
//   {
//     id: 'voice-of-people',
//     title: 'जनता की आवाज',
//     titleEn: 'Voice of the People',
//     description: 'Citizen-raised issues and public opinions',
//     descriptionHi: 'नागरिकों द्वारा उठाए गए मुद्दे और जनमत',
//     icon: Megaphone,
//     color: 'from-orange-500 to-orange-600',
//   },
//   {
//     id: 'progress-path',
//     title: 'प्रगति पथ',
//     titleEn: 'Path of Progress',
//     description: 'Showcasing the pace of development works in the region',
//     descriptionHi: 'क्षेत्र में विकास कार्यों की गति को प्रदर्शित करना',
//     icon: TrendingUp,
//     color: 'from-green-500 to-green-600',
//   },
//   {
//     id: 'crime-alert',
//     title: 'आपराधिक सतर्कता',
//     titleEn: 'Crime Alert',
//     description: 'Essential information related to crime and public safety',
//     descriptionHi: 'अपराध और सार्वजनिक सुरक्षा से संबंधित आवश्यक जानकारी',
//     icon: Shield,
//     color: 'from-red-500 to-red-600',
//   },
//   {
//     id: 'ground-report',
//     title: 'ग्राउंड रिपोर्ट',
//     titleEn: 'Ground Report',
//     description: 'Presenting ground realities and truth',
//     descriptionHi: 'जमीनी हकीकत और सच्चाई को पेश करना',
//     icon: FileText,
//     color: 'from-purple-500 to-purple-600',
//   },
//   {
//     id: 'civic-special',
//     title: 'Civic कॉस्ट स्पेशल',
//     titleEn: 'CivicCast Special',
//     description: "Exclusive news that you won't find anywhere else",
//     descriptionHi: 'विशेष खबरें जो आपको कहीं और नहीं मिलेंगी',
//     icon: Star,
//     color: 'from-yellow-500 to-yellow-600',
//   },
//   {
//     id: 'accountability-meter',
//     title: 'जवाबदेही मीटर',
//     titleEn: 'Accountability Meter',
//     description: 'Tracking which departments are fulfilling their promises',
//     descriptionHi: 'कौन से विभाग अपने वादे पूरे कर रहे हैं इसे ट्रैक करना',
//     icon: BarChart3,
//     color: 'from-teal-500 to-teal-600',
//   },
//   {
//     id: 'todays-question',
//     title: 'आज का सवाल',
//     titleEn: "Today's Question",
//     description: 'Focusing on issues that the city must think about',
//     descriptionHi: 'उन मुद्दों पर ध्यान केंद्रित करना जिन पर शहर को सोचना चाहिए',
//     icon: MessageCircle,
//     color: 'from-pink-500 to-pink-600',
//   },
//   {
//     id: 'from-citizens',
//     title: 'सीधे नागरिक से',
//     titleEn: 'Directly from Citizens',
//     description: 'Important real-life experiences of individual citizens',
//     descriptionHi: 'व्यक्तिगत नागरिकों के महत्वपूर्ण वास्तविक अनुभव',
//     icon: Users,
//     color: 'from-indigo-500 to-indigo-600',
//   },
//   {
//     id: 'india-on-rails',
//     title: 'पटरी पर भारत',
//     titleEn: 'India on Rails',
//     description: 'Stories related to Indian Railways',
//     descriptionHi: 'भारतीय रेलवे से संबंधित कहानियां',
//     icon: Train,
//     color: 'from-cyan-500 to-cyan-600',
//   },
// ];

// export function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//               <Newspaper className="w-4 h-4" />
//               <span className="text-sm">Independent & Citizen-Centric Platform</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
//               Strengthening Local Democracy
//             </h1>
//             <p className="text-lg md:text-xl mb-4 text-blue-100">
//               स्थानीय लोकतंत्र को मजबूत करना
//             </p>
//             <p className="text-base md:text-lg text-blue-200 max-w-3xl mx-auto mb-8">
//               CivicCast is dedicated to empowering citizens through information, dialogue, and
//               accountability. Every voice matters, every issue deserves attention.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
//                 <Building2 className="w-5 h-5" />
//                 <span>Bhopal, Madhya Pradesh</span>
//               </div>
//               <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
//                 <Shield className="w-5 h-5" />
//                 <span>Independent Journalism</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl mb-4">Our Coverage Areas</h2>
//             <p className="text-lg text-gray-600">हमारे कवरेज क्षेत्र</p>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categories.map((category) => {
//               const Icon = category.icon;
//               return (
//                 <div
//                   key={category.id}
//                   className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
//                 >
//                   <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
//                   <div className="p-6">
//                     <div
//                       className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                     >
//                       <Icon className="w-7 h-7 text-white" />
//                     </div>
//                     <h3 className="text-xl mb-2">{category.title}</h3>
//                     <p className="text-sm text-gray-500 mb-3">{category.titleEn}</p>
//                     <p className="text-sm text-gray-700 mb-2">{category.descriptionHi}</p>
//                     <p className="text-sm text-gray-600">{category.description}</p>
//                     <div className="flex items-center gap-2 mt-4 text-blue-600 group-hover:gap-3 transition-all">
//                       <span className="text-sm">Explore</span>
//                       <ChevronRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid md:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
//                 <p className="text-lg text-gray-700 mb-4">
//                   CivicCast bridges the gap between government and citizens, ensuring every voice is
//                   heard and every issue gets addressed.
//                 </p>
//                 <p className="text-gray-600 mb-6">
//                   Through accurate information, citizen dialogue, and accountability, we empower
//                   communities to actively participate in local governance and hold authorities
//                   responsible for their promises.
//                 </p>
//                 <div className="grid grid-cols-3 gap-4 mt-8">
//                   <div className="text-center">
//                     <div className="text-3xl text-blue-600 mb-2">10+</div>
//                     <div className="text-sm text-gray-600">Coverage Areas</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl text-blue-600 mb-2">100%</div>
//                     <div className="text-sm text-gray-600">Independent</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl text-blue-600 mb-2">24/7</div>
//                     <div className="text-sm text-gray-600">Monitoring</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
//                 <ImageWithFallback
//                   src="https://images.unsplash.com/photo-1616970453234-25b8146cd401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBkZW1vY3JhY3klMjBjaXRpemVufGVufDF8fHx8MTc2NDE0MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080"
//                   alt="CivicCast Mission"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-16 md:py-20 bg-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
//             <p className="text-lg text-gray-600">हमारे मूल मूल्य</p>
//           </div>
//           <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="mb-2">Trust</h3>
//               <p className="text-sm text-gray-600">विश्वास</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="mb-2">Transparency</h3>
//               <p className="text-sm text-gray-600">पारदर्शिता</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-6 h-6 text-orange-600" />
//               </div>
//               <h3 className="mb-2">Civic Responsibility</h3>
//               <p className="text-sm text-gray-600">नागरिक जिम्मेदारी</p>
//             </div>
//             <div className="bg-white p-6 rounded-xl shadow-md text-center">
//               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <BarChart3 className="w-6 h-6 text-purple-600" />
//               </div>
//               <h3 className="mb-2">Accountability</h3>
//               <p className="text-sm text-gray-600">जवाबदेही</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { contentData } from '../data/contentData';
import { NewsCarousel } from './NewsCarousel';
import { NewsVideoCarousel } from './NewsVideoCarousel';
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
  ChevronRight,
  Newspaper,
  ArrowLeft,
  PlayCircle,
  Clock,
} from 'lucide-react';

/* ===================== CATEGORIES ===================== */
const categories = [
  {
    id: 'local-governance',
    title: 'स्थानीय सुशासन',
    titleEn: 'Local Governance',
    description: 'Every important update of your city and locality',
    descriptionHi: 'आपके शहर और इलाके की हर महत्वपूर्ण अपडेट',
    fullContent: `
यह सेक्शन नगर निगम, वार्ड स्तर की समस्याएं,
स्थानीय प्रशासन, सड़क, पानी, बिजली और
अन्य नागरिक मुद्दों की पूरी जानकारी देता है।
    `,
    icon: Building2,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'voice-of-people',
    title: 'जनता की आवाज',
    titleEn: 'Voice of the People',
    description: 'Citizen-raised issues and public opinions',
    descriptionHi: 'नागरिकों द्वारा उठाए गए मुद्दे और जनमत',
    fullContent: `
यह प्लेटफॉर्म सीधे नागरिकों की आवाज को सामने लाता है।
यहाँ लोग अपनी समस्याएं और अनुभव साझा करते हैं।
    `,
    icon: Megaphone,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'progress-path',
    title: 'प्रगति पथ',
    titleEn: 'Path of Progress',
    description: 'Showcasing the pace of development works in the region',
    descriptionHi: 'क्षेत्र में विकास कार्यों की गति को प्रदर्शित करना',
    fullContent: `
सड़कों, पुलों, स्कूलों और अन्य विकास परियोजनाओं
की वास्तविक स्थिति यहाँ दिखाई जाती है।
    `,
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'crime-alert',
    title: 'आपराधिक सतर्कता',
    titleEn: 'Crime Alert',
    description: 'Essential information related to crime and public safety',
    descriptionHi: 'अपराध और सार्वजनिक सुरक्षा से संबंधित आवश्यक जानकारी',
    fullContent: `
अपराध से जुड़ी खबरें और सुरक्षा अलर्ट
इस सेक्शन में मिलते हैं।
    `,
    icon: Shield,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'ground-report',
    title: 'ग्राउंड रिपोर्ट',
    titleEn: 'Ground Report',
    description: 'Presenting ground realities and truth',
    descriptionHi: 'जमीनी हकीकत और सच्चाई को पेश करना',
    fullContent: `
ग्राउंड लेवल रिपोर्टिंग के ज़रिए
वास्तविक हालात सामने लाए जाते हैं।
    `,
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'civic-special',
    title: 'Civic कॉस्ट स्पेशल',
    titleEn: 'CivicCast Special',
    description: "Exclusive news that you won't find anywhere else",
    descriptionHi: 'विशेष खबरें जो आपको कहीं और नहीं मिलेंगी',
    fullContent: `
एक्सक्लूसिव स्टोरीज़ और इन्वेस्टिगेटिव रिपोर्ट्स
यहाँ प्रकाशित होती हैं।
    `,
    icon: Star,
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    id: 'accountability-meter',
    title: 'जवाबदेही मीटर',
    titleEn: 'Accountability Meter',
    description: 'Tracking which departments are fulfilling their promises',
    descriptionHi: 'कौन से विभाग अपने वादे पूरे कर रहे हैं इसे ट्रैक करना',
    fullContent: `
सरकारी विभागों की परफॉर्मेंस और
जवाबदेही यहाँ दिखाई जाती है।
    `,
    icon: BarChart3,
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'todays-question',
    title: 'आज का सवाल',
    titleEn: "Today's Question",
    description: 'Focusing on issues that the city must think about',
    descriptionHi: 'उन मुद्दों पर ध्यान केंद्रित करना जिन पर शहर को सोचना चाहिए',
    fullContent: `
आज के सबसे जरूरी सवाल और
नागरिकों की राय यहाँ दिखाई जाती है।
    `,
    icon: MessageCircle,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 'from-citizens',
    title: 'सीधे नागरिक से',
    titleEn: 'Directly from Citizens',
    description: 'Important real-life experiences of individual citizens',
    descriptionHi: 'व्यक्तिगत नागरिकों के महत्वपूर्ण वास्तविक अनुभव',
    fullContent: `
नागरिकों की व्यक्तिगत कहानियाँ
और अनुभव इस सेक्शन में आते हैं।
    `,
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'india-on-rails',
    title: 'पटरी पर भारत',
    titleEn: 'India on Rails',
    description: 'Stories related to Indian Railways',
    descriptionHi: 'भारतीय रेलवे से संबंधित कहानियां',
    fullContent: `
भारतीय रेलवे से जुड़ी खबरें
और रिपोर्ट्स यहाँ मिलती हैं।
    `,
    icon: Train,
    color: 'from-cyan-500 to-cyan-600',
  },
];

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Newspaper className="w-4 h-4" />
              <span className="text-sm">Independent & Citizen-Centric Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              Strengthening Local Democracy
            </h1>

            <p className="text-lg md:text-xl mb-4 text-blue-100">
              स्थानीय लोकतंत्र को मजबूत करना
            </p>

            <p className="text-base md:text-lg text-blue-200 max-w-3xl mx-auto mb-8">
              CivicCast is dedicated to empowering citizens through information,
              dialogue, and accountability. Every voice matters, every issue deserves attention.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Building2 className="w-5 h-5" />
                <span>Bhopal, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Shield className="w-5 h-5" />
                <span>Independent Journalism</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* ================= NEWS CAROUSEL ================= */}
      {!selectedCategory && <NewsCarousel />}

      {/* ================= CATEGORIES / DETAIL ================= */}
      {!selectedCategory ? (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Our Coverage Areas</h2>
              <p className="text-lg text-gray-600">हमारे कवरेज क्षेत्र</p>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-xl mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{category.titleEn}</p>
                      <p className="text-sm text-gray-700 mb-2">{category.descriptionHi}</p>
                      <p className="text-sm text-gray-600">{category.description}</p>

                      <div
                        onClick={() => setSelectedCategory(category)}
                        className="flex items-center gap-2 mt-4 text-blue-600 cursor-pointer"
                      >
                        <span className="text-sm">Explore</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 mb-6 text-blue-600"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <selectedCategory.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl">{selectedCategory.title}</h2>
                <p className="text-gray-500">{selectedCategory.titleEn}</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              {selectedCategory.descriptionHi}
            </p>

            <p className="text-gray-600 whitespace-pre-line leading-relaxed mb-12">
              {selectedCategory.fullContent}
            </p>

            {/* News & Videos Section */}
            {contentData[selectedCategory.id] && (
              <div>
                {/* News Section */}
                {contentData[selectedCategory.id].news.length > 0 && (
                  <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <Newspaper className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-bold">Latest News</h3>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {contentData[selectedCategory.id].news.map((item) => (
                        <div
                          key={item.id}
                          className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100"
                        >
                          <div className="relative h-32 overflow-hidden">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-3 left-3 right-3">
                              <div className="flex items-center gap-2 text-white/80 text-xs mb-2">
                                <Clock className="w-3 h-3" />
                                <span>{item.date}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-5">
                            <h4 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                              {item.summary}
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
                              <span>Read More</span>
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Content Message */}
                {contentData[selectedCategory.id].news.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-xl">
                    <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">No news available yet for this category.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= VIDEO CAROUSEL ================= */}
      {!selectedCategory && <NewsVideoCarousel />}

      {/* ================= MISSION & CORE VALUES ================= */}
      {!selectedCategory && (
        <>
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl mb-6">Our Mission</h2>
                  <p className="text-lg text-gray-700 mb-4">
                    CivicCast bridges the gap between government and citizens,
                    ensuring every voice is heard and every issue gets addressed.
                  </p>
                  <p className="text-gray-600">
                    Through accurate information, citizen dialogue, and accountability,
                    we empower communities to actively participate in local governance.
                  </p>
                </div>
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1616970453234-25b8146cd401"
                    alt="CivicCast Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-blue-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl mb-4">Our Core Values</h2>
                <p className="text-lg text-gray-600">हमारे मूल मूल्य</p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-4" />
                  <h3>Trust</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <FileText className="w-6 h-6 text-green-600 mx-auto mb-4" />
                  <h3>Transparency</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <Users className="w-6 h-6 text-orange-600 mx-auto mb-4" />
                  <h3>Civic Responsibility</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <BarChart3 className="w-6 h-6 text-purple-600 mx-auto mb-4" />
                  <h3>Accountability</h3>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
