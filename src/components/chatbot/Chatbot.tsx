"use client"

import ChatWindow from "./ChatWindow"
// Import the factory function instead of the uninitialized hook
// import { createChatStore } from "./useChatStore"

// --- Mock function to simulate fetching the logged-in user's name ---
// In a real application, this would come from an Auth Context, Redux, etc.
const useLoggedInUserName = () => {
  // Replace this logic with your actual user fetching/context hook
  // We'll return a placeholder name for initialization.
  return "Notely User"
}
// --- End Mock ---

export default function Chatbot() {
  // 4. Initialize the store hook outside the component for persistence across renders.
  // NOTE: This approach works only if the username is available statically or fetched
  // outside the component's render loop. For simplicity, we initialize it here.
  const userName = useLoggedInUserName()

  // 5. Destructure the properties from the initialized hook
  // const { open, toggle } = useChatStore()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Removed unused motion and AnimatePresence imports */}
      <div className="mb-3">
        {/* 6. Pass the initialized hook as the 'useStore' prop */}
        <ChatWindow />
      </div>

      <button className="bg-black text-white p-4 rounded-full shadow-xl">💬</button>
    </div>
  )
}
