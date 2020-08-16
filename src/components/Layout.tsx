import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactQueryDevtools } from 'react-query-devtools'

import Navbar from './Navbar'
import Footer from './Footer'

const Container = styled.div`
	margin: 0 auto;
	width: 85%;
	font-size: 14px;
	background-color: #f6f6ef;

	@media (max-width: 750px) {
		margin: 0;
		width: 100%;
		font-size: 15px;
	}
`

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
