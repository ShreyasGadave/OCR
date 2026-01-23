"use client"
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
} from "lucide-react";
import { useState } from "react";
import UploadExample from "@/components/FileDropzone";

export default function Page() {
  const [dropBox, setDropbox] = useState(false)
  return (
    <div className="min-h-screen dark:bg-black ">

{dropBox ?  <UploadExample/> : "" }

      <div className="max-w-400 mx-auto space-y-6">
        {/* TOP BAR */}
        <div className="flex justify-between pt-3 items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
            + New Policy
          </Button>
        </div>

        <div className="flex w-full gap-4">
          <div className="w-2/3">
            <div className="grid grid-cols-4 gap-4">
              <Card className="bg-white shadow-sm  rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="">
                    <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-sm  mt-2 font-semibold text-gray-600 w-full">
                      Active Policies
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-4xl font-medium text-gray-900">420</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Don't need attention
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-red-100 rounded-2xl flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <CardTitle className="text-sm mt-2 font-semibold text-gray-600">
                      Expiring Soon
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-4xl font-medium text-gray-900">15</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Re-request required
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-sm mt-2 font-semibold text-gray-600 w-full">
                      Need Validation
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-4xl font-medium text-gray-900">30</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Validation required
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm rounded-xl">
                <CardHeader className="flex flex-row items-start justify-between pb-2 pt-3">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <Info className="w-5 h-5 text-gray-600" />
                    </div>
                    <CardTitle className="text-sm mt-2 font-semibold text-gray-600">
                      Recently Expired
                    </CardTitle>
                  </div>
                  <div className="w-10 h-10 bg-gray-100  rounded-2xl flex items-center justify-center">
                    <ArrowUpRight
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5  text-gray-600"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-4xl font-medium text-gray-900">7</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Assign responsible
                  </p>
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
                    <Button onClick={() => setDropbox(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
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
            <Card className="bg-white shadow-sm border border-gray-200 rounded-xl">
              <CardHeader className="border-b border-gray-200 ">
                <div className="flex mt-3 justify-between items-center">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Performance Review
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

              <CardContent className="pt-4 space-y-4">
                {[
                  {
                    name: "Olivia J.",
                    policies: "84 policies",
                    renewal: "3 policies",
                    role: "Admin",
                  },
                  {
                    name: "Sam W.",
                    policies: "71 policies",
                    renewal: "7 policies",
                    role: "Broker",
                  },
                  {
                    name: "Emily C.",
                    policies: "83 policies",
                    renewal: "2 policies",
                    role: "Agent",
                  },
                  {
                    name: "Michael S.",
                    policies: "65 policies",
                    renewal: "1 policies",
                    role: "Broker",
                  }
                ].map((person) => (
                  <div
                    key={person.name}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gray-200 text-gray-700">
                          {person.name.split(" ")[0][0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">
                          {person.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {person.policies}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right mr-2">
                        <div className="text-sm font-medium text-gray-900">
                          Need Renewal
                        </div>
                        <div className="text-xs text-gray-500">
                          {person.renewal}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 border"
                      >
                        {person.role}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Possible Policy Clients */}
                <div className="flex border-t py-2 border-gray-100 items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 border border-dashed border-gray-700 rounded-2xl flex items-center justify-center">
                    <UserRoundPen
                      size={56}
                      strokeWidth={1.5}
                      className="w-5 h-5 text-gray-600"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900">
                      2 Possible Policy Clients
                    </div>
                    <div className="text-sm text-gray-500">
                      Click on the people's avatars to assign.
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <div className="w-10 h-10 border border-gray-200  rounded-2xl flex items-center justify-center">
                      <X
                        size={56}
                        strokeWidth={1.5}
                        className="w-5 h-5  text-gray-600"
                      />
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Validation Queue */}
            <Card className="bg-linear-to-bl py-3 mt-4 from-blue-300 vai-blue-400 to-blue-500 text-white shadow-lg rounded-xl border-0">
              <CardHeader className="border-b border-blue-400/30 pb-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">
                    Validation Queue
                  </CardTitle>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">+4</div>
                      <div className="text-xs text-blue-100">Registration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">+3</div>
                      <div className="text-xs text-blue-100">
                        Previous Policy
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">+2</div>
                      <div className="text-xs text-blue-100">ID Document</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <File className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">0</div>
                      <div className="text-xs text-blue-100">
                        Overdue documents
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-50">
                    Please indicate the appropriate executors for verification
                    to avoid delays in the policy process.
                  </p>
                  <button className="text-blue-100 hover:text-white ml-auto">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
