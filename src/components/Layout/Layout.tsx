import React, { FC } from 'react'
import Navbar from '../Navbar/Navbar'
import { ReactQueryDevtools } from 'react-query-devtools'
import styled from 'styled-components'

const Container = styled.div`
	margin: 0 auto;
	width: 85%;
	font-size: 14px;
`

const Layout: FC = ({ children }) => {
	return (
		<Container>
			<Navbar />
			<main>{children}</main>
			{process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
		</Container>
	)
}

export default Layout
