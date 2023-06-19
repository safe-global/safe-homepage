import useSWR from 'swr'
import { ECOSYSTEM_DATA_URL } from '@/config/constants'

export type EcosystemProject = {
  project: string
  description: string
  project_scope: string
  primary_category: string
  secondary_categories: string
  logo: string
  value_prop: string
  project_website: string
  github_dev_docs: string
  team_contact: string
  twitter: string
  primary_integration: string
  packages: string
  modules_guards: string
  safe_apps_smart: string
  networks: string
  interface_can_you_create_a_safe: string
  interface_can_you_import_an_existing_safe: string
}

export type EcosystemProjectWithCategories = EcosystemProject & { categories_list: string[] }

export const ECOSYSTEM_SWR_KEY = 'ecosystem-data'

export const fetchEcosystemData = async (): Promise<EcosystemProject[]> => {
  return fetch(ECOSYSTEM_DATA_URL + '/data.json').then((res) => res.json())
}

export const useEcosystemData = () => {
  return useSWR<EcosystemProject[]>(ECOSYSTEM_SWR_KEY, fetchEcosystemData)
}
