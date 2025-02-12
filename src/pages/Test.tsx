import { useEffect, useState } from 'react'

const Test = () => {
  const [isHydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <div>
      <span>test</span>
    </div>
  )
}

export default Test
