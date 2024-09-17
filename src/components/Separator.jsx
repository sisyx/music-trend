import React, { useState, useEffect } from 'react'

export default function Separator({ topcolor, bottomcolor, reverse = false , height = '100px'}) {
	const [degree, setDegree] = useState(Math.atan(100 / window.innerWidth) * 57);
	
	useEffect(() => {
		window.addEventListener('resize', event => {
			setDegree((100 / window.innerWidth) * 57)
		})
	})

	const containerStyle = {
		height: height,
		position: "relative",
		backgroundImage: `linear-gradient(${reverse ? "-" : ""}${degree}deg, ${bottomcolor} 50%, ${topcolor} 50%)`
	}
	return (
    	<div style={containerStyle}></div>
  )
}
