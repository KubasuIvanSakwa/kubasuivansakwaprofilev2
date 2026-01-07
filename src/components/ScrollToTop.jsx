import React, { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])
    console.log(location.pathname)
  return (
    <></>
  )
}

export default ScrollToTop