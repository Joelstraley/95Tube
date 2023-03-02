import { useState } from 'react'

import { Paper, TextField } from '@mui/material'

function SearchBar({ onFormSubmit }) {
	const [searchTerm, setSearchTerm] = useState('')

	/* const handleChange = (e) => {
		setSearchTerm(e.target.value)
	} */

	/* 	const handleSubmit = (e) => {
		onFormSubmit(searchTerm)
		e.preventDefault()
	} */

	return (
		<>
			<Paper
				elevation={6}
				style={{ padding: '26px' }}>
				<form
					onSubmit={(e) => {
						onFormSubmit(searchTerm), e.preventDefault()
					}}>
					<TextField
						fullWidth
						label="Search..."
						onChange={(e) => {
							setSearchTerm(e.target.value)
						}}
					/>
				</form>
			</Paper>
		</>
	)
}

export default SearchBar
