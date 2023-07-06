import breakpoints from './breakpoints.config.js'

const options = () => {
  return {
    plugins: {
      'postcss-import': {},
      'postcss-nested': {},
      'postcss-simple-vars': { variables: breakpoints }
    }
  }
}
export default options
