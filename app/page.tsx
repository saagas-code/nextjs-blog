import { Text } from "thon-ui";
import { sortByDate } from "../helpers/sortByDate";
import { Post } from "../src/domains/posts/models/post";
import { transformToDate } from './../helpers/transformToDate';
import { filterTitleNotNull } from './../helpers/filterTitleNotNull';
import {format} from 'date-fns'
import '../styles/globals.css'
import Markdown from './../src/shared/components/markdown/index';
import Link from "next/link";
import { PostDetail } from "../src/domains/posts/models/post-detail";

const postsEndPoint = '/contents/guscsales';

async function  getLastPost() {
  const postsResponse = await fetch(`
    ${process.env.BLOG_PROVIDER_BASE_API}${postsEndPoint}`
  );
  let posts = await postsResponse.json() as Post[];

  posts = filterTitleNotNull(posts)
  posts = transformToDate(posts)
  posts = sortByDate(posts)

  const [lastPostFromList] = posts;

  const lastPostResponse = await fetch(`${process.env.BLOG_PROVIDER_BASE_API}${postsEndPoint}/${lastPostFromList.slug}`)
  const lastPost = (await lastPostResponse.json()) as PostDetail;
  if(lastPost) {
    return {...lastPost, created_at: new Date(lastPost.created_at)}
  }

  return lastPost;
}

export default async function Home() {
  const lastPost = await getLastPost() as any;
  if(!lastPost) {
    return null;
  }

  return (
    <article className="w-full lg:w-[50rem]">
      <Text variant="sm" className="text-gray-500">
        {format(lastPost?.created_at as Date, 'dd.MM.yyyy')} - Última Postagem...
      </Text>
      <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-12">
        {lastPost.title}
      </Text>

      <div 
        className={`relative 
          before:content-[''] before:w-full before:h-[6rem]
          before:absolute before:bottom-0 before:left-0
          before:bg-linear-bottom-white
        `}
      >
        <Markdown value={lastPost.body} className="h-[59vh] overflow-hidden mb-6" />
      </div>

      <div className="flex items-center justify-end my-9 mb-7">
        <Link href="/blog" >
          <Text variant="xs" className="py-2 px-3 text-blue-400 hover:text-blue-600 transition-=all duration-200 ease-in-out">
            Ver Outros Posts
          </Text>
        </Link>
        <Link href={`/blog/${lastPost.slug}`} >
          <Text variant="xs" className="py-2 px-3 bg-gray-100 hover:bg-gray-200 transition-=all duration-200 ease-in-out rounded font-bold">
            Continuar Lendo
          </Text>
        </Link>
      </div>
    </article>
  )
}