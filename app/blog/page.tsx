import {Text} from 'thon-ui';
import PostsListItem from '../../src/domains/posts/components/posts-list-item';

export default function BlogPage() {
  return (
    <article>
      <header>
        <Text variant="3xl lg:4xl" as="h1" className="mb-7 lg:mb-12">
          Blog
        </Text>
      </header>

      <ul aria-label='Posts' className="grid gap-6 w-full lg:w-[41.375rem]">
        <li>
          <PostsListItem 
            post={{
              slug: 'any-slug',
              title: 'Uma boa maneira de organizar suas branches',
              created_at: new Date(2022, 10, 24)
            }}
            isLarge
            headerComplement=" - Última Postagem..."
          />
        </li>

        <li>
        <PostsListItem 
            post={{
              slug: 'any-slug2',
              title: 'Uma2 boa maneira de organizar suas branches',
              created_at: new Date(2022, 10, 24)
            }}
          />
        </li>

        <li>
          <PostsListItem 
            post={{
              slug: 'any-slug 3',
              title: 'Uma boa maneira de organizar suas branches',
              created_at: new Date(2022, 10, 24)
            }}
          />
        </li>
      </ul>
    </article>
  )
}