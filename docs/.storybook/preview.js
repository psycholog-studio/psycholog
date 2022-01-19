import { injectGlobal } from '@emotion/css'
import '../../packages/ui/src/reset.css'
import './styles.css'

injectGlobal`
  * {
    box-sizing: border-box;
  }
`

export const parameters = {
  options: {
    storySort: (a, b) => {
      if (a[1].kind.split('/').pop() === 'Introduction') {
        return 0
      } else if (b[1].kind.split('/').pop() === 'Introduction') {
        return 1
      } else {
        return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })
      }
    }
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    source: {
      type: 'dynamic',
      excludeDecorators: true,
    },
  },
}

export const decorators = [
  (Story) => (
    <Story />
  ),
];