import { sortByDate } from "../../../helpers/sortByDate";
import PostDetail from "../../../src/domains/posts/components/post-detail";
import { Post } from './../../../src/domains/posts/models/post';


type Props = {
  params: {
    slug: string;
  }
}

export default function BlogPostDetailsPage({params}: Props) {
  const {slug} = params;

  return (
    <>
      <PostDetail post={{
          slug: 'any-slug2',
          title: 'Uma2 boa maneira de organizar suas branches',
          created_at: new Date(2022, 10, 24)
        }} 
      />
    </>
  )
}