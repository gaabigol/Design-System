import { Input, Prefix, TextInputConteiner } from './styles'
import { ComponentProps } from 'react'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputConteiner>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputConteiner>
  )
}
