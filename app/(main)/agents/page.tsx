"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, TrendingDown, FileText, Car, AlertCircle, DollarSign, Calendar, Shield, ArrowUpRight, Users, Info, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  const [timeRange, setTimeRange] = useState("30days");

  return (
    <div className="min-h-screen">
   

      {/* Main Content */}
      <div className="">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Car Insurance Analytics</h1>
          </div>
          <div className="flex items-center gap-3">
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="90days">Last 90 days</option>
              <option value="year">This year</option>
            </select>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <Download size={16} />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
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
                   +12 this month
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
                      Total Premium
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
                    $9,716 avg/policy
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
                     Open Claims
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
                 $187k total value
                  </p>
                </CardContent>
              </Card>

        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Premium Trends */}
          <div className="col-span-2 bg-white rounded-xl p-3 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-gray-900">Premium Revenue Trend</h3>
                <p className="text-sm text-gray-600 mt-1">Monthly premium collected</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg font-medium">6M</button>
                <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">Year</button>
                <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">All</button>
              </div>
            </div>
            <div className="h-80">
              <svg className="w-full h-full" viewBox="0 0 600 250">
                {/* Grid lines */}
                {[0, 50, 100, 150, 200, 250].map((y) => (
                  <line key={y} x1="50" y1={y} x2="600" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                ))}
                
                {/* Y-axis labels */}
                <text x="5" y="10" fontSize="10" fill="#9ca3af">$400k</text>
                <text x="5" y="60" fontSize="10" fill="#9ca3af">$300k</text>
                <text x="5" y="110" fontSize="10" fill="#9ca3af">$200k</text>
                <text x="5" y="160" fontSize="10" fill="#9ca3af">$100k</text>
                <text x="20" y="210" fontSize="10" fill="#9ca3af">$0</text>
                
                {/* Bars */}
                <rect x="70" y="120" width="50" height="80" fill="#3b82f6" rx="4" />
                <rect x="140" y="100" width="50" height="100" fill="#3b82f6" rx="4" />
                <rect x="210" y="80" width="50" height="120" fill="#3b82f6" rx="4" />
                <rect x="280" y="110" width="50" height="90" fill="#3b82f6" rx="4" />
                <rect x="350" y="70" width="50" height="130" fill="#3b82f6" rx="4" />
                <rect x="420" y="60" width="50" height="140" fill="#10b981" rx="4" />
                
                {/* X-axis labels */}
                <text x="75" y="230" fontSize="10" fill="#9ca3af">Jul</text>
                <text x="145" y="230" fontSize="10" fill="#9ca3af">Aug</text>
                <text x="215" y="230" fontSize="10" fill="#9ca3af">Sep</text>
                <text x="285" y="230" fontSize="10" fill="#9ca3af">Oct</text>
                <text x="355" y="230" fontSize="10" fill="#9ca3af">Nov</text>
                <text x="425" y="230" fontSize="10" fill="#9ca3af">Dec</text>
              </svg>
            </div>
          </div>

          {/* Coverage Types */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-1">Coverage Types</h3>
            <p className="text-sm text-gray-600 mb-6">Policy distribution</p>
            
            <div className="space-y-4">
              {[
                { name: "Comprehensive", count: 98, percent: 40, color: "bg-blue-600" },
                { name: "Third Party", count: 74, percent: 30, color: "bg-green-600" },
                { name: "Collision", count: 49, percent: 20, color: "bg-purple-600" },
                { name: "Liability Only", count: 26, percent: 10, color: "bg-orange-600" },
              ].map((type) => (
                <div key={type.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-700">{type.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">{type.count}</span>
                      <span className="text-xs text-gray-500">{type.percent}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`${type.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${type.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total Policies</span>
                <span className="font-bold text-gray-900">247</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-3 gap-4">
          {/* Claims Status */}
          <div className="bg-white rounded-xl p-3 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-1">Claims Status</h3>
            <p className="text-sm text-gray-600 mb-6">Current claim breakdown</p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Pending</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">18</div>
                  <div className="text-xs text-gray-500">$94k</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">In Progress</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">16</div>
                  <div className="text-xs text-gray-500">$93k</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Approved</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">142</div>
                  <div className="text-xs text-gray-500">$1.2M</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Rejected</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">8</div>
                  <div className="text-xs text-gray-500">$28k</div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Agents */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-gray-900">Top Agents</h3>
                <p className="text-sm text-gray-600 mt-1">By policies sold</p>
              </div>
              <ArrowUpRight size={18} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Michael S.", count: 48, revenue: "$468k", avatar: "Michael" },
                { name: "Emma D.", count: 42, revenue: "$412k", avatar: "Emma" },
                { name: "Olivia J.", count: 38, revenue: "$371k", avatar: "Olivia" },
                { name: "Sam W.", count: 34, revenue: "$329k", avatar: "Sam" },
                { name: "Liam F.", count: 31, revenue: "$304k", avatar: "Liam" },
              ].map((agent, idx) => (
                <div key={agent.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-500 w-4">#{idx + 1}</span>
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${agent.avatar}`} 
                      alt={agent.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                      <div className="text-xs text-gray-500">{agent.revenue}</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{agent.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Types */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-gray-900">Vehicle Types</h3>
                <p className="text-sm text-gray-600 mt-1">Insured vehicles</p>
              </div>
              <ArrowUpRight size={18} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {[
                { type: "Sedan", count: 102, color: "bg-blue-600", percent: 41 },
                { type: "SUV", count: 78, color: "bg-purple-600", percent: 32 },
                { type: "Truck", count: 37, color: "bg-green-600", percent: 15 },
                { type: "Sports Car", count: 20, color: "bg-red-600", percent: 8 },
                { type: "Van", count: 10, color: "bg-orange-600", percent: 4 },
              ].map((vehicle) => (
                <div key={vehicle.type} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-gray-700">{vehicle.type}</span>
                      <span className="text-sm font-semibold text-gray-900">{vehicle.count}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className={`${vehicle.color} h-1.5 rounded-full transition-all duration-500`}
                        style={{ width: `${vehicle.percent}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}