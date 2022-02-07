import components from './components'

const plugin = {
  install: (app, options) => {
    for (const key in components) {
      app.component(key, components[key])
    }
  }
}
export default plugin