import React, { useEffect, useState } from 'react'
import {
  Container,
  PageRoute,
  Arrow,
  RoutesContainer,
  Title,
  Description,
} from './style'
import { usePathname } from 'next/navigation'
import { pagesInfos } from '../../helpers/pagesInfos'

const NavigationHeader = () => {
  const [pathArray, setPathArray] = useState<string[]>([])
  const pathName = usePathname()
  const currentPageInfo = pagesInfos.find(
    (pageInfo) => pageInfo.path == pathName.substring(1)
  )

  useEffect(() => {
    const paths = pathName.split('/')
    paths.shift()

    setPathArray(paths)
  }, [])
  // /home/klasdkl

  return (
    <Container>
      <RoutesContainer>
        <PageRoute>Home</PageRoute>
        <Arrow>{'>'}</Arrow>
        {pathArray.map((path, index) => (
          <>
            <PageRoute>
              {pagesInfos.find((pageInfo) => pageInfo.path == path)?.title}
            </PageRoute>
            {index < pathArray.length - 2 && <Arrow>{'>'}</Arrow>}
          </>
        ))}
      </RoutesContainer>
      <Title>{currentPageInfo?.title}</Title>
      <Description>{currentPageInfo?.description}</Description>
    </Container>
  )
}

export default NavigationHeader
