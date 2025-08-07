import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTagFields {
  name: EntryFieldTypes.Symbol<
    | 'Account Abstraction'
    | 'Community Update'
    | 'ERC-4337'
    | 'Ecosystem'
    | 'Events'
    | 'Grants'
    | 'Institutional'
    | 'Internal'
    | 'NFT'
    | 'New Feature'
    | 'Press'
    | 'Safe Research'
    | 'Safe'
    | 'Safe{Core}'
    | 'Safe{DAO}'
    | 'Safe{Wallet}'
    | 'Security'
    | 'Self-custody'
    | 'Use Case'
  >
  description?: EntryFieldTypes.Text
}

export type TypeTagSkeleton = EntrySkeletonType<TypeTagFields, 'tag'>
export type TypeTag<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeTagSkeleton,
  Modifiers,
  Locales
>
