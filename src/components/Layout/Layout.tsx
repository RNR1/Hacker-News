import React, { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import { ReactQueryDevtools } from 'react-query-devtools'

const Layout: FC = ({ children }) => {
	return (
		<div className='App'>
			<Navbar />
			<main>{children}</main>
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</div>
	)
}

export default Layout
