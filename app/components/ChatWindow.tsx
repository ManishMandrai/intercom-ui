import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import { FiChevronDown, FiMoreVertical, FiPhone, FiX } from "react-icons/fi";
import { FaRegSmile, FaPaperclip, FaRegMoon, FaPhone } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsStar, BsTicketPerforated } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function ChatWindow() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b px-4 py-3 flex justify-between items-center bg-white">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-black text-xl p-2">Luis Easton</h2>
        </div>

        <div className="flex items-center  gap-2 text-black">
          <button className="p-2  hover:bg-gray-200">
            <BsStar size={16} />
          </button>
          <button className="p-2 rounded-lg  bg-gray-100 hover:bg-gray-200">
            <FiMoreHorizontal size={16} />
          </button>
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <BsTicketPerforated size={16} />
          </button>
          <button className="px-3 py-2 rounded-lg bg-gray-100 text-xs hover:bg-gray-200 flex items-center gap-1 text-black">
            <FaPhone size={14} /> Call
          </button>
          <button className="px-3 py-2 rounded-lg bg-gray-100 text-xs hover:bg-gray-200 flex items-center gap-1">
            <FaRegMoon size={14} /> Snooze
          </button>
          <button className="px-3 py-2 rounded-lg bg-black text-white text-xs hover:opacity-90 flex items-center gap-1">
            <MdClose size={14} /> Close <FiChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6  scrollbar-hide">
        <MessageBubble
          sender="user"
          message="I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened."
          time="1min"
        />
        <MessageBubble
          sender="support"
          message="Hi Luis! Let me look into this for you."
          time="1min"
        />
        <MessageBubble
          sender="support"
          message={`We understand if your purchase didn't quite meet your expectations. To help you with a refund, please provide your order ID and proof of purchase.

            Just a heads-up:
            • We can only refund orders from the last 60 days.
            • Your item must meet our return condition requirements.

            Once confirmed, I'll send you a returns QR code for easy processing.

            Thanks for your cooperation!`}
          time="2m"
        />
      </div>

      <div className="border-t bg-white p-4">
        <div className="text-xs text-gray-500 mb-1 flex items-center gap-1">
       
        </div>
        <MessageInput />
      </div>
    </div>
  );
}
