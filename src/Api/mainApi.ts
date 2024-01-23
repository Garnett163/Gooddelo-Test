import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { dushnilaData } from '../types/data';

export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://dushnila.gooddelo.com/' }),
  endpoints: builder => ({
    getData: builder.query<dushnilaData, void>({
      query: () => 'data',
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetDataQuery } = mainApi;
