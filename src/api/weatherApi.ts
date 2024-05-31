import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { ForecastInfo } from "../model/types"

const API_KEY = "b9745f61631c4291968182021243005"
const FORECAST_DAYS = 2

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.weatherapi.com/v1/" }),
  endpoints: builder => ({
    getForecast: builder.query<ForecastInfo, string>({
      query: q => `forecast.json?key=${API_KEY}&days=${FORECAST_DAYS}&q=${q}`
    })
  })
})
