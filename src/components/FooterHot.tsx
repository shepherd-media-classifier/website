import { Footer } from 'grommet'
import React from 'react'

export const FooterHot = () => (
	<Footer
		background={{ dark: 'dark-1', light: 'light-3' }}
		alignSelf='center'
		style={{
			position: 'sticky',
			height: '30px',
			top: `calc(100vh - 30px)`,
			marginTop: '20px',
		}}
	>

	</Footer>
)
