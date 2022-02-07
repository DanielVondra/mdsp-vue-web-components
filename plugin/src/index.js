import components from './components'
    
const plugin = {
  install: (app, options) => {
    for (const key in components) {
      app.component(key, components[key])
    }
    const _el = document.getElementById('mdsp-webcomponents-loader');
    if (!_el) {
      let mdsp_script = document.createElement('script')
      mdsp_script.setAttribute('id', 'mdsp-webcomponents-loader')
      mdsp_script.setAttribute('type', 'text/javascript')
      mdsp_script.setAttribute('src', 'https://static.eu1.mindsphere.io/webcomponents/v1/index.js')
      document.head.appendChild(mdsp_script)
      console.log('MdspWebComponents loaded ✔️ - added');
    } else {
      console.log('MdspWebComponents loaded ✔️ - initial')
    }
  }
}
export default plugin