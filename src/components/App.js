import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import { HomePage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`
const App = () => {
  return (
    <div>
      <Helmet titleTemplate="Pfizer - %s">
        <title>Pfizer Country Lab</title>
        <meta name="description" content="Pfizer web app starter kit " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Pfizer - Country Lab" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="https://www.pfizer.com/sites/default/themes/pfizer_com_zen/favicon.ico" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

if(module.hot) {
	const FILE_NAME = 'styles.css'
	let file = ''
  let el = document.querySelector(`link[href*="${FILE_NAME}"]`)
	let {href} = el
	function httpGet(url, callback) {
		let xhr = new XMLHttpRequest()

		xhr.addEventListener('load', () => callback(xhr))
		xhr.open('GET', url)
		xhr.send()
	}

	module.hot.accept(()=>{console.log('accepted');})
	module.hot.dispose(() => {

		let url = `${href}?d=${new Date().getTime()}`
    console.log('new',url);
		httpGet(url, ({responseText}) => {
			if(responseText == file)
				window.location.reload() // js was changed
			else
				el.href = url
		})
	})

	httpGet(href, ({responseText}) => {
    file = responseText
	})
}
export default App
