// const path = require('path')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

module.exports = () => ({
  plugins: {
    autoprefixer,
    tailwindcss,
    'postcss-custom-properties': {
      preserve: true,
    },
  },
})
