import type { EcosystemProject } from '.'

const splitByComma = (text: string) => {
  return text
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export const getProjectCategories = (project: EcosystemProject): string[] => {
  const primaryCategories = splitByComma(project.primary_category)
  const secondaryCategories = splitByComma(project.secondary_categories)

  return primaryCategories.concat(secondaryCategories)
}

export const getProjectIntegrations = (project: EcosystemProject): string[] => {
  return splitByComma(project.primary_integration)
}

export const getProjectNetworks = (project: EcosystemProject): string[] => {
  return splitByComma(project.networks)
}
