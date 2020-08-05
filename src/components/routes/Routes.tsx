import React, { FC, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Story = lazy(() => import('../pages/Story'))

const Routes: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/story/:id' component={Story} />
			</Switch>
		</Suspense>
	)
}

export default Routes
