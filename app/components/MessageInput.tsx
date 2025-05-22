import { FiChevronDown, FiZap, FiBookmark, FiMessageSquare } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function MessageInput() {
  return (
    <div className=" border rounded-xl shadow-sm p-4">
      <div className="flex items-center text-sm font-medium mb-2 text-gray-700">
        <BiSolidMessageDetail className="mr-1" />
        <span>Chat</span>
        <FiChevronDown className="ml-1" />
      </div>

      <div className="text-xs text-gray-400 pb-8 mb-3">Use ⌘K for shortcuts</div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 text-black text-lg">
          <button className="hover:text-black">
            <FiZap />
          </button>
          <button className="hover:text-black">
            <FiBookmark />
          </button>
          <button className="hover:text-black">
            <FaRegSmile />
          </button>
        </div>

        <input
          type="text"
          placeholder="Type a reply..."
          className="flex-1 text-sm border-none outline-none text-gray-800 placeholder-gray-400"
        />

        <button className="text-sm text-black hover:text-black flex items-center gap-1">
          Send
          <FiChevronDown size={14} />
        </button>
      </div>
    </div>
  );
}
