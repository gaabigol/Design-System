import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import '@storybook/addon-actions' // Importa o addon de ações do Storybook, que permite capturar ações em componentes.
import '@storybook/addon-interactions' // Importa o addon de interações do Storybook, que permite simular interações com componentes.

addons.setConfig({
  theme: themes.dark,
  backgrounds: {
    default: 'dark',
  },
})
