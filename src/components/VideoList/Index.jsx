import React from 'react'

import { Grid } from '@mui/material'
import VideoItem from '../VideoItem/'

function VideoList({ videos, onVideoSelect }) {
	const listOfVideos = videos.map((video, id) => (
		<VideoItem
			key={id}
			onVideoSelect={onVideoSelect}
			video={video}
		/>
	))
	return (
		<Grid
			container
			spacing={10}>
			{listOfVideos}
		</Grid>
	)
}

export default VideoList
