import { formatValue } from '@/lib/formatValue'

describe('formatValue', () => {
  it('formats value in trillions', () => {
    expect(formatValue(2308.73e12)).toBe('2309T')
    expect(formatValue(508.73e12)).toBe('509T')
    expect(formatValue(234.23e12)).toBe('234T')
    expect(formatValue(9.99e12)).toBe('10T')
    expect(formatValue(2e12)).toBe('2T')
    expect(formatValue(1.23e12)).toBe('1.2T')
    expect(formatValue(0.75e12)).toBe('750B')
  })

  it('formats value in billions', () => {
    expect(formatValue(2318.73e9)).toBe('2.3T')
    expect(formatValue(508.73e9)).toBe('509B')
    expect(formatValue(234.23e9)).toBe('234B')
    expect(formatValue(9.99e9)).toBe('10B')
    expect(formatValue(2e9)).toBe('2B')
    expect(formatValue(1.23e9)).toBe('1.2B')
    expect(formatValue(0.75e9)).toBe('750M')
  })

  it('formats value in millions', () => {
    expect(formatValue(2318.73e6)).toBe('2.3B')
    expect(formatValue(508.73e6)).toBe('509M')
    expect(formatValue(234.23e6)).toBe('234M')
    expect(formatValue(9.99e6)).toBe('10M')
    expect(formatValue(2e6)).toBe('2M')
    expect(formatValue(1.23e6)).toBe('1.2M')
    expect(formatValue(0.75e6)).toBe('750K')
  })

  it('formats value in thousands', () => {
    expect(formatValue(2318.73e3)).toBe('2.3M')
    expect(formatValue(508.73e3)).toBe('509K')
    expect(formatValue(234.23e3)).toBe('234K')
    expect(formatValue(9.99e3)).toBe('10K')
    expect(formatValue(2e3)).toBe('2K')
    expect(formatValue(1.23e3)).toBe('1.2K')
    expect(formatValue(0.75e3)).toBe('750')
  })

  it('formats value below 1e3', () => {
    expect(formatValue(21599)).toBe('22K')
    expect(formatValue(2999)).toBe('3K')
    expect(formatValue(123)).toBe('123')
  })
})
