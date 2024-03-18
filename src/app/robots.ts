import {type MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // rules: {
    //   userAgent: "*",
    //   allow: "/",
    //   disallow: "/private/",
    // },
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: "/private/",
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: "https://www.marcellcd.com/sitemap.xml",
  };
}
