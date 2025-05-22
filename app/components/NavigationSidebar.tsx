import { FaHome, FaComment, FaCog, FaUser } from "react-icons/fa";

export default function NavigationSidebar() {
  return (
    <div className="w-16 h-full border-r flex flex-col items-center py-4 space-y-6">
      <div className="flex flex-col items-center space-y-6">
        <button className="p-2 rounded-lg bg-gray-200 text-gray-700">
          <FaHome className="text-lg" />
        </button>
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <FaComment className="text-lg" />
        </button>
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <FaUser className="text-lg" />
        </button>
        <button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100">
          <FaCog className="text-lg" />
        </button>
      </div>
    </div>
  );
}