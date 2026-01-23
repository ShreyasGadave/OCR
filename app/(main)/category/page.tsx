// "use client"
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Plus, Search, ArrowUpRight, FileText, Receipt, CreditCard, Scale, PenTool, GraduationCap, Heart, X, Folder, TrendingUp, AlertCircle } from "lucide-react";

// const categoryIcons = {
//   "Invoices": FileText,
//   "Bills": Receipt,
//   "Identity Documents": CreditCard,
//   "Receipts": Receipt,
//   "Legal Documents": Scale,
//   "Handwritten Notes": PenTool,
//   "Educational Documents": GraduationCap,
//   "Medical Records": Heart,
// };

// const categories = [
//   { name: "Invoices", count: 42, size: "120 MB", color: "bg-blue-500" },
//   { name: "Bills", count: 18, size: "52 MB", color: "bg-green-500" },
//   { name: "Identity Documents", count: 30, size: "85 MB", color: "bg-purple-500" },
//   { name: "Receipts", count: 26, size: "40 MB", color: "bg-orange-500" },
//   { name: "Legal Documents", count: 14, size: "200 MB", color: "bg-red-500" },
//   { name: "Handwritten Notes", count: 22, size: "10 MB", color: "bg-yellow-500" },
//   { name: "Educational Documents", count: 12, size: "75 MB", color: "bg-indigo-500" },
//   { name: "Medical Records", count: 9, size: "110 MB", color: "bg-pink-500" },
// ];

// export default function Page() {
//   const [showSuggestion, setShowSuggestion] = useState(true);
  
//   const totalDocs = categories.reduce((acc, c) => acc + c.count, 0);
//   const totalStorage = "692 MB";

//   return (
//     <div className="min-h-screen">

//       {/* Main Content */}
//       <div className="">
//         {/* Page Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
//           <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
//             + New Category
//           </Button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
//             <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
//               <ArrowUpRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
//             </div>
//             <div className="mb-3">
//               <Folder className="text-blue-600" size={24} />
//             </div>
//             <div className="text-2xl font-bold text-gray-900 mb-1">{categories.length}</div>
//             <div className="text-sm text-gray-600">Total Categories</div>
//           </div>

//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
//             <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-lg group-hover:bg-green-50 transition-colors">
//               <ArrowUpRight size={18} className="text-gray-400 group-hover:text-green-600 transition-colors" />
//             </div>
//             <div className="mb-3">
//               <FileText className="text-green-600" size={24} />
//             </div>
//             <div className="text-2xl font-bold text-gray-900 mb-1">{totalDocs}</div>
//             <div className="text-sm text-gray-600">Total Documents</div>
//           </div>

//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
//             <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-lg group-hover:bg-purple-50 transition-colors">
//               <ArrowUpRight size={18} className="text-gray-400 group-hover:text-purple-600 transition-colors" />
//             </div>
//             <div className="mb-3">
//               <TrendingUp className="text-purple-600" size={24} />
//             </div>
//             <div className="text-2xl font-bold text-gray-900 mb-1">{totalStorage}</div>
//             <div className="text-sm text-gray-600">Storage Used</div>
//           </div>

//           <div className="bg-white rounded-xl p-6 border border-gray-200 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer">
//             <div className="absolute top-4 right-4 p-2 bg-gray-50 rounded-lg group-hover:bg-orange-50 transition-colors">
//               <ArrowUpRight size={18} className="text-gray-400 group-hover:text-orange-600 transition-colors" />
//             </div>
//             <div className="mb-3">
//               <AlertCircle className="text-orange-600" size={24} />
//             </div>
//             <div className="text-2xl font-bold text-gray-900 mb-1">3</div>
//             <div className="text-sm text-gray-600">Needs Attention</div>
//           </div>
//         </div>

//         {/* Search and Sort */}
//         <div className="flex items-center gap-4 mb-6">
//           <div className="relative flex-1 max-w-md">
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             <input
//               type="text"
//               placeholder="Search categories..."
//               className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none text-sm"
//             />
//           </div>
//           <select className="border border-gray-300 rounded-lg px-3 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
//             <option>Sort by</option>
//             <option>Name</option>
//             <option>Document Count</option>
//             <option>Storage Size</option>
//           </select>
//         </div>

//         {/* AI Suggestion Banner */}
//         {showSuggestion && (
//           <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 flex items-start gap-4">
//             <div className="p-2 bg-orange-100 rounded-lg mt-0.5">
//               <AlertCircle className="text-orange-600" size={20} />
//             </div>
//             <div className="flex-1">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h3 className="font-semibold text-gray-900 text-sm mb-1">AI Auto-Suggested Categories</h3>
//                   <p className="text-sm text-gray-700 mb-3">
//                     Based on recent uploads, we detected new document types that can be automatically categorized.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     <span className="px-3 py-1.5 bg-white border border-orange-200 rounded-lg text-sm text-gray-700 hover:border-orange-300 cursor-pointer transition-colors">
//                       Travel Documents
//                     </span>
//                     <span className="px-3 py-1.5 bg-white border border-orange-200 rounded-lg text-sm text-gray-700 hover:border-orange-300 cursor-pointer transition-colors">
//                       Bank Statements
//                     </span>
//                     <span className="px-3 py-1.5 bg-white border border-orange-200 rounded-lg text-sm text-gray-700 hover:border-orange-300 cursor-pointer transition-colors">
//                       Insurance Forms
//                     </span>
//                   </div>
//                   <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
//                     Add Suggested Categories
//                   </button>
//                 </div>
//                 <button onClick={() => setShowSuggestion(false)} className="p-1 hover:bg-orange-100 rounded">
//                   <X size={18} className="text-gray-500" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Category Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((c, idx) => {
//             const Icon = categoryIcons[c.name] || FileText;
            
//             return (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer group"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div className={`w-10 h-10 ${c.color} rounded-lg flex items-center justify-center`}>
//                     <Icon className="text-white" size={20} strokeWidth={2} />
//                   </div>
//                   <div className="w-8 h-8 bg-gray-50 group-hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors">
//                     <ArrowUpRight size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
//                   </div>
//                 </div>

//                 <h2 className="font-semibold text-gray-900 mb-2">{c.name}</h2>
                
//                 <div className="flex items-center justify-between text-sm">
//                   <div>
//                     <div className="text-gray-900 font-medium">{c.count}</div>
//                     <div className="text-gray-500 text-xs">documents</div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-gray-700 font-medium">{c.size}</div>
//                     <div className="text-gray-500 text-xs">storage</div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }