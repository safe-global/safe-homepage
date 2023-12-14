import { render, waitFor } from '@testing-library/react'
import SearchParamsContext, { SearchParamsContextProvider } from '@/contexts/SearchParamsContext'
import { useContext } from 'react'
import { useSearchParams } from 'next/navigation'
import { sessionItem } from '@/services/Storage/session'

const SEARCH_PARAMS_KEY = 'searchParams'
const sessionSearchParams = sessionItem<string>(SEARCH_PARAMS_KEY)

// Mocking next/navigation useSearchParams
jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(() => new URLSearchParams('')),
}))
const mockUseSearchParams = useSearchParams as jest.MockedFunction<typeof useSearchParams>

const TestingComponent = () => {
  const searchParamsValue = useContext(SearchParamsContext)

  return (
    <div>
      <p data-testid="value">{searchParamsValue}</p>
    </div>
  )
}

describe('SearchParamsContextProvider', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('renders with empty search parameters', () => {
    const result = render(
      <SearchParamsContextProvider>
        <TestingComponent />
      </SearchParamsContextProvider>,
    )

    expect(result.getByTestId('value')).toHaveTextContent('')
  })

  it('renders the session storage search parameters', async () => {
    sessionSearchParams.set('param1=value1')

    const result = render(
      <SearchParamsContextProvider>
        <TestingComponent />
      </SearchParamsContextProvider>,
    )

    await waitFor(() => expect(result.getByTestId('value')).toHaveTextContent('param1=value1'))
  })

  it('renders the URL search parameters', async () => {
    mockUseSearchParams.mockReturnValueOnce(new URLSearchParams('utm_source=URL') as any)

    const result = render(
      <SearchParamsContextProvider>
        <TestingComponent />
      </SearchParamsContextProvider>,
    )

    await waitFor(() => expect(result.getByTestId('value')).toHaveTextContent('utm_source=URL'))
  })

  it('renders the session storage and URL search parameters on update', async () => {
    sessionSearchParams.set('param5=value5')
    mockUseSearchParams.mockReturnValueOnce(new URLSearchParams('param2=value2') as any)

    const result = render(
      <SearchParamsContextProvider>
        <TestingComponent />
      </SearchParamsContextProvider>,
    )

    await waitFor(() => expect(result.getByTestId('value')).toHaveTextContent('param5=value5&param2=value2'))

    mockUseSearchParams.mockReturnValueOnce(new URLSearchParams('param2=value2&param3=value3') as any)

    // render again to update the context
    result.rerender(
      <SearchParamsContextProvider>
        <TestingComponent />
      </SearchParamsContextProvider>,
    )

    await waitFor(() =>
      expect(result.getByTestId('value')).toHaveTextContent('param5=value5&param2=value2&param3=value3'),
    )
  })
})
