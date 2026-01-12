import { createSlice } from '@reduxjs/toolkit';
import { users } from './usersData';
import toast from 'react-hot-toast';

const initialState = {
    users,
    selectedUser: null,
    totalUsers: users?.length
};

let nextId = initialState.users.length + 1;

const userSlice = createSlice({
    name: 'usersManager',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const payload = action.payload || {};
            if (!payload.name || !payload.email) {
                toast.error("Name and Email are required!");
                return;
            }
            const newUser = { ...payload, id: nextId++ };
            state.users.push(newUser);
            toast.success(`${newUser.name} added successfully!`);
        },

        updateUser: (state, action) => {
            const payload = action.payload || {};
            if (!payload.id) {
                toast.error("Invalid user ID");
                return;
            }

            const index = state.users.findIndex((user) => user.id === payload.id);
            if (index === -1) {
                toast.error("User not found!");
                return;
            }

            state.users[index] = { ...state.users[index], ...payload };
            toast.success(`${state.users[index].name} updated successfully!`);
        },

        deleteUser: (state, action) => {
            const id = action.payload;
            if (!id) {
                toast.error("Invalid user ID");
                return;
            }

            const user = state.users.find((u) => u.id === id);
            if (!user) {
                toast.error("User not found!");
                return;
            }

            state.users = state.users.filter((u) => u.id !== id);

            // Clear selected user if it's the deleted one
            if (state.selectedUser?.id === id) {
                state.selectedUser = null;
            }

            toast.success(`${user.name} deleted successfully!`);
        },

        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload || null;
        },
    },
});

export const { addUser, updateUser, deleteUser, setSelectedUser } = userSlice.actions;
export const usersReducer = userSlice.reducer;