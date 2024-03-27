import {type Metadata} from "next";

import {PageWrapper} from "@/components/page-wrapper";
import {Tooltip} from "@/components/tooltip";
import {H1, P} from "@/components/typography";
import {socialItems} from "@/lib/config";
import siteData from "@/lib/config/site-data";

export const metadata: Metadata = {
  title: `${siteData.title} | About`,
  description: "About me and my personal website and blog.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <H1 className="my-10">About me</H1>
      <article className="prose">
        <P>
          Hi, I&apos;m Marcell Ciszek Druzynski, a software developer based in
          Gothenburg, Sweden. I&apos;m passionate about software development,
          JavaScript, React and other computer science topics.
        </P>
        <P>
          I created this website to share my thoughts and ideas about software
          development, JavaScript, React and other computer science topics. I
          write about things I learn, things I find interesting and things I
          think are important.
        </P>
        <P>
          I&apos;m a big fan of open source and I try to contribute to open
          source projects when I can. I also have a few open source projects of
          my own that I maintain.
        </P>
        <P>
          Aside from coding and writing, I&apos;m also a big fan of running. I
          do run in some competitions but just for myself and for fun. Other
          from running I like to hang out with friends, travel and read books.
        </P>
        <P>If you want to get in touch with me, you can find me on: </P>
        <ul className="flex list-none gap-5 p-0 sm:w-20 ">
          {socialItems.map((item) => (
            <li key={item.href}>
              <Tooltip content={<p className="text-sm">{item.name}</p>}>
                <a
                  href={item.href}
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  <item.icon className="size-6 text-gray-600/80  hover:text-primary-500 dark:text-gray-400/80 dark:hover:text-primary-400" />
                </a>
              </Tooltip>
            </li>
          ))}
        </ul>
      </article>
    </PageWrapper>
  );
}
