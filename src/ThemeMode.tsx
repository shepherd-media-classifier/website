import { grommet, Grommet } from 'grommet'
import { deepMerge } from 'grommet/utils'
import React, { useState } from 'react'

const theme = deepMerge(grommet, {
	body: {
		minHeight: '100vh',
		margin: 0,
	}
})

const ThemeMode = ({ children }: any) => {

	const getThemeMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ev => {
		setTmode(ev.matches ? 'dark' : 'light')
	})

	const [tmode, setTmode] = useState<"dark" | "light">(getThemeMode())

	return (
		<Grommet full theme={theme} themeMode={tmode}>
			{children}
		</Grommet>
	)
}

export default ThemeMode