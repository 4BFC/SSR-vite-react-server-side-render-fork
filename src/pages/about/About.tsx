// App level imports
import { JSX, useEffect, useState } from 'react'

export const About = (): JSX.Element => {
  const [isHydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  /**
  if (!isHydrated) {
    return null
  } 
  */

  return (
    <div>
      {isHydrated ? (
        <>
          <h3>About Us</h3>
          We're all about React server-side rendering 📟.
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}
