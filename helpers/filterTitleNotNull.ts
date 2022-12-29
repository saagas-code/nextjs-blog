import { Post } from "../src/domains/posts/models/post";



export function filterTitleNotNull(posts: Post[]) {
  const filteredPosts = posts.filter((post) => !post['parent_id'])
  return filteredPosts
}