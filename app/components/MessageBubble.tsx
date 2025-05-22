import { FaClock } from "react-icons/fa";

export default function MessageBubble({ sender, message, time }: any) {
  const isSupport = sender === "support";
  const isInfo = message.includes("Just a heads-up:");  

  return (
    <div className={`flex ${isSupport ? "justify-start" : "justify-end"} mb-3`}>
      <div className={`flex items-end gap-2 ${isSupport ? "" : "flex-row-reverse"}`}>
        <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium text-white">
          {isSupport ? "P" : "L"}
        </div>

        <div
          className={`max-w-lg p-3 rounded-2xl text-[12px] ${
            isSupport
              ? isInfo
                ? "bg-indigo-100 text-gray-800"
                : "bg-white border text-black"
              : "bg-indigo-500 text-white"
          }`}
        >
          <p className="whitespace-pre-line">{message}</p>
          <div
            className={`flex items-center gap-1 mt-2 text-xs ${
              isSupport ? "text-gray-500" : "text-indigo-100"
            }`}
          >
            <span>Seen · {time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
