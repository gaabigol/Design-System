import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@innova-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gaabigol.png',
    alt: 'Gabriel Bernardo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const PrimaryAvatar: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
