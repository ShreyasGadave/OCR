"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  Shield,
  Bell,
  Lock,
  Palette,
  Save,
  Camera,
  ChevronRight,
  Plus,
  LogOut,
  Trash2,
  Check,
  Star,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");

  const TabButton = ({ id, Icon, children }) => {
    const active = activeTab === id;
    return (
      <button
        onClick={() => setActiveTab(id)}
        className={`relative group flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden
          ${active ? "bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 shadow-sm" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}
        `}
      >
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full transition-all duration-300 ${
            active ? "bg-gradient-to-b from-sky-500 to-blue-600 shadow-lg" : "bg-transparent"
          }`}
        />
        <div className={`p-2 rounded-lg transition-all duration-300 ${active ? "bg-white shadow-sm" : "bg-transparent"}`}>
          <Icon size={18} className={`${active ? "text-sky-600" : "text-gray-500 group-hover:text-gray-700"}`} />
        </div>
        <span className="flex-1 text-left">{children}</span>
        {active && (
          <span className="ml-auto">
            <Check size={16} className="text-sky-600" />
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen ">
      <div className="max-w-[1400px] mx-auto py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Settings</h1>
              <p className="text-gray-500 mt-1">Manage your account preferences and settings</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
                <LogOut size={16} className="mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-3">
            <div className="sticky top-6 space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="space-y-1.5">
                  <TabButton id="profile" Icon={User}>Profile</TabButton>
                  <TabButton id="account" Icon={Shield}>Account</TabButton>
                  <TabButton id="notifications" Icon={Bell}>Notifications</TabButton>
                  <TabButton id="security" Icon={Lock}>Security</TabButton>
                  <TabButton id="preferences" Icon={Palette}>Preferences</TabButton>
                </div>

                {/* Quick preview card */}
                <div className="mt-6 bg-gradient-to-br from-sky-500 to-blue-600 p-4 rounded-2xl shadow-lg text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-xl font-bold shadow-lg">
                        AD
                      </div>
                      <div>
                        <div className="text-base font-semibold">Anna Davidson</div>
                        <div className="text-xs text-sky-100 flex items-center gap-1">
                          <Award size={12} />
                          Manager
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="text-sky-100">Profile Completion</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>

                    <button className="mt-3 w-full text-sm bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 rounded-xl py-2.5 transition-all duration-300 font-medium">
                      View Public Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="text-sm font-semibold text-gray-900 mb-3">Quick Stats</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <TrendingUp size={14} className="text-green-500" />
                      Active Policies
                    </div>
                    <div className="text-sm font-bold text-gray-900">142</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Clock size={14} className="text-orange-500" />
                      Pending Reviews
                    </div>
                    <div className="text-sm font-bold text-gray-900">7</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Star size={14} className="text-yellow-500" />
                      Team Rating
                    </div>
                    <div className="text-sm font-bold text-gray-900">4.8</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Content area */}
          <main className="col-span-9">
            <div className="grid grid-cols-12 gap-6">
              {/* Main content */}
              <div className="col-span-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  {activeTab === "profile" && (
                    <div className="p-8">
                      <div className="flex items-start gap-8 mb-8">
                        <div className="relative group">
                          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                            AD
                          </div>
                          <button className="absolute -bottom-2 -right-2 p-3 bg-white hover:bg-gray-50 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 group-hover:scale-110">
                            <Camera size={18} className="text-gray-700" />
                          </button>
                        </div>

                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-gray-900 mb-1">Profile Information</h2>
                          <p className="text-sm text-gray-500 mb-6">Update your personal details and contact information</p>

                          {/* Profile form */}
                          <div className="grid grid-cols-2 gap-5">
                            <label className="block">
                              <div className="text-xs font-semibold text-gray-700 mb-2">First name</div>
                              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" defaultValue="Anna" />
                            </label>

                            <label className="block">
                              <div className="text-xs font-semibold text-gray-700 mb-2">Last name</div>
                              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" defaultValue="Davidson" />
                            </label>

                            <label className="col-span-2">
                              <div className="text-xs font-semibold text-gray-700 mb-2">Email</div>
                              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" defaultValue="anna.davidson@company.com" type="email" />
                            </label>

                            <label>
                              <div className="text-xs font-semibold text-gray-700 mb-2">Phone</div>
                              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" defaultValue="+1 (555) 123-4567" type="tel" />
                            </label>

                            <label>
                              <div className="text-xs font-semibold text-gray-700 mb-2">Role</div>
                              <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white">
                                <option>Manager</option>
                                <option>Agent</option>
                                <option>Admin</option>
                              </select>
                            </label>

                            <label className="col-span-2">
                              <div className="text-xs font-semibold text-gray-700 mb-2">Company</div>
                              <input className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" defaultValue="PolicyPilot Insurance Co." />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl transition-all">Cancel</Button>
                        <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-sky-600/30 transition-all">
                          <Save size={16} />
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Account tab */}
                  {activeTab === "account" && (
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Settings</h2>
                      <p className="text-sm text-gray-500 mb-8">Manage account status and security options</p>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                              <Check size={20} className="text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Account Status</div>
                              <div className="text-xs text-gray-600 mt-1">Your account is active and verified</div>
                            </div>
                          </div>
                          <div className="text-xs text-green-700 font-bold bg-white px-4 py-2 rounded-xl border border-green-200 shadow-sm">Active</div>
                        </div>

                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                              <Shield size={20} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Two-Factor Authentication</div>
                              <div className="text-xs text-gray-600 mt-1">Add an extra layer of security to your account</div>
                            </div>
                          </div>
                          <button className="px-5 py-2.5 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-xl shadow-lg shadow-sky-600/30 hover:shadow-xl transition-all font-medium">Enable</button>
                        </div>

                        <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                              <Trash2 size={20} className="text-red-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">Delete Account</div>
                              <div className="text-xs text-gray-600 mt-1">Permanently remove your account and all data</div>
                            </div>
                          </div>
                          <button className="px-5 py-2.5 bg-white text-red-600 border-2 border-red-200 rounded-xl hover:bg-red-50 transition-all font-medium">Delete</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Notifications */}
                  {activeTab === "notifications" && (
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Notification Preferences</h2>
                      <p className="text-sm text-gray-500 mb-8">Choose what updates you want to receive</p>

                      <div className="space-y-3">
                        {[
                          ["Email notifications", "Receive important updates via email", true],
                          ["Policy reminders", "Get notified about upcoming policy renewals", true],
                          ["Document updates", "Alerts when documents are updated or shared", true],
                          ["Marketing emails", "Promotional content and product updates", false],
                          ["Weekly digest", "Summary of your weekly activity", true]
                        ].map(([label, desc, checked]) => (
                          <div key={label} className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl transition-all">
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900">{label}</div>
                              <div className="text-xs text-gray-500 mt-1">{desc}</div>
                            </div>

                            <label className="relative inline-flex items-center cursor-pointer ml-4">
                              <input type="checkbox" defaultChecked={checked} className="sr-only peer" />
                              <div className="w-14 h-7 bg-gray-300 peer-focus:ring-4 peer-focus:ring-sky-200 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-sky-500 peer-checked:to-blue-600 relative after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:h-[22px] after:w-[22px] after:rounded-full after:shadow-md after:transition-all peer-checked:after:translate-x-[28px]" />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Security */}
                  {activeTab === "security" && (
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Settings</h2>
                      <p className="text-sm text-gray-500 mb-8">Update passwords and manage sessions</p>

                      <div className="space-y-5 mb-8">
                        <label className="block">
                          <div className="text-xs font-semibold text-gray-700 mb-2">Current password</div>
                          <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" placeholder="••••••••" />
                        </label>
                        <label className="block">
                          <div className="text-xs font-semibold text-gray-700 mb-2">New password</div>
                          <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" placeholder="••••••••" />
                        </label>
                        <label className="block">
                          <div className="text-xs font-semibold text-gray-700 mb-2">Confirm new password</div>
                          <input type="password" className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" placeholder="••••••••" />
                        </label>

                        <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl shadow-lg shadow-sky-600/30 transition-all">
                          Update Password
                        </Button>
                      </div>

                      <div className="pt-6 border-t border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">Active Sessions</h3>
                        <div className="space-y-3">
                          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                <Check size={18} className="text-green-600" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Current Device</div>
                                <div className="text-xs text-gray-600">Chrome on macOS • San Francisco, US</div>
                              </div>
                            </div>
                            <div className="text-xs text-green-700 font-bold bg-white px-3 py-1.5 rounded-lg border border-green-200">Active Now</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preferences */}
                  {activeTab === "preferences" && (
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Display Preferences</h2>
                      <p className="text-sm text-gray-500 mb-8">Customize your language, timezone & theme</p>

                      <div className="grid grid-cols-2 gap-5 mb-8">
                        <label>
                          <div className="text-xs font-semibold text-gray-700 mb-2">Language</div>
                          <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                          </select>
                        </label>

                        <label>
                          <div className="text-xs font-semibold text-gray-700 mb-2">Timezone</div>
                          <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white">
                            <option>Pacific Time (PT)</option>
                            <option>Eastern Time (ET)</option>
                            <option>Central Time (CT)</option>
                          </select>
                        </label>

                        <label>
                          <div className="text-xs font-semibold text-gray-700 mb-2">Date Format</div>
                          <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all bg-white">
                            <option>MM/DD/YYYY</option>
                            <option>DD/MM/YYYY</option>
                            <option>YYYY-MM-DD</option>
                          </select>
                        </label>

                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Dark Mode</div>
                            <div className="text-xs text-gray-500 mt-1">Switch to dark theme</div>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-gradient-to-r peer-checked:from-sky-500 peer-checked:to-blue-600 relative after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:h-[22px] after:w-[22px] after:rounded-full after:shadow-md after:transition-all peer-checked:after:translate-x-[28px]" />
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                        <Button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2.5 rounded-xl transition-all">Cancel</Button>
                        <Button className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shadow-sky-600/30 transition-all">
                          <Save size={16} />
                          Save Preferences
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right sidebar */}
              <aside className="col-span-4 space-y-6">
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-900">Team Performance</h3>
                    <ChevronRight size={18} className="text-gray-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">O</div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Olivia J.</div>
                        <div className="text-xs text-gray-500">84 policies • Admin</div>
                      </div>
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white text-sm font-bold shadow-lg">S</div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-900">Sam W.</div>
                        <div className="text-xs text-gray-500">71 policies • Broker</div>
                      </div>
                      <TrendingUp size={16} className="text-green-500" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-5 shadow-lg text-white">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-bold">Validation Queue</h3>
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <Clock size={16} />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-100">New Registrations</span>
                      <span className="font-bold">+4</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-orange-100">Previous Policies</span>
                      <span className="font-bold">+3</span>
                    </div>
                  </div>
                  <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl py-2.5 text-sm font-medium transition-all">
                    View Queue
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-sky-600" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">Policy approved</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Bell size={14} className="text-purple-600" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-gray-900">New notification</div>
                        <div className="text-xs text-gray-500">5 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}