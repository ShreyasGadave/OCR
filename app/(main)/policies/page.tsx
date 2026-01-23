import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Download,
  Search,
  ChevronDown,
  MoreVertical,
  X,
  Car,
  FileText,
  CreditCard,
  File,
  Bolt,
  UserRoundPen,
  Dot,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  const percentage = 25; // change dynamically
  const SIZE = 190; // ⬅️ MAKE THE RADIUS SMALLER HERE
  const SEGMENTS = 88;
  const RADIUS = 32;
  return (
    <div className="min-h-screen dark:bg-black ">
      <div className="max-w-[1600px] mx-auto space-y-6">
        {/* TOP BAR */}
        <div className="flex justify-between pt-3 items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Policy</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            + New Policy
          </Button>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-2/3">
            <div className="grid grid-cols-4 gap-4">
              <Card className="bg-white pb-3 shadow-sm  rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="">
                    <div className=" flex items-center justify-start p-1">
                      <Image
                        src="/Blue.png"
                        height={38}
                        width={38}
                        alt="yellow file"
                      />
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <CardTitle className="text-sm  mt-2 font-semibold text-gray-600 w-full">
                    Policies 2025
                  </CardTitle>
                  <span className="text-xs flex items-center text-gray-500 mt-1">
                    4 files : 512MB
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-white pb-3 shadow-sm  rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="">
                    <div className=" flex items-center justify-start p-1">
                      <Image
                        src="/Yellow.png"
                        height={38}
                        width={38}
                        alt="yellow file"
                      />
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <CardTitle className="text-sm  mt-2 font-semibold text-gray-600 w-full">
                    Inspection Report
                  </CardTitle>
                  <span className="text-xs flex items-center text-gray-500 mt-1">
                    4 files : 512MB
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-white pb-3 shadow-sm  rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="">
                    <div className=" flex items-center justify-start p-1">
                      <Image
                        src="/Orange.png"
                        height={38}
                        width={38}
                        alt="yellow file"
                      />
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <CardTitle className="text-sm  mt-2 font-semibold text-gray-600 w-full">
                    Claim Documentation
                  </CardTitle>
                  <span className="text-xs flex items-center text-gray-500 mt-1">
                    4 files : 512MB
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-white pb-3 shadow-sm  rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="">
                    <div className=" flex items-center justify-start p-1">
                      <Image
                        src="/Purple.png"
                        height={38}
                        width={38}
                        alt="yellow file"
                      />
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="mt-2">
                  <CardTitle className="text-sm  mt-2 font-semibold text-gray-600 w-full">
                    Verify Required Docs
                  </CardTitle>
                  <span className="text-xs flex items-center text-gray-500 mt-1">
                    4 files : 512MB
                  </span>
                </CardContent>
              </Card>
            </div>
            <Card className="col-span-2 mt-4 bg-white shadow-sm border border-gray-200 rounded-xl">
              <CardHeader className="border-b border-gray-200 ">
                <div className="flex mt-3 justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Last policies
                  </CardTitle>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-2">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Import
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                    >
                      Renew
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                    >
                      Complete
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        placeholder="Search.."
                        className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg text-sm w-64"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      Sort by
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* TABLE HEADER */}
                <div className="grid grid-cols-12 gap-4 pb-3 border-b border-gray-200 text-sm text-gray-500 font-medium">
                  <div className="col-span-2 flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Client
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    Policy ID
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    Expiration
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    Policy Source
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    Assignee
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="col-span-1 flex items-center gap-2">
                    Status
                    <ChevronDown className="w-4 h-4" />
                  </div>

                  <div className="col-span-1"></div>
                </div>

                {/* TABLE ROWS */}
                <div className="space-y-0">
                  {[
                    {
                      name: "Conor O.",
                      id: "#35698",
                      exp: "Continued",
                      expColor: "text-blue-600",
                      source: "Manual Entry",
                      assignee: "Michael S.",
                      status: "Paid",
                      statusColor: "bg-green-100 text-green-700",
                      checked: false,
                    },
                    {
                      name: "Jessica T.",
                      id: "#35697",
                      exp: "in 8 days",
                      expColor: "text-orange-500",
                      source: "CRM Import",
                      assignee: "Sam W.",
                      status: "Awaiting",
                      statusColor: "bg-orange-100 text-orange-700",
                      checked: true,
                    },
                    {
                      name: "Jacob P.",
                      id: "#35695",
                      exp: "Continued",
                      expColor: "text-blue-600",
                      source: "Manual Entry",
                      assignee: "Emma D.",
                      status: "Paid",
                      statusColor: "bg-green-100 text-green-700",
                      checked: false,
                    },
                    {
                      name: "Emily R.",
                      id: "#35696",
                      exp: "in 10 days",
                      expColor: "text-orange-500",
                      source: "API Sync",
                      assignee: "Olivia J.",
                      status: "Failed",
                      statusColor: "bg-red-100 text-red-700",
                      checked: false,
                    },
                    {
                      name: "Kevin M.",
                      id: "#35694",
                      exp: "in 12 days",
                      expColor: "text-orange-500",
                      source: "CRM Import",
                      assignee: "Michael S.",
                      status: "Paid",
                      statusColor: "bg-green-100 text-green-700",
                      checked: true,
                    },
                    {
                      name: "Kevin M.",
                      id: "#35699",
                      exp: "in 12 days",
                      expColor: "text-orange-500",
                      source: "CRM Import",
                      assignee: "Michael S.",
                      status: "Paid",
                      statusColor: "bg-green-100 text-green-700",
                      checked: true,
                    },
                  ].map((row, idx) => (
                    <div
                      key={row.id}
                      className={`grid grid-cols-12 gap-4 py-4 border-b border-gray-100 text-sm ${
                        row.checked ? "" : ""
                      }`}
                    >
                      <div className="col-span-2 flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={row.checked}
                          readOnly
                          className="rounded"
                        />
                        <span className="font-medium text-gray-900">
                          {row.name}
                        </span>
                      </div>
                      <div className="col-span-2 text-gray-500">{row.id}</div>
                      <div className={`col-span-2 font-medium ${row.expColor}`}>
                        {row.exp}
                      </div>
                      <div className="col-span-2 text-gray-700">
                        {row.source}
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">
                            {row.assignee.split(" ")[0][0]}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-gray-700">{row.assignee}</span>
                      </div>
                      <div className="col-span-1">
                        <Badge
                          className={`${row.statusColor} rounded-full px-2 py-1 text-xs font-medium border-0`}
                        >
                          • {row.status}
                        </Badge>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* RIGHT SIDEBAR */}
          <div className="w-1/3">
            {/* Performance Review */}
            <Card className="bg-white shadow-sm border border-gray-200 rounded-2xl">
              <CardHeader className="border-b border-gray-200">
                <div className="flex mt-3 justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Document Compliance
                  </CardTitle>

                  <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-4 space-y-6">
                {/* % Graph */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500 px-1">
                    <span>16%</span>
                    <span>62%</span>
                    <span>22%</span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-gray-200 flex overflow-hidden">
                    <div
                      className="bg-orange-400"
                      style={{ width: "16%" }}
                    ></div>
                    <div
                      className="bg-yellow-400"
                      style={{ width: "62%" }}
                    ></div>
                    <div className="bg-teal-400" style={{ width: "22%" }}></div>
                  </div>
                </div>

                {/* STATUS CARDS */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { count: 5, label: "Expired", color: "bg-orange-500" },
                    { count: 23, label: "Incomplete", color: "bg-yellow-500" },
                    { count: 7, label: "Invalid Doc", color: "bg-teal-500" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-center border border-gray-200 rounded-xl py-1"
                    >
                      <span className="flex text-sm items-center gap-1 text-gray-900 font-medium">
                        <span
                          className={`w-2 h-2 rounded-full ${item.color}`}
                        />
                        {item.count}{" "}
                      </span>
                      <p className="text-sm text-gray-500 ml-1">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* TOTAL DOCUMENTS */}
                <div className="flex items-center justify-center gap-6">
                  <span className="text-3xl font-medium text-gray-900">
                    421
                    <span className="self-end pb-1 text-gray-500 text-sm ml-2">
                      Valid Documents
                    </span>
                  </span>

                  <span className="text-3xl font-medium text-gray-900">
                    48
                    <span className="self-end pb-1 text-gray-500 text-sm ml-2">
                      Pending Review
                    </span>
                  </span>
                </div>

                {/* WARNING BOX */}
                <div className="flex items-center mb-3  gap-3 bg-orange-50 text-orange-600 px-2 py-3 rounded-xl border border-orange-100">
                  <AlertTriangle className="w-12 h-12 mt-1" />
                  <p className="text-sm">
                    Some are close to expiring, incomplete, or failed
                    validation. Review now to avoid policy delays.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Validation Queue */}
            <Card
              className="relative overflow-hidden rounded-2xl border-0 text-white pt-3 mt-4 shadow-md 
      bg-[linear-gradient(135deg,#7AB7FF_0%,#3F7CE9_40%,#0F5BD7_100%)]"
            >
              {/* HEADER */}
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-[18px] font-semibold">
                    Storage Usage
                  </CardTitle>

                  <button className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                    <MoreVertical className="w-5 h-5 text-white" />
                  </button>
                </div>
              </CardHeader>

              <CardContent className="pt-2 pb-6 flex w-full items-center gap-8">
                {/* LEFT - PROGRESS RING */}
                <div
                  className="relative w-2/3 flex items-center justify-center"
                  style={{ width: SIZE, height: SIZE }}
                >
                  <svg width={SIZE} height={SIZE} viewBox="0 0 100 100">
                    {/* SEGMENTS */}
                    {[...Array(SEGMENTS)].map((_, i) => {
                      const angle = (i * 360) / SEGMENTS;
                      const isActive =
                        i < Math.round((percentage / 100) * SEGMENTS);

                      return (
                        <rect
                          key={i}
                          width="2"
                          height="6"
                          rx="1"
                          fill={isActive ? "white" : "rgba(255,255,255,0.25)"}
                          transform={`rotate(${angle} 50 50) translate(49 ${
                            8 - (40 - RADIUS)
                          })`}
                        />
                      );
                    })}
                  </svg>

                  {/* CENTER TEXT */}
                  <div className="absolute text-center text-white">
                    <p className="text-2xl font-semibold">{percentage}%</p>
                    <p className="text-xs mt-1">124 GB</p>
                    <p className="text-[11px] text-blue-100 opacity-80">
                      out of 500GB
                    </p>
                  </div>
                </div>

                {/* RIGHT - FILE USAGE BLOCKS */}
                <div className="flex flex-col w-full gap-3 ">
                  {[
                    {
                      percent: "12%",
                      size: "60 GB",
                      label: "Policy Files",
                      dot: "bg-white",
                    },
                    {
                      percent: "7%",
                      size: "35 GB",
                      label: "Vehicle Registrations",
                      dot: "bg-yellow-200",
                    },
                    {
                      percent: "6%",
                      size: "30 GB",
                      label: "Inspection Reports",
                      dot: "bg-teal-200",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 rounded-xl px-2 py-2 flex flex-col backdrop-blur-[1px]"
                    >
                      <div>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${item.dot}`}
                        />
                        <span className=" flex font-semibold">
                          {item.percent}
                          <span className="text-blue-100 font-normal ml-1">
                            · {item.size}
                          </span>
                        </span>
                      </div>

                      <span className=" text-blue-100 text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
