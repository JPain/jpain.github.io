export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	// Default post type - can be overridden in individual posts
	"type": "quick",
	// Define available post types for content creators
	postTypes: {
		article: {
			label: "Article",
			emoji: "📄",
			description: "Long-form, in-depth content"
		},
		quick: {
			label: "Quick Post",
			emoji: "⚡",
			description: "Short thoughts, updates, or observations"
		},
		link: {
			label: "Link Share",
			emoji: "🔗",
			description: "Shared links with commentary"
		},
		project: {
			label: "Project",
			emoji: "🚀",
			description: "Project showcases or updates"
		}
	}
};
