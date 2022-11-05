import { api } from '../../api/api';
import { setUser } from '../../store/user/userSlice';
import {
    Consumption,
    CreateDevice,
    Device,
    IAuthTokenResponse,
    ILoginUser,
    IRegisterUser,
    IUser,
} from './model';

export const deviceSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        deviceConsumptions: builder.query<
            Consumption[],
            { id: string; startDate: string; endDate: string }
        >({
            query: ({ id, startDate, endDate }) => ({
                url: `devices/consumption/${id}?startDate=${startDate}&endDate=${endDate}`,
                method: 'GET',
            }),
        }),
        getAllDevices: builder.query<Device[], undefined>({
            query: () => ({
                url: `/devices`,
            }),
            providesTags: ['Devices'],
        }),
        createDevice: builder.mutation<Device, CreateDevice>({
            query: (body) => ({
                url: `/devices`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Devices'],
        }),
        updateDevice: builder.mutation<Device, CreateDevice>({
            query: (args) => ({
                url: `/devices/${args.id}`,
                method: 'PUT',
                body: Object.assign({}, { ...args }, { id: undefined }),
            }),
            invalidatesTags: ['Devices'],
        }),
        deleteDevice: builder.mutation<Device, string>({
            query: (id) => ({
                url: `/devices/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Devices'],
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
    useDeviceConsumptionsQuery,
    useLazyDeviceConsumptionsQuery,
    useGetAllDevicesQuery,
    useUpdateDeviceMutation,
    useCreateDeviceMutation,
    useDeleteDeviceMutation,
} = deviceSlice;

// export const selectUsersResult = authSlice.endpoints.getUsers.select();
