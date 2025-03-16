import SignInNav from './components/sign-in-navbar';
import Sidebar from './components/sidebar';
import Chat from './components/chat';

export default function Home() {
  return (
    <div className="bg-[#1e151b] h-screen flex flex-col">
      {/* Navbar at the top */}
      <SignInNav />

      {/* Sidebar and Chat container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (left side, fixed width) */}
        <Sidebar />

        {/* Chat section (takes remaining space) */}
        <div className="flex-1 flex flex-col">
          <Chat />
        </div>
      </div>
    </div>
  );
}
