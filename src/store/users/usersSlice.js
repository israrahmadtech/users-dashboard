import { createSlice } from '@reduxjs/toolkit';

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', city: 'New York', company: 'ABC Corp' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', city: 'Los Angeles', company: 'XYZ Inc' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '555-123-4567', city: 'Chicago', company: 'Tech Solutions' },
]

const initialState = {
    users,
    selectedUser: null,
    totalUsers: users?.length
};

let nextId = initialState.users.length + 1;

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = { ...action.payload, id: nextId++ };
            state.users.push(newUser);
        },

        updateUser: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...action.payload };
            }
        },

        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
            if (state.selectedUser?.id === action.payload) {
                state.selectedUser = null;
            }
        },
        
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    },
});

export const { addUser, updateUser, deleteUser, setSelectedUser } = userSlice.actions;
export const usersReducer = userSlice.reducer;