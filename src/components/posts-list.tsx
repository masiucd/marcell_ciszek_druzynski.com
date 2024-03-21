import {formatDate} from "@/lib/date-format";
import {getAllPostData} from "@/lib/db";

import {LinkMCD} from "./link";

type Props = {
  posts: ReturnType<typeof getAllPostData>;
};

export function PostsList({posts}: Props) {
  return (
    <ul className="mb-10 flex flex-col gap-4">
      {posts.map((post) => (
        <li key={post.slug} className="flex flex-col gap-1 ">
          <LinkMCD
            href={`/blog/${post.slug}`}
            className="no-underline hover:text-primary-500 hover:opacity-90 dark:text-gray-400 dark:hover:text-primary-300"
          >
            {post.title}
          </LinkMCD>
          <span className="opacity-75">
            {formatDate(post.date, "MMMM dd, yyyy")}
          </span>
        </li>
      ))}
    </ul>
  );
}
