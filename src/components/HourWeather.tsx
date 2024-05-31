import { Text } from "react-native"
import styled from "styled-components/native"

import { ForecastHour } from "../model/types"
import Temp from "./Temp"

interface Props {
  weatherInfo: ForecastHour
}

const HourWeather: React.FC<Props> = ({ weatherInfo }) => {
  return (
    <Row>
      <Text>{formatEpochTime(weatherInfo.time_epoch)}</Text>
      <Condition>
        <Temp temp_c={weatherInfo.temp_c} temp_f={weatherInfo.temp_f} />
        <Icon source={{ uri: "https:" + weatherInfo.condition.icon }} />
        <Text>{weatherInfo.condition.text}</Text>
      </Condition>
    </Row>
  )

  function formatEpochTime(time_epoch: number) {
    return new Date(time_epoch * 1000).toLocaleTimeString()
  }
}

const Row = styled.View`
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  border-top-color: grey;
`

const Icon = styled.Image`
  width: 36px;
  height: 36px;
`

const Condition = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`

export default HourWeather
