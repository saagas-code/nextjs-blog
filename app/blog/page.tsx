import {Text} from 'thon-ui';
import PostsListItem from '../../src/domains/posts/components/posts-list-item';
import { Post } from '../../src/domains/posts/models/post';
import { sortByDate } from './../../helpers/sortByDate';
import { filterTitleNotNull } from './../../helpers/filterTitleNotNull';
import { transformToDate } from './../../helpers/transformToDate';

const postsEndPoint = '/contents/guscsales';

async function fetchPosts() {
  const postsResponse = await fetch(
    `${process.env.BLOG_PROVIDER_BASE_API}${postsEndPoint}`
  )
  let posts = (await postsResponse.json()) as Post[];
  
  posts = filterTitleNotNull(posts)
  posts = transformToDate(posts)
  posts = sortByDate(posts)
  return posts ? posts : [];
}

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <article>
      <header>
        <Text variant="3xl lg:4xl" as="h1" className="mb-7 lg:mb-12">
          Blog
        </Text>
      </header>

      {posts.length > 0 && 
        <ul aria-label='Posts' className="grid gap-6 w-full lg:w-[41.375rem]">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <PostsListItem 
                post={post}
                isLarge={index === 0}
                headerComplement={index === 0 ? " - Última Postagem..." : undefined}
              />
            </li>
          ))}
        </ul>
      }
      {posts.length === 0 && (
        <Text variant="xl">
          Nenhum post encontrado
        </Text>
      )}
    </article>
  )
}