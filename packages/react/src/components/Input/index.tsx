import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputprops extends ComponentProps<typeof Input> {}

export function TextInput({ prefix, ...props }: TextInputprops) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}
TextInput.displayName = 'TextInput'
