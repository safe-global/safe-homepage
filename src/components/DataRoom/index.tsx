import PageContent from '@/components/common/PageContent'
import dataroomContent from '@/content/dataroom.json'
import type { getStaticProps } from '@/pages/dataroom'
import type { InferGetStaticPropsType } from 'next'
import SafeDataRoomContext from '@/contexts/SafeDataRoomContext'

export const DataRoom = (props: InferGetStaticPropsType<typeof getStaticProps>) => (
  <SafeDataRoomContext.Provider value={props.safeDataRoomStats}>
    <PageContent content={dataroomContent} path="dataroom.json" />
  </SafeDataRoomContext.Provider>
)
