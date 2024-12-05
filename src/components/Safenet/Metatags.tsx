import MetaTags from '@/components/common/MetaTags'

const Metadata = () => {
  const title = 'Safenet'
  const description = 'Instant Cross-chain Transactions. Execution Guarantees. On any network.'

  return <MetaTags pageTitle={title} description={description} image="/images/Safenet/meta-image-safenet.png" />
}

export default Metadata
