import { Box, Card } from 'grommet'
import React from 'react'

export const ImgShepherdThemed = () => (

	<picture >
		<source
			srcSet={new URL('../assets/shepherd_dark_350.png', import.meta.url).href}
			media='(prefers-color-scheme: dark)'
		/>
		<img
			src={new URL('../assets/shepherd_light_350.png', import.meta.url).href}
			alt='light mode image'
		/>
	</picture>

)
