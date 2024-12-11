import { Box, Text } from 'grommet'
import React from 'react'

export const CodeBox = ({ children }: any) => (
	<Box background={{ dark: 'dark-1', light: 'light-3' }}>
		<Text textAlign='center' size='small' weight={'bold'} margin={'medium'} color={{ dark: 'accent-1', light: 'neutral-1' }}>
			<code>
				{children}
			</code>
		</Text>
	</Box>
)
