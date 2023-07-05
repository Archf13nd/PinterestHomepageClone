const breakpointsPlugin = {
  install(app, options) {
    const screens = {
      mobile: 600,
      'tablet-portrait': 1000,
      'tablet-landscape': 1200
    }
    app.config.globalProperties.maxWidth = function (device) {
      return document.documentElement.clientWidth < screens[device] ? true : false
    }
  }
}

export default breakpointsPlugin
