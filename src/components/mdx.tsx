import {Code} from "bright";
import Image from "next/image";
// import {type Metadata, type ResolvingMetadata} from "next";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

import {MoreInfo} from "./mdx/more-info";
import {Quiz} from "./mdx/quiz";

export function Mdx({content}: {content: string}) {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: Code,
        MoreInfo,
        Quiz,
        Image,
      }}
      // options={{rehypePlugins: [require("rehype-slug")]}}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  );
}
