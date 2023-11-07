import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeTitleTweetsFields {
  title: EntryFieldTypes.Symbol
  cta?: EntryFieldTypes.Symbol
  tweets: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
}

export type TypeTitleTweetsSkeleton = EntrySkeletonType<TypeTitleTweetsFields, 'titleTweets'>
export type TypeTitleTweets<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  TypeTitleTweetsSkeleton,
  Modifiers,
  Locales
>
