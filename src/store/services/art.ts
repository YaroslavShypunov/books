import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const artApi = createApi({
  reducerPath: 'artApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/' }),
  endpoints: (builder) => ({
    getList: builder.query({
      // haven't time to finished with categories
      query: ({page, title, categories}) => `artworks/search?q=${title}&page=${page}&limit=10&fields=id,title,thumbnail`,
    }),
    getCategories: builder.query({
      query: () => `category-terms`,
    }),
    getArtItem: builder.query({
      query: ({id}) => `artworks/${id}?fields=title,artist_display,date_display,main_reference_number,thumbnail,dimensions`,
    }),
  }),
})

export const { useGetListQuery, useGetArtItemQuery, useGetCategoriesQuery } = artApi
