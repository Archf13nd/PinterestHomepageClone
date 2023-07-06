import breakpoints from '../breakpoints.config'

const breakpointsPlugin = {
  install(app) {
    app.config.globalProperties.maxWidth = function (device) {
      if (breakpoints[device]) {
        const pixels = breakpoints[device].slice(0, 3)
        return document.documentElement.clientWidth < pixels ? true : false
      } else {
        console.error('Incorrect device')
      }
    }
  }
}

export default breakpointsPlugin
