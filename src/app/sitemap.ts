import {type MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.marcellcd.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.marcellcd.com//about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.marcellcd.com//blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
