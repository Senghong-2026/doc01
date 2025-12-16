import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'

export default {
  ...DefaultTheme,
  async enhanceApp({ app }: { app: App }) {
    app.component(
      'Counter',
      (await import('../components/Counter.vue')).default
    )
  },
}
