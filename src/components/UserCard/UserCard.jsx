import { FiUser, FiMapPin, FiBriefcase, FiEdit, FiTrash2 } from "react-icons/fi";

function UserCard({user}) {
    return (
        <div
            key={user.id}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:border-orange-400 transition-all"
        >
            {/* avatar + name */}
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-md">
                    <FiUser className="text-2xl" />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {user.name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                        {user.email}
                    </p>
                </div>
            </div>

            {/* city & company */}
            <div className="mt-5 flex flex-wrap gap-2">
                <span className="flex items-center gap-1 text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded-full">
                    <FiMapPin />
                    {user.city}
                </span>

                <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    <FiBriefcase />
                    {user.company}
                </span>
            </div>

            {/* btns */}
            <div className="mt-6 flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 rounded-lg py-2.5 text-sm font-medium">
                    <FiEdit />
                    Edit
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg py-2.5 text-sm font-medium">
                    <FiTrash2 />
                    Delete
                </button>
            </div>
        </div>
    )
}

export default UserCard