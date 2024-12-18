"use client";
import { Select, Button } from "antd";
import { useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { TbUsersPlus } from "react-icons/tb";
interface Member {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  isPendingInvite?: boolean;
}
const members: Member[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
  },
  {
    id: 3,
    name: "John Doe 12",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 4,
    name: "Jane Smith 12",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
    isPendingInvite: true,
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 6,
    name: "Jane Smith",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
  },
  {
    id: 7,
    name: "John Doe 12",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 8,
    name: "Jane Smith 12",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
    isPendingInvite: true,
  },
  {
    id: 9,
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 10,
    name: "Jane Smith",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
  },
  {
    id: 11,
    name: "John Doe 12",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 12,
    name: "Jane Smith 12",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
  },
  {
    id: 13,
    name: "John Doe 12",
    email: "john@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "User",
  },
  {
    id: 14,
    name: "Jane Smith 12",
    email: "jane@gmail.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    role: "User",
  },
];

export default function MembersList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Members</h1>

        <div className="flex items-center gap-4">
          <div className="relative">
            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search members"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ backgroundColor: "#e8ebee" }}
            />
          </div>
          <Button
            type="primary"
            style={{ backgroundColor: "#5280d5", borderColor: "#5280d5" }}
          >
            + Add member
          </Button>
        </div>
      </div>
      <div
        className="border border-gray-200 rounded-lg overflow-y-auto max-h-[500px] 
          scrollbar scrollbar-thin scrollbar-thumb-[#c1c1c1] scrollbar-track-transparent"
      >
        {filteredMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex items-center justify-between p-4 bg-white ${
              index > 0 ? "border-t border-gray-200" : ""
            } hover:bg-gray-50 transition-colors`}
          >
            <div className="flex items-center gap-4">
              <img
                src={member.avatar}
                alt={`${member.name}'s avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex items-center gap-4">
                <span className="font-medium">{member.name}</span>
                <span className="text-sm text-gray-500">{member.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {member.isPendingInvite && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">
                    Invitation pending
                  </span>
                  <Button type="default" size="small">
                    Resend invitation
                  </Button>
                </div>
              )}
              <Select
                defaultValue={member.role}
                style={{ width: 120 }}
                options={[
                  { value: "Admin", label: "Admin" },
                  { value: "Member", label: "Member" },
                ]}
                suffixIcon={<IoIosArrowDown />}
              />
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <TbUsersPlus className="text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
