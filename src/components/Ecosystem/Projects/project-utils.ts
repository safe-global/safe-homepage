import { type EcosystemProject } from '@/hooks/useEcosystemData'

const splitByComma = (text: string) => {
  return text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export const getPrimaryProjectCategories = (project: EcosystemProject): string[] => {
  return splitByComma(project.primary_category)
}

export const getProjectCategories = (project: EcosystemProject): string[] => {
  const primaryCategories = getPrimaryProjectCategories(project)
  const secondaryCategories = splitByComma(project.secondary_categories)

  return primaryCategories.concat(secondaryCategories)
}

export const getProjectIntegrations = (project: EcosystemProject): string[] => {
  return splitByComma(project.primary_integration)
}

export const getProjectNetworks = (project: EcosystemProject): string[] => {
  return splitByComma(project.networks)
}
