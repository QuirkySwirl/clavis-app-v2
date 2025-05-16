import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog'; // Use the actual function

// Updated Post interface to match getSortedPostsData return type
interface Post extends Omit<Awaited<ReturnType<typeof getSortedPostsData>>[0], 'content'> {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

// Use the actual function to get posts
async function getPosts(): Promise<Post[]> {
  console.log("Fetching posts for blog listing page using getSortedPostsData...");
  const posts = getSortedPostsData();
  // Ensure the returned type matches the Post interface
  return posts.map(post => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    summary: post.summary,
    // author and tags can be added if needed by the listing page
  }));
}

export const metadata = {
  title: 'Blog',
  description: 'Insights, articles, and updates from the Clavis team.',
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold font-heading mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
        Clavis Insights
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-text-secondary">No blog posts found. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="block p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-card/70 backdrop-blur-sm border border-border data-[spotlight-hover=true]"
              data-spotlight-hover="true" // For interactive spotlight effect
            >
              <h2 className="text-2xl font-semibold font-heading mb-2 text-primary group-hover:text-accent-2">
                {post.title}
              </h2>
              <p className="text-sm text-text-tertiary mb-3">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-text-secondary text-base line-clamp-3">
                {post.summary || 'Read more...'}
              </p>
              <div className="mt-4 text-sm font-medium text-accent-2 hover:text-accent-1 group-hover:underline">
                Read Post &rarr;
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
