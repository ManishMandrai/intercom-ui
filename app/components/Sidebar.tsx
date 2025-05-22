// File: components/Sidebar.tsx
import { FaClock, FaCircle, FaBarcode } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { MdMenu, MdViewSidebar } from "react-icons/md";

const users = [
  { name: "Luis Easton", message: "I bought this product...", time: "1m", color: "bg-[#C7D2FE]", active: true },
  { name: "Ivan", message: "Hi there, I have a que...", time: "3min", color: "bg-[#FECACA]", badge: true },
  { name: "Francesca", message: "Good morning, let me...", time: "9m", color: "bg-[#DDD6FE]" },
  { name: "Nadia", message: "Bug report", time: "13m", color: "bg-[#CBD5E1]" },
  { name: "Carlos Abu", message: "Hey there, I'm here to...", time: "21m", color: "bg-[#E5E7EB]" },
];

export default function Sidebar() {
  return (
    <div className="p-4 h-full overflow-y-auto flex flex-col">
      <div >
        <div >

        <h2 className="text-lg text-black font-semibold mb-4">Your inbox</h2>
        </div>
        
        <div className="border-b pb-3 mb-4">
          <div className="flex justify-between items-center text-sm text-black font-medium">
            <button className="flex items-center gap-1">
              5 Open <BsChevronDown className="text-xs" />
            </button>
            <button className="flex items-center gap-1">
              Newest <BsChevronDown className="text-xs" />
            </button>
          </div>
        </div>

        <ul className="space-y-2">
          {users.map((user, idx) => (
            <li
              key={idx}
              className={`flex justify-between items-center p-3 rounded-xl cursor-pointer hover:bg-gray-100 ${user.active ? "bg-[#EEF2FF]" : ""}`}
            >
              <div className="flex items-start gap-3">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${user.color}`}>
                  {user.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm text-black leading-tight">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate w-40">{user.message}</p>
                </div>
              </div>

              <div className="text-xs text-gray-500">
                {user.badge ? (
                  <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                    <FaClock className="text-[10px]" /> {user.time}
                  </div>
                ) : (
                  <span>{user.time}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-auto">
        <div className="pt-3 ">
          <div className="flex gap-4">
            <button className="text-gray-500 hover:text-gray-700">
              <MdViewSidebar className="text-2xl" />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <MdMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}