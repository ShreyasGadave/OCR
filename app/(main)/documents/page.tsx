"use client";

import { File, Link2, RefreshCw, Search } from "lucide-react";
import Image from "next/image";

const data = [
  {
    id: "#86468",
    issue: "Expired government ID.",
    due: "28-05-2025",
    dueColor: "text-red-500 bg-red-100",
    assignee: {
      name: "Michael S.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    attachment: { name: "Reg_OK.pdf", type: "PDF", size: "0.6 MB" },
  },
  {
    id: "#12828",
    issue: "Document is missing.",
    due: "29-05-2025",
    dueColor: "text-red-500 bg-red-100",
    assignee: {
      name: "Emma D.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    attachment: { name: "Reg_VIN.png", type: "PNG", size: "0.2 MB" },
  },
  {
    id: "#38435",
    issue: "Name doesn’t match policy.",
    due: "01-06-2025",
    dueColor: "text-yellow-600 bg-yellow-100",
    assignee: {
      name: "Olivia J.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    attachment: { name: "VRC_2025.pdf", type: "PDF", size: "0.9 MB" },
  },
  {
    id: "#84387",
    issue: "Document is missing.",
    due: "02-06-2025",
    dueColor: "text-yellow-600 bg-yellow-100",
    assignee: {
      name: "Sam W.",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    attachment: { name: "Auto_Reg.pdf", type: "PDF", size: "1.0 MB" },
  },
  {
    id: "#28944",
    issue: "Signature mismatch.",
    due: "03-06-2025",
    dueColor: "text-yellow-600 bg-yellow-100",
    assignee: {
      name: "Liam F.",
      img: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    attachment: { name: "Signed_Form.pdf", type: "PDF", size: "0.4 MB" },
  },
  {
    id: "#55312",
    issue: "Unreadable file quality.",
    due: "04-06-2025",
    dueColor: "text-yellow-600 bg-yellow-100",
    assignee: {
      name: "Sophia R.",
      img: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    attachment: { name: "Scan_ID.png", type: "PNG", size: "0.3 MB" },
  },
  {
    id: "#99873",
    issue: "Wrong policy number.",
    due: "05-06-2025",
    dueColor: "text-red-500 bg-red-100",
    assignee: {
      name: "David L.",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    attachment: { name: "Policy_Num.pdf", type: "PDF", size: "0.5 MB" },
  },
  {
    id: "#44211",
    issue: "Document expired.",
    due: "06-06-2025",
    dueColor: "text-red-500 bg-red-100",
    assignee: {
      name: "Isabella T.",
      img: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    attachment: { name: "Driver_License.pdf", type: "PDF", size: "0.7 MB" },
  },
];

export default function Page() {
  return (
    <div className=" space-y-6">
      {/* HEADER */}
      <h1 className="text-3xl font-semibold">Validation Queue</h1>

      {/* TABS */}
      <div className=" flex justify-between">
      <div className="flex gap-6 text-gray-500 font-medium">
        <button className="text-black border-b-2 border-black pb-1">
          ID Document · 7
        </button>
        <button>Previous Policy · 12</button>
        <button>ID Document · 9</button>
        <button>Overdue documents · 2</button>
      </div>

      {/* SEARCH + SORT */}
      <div className=" flex gap-3">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-xl text-gray-400 w-52">
          <Search className="w-4 h-4" />
          <input
            placeholder="Search..."
            className="outline-none bg-transparent text-gray-600 text-sm"
          />
        </div>

        <button className="border px-4 py-2 rounded-xl text-sm flex items-center gap-2 text-gray-600">
          Sort by ▾
        </button>
      </div>
 </div>
      {/* CARDS */}
      <div className="grid grid-cols-4 gap-4">
        {data.map((doc) => (
          <div
            key={doc.id}
            className="p-4 rounded-2xl bg-white shadow-sm space-y-3"
          >
            {/* TOP BAR */}
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-600">
                ID: <span className="font-semibold text-black">{doc.id}</span>
              </p>
              <button className="w-9 h-9 bg-gray-100 rounded-xl flex justify-center items-center">
                <Link2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            {/* ISSUE */}{" "}
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-sm text-gray-500">Issue:</p>
              <p className="font-medium text-gray-800">{doc.issue}</p>
            </div>
            {/* DUE DATE */}
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-xs text-gray-500">Due Date:</p>
              <span
                className={`px-2 py-1 rounded-md text-xs font-medium ${doc.dueColor}`}
              >
                {doc.due}
              </span>
            </div>
            {/* ASSIGNEE */}
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-xs text-gray-500">Assignee:</p>
              <div className="flex items-center gap-2">
                <Image
                  src={doc.assignee.img}
                  width={24}
                  height={24}
                  alt={doc.assignee.name}
                  className="rounded-full"
                />
                <span className="text-sm font-medium">{doc.assignee.name}</span>
              </div>
            </div>
            {/* ATTACHMENT */}
            <p className="text-xs text-gray-500">Attachments:</p>
            <div className="flex items-center justify-between rounded-xl px-1 py-1">
              <div className="flex items-center gap-2">
                <File className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm font-medium">{doc.attachment.name}</p>
                  <p className="text-xs text-gray-500">
                    {doc.attachment.type} · {doc.attachment.size}
                  </p>
                </div>
              </div>

              <RefreshCw className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
