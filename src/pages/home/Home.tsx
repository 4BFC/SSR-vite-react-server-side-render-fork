import { JSX, useEffect, useState } from 'react'

export const Home = (): JSX.Element => {
  const [isHydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  })

  if (!isHydrated) {
    return <h1>No match Hydrate</h1>
  }

  return (
    <div>
      <h3>Home</h3>
      Home, sweet home 🏠.
    </div>
  )
}
