import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTweetsFields {
  title: EntryFieldTypes.Symbol
  cta?: EntryFieldTypes.Symbol
  tweets: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeTweetsSkeleton = EntrySkeletonType<TypeTweetsFields, 'tweets'>
export type TypeTweets<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTweetsSkeleton,
  Modifiers,
  Locales
>
