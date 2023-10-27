import { Chip, Container, Stack, Typography } from '@mui/material'
import type { BaseBlock } from '@/components/Home/types'
import HeaderCTA from '@/components/common/HeaderCTA'
import { parseSnapshotTitle } from '@/lib/parseSnapshotTitle'
import { useSafeSnapshot } from '@/hooks/useSafeSnapshot'
import layoutCss from '@/components/common/styles.module.css'
import css from './styles.module.css'

const PROPOSAL_LINK_BASE_URL = 'https://snapshot.org/#/safe.eth/proposal/'

type SnapshotProposal = {
  id: string
  title: string
  state: 'active' | 'closed' | 'pending'
  author?: string
}

const colors: Record<SnapshotProposal['state'], string> = {
  pending: '#FF8061',
  active: '#00B460',
  closed: '#52BFDC',
}

const ProposalRow = ({ title, state, href }: Omit<SnapshotProposal, 'id'> & { href: string }) => {
  const [sepNumber, description] = parseSnapshotTitle(title)

  return (
    <a href={href} target="_blank" rel="noreferrer" className={css.proposalRow}>
      <Typography variant="h4" maxWidth={{ sm: '.6' }}>
        <Typography
          variant="h4"
          component="span"
          color="primary.light"
          marginRight={1}
        >{`SEP ${sepNumber}`}</Typography>
        {description}
      </Typography>
      <Chip
        label={
          <Typography variant="caption" color="text.dark">
            {state}
          </Typography>
        }
        className={css.proposalChip}
        variant="outlined"
        sx={{
          borderColor: colors[state],
          backgroundColor: colors[state],
        }}
      />
    </a>
  )
}

const Proposals = (props: BaseBlock) => {
  const { data: proposals } = useSafeSnapshot()

  return (
    <Container className={layoutCss.containerMedium}>
      <HeaderCTA {...props} />

      <Stack spacing={3}>
        {proposals?.map((proposal) => (
          <ProposalRow
            key={proposal.id}
            title={proposal.title}
            state={proposal.state}
            href={`${PROPOSAL_LINK_BASE_URL}${proposal.id}`}
          />
        ))}
      </Stack>
    </Container>
  )
}

export default Proposals
