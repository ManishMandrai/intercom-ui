import Sidebar from "./components/Sidebar"
import ChatWindow from "./components/ChatWindow"
import CopilotPanel from "./components/CopilotPanel"
import NavigationSidebar from "./components/NavigationSidebar"

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      <NavigationSidebar />
      <div className="w-[20%] border-r">
        <Sidebar />
      </div>
      <div className="w-[50%] border-r">
        <ChatWindow />
      </div>
      <div className="w-[30%]">
        <CopilotPanel />
      </div>
    </div>
  )
}