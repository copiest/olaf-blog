import { render, screen } from '@testing-library/react'
import IndexPage from '@pages/index'
import { MESSAGE } from '@constants'

describe('Message', () => {
  it('1205 텍스트가 노출된다', () => {
    render(<IndexPage />)

    expect(screen.getByText(MESSAGE)).toBeInTheDocument()
  })
})
