import { Dimensions, Platform } from "react-native"

type Device = {
  width: number;
  height: number;
  plataform: 'android' | 'ios' | 'windows' | 'macos' | 'web';
  behavior: 'padding' | 'height';
}

export const Device: Device = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
  plataform: Platform.OS,
  behavior: Platform.OS === 'ios' ? 'padding' : 'height'
}
