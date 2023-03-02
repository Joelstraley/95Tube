import React from 'react'

import { Paper, Typography } from '@mui/material'

function VideoDetail({ video }) {
	if (!video) return <div>Loading...</div>
	if (video === 'error')
		return <div>Whoops! It's the 90s. What're ya gonna do?</div>

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

	return (
		<>
			<Paper
				elevation={6}
				style={{ height: '70%' }}>
				<iframe
					/* frameBorder="0" */
					height="100%"
					width="100%"
					title="Video Player"
					src={videoSrc}
				/>
			</Paper>
			<Typography variant="h4">
				{video.snippet.title} = {video.snippet.channelTitle}
			</Typography>
			<Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
			<Typography variant="subtitle2">{video.snippet.description}</Typography>
			<Paper
				elevation={6}
				style={{ padding: '15px' }}></Paper>
		</>
	)
}

export default VideoDetail
