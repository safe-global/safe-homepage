import useSWR from 'swr'

const ASHBY_API_URL = 'https://api.ashbyhq.com/posting-api/job-board/safe.global/'

type SecondaryLocation = {
  location: string
  address: {
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
}

const enum EmploymentType {
  FULL_TIME = 'FullTime',
  PART_TIME = 'PartTime',
  CONTRACTOR = 'Contractor',
  INTERN = 'Intern',
  TEMPORARY = 'Temporary',
}

export type Position = {
  title: string
  location: string
  secondaryLocations: Array<SecondaryLocation>
  department: string
  team: string
  isRemote: boolean
  descriptionHtml: string
  descriptionPlain: string
  publishedAt: string
  employmentType: EmploymentType
  address: {
    postalAddress: {
      addressLocality: string
      addressRegion: string
      addressCountry: string
    }
  }
  jobUrl: string
  applyUrl: string
  isListed: boolean
}

type OpenPositions = {
  apiVersion: string
  jobs: Array<Position>
}

const fetchOpenPositions = async (): Promise<OpenPositions['jobs']> => {
  return fetch(ASHBY_API_URL)
    .then((res) => res.json())
    .then((data) => data.jobs)
}

export const useOpenPositions = () => {
  const SWR_KEY = 'open-positions'

  return useSWR<OpenPositions['jobs']>(SWR_KEY, fetchOpenPositions, { fallbackData: [] })
}
