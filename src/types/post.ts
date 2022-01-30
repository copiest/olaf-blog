export interface Slug {
  year: string
  subject: string
  title: string
}

export interface FrontMatter {
  title: string
  tags: string[]
  published: boolean
  date: string
  summary: string
  thumbnailImg?: string
  content: string
}

export interface Post {
  frontMatter: FrontMatter
  slug: Slug
  path: string
}
