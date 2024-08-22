import { parseSnapshotTitle } from '@/lib/parseSnapshotTitle'

const realTitles = [
  'SEP #1: SafeDAO Participation Agreement',
  '[SEP #2] Community Initiative To Unpause Token Contract (Enabling Transferability)',
  ' [SEP #3] Towards clarity on milestones before voting on enabling transferability again',
  ' [SEP #4] SafeDAO Constitution',
  '[SEP #5] Redistributing Unredeemed Tokens From User Airdrop Allocation',
  '# [SEP #6] Safe Grants Program (SGP)',
  '[SEP #20] [OBRA] Formalizing the Guardian Role onchain with Hats Protocol - Hats Protocol',
  '[SEP 36]: [OBRA, Strategy 3] - Simulations/Demos and Tidbits for All Safe Use Cases',
  '[SEP 41] [OBRA] Safe Ecosystem Roundups and Highlights by FinOps3',
  '[SEP 43][OBRA] ZK Email Account Recovery - ZK Email',
]

const badTitles = [
  'SEP Safe Grants Program (SGP)', // missing number
]

describe('parseSnapshotTitle', () => {
  it('returns SEP number and description in a well formattted title', () => {
    expect(parseSnapshotTitle(realTitles[0])).toEqual(['1', 'SafeDAO Participation Agreement'])
    expect(parseSnapshotTitle(realTitles[1])).toEqual([
      '2',
      'Community Initiative To Unpause Token Contract (Enabling Transferability)',
    ])
    expect(parseSnapshotTitle(realTitles[2])).toEqual([
      '3',
      'Towards clarity on milestones before voting on enabling transferability again',
    ])
    expect(parseSnapshotTitle(realTitles[3])).toEqual(['4', 'SafeDAO Constitution'])
    expect(parseSnapshotTitle(realTitles[4])).toEqual([
      '5',
      'Redistributing Unredeemed Tokens From User Airdrop Allocation',
    ])
    expect(parseSnapshotTitle(realTitles[5])).toEqual(['6', 'Safe Grants Program (SGP)'])
    expect(parseSnapshotTitle(realTitles[6])).toEqual([
      '20',
      '[OBRA] Formalizing the Guardian Role onchain with Hats Protocol - Hats Protocol',
    ])
    expect(parseSnapshotTitle(realTitles[7])).toEqual([
      '36',
      '[OBRA, Strategy 3] - Simulations/Demos and Tidbits for All Safe Use Cases',
    ])
    expect(parseSnapshotTitle(realTitles[8])).toEqual([
      '41',
      '[OBRA] Safe Ecosystem Roundups and Highlights by FinOps3',
    ])
    expect(parseSnapshotTitle(realTitles[9])).toEqual(['43', '[OBRA] ZK Email Account Recovery - ZK Email'])
  })

  it('returns 0 and the original title if the both groups are not present in the title', () => {
    expect(parseSnapshotTitle(badTitles[0])).toEqual(['0', badTitles[0]])
  })
})
