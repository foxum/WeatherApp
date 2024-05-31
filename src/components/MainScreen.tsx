import { useMemo, useState } from "react"
import styled from "styled-components/native"

import { weatherApi } from "../api/weatherApi"
import { ForecastHour } from "../model/types"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { selectIsCelsius, toggleIsCelsius } from "../reducer/settingsSlice"
import CurrentWeather from "./CurrentWeather"
import HourWeather from "./HourWeather"

const FORECAST_PERIOD = 5 * 3600 // 5 hours

const MainScreen: React.FC = () => {
  const dispatch = useAppDispatch()
  const isCelsius = useAppSelector(selectIsCelsius)
  const [query, onChangeText] = useState("")
  const [getForecast, result] = weatherApi.useLazyGetForecastQuery()

  const forecastData = useMemo(() => {
    const now = Date.now() / 1000
    return result.currentData?.forecast?.forecastday
      ?.flatMap(d => d.hour)
      ?.filter(d => d.time_epoch > now && d.time_epoch < now + FORECAST_PERIOD)
  }, [result.currentData])

  return (
    <Root>
      <InputContainer>
        <Input
          placeholder="City name"
          value={query}
          onChangeText={text => onChangeText(text)}
        />
        <Button onPress={onFetchButtonPress} title="Fetch" />
      </InputContainer>
      <TempToggle onPress={onTempTogglePress}>
        <ToggleText>{isCelsius ? "°C" : "°F"}</ToggleText>
      </TempToggle>

      {result.currentData && (
        <CurrentWeather weatherInfo={result.currentData} />
      )}
      {forecastData && renderHours(forecastData)}
    </Root>
  )

  function renderHours(hours: ForecastHour[]) {
    return hours.map(hour => <HourWeather weatherInfo={hour} />)
  }

  function onFetchButtonPress() {
    getForecast(query)
  }

  function onTempTogglePress() {
    dispatch(toggleIsCelsius())
  }
}

const Root = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: 16px;
`

const InputContainer = styled.View`
  align-items: center;
  margin-horizontal: 60px;
  flex-direction: row;
  margin-bottom: 16px;
  gap: 8px;
`

const Input = styled.TextInput`
  flex: 1;
  background-color: lightgrey;
`

const Button = styled.Button.attrs({
  color: "blue"
})``

const TempToggle = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: blue;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`

const ToggleText = styled.Text`
  color: white;
`

export default MainScreen
