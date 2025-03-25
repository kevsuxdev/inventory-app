import { KeyboardType } from "react-native"

export interface TextInputField {
  label: string
  placeholder: string
  keyboardType?: KeyboardType
  onChangeText?: (value: string) => void
  inputStyle?: string
  textClassName?: string
}

export interface PasswordInputField {
  label: string
  placeholder: string
  keyboardType?: KeyboardType
  onChangeText?: (value: string) => void
  inputStyle?: string
}