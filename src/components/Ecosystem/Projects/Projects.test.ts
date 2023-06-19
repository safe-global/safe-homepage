import { _getFilteredProjects } from './Projects'

const mockProjects = [
  {
    project: '1inch Network',
    description: 'The most efficient DeFi aggregator',
    project_scope: 'Safe Apps',
    primary_category: 'DeFi',
    secondary_categories: 'Aggregator, DEX',
    categories_list: ['DeFi', 'Aggregator', 'DEX'],
    logo: '/logos/1inch-token.svg',
    value_prop: '',
    project_website: 'https://1inch.io/',
    github_dev_docs: 'https://github.com/1inch',
    team_contact: 'https://discord.com/invite/1inch',
    twitter: 'https://twitter.com/1inch',
    primary_integration: '',
    packages: '',
    modules_guards: '',
    safe_apps_smart:
      'Batch transactions. No need to approve token swaps. No need to approve token swaps: cheaper transactions',
    networks: 'BNB, Ethereum, Gnosis Chain, Polygon',
    interface_can_you_create_a_safe: '',
    interface_can_you_import_an_existing_safe: '',
  },
  {
    project: 'Aave v3',
    description: 'Non-custodial liquidity protocol',
    project_scope: 'Safe Apps',
    primary_category: 'DeFi',
    secondary_categories: 'Lending/Borrowing',
    categories_list: ['DeFi', 'Lending/Borrowing'],
    logo: 'https://cloudflare-ipfs.com/ipfs/QmQ3w2ezp2zx3u2LYQHyuNzMrLDJFjyL1rjAFTjNMcQ4cK/aave.svg',
    value_prop: '',
    project_website: 'https://aave.com/',
    github_dev_docs: 'https://github.com/aave',
    team_contact: 'https://discord.com/invite/CvKUrqM',
    twitter: 'https://twitter.com/AaveAave',
    primary_integration: '',
    packages: '',
    modules_guards: '',
    safe_apps_smart: 'No',
    networks: 'Arbitrum, Avalanche, Ethereum, Optimism, Polygon',
    interface_can_you_create_a_safe: '',
    interface_can_you_import_an_existing_safe: '',
  },
  {
    project: 'Aelin',
    description:
      'Permissionless multi-chain protocol for capital raises and OTC deals. Aelin decentralizes fundraising without a need for VC’s',
    project_scope: 'Safe Apps',
    primary_category: 'DeFi',
    secondary_categories: 'Fundraising',
    categories_list: ['DeFi', 'Fundraising'],
    logo: '/logos/aelin.png',
    value_prop: '',
    project_website: 'https://aelin.xyz/',
    github_dev_docs: 'https://github.com/AelinXYZ',
    team_contact: 'https://discord.com/invite/YHffnV9sUM',
    twitter: 'https://twitter.com/aelinprotocol',
    primary_integration: 'Safe Apps SDK',
    packages: 'web3-onboard',
    modules_guards: '',
    safe_apps_smart: 'No',
    networks: 'Ethereum, Optimism',
    interface_can_you_create_a_safe: '',
    interface_can_you_import_an_existing_safe: '',
  },
  {
    project: 'Radicle',
    description:
      'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
    project_scope: 'Interface',
    primary_category: 'Infrastructure',
    secondary_categories: 'Governance, Tooling',
    categories_list: ['Infrastructure', 'Governance', 'Tooling'],
    logo: '/logos/Radicle.jpeg',
    value_prop:
      'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
    project_website: 'https://radicle.xyz/',
    github_dev_docs: 'https://github.com/radicle-dev',
    team_contact: '',
    twitter: '',
    primary_integration: 'Core SDK',
    packages: 'Safe Core SDK, Safe Service Client',
    modules_guards: '',
    safe_apps_smart: '',
    networks: '',
    interface_can_you_create_a_safe: '',
    interface_can_you_import_an_existing_safe: '',
  },
]

describe('Projects', () => {
  describe('_getFilteredProjects', () => {
    it('should return all categories, integrations and networks if there are no filters applied', () => {
      const result = _getFilteredProjects({
        projects: mockProjects,
        selectedCategories: [],
        selectedIntegrations: [],
        selectedNetworks: [],
      })

      expect(result).toStrictEqual(mockProjects)
    })

    it('should return only projects that match the selected categories', () => {
      const result = _getFilteredProjects({
        projects: mockProjects,
        selectedCategories: ['Lending/Borrowing'],
        selectedIntegrations: [],
        selectedNetworks: [],
      })

      const expected = [
        {
          project: 'Aave v3',
          description: 'Non-custodial liquidity protocol',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Lending/Borrowing',
          categories_list: ['DeFi', 'Lending/Borrowing'],
          logo: 'https://cloudflare-ipfs.com/ipfs/QmQ3w2ezp2zx3u2LYQHyuNzMrLDJFjyL1rjAFTjNMcQ4cK/aave.svg',
          value_prop: '',
          project_website: 'https://aave.com/',
          github_dev_docs: 'https://github.com/aave',
          team_contact: 'https://discord.com/invite/CvKUrqM',
          twitter: 'https://twitter.com/AaveAave',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'No',
          networks: 'Arbitrum, Avalanche, Ethereum, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })

    it('should return only projects that match the selected integrations', () => {
      const result = _getFilteredProjects({
        projects: mockProjects,
        selectedCategories: [],
        selectedIntegrations: ['Core SDK'],
        selectedNetworks: [],
      })

      const expected = [
        {
          project: 'Radicle',
          description:
            'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
          project_scope: 'Interface',
          primary_category: 'Infrastructure',
          secondary_categories: 'Governance, Tooling',
          categories_list: ['Infrastructure', 'Governance', 'Tooling'],
          logo: '/logos/Radicle.jpeg',
          value_prop:
            'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
          project_website: 'https://radicle.xyz/',
          github_dev_docs: 'https://github.com/radicle-dev',
          team_contact: '',
          twitter: '',
          primary_integration: 'Core SDK',
          packages: 'Safe Core SDK, Safe Service Client',
          modules_guards: '',
          safe_apps_smart: '',
          networks: '',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })

    it('should return only projects that match the selected networks', () => {
      const result = _getFilteredProjects({
        projects: mockProjects,
        selectedCategories: [],
        selectedIntegrations: [],
        selectedNetworks: ['BNB', 'Ethereum'],
      })

      const expected = [
        {
          project: '1inch Network',
          description: 'The most efficient DeFi aggregator',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Aggregator, DEX',
          categories_list: ['DeFi', 'Aggregator', 'DEX'],
          logo: '/logos/1inch-token.svg',
          value_prop: '',
          project_website: 'https://1inch.io/',
          github_dev_docs: 'https://github.com/1inch',
          team_contact: 'https://discord.com/invite/1inch',
          twitter: 'https://twitter.com/1inch',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart:
            'Batch transactions. No need to approve token swaps. No need to approve token swaps: cheaper transactions',
          networks: 'BNB, Ethereum, Gnosis Chain, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })

    it('should return only projects that match the selected categories, integrations and networks', () => {
      const result = _getFilteredProjects({
        projects: mockProjects,
        selectedCategories: ['Infrastructure'],
        selectedIntegrations: ['Core SDK'],
        selectedNetworks: [],
      })

      const expected = [
        {
          project: 'Radicle',
          description:
            'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
          project_scope: 'Interface',
          primary_category: 'Infrastructure',
          secondary_categories: 'Governance, Tooling',
          categories_list: ['Infrastructure', 'Governance', 'Tooling'],
          logo: '/logos/Radicle.jpeg',
          value_prop:
            'Radicle enables developers to securely collaborate on software over a peer-to-peer network built on Git',
          project_website: 'https://radicle.xyz/',
          github_dev_docs: 'https://github.com/radicle-dev',
          team_contact: '',
          twitter: '',
          primary_integration: 'Core SDK',
          packages: 'Safe Core SDK, Safe Service Client',
          modules_guards: '',
          safe_apps_smart: '',
          networks: '',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })
  })
})
