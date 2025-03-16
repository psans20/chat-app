import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";

export default function SignInNav() {
    return (
        <nav className="flex justify-between px-10 items-center shadow-xl drop-shadow-lg p-1 bg-gray-800">
            <img 
                src="https://chatters.salimi.my/_next/image?url=%2Fchatters-logo.png&w=640&q=75" 
                className="w-14" 
                alt="Chatters Logo"
            />
            <div className="flex justify-around gap-x-6 text-white opacity-90 font-semibold">
                <h2 className="flex items-center gap-2">
                    <FiSettings /> Settings
                </h2>
                <h2 className="flex items-center gap-2">
                    <FiUser /> Profile
                </h2>
                <h2 className="flex items-center gap-2">
                    <FiLogOut /> Logout
                </h2>
            </div>
        </nav>
    );
}
