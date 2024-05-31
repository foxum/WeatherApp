export interface Location {
  name: string
  country: string
}

export interface WeatherInfo {
  temp_c: number
  temp_f: number
  condition: Condition
}

export interface Condition {
  text: string
  icon: string
}

export interface ForecastHour extends WeatherInfo {
  time: string
  time_epoch: number
}

export interface ForecastDay {
  date: string
  date_epoch: number
  hour: ForecastHour[]
}

export interface Forecast {
  forecastday: ForecastDay[]
}

export interface ForecastInfo {
  location: Location
  current: WeatherInfo
  forecast: Forecast
}
