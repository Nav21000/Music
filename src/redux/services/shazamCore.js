import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '36626c56f2msh8580d29c47aca59p12a368jsnc74c1cdf1888');

        return headers;
         }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query: ()=> '/charts/world'}),
        }),
    });

    export const {useGetTopChartsQuery} = shazamCoreApi;