


export default function Sidebar() {
    const users = [
        { name: "Jane Doe", status: "Online", image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { name: "Emma Thompson", status: "Offline", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Olivia Miller", status: "Offline", image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { name: "Sophia Davis", status: "Offline", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "Ava Wilson", status: "Offline", image: "https://randomuser.me/api/portraits/women/5.jpg" },
        { name: "Isabella Brown", status: "Offline", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Mia Johnson", status: "Offline", image: "https://randomuser.me/api/portraits/women/7.jpg" },
        { name: "Charlotte Williams", status: "Offline", image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Amelia Garcia", status: "Offline", image: "https://randomuser.me/api/portraits/women/9.jpg" },
    ];

    return (
        <aside className="w-64 bg-gray-800 text-white h-screen p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Contacts</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index} className="flex items-center gap-3 mb-3 p-2 hover:bg-gray-700 rounded-lg">
                        <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full" />
                        <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className={`text-sm ${user.status === "Online" ? "text-green-400" : "text-gray-400"}`}>
                                {user.status}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </aside>
    );
}
