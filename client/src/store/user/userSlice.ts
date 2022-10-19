import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../services/auth/model';

interface IUserState {
    user: IUser | undefined;
}

const initialState: IUserState = {
    user: undefined,
};

export const userSlice = createSlice({
    initialState,
    name: 'userSlice',
    reducers: {
        logout: () => initialState,
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    },
});

export const userReducer = userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
