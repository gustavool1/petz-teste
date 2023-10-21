import React from 'react'
import { render } from '@testing-library/react'
import NavigationHeader from '../../../components/navigationHeader/navigationHeader'
import { pagesInfos } from '../../../helpers/pagesInfos'

const mockPathname = '/schedule'

jest.mock('next/navigation', () => {
  return {
    usePathname: () => mockPathname,
  }
})

describe('NavigationHeader', () => {
  it('Renderiza o componente com a informação da página corretamente', () => {
    const { getByText } = render(<NavigationHeader />)

    expect(getByText('Home')).toBeInTheDocument()

    const pathArray = mockPathname.split('/').filter((part) => part !== '')
    pathArray.forEach((path, index) => {
      const pageInfo = pagesInfos.find((pageInfo) => pageInfo.path == path)
      const description = getByText(pageInfo?.description!)
      expect(description).toBeInTheDocument()
    })
  })

  it('renders the title and description', () => {
    const { getByText } = render(<NavigationHeader />)
    const correctPage = pagesInfos.find(
      (pageInfo) => '/' + pageInfo.path == mockPathname
    )

    const description = getByText('Recupere seus pokémons em 5 segundos')
    const title = description.previousElementSibling

    expect(title?.textContent).toBe(correctPage?.title)
    expect(description?.textContent).toBe(correctPage?.description)
    expect(description).toBeInTheDocument()
  })
})
