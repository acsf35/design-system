import { configure } from '@storybook/react'

import '@royalnavy/css-framework/index.scss'

import './styles.css'

const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
