import React, { FC } from 'react'

import classes from './PageNumber.module.css'

interface Props {
	number: number
	onClick: () => void
}

const PageNumber: FC<Props> = ({ onClick, number }) => {
	return (
		<div className={classes.PageNumber} onClick={onClick}>
			{number}
		</div>
	)
}

export default PageNumber
