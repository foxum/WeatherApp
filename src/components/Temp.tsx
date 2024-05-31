import { Text, ViewProps } from "react-native"

import { useAppSelector } from "../app/hooks"
import { selectIsCelsius } from "../reducer/settingsSlice"

interface Props extends Pick<ViewProps, "style"> {
  temp_c: number
  temp_f: number
}

const Temp: React.FC<Props> = ({ temp_c, temp_f, style }) => {
  const isCelsius = useAppSelector(selectIsCelsius)

  return <Text style={style}>{formatTemp(isCelsius ? temp_c : temp_f)}</Text>

  function formatTemp(temp: number) {
    const sign = isCelsius ? "C" : "F"
    return `${temp.toFixed()}°${sign}`
  }
}

export default Temp
