import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

studio.initialize()
studio.extend(extension)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense fallback={null}>
			<App />
		</Suspense>
	</React.StrictMode>
)
