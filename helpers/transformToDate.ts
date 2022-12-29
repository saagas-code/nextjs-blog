import { Post } from "../src/domains/posts/models/post";


export function transformToDate(posts: Post[]) {
  const transformedPosts = posts.map(post => ({
    ...post,
    created_at: new Date(post.created_at),
  }))
  return transformedPosts
}