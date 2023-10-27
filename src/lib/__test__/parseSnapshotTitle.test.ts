import { parseSnapshotTitle } from '@/lib/parseSnapshotTitle'

const realTitles = [
  'SEP #1: SafeDAO Participation Agreement',
  '[SEP #2] Community Initiative To Unpause Token Contract (Enabling Transferability)',
  ' [SEP #3] Towards clarity on milestones before voting on enabling transferability again',
  ' [SEP #4] SafeDAO Constitution',
  '[SEP #5] Redistributing Unredeemed Tokens From User Airdrop Allocation',
  '# [SEP #6] Safe Grants Program (SGP)',
]

const badTitles = [
  'SEP 6 Safe Grants Program (SGP)', // missing # before the number
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
  })

  it('returns 0 and the original title if the both groups are not present in the title', () => {
    expect(parseSnapshotTitle(badTitles[0])).toEqual(['0', badTitles[0]])
    expect(parseSnapshotTitle(badTitles[1])).toEqual(['0', badTitles[1]])
  })
})
