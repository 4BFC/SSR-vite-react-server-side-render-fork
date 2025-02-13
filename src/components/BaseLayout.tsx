import { FC, ReactNode, useState, useEffect } from 'react'

type BaseLayoutProps = {
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  const [isHydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!isHydrated) {
    return null
  }

  return (
    <>
      <section>{children}</section>
    </>
  )
}

export default Layout
