import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { FiUsers, FiPlus } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";


const UserList = () => {
    const { users = [], totalUsers = 0 } = useSelector(
        (state) => state?.usersManager || {}
    );

    const [search, setSearch] = useState("");

    // Realtime filter
    const filteredUsers = useMemo(() => {
        return users.filter((user) =>
            `${user.name} ${user.email}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [users, search]);

    if (!users.length) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <p className="text-xl font-medium text-gray-700">No users found</p>
                <p className="mt-2 text-sm">Start by adding a new team member</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <FiUsers />
                    Users Dashboard
                    <span className="ml-3 text-sm bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full font-medium">
                        {filteredUsers.length} / {totalUsers}
                    </span>
                </h2>

                <div className="flex items-center gap-3 flex-wrap">
                    <SearchBar value={search} onChange={setSearch} />

                    <button
                        className="cursor-pointer flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
                        onClick={() => alert("Add New User modal khulega!")}
                    >
                        <FiPlus className="text-lg" />
                        Add New User
                    </button>
                </div>
            </div>

            {/* No search result */}
            {filteredUsers.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                    <p className="text-lg font-medium">No matching users found</p>
                    <p className="text-sm mt-1">Try searching with a different keyword</p>
                </div>
            )}

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredUsers.map((user) => (
                    <UserCard key={user?.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;
