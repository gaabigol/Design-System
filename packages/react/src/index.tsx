import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray600',
  borderRadius: '$md',
  padding: '$4',
})
export function App() {
  return <Button>Stitiches is not defined</Button>
}
