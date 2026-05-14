import { useState } from 'react'
import MainLayout from './components/MainLayout/MainLayout'
import MainRoutes from './routes/MainRoutes'
import { Global } from '@emotion/react'
import { reset } from './styles/reset'


function App() {


	return (
		<>
			<Global styles={reset} />
			<MainLayout>
				<MainRoutes />
			</MainLayout>
		</>
	)
}

export default App
