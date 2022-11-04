import { api } from '../../api/api';
import { setUser } from '../../store/user/userSlice';
import {
    Consumption,
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

export const { useDeviceConsumptionsQuery, useLazyDeviceConsumptionsQuery } =
    deviceSlice;

// export const selectUsersResult = authSlice.endpoints.getUsers.select();
