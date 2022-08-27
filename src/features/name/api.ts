import { SuccessApiResponse } from 'next-api-handler';

import { isDev } from '@/common/config';
import localApi from '@/common/services/local';

export const nameApi = localApi.injectEndpoints({
  overrideExisting: isDev,
  endpoints: (builder) => ({
    getName: builder.query<SuccessApiResponse<Local.HelloApi>, void>({
      query: () => '/hello',
    }),
  }),
});

export const { useGetNameQuery } = nameApi;
