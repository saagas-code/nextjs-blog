import { Text } from "thon-ui";
import { format } from 'date-fns';
import Markdown from "../../../../shared/components/markdown";
import { Post } from "../../models/post";
import { PostDetail } from "../../models/post-detail";


type Props = {
  post: PostDetail
  headerComplement?: React.ReactNode
}

export default function PostDetailComponent({post}: Props) {
  return (
    <>
      <Text variant="sm" className="text-gray-500">
        {format(post?.created_at as Date, 'dd.MM.yyyy')} - Última Postagem...
      </Text>
      <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-12">
        {post.title}
      </Text>

      <section className="w-full lg:w-[50rem]">
        <Markdown value={post.body} />
      </section>

    </>
  )
}