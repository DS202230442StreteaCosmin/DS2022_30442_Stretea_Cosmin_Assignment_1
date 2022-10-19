import { api } from '../../api/api';
import { setUser } from '../../store/user/userSlice';
import { ILoginUser, IRegisterUser, IUser } from './model';

export const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<{ access_token: string }, ILoginUser>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
            transformResponse: (result) => {
                console.log(result);
                return result;
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { access_token } = (await queryFulfilled).data;
                    // dispatch(setUser(data));
                    window.localStorage.setItem('access_token', access_token);
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        signup: builder.mutation<{ access_token: string }, IRegisterUser>({
            query: (body) => ({
                url: `auth/signup`,
                method: 'POST',
                body,
            }),
            transformResponse: (result) => {
                console.log(result);
                return result;
            },
            async onQueryStarted(args, { queryFulfilled }) {
                try {
                    const { access_token } = (await queryFulfilled).data;
                    // dispatch(setUser(data));
                    window.localStorage.setItem('access_token', access_token);
                } catch (error) {
                    console.log(error);
                }
            },
        }),
        getProfile: builder.query<IUser, null>({
            query() {
                return {
                    url: 'auth/profile',
                };
            },
            transformResponse: (result: { data: { user: IUser } }) =>
                result.data.user,
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useGetProfileQuery, useLoginMutation } = authSlice;

// export const selectUsersResult = authSlice.endpoints.getUsers.select();
