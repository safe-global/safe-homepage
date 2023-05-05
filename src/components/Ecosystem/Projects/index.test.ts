import EcosystemDB from '@/content/ecosystem-data.json'
import { _getFilteredProjects } from '.'

describe('Projects', () => {
  describe('_getFilteredProjects', () => {
    it('should return all categories, integrations and networks if there are no filters applied', () => {
      const result = _getFilteredProjects({ selectedCategories: [], selectedIntegrations: [], selectedNetworks: [] })

      expect(result).toStrictEqual(EcosystemDB)
    })

    it('should return only projects that match the selected categories', () => {
      const result = _getFilteredProjects({
        selectedCategories: ['Accounting', 'Automation'],
        selectedIntegrations: [],
        selectedNetworks: [],
      })

      const expected = [
        {
          project: 'Mesha Club',
          project_scope: 'Interface',
          primary_category: 'DAO Tooling',
          secondary_categories: 'Accounting, Automation, CeFi, DeFi, Payments',
          logo: '/images/ecosystem/mesha.jpeg',
          value_prop: 'Corporate cards and expense management for web3 projects',
          project_website: 'https://www.mesha.club/',
          github_dev_docs: '',
          team_contact: '',
          twitter: '',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: '',
          networks: '',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Paymagic',
          project_scope: 'Interface',
          primary_category: 'DAO Tooling',
          secondary_categories: 'Accounting, Automation, Payments',
          logo: '/images/ecosystem/paymagic.jpeg',
          value_prop: 'Automate DAO rewards and payments',
          project_website: 'https://www.paymagic.xyz/',
          github_dev_docs: 'https://github.com/PaymagicXYZ',
          team_contact: '',
          twitter: '',
          primary_integration: 'Safe Contracts',
          packages: '',
          modules_guards:
            'https://github.com/PaymagicXYZ/lensmo-contract/tree/466283371166499d88d2b027adcd9ab5fb5e9b74/contracts',
          safe_apps_smart: '',
          networks: '',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })

    it('should return only projects that match the selected integrations', () => {
      const result = _getFilteredProjects({
        selectedCategories: [],
        selectedIntegrations: ['Core SDK', 'Safe Contracts', 'Transaction Service API'],
        selectedNetworks: [],
      })

      const expected = [
        {
          project: 'Metropolis',
          project_scope: 'Interface',
          primary_category: 'DAO Tooling',
          secondary_categories: 'Infrastructure, Tooling',
          logo: '/images/ecosystem/orca.jpeg',
          value_prop: 'On-chain permissions for DAO working groups',
          project_website: 'https://www.metropolis.space/',
          github_dev_docs: 'https://github.com/orcaprotocol',
          team_contact: '',
          twitter: '',
          primary_integration: 'Core SDK, Safe Contracts, Transaction Service API',
          packages: 'Safe Core SDK, Safe Deployments, Safe Ethers Lib, Transaction Service API',
          modules_guards: 'https://docs.orcaprotocol.org/docs/getting-started-pods/podify-your-safe',
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
        selectedCategories: [],
        selectedIntegrations: [],
        selectedNetworks: ['Arbitrum', 'Aurora', 'Avalanche', 'BNB', 'Ethereum', 'Gnosis Chain', 'Optimism', 'Polygon'],
      })

      const expected = [
        {
          project: 'CSV Airdrop',
          project_scope: 'Safe Apps',
          primary_category: 'Payments',
          secondary_categories: 'Accounting, Tooling',
          logo: 'https://cloudflare-ipfs.com/ipfs/QmdFyTuzHnzj6Z1pRRLqjWXEbH56TBNKo3M1an21zKWCXt/logo.svg',
          value_prop: '',
          project_website: '',
          github_dev_docs: '',
          team_contact: '',
          twitter: '',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Drain Account',
          project_scope: 'Safe Apps',
          primary_category: 'Payments',
          secondary_categories: 'Tooling',
          logo: '/images/ecosystem/drain.svg',
          value_prop: '',
          project_website: '',
          github_dev_docs: '',
          team_contact: '',
          twitter: '',
          primary_integration: 'Safe Apps SDK',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'LlamaPay',
          project_scope: 'Safe Apps',
          primary_category: 'DAO Tooling',
          secondary_categories: 'Accounting, Payments',
          logo: '/images/ecosystem/llama.svg',
          value_prop: '',
          project_website: 'https://llamapay.io/',
          github_dev_docs: 'https://github.com/LlamaPay',
          team_contact: 'https://discord.com/invite/SnGCrz6',
          twitter: 'https://twitter.com/llamapay_io/',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Mean Finance',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Aggregator, Automation',
          logo: '/images/ecosystem/226932695-a3a657a9-2c6a-4daa-801a-e18526b9303b.svg',
          value_prop: '',
          project_website: 'https://mean.finance/create',
          github_dev_docs: 'https://github.com/Mean-Finance',
          team_contact: 'http://discord.mean.finance/',
          twitter: 'https://twitter.com/mean_fi',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'OpenOcean',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Aggregator, DEX',
          logo: '/images/ecosystem/openocean.png',
          value_prop: '',
          project_website: 'https://openocean.finance/',
          github_dev_docs: 'https://github.com/openocean-finance/',
          team_contact: 'https://discord.gg/C7PHQaKdNX',
          twitter: 'https://twitter.com/OpenOceanGlobal',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'No',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Revoke.cash',
          project_scope: 'Safe Apps',
          primary_category: 'Infrastructure',
          secondary_categories: 'Tooling',
          logo: '/images/ecosystem/revovke.png',
          value_prop: '',
          project_website: 'https://revoke.cash/',
          github_dev_docs: 'https://github.com/rkalis/revoke.cash',
          team_contact: 'https://discord.gg/revoke-cash',
          twitter: 'https://twitter.com/RevokeCash',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'No',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Transaction Builder',
          project_scope: 'Safe Apps',
          primary_category: 'Infrastructure',
          secondary_categories: 'Tooling',
          logo: 'https://cloudflare-ipfs.com/ipfs/QmTJMCBZHX56z36aTUaL2QZ3rKTkzaq1CG3zhPSKb1Su3a/tx-builder.png',
          value_prop: '',
          project_website: '',
          github_dev_docs: '',
          team_contact: '',
          twitter: '',
          primary_integration: 'Safe Apps SDK',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions and draft transactions',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Zerion',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'DEX, Dashboard',
          logo: 'https://app.zerion.io//logo.svg',
          value_prop: '',
          project_website: 'https://zerion.io',
          github_dev_docs: 'https://github.com/zeriontech',
          team_contact: 'https://zerion.io/discord',
          twitter: '',
          primary_integration: '',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'No',
          networks: 'Arbitrum, Aurora, Avalanche, BNB, Ethereum, Gnosis Chain, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })

    it('should return only projects that match the selected categories, integrations and networks', () => {
      const result = _getFilteredProjects({
        selectedCategories: ['DeFi'],
        selectedIntegrations: ['Safe Apps SDK'],
        selectedNetworks: ['Arbitrum'],
      })

      const expected = [
        {
          project: 'Bitbond Token Tool',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Fundraising',
          logo: '/images/ecosystem/download.png',
          value_prop: '',
          project_website: 'https://www.bitbond.com/',
          github_dev_docs: 'https://github.com/bitbond',
          team_contact: 'https://discord.com/invite/ZZpKQYvzxE',
          twitter: 'https://twitter.com/Bitbond',
          primary_integration: 'Safe Apps SDK',
          packages: 'web3-onboard',
          modules_guards: '',
          safe_apps_smart: 'No',
          networks: 'Arbitrum, Avalanche, BNB, Ethereum, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Bunni',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Yield',
          logo: 'https://github.com/ZeframLou/bunni',
          value_prop: '',
          project_website: 'https://bunni.pro/',
          github_dev_docs: 'https://github.com/ZeframLou/bunni',
          team_contact: '',
          twitter: 'https://twitter.com/timeless_fi',
          primary_integration: 'Safe Apps SDK',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch transactions',
          networks: 'Arbitrum, Ethereum, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
        {
          project: 'Sablier',
          project_scope: 'Safe Apps',
          primary_category: 'DeFi',
          secondary_categories: 'Accounting, DAO Tooling, Governance, Payments',
          logo: '/images/ecosystem/Sablier.svg',
          value_prop: '',
          project_website: 'https://sablier.finance/',
          github_dev_docs: 'https://github.com/sablierhq',
          team_contact: 'https://discord.gg/bSwRCwWRsT',
          twitter: 'https://twitter.com/SablierHQ',
          primary_integration: 'Safe Apps SDK',
          packages: '',
          modules_guards: '',
          safe_apps_smart: 'Batch - approve and deploy',
          networks: 'Arbitrum, Avalanche, BNB, Ethereum, Optimism, Polygon',
          interface_can_you_create_a_safe: '',
          interface_can_you_import_an_existing_safe: '',
        },
      ]

      expect(result).toStrictEqual(expected)
    })
  })
})
