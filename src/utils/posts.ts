import fs from 'fs'
import path from 'path'

import glob from 'glob'
import memoize from 'memoizee'
import { bundleMDX } from 'mdx-bundler'

import { Post, Slug } from '#types/post'

const POST_DIRECTORY = path.join(process.cwd(), 'posts')

async function retreiveAllPosts(): Promise<Post[]> {
  const files: string[] = glob.sync(`${POST_DIRECTORY}/**/**/*.mdx`)
  const publishedPosts: Post[] = []

  for await (const f of files) {
    const source = await fs.promises.readFile(f, { encoding: 'utf-8' })
    const slugs = f
      .replace(`${POST_DIRECTORY}/`, '')
      .replace(/\.mdx?$/, '')
      .split('/')
    const {
      matter: { data, content },
    } = await bundleMDX({
      source,
    })

    if (data.published) {
      publishedPosts.push({
        frontMatter: {
          title: data.title,
          tags: data.tags,
          published: data.published,
          date: data.date,
          description: data.description,
          thumbnailImg: data.thumbnailImg,
          content,
        },
        slug: {
          year: slugs[0],
          subject: slugs[1],
          title: slugs[2],
        } as Slug,
        path: f,
      })
    }
  }

  return publishedPosts.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllPosts: () => Promise<Post[]> = memoize(retreiveAllPosts)

export async function getPost(slug: Slug): Promise<{ post: Post; code: string }> {
  const { year, subject, title } = slug
  const POST_PATH = `${POST_DIRECTORY}/${year}/${subject}/${title}`

  const source = fs.readFileSync(path.join(`${POST_PATH}.mdx`), { encoding: 'utf-8' })

  const {
    matter: { data, content },
    code,
  } = await bundleMDX({
    source,
    cwd: POST_PATH,
  })

  return {
    post: {
      frontMatter: {
        title: data.title,
        tags: data.tags,
        published: data.published,
        date: data.date,
        description: data.description,
        thumbnailImg: data.thumbnailImg,
        content,
      },
      slug,
      path: POST_PATH,
    },
    code,
  }
}
