import styled from "styled-components/native"

import { ForecastInfo } from "../model/types"
import Temp from "./Temp"

interface Props {
  weatherInfo: ForecastInfo
}

const CurrentWeather: React.FC<Props> = ({ weatherInfo }) => {
  return (
    <Root>
      <InfoText>{formatLocation()}</InfoText>
      <Condition>
        <StyledTemp
          temp_c={weatherInfo.current.temp_c}
          temp_f={weatherInfo.current.temp_f}
        />
        <Icon source={{ uri: "https:" + weatherInfo.current.condition.icon }} />
        <InfoText>{weatherInfo.current.condition.text}</InfoText>
      </Condition>
    </Root>
  )

  function formatLocation() {
    return `${weatherInfo.location.name}, ${weatherInfo.location.country}`
  }
}

const Root = styled.View`
  align-items: center;
  padding-vertical: 16px;
`

const InfoText = styled.Text`
  font-size: 18px;
`

const StyledTemp = styled(Temp)`
  font-size: 18px;
`

const Icon = styled.Image`
  width: 48px;
  height: 48px;
`

const Condition = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

export default CurrentWeather
