import { React, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import youtube from './api/youtube'
/* import styled from 'styled-components/macros' */
//import styled from 'styled-components'
import styled from 'styled-components/macro'
//import { someStyle } from './styled'

import { Grid } from '@mui/material'

import { MenuList, MenuListItem, Separator, styleReset } from 'react95'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original'

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`

function App() {
	const [videos, setVideos] = useState([])
	const [selectedVideo, setSelectedVideo] = useState(null)

	const onVideoSelect = (video) => {
		setSelectedVideo(video)
	}

	const handleSubmit = async (searchTerm) => {
		try {
			const res = await youtube.get('search', {
				params: {
					part: 'snippet',
					maxResults: 5,
					key: import.meta.env.VITE_MY_API_KEY,
					q: searchTerm,
				},
			})
			setVideos(res.data.items)
			setSelectedVideo(res.data.items[0])
		} catch (error) {
			console.error(error)
			setSelectedVideo('error')
		}
	}

	useEffect(() => {
		handleSubmit('Joels')
	}, [])

	return (
		<div>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<div>
					<h1>HI</h1>
				</div>
				{/* {console.log('vidddddd', videos)}
				<Grid
					justify="center"
					container
					spacing={10}>
					<Grid
						item
						xs={12}>
						<Grid
							container
							spacing={16}>
							<Grid
								item
								xs={12}>
								<SearchBar onFormSubmit={handleSubmit} />
							</Grid>
							<Grid
								item
								xs={9}>
								<VideoDetail video={selectedVideo} />
							</Grid>
							<Grid
								item
								xs={4}>
								<VideoList
									videos={videos}
									onVideoSelect={onVideoSelect}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid> */}
			</ThemeProvider>
		</div>
	)
}

export default App
