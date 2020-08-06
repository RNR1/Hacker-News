import React, { FC } from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'

import Navbar from './Navbar'
import Footer from './Footer'
import { Container } from '../styles/Styled'

const Layout: FC = ({ children }) => {
	return (
		<Container>
			<Navbar />
			<main>{children}</main>
			<Footer />
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</Container>
	)
}

export default Layout
