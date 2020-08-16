import React from 'react'
import styled from 'styled-components'

export const Img = styled.img`
	border: 1px solid white;
`

const Logo = () => {
	return <Img src='https://news.ycombinator.com/y18.gif' alt='Hacker News' />
}

export default Logo
