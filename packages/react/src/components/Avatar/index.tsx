import { User } from 'phosphor-react'
import { AvatarContainer, AvatarImage } from './styles'
import { ComponentProps } from 'react'
import { AvatarFallback } from '@radix-ui/react-avatar'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
