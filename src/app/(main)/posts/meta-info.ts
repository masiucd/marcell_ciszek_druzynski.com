export function getMetaDataFromBlogPosts() {
	let blogPostsDirNames = ["dx", "post-foo"];

	// get the metadata from each blog post by importing the metadata from each post
	let blogPostsMetaData = blogPostsDirNames.map((dirName) => {
		let {metadata} = require(`./${dirName}/page.mdx`);

		return metadata;
	});

	return blogPostsMetaData;
}
