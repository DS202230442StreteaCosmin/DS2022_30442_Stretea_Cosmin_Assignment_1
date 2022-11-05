import { api } from '../../api/api';
import { setUser } from '../../store/user/userSlice';
import { Device } from '../device/model';
import {
    CreateUserByAdmin,
    IAuthTokenResponse,
    ILoginUser,
    IRegisterUser,
    IUser,
} from './model';

export const userSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        userDevices: builder.query<Device[], string>({
            query: (id) => ({
                url: `/users/${id}/devices`,
            }),
            providesTags: ['UserDevices'],
        }),
        getAllUsers: builder.query<IUser[], undefined>({
            query: () => ({
                url: `/users`,
            }),
            providesTags: ['Users'],
        }),
        createUser: builder.mutation<IUser, CreateUserByAdmin>({
            query: (body) => ({
                url: `/users`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Users'],
        }),
        updateUser: builder.mutation<IUser, CreateUserByAdmin>({
            query: (args) => ({
                url: `/users/${args.id}`,
                method: 'PUT',
                body: { name: args.name, email: args.email },
            }),
            invalidatesTags: ['Users'],
        }),
        deleteUser: builder.mutation<IUser, string>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Users'],
        }),
        addDeviceToUser: builder.mutation<
            IUser,
            { userId: string; deviceId: string }
        >({
            query: ({ userId, deviceId }) => ({
                url: `/users/${userId}/device/${deviceId}`,
                method: 'POST',
            }),
            invalidatesTags: ['UserDevices'],
        }),
        removeDeviceFromUser: builder.mutation<
            IUser,
            { userId: string; deviceId: string }
        >({
            query: ({ userId, deviceId }) => ({
                url: `/users/${userId}/device/${deviceId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['UserDevices'],
        }),
        // signup: builder.mutation<IAuthTokenResponse, IRegisterUser>({
        //     query: (body) => ({
        //         url: `auth/signup`,
        //         method: 'POST',
        //         body,
        //     }),
        //     async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        //         try {
        //             const { access_token } = (await queryFulfilled).data;
        //             window.localStorage.setItem('access_token', access_token);
        //             await dispatch(
        //                 authSlice.endpoints.getProfile.initiate(undefined, {
        //                     forceRefetch: true,
        //                 })
        //             );
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     },
        // }),
        // getProfile: builder.query<IUser, undefined>({
        //     query: () => ({
        //         url: 'auth/profile',
        //     }),
        //     async onQueryStarted(_args, { dispatch, queryFulfilled }) {
        //         try {
        //             const { data } = await queryFulfilled;
        //             dispatch(setUser(data));
        //         } catch (error) {
        //             console.log(error);
        //         }
        //     },
        // }),
    }),
});

export const {
    useUserDevicesQuery,
    useGetAllUsersQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useAddDeviceToUserMutation,
    useRemoveDeviceFromUserMutation,
    useLazyUserDevicesQuery,
} = userSlice;

// export const selectUsersResult = authSlice.endpoints.getUsers.select();
