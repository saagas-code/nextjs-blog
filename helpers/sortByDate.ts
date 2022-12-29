import { Post } from "../src/domains/posts/models/post";


export function sortByDate(posts: Post[]) {
  const sortedPosts = posts.sort(
    (a, b) => a.created_at.getTime() - b.created_at.getTime())
  return sortedPosts
}