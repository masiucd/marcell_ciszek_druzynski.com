import {Code} from "bright";
import Image from "next/image";
// import {type Metadata, type ResolvingMetadata} from "next";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

export function Mdx({content}: {content: string}) {
  return (
    <MDXRemote
      source={content}
      components={{
        pre: Code,
        MoreInfo: MoreInfo,
        Quiz: () => null,
        CodePen: () => null,
        // @ts-ignore
        // eslint-disable-next-line jsx-a11y/alt-text
        img: (props) => <Image {...props} />,
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

function MoreInfo() {
  return null;
}
