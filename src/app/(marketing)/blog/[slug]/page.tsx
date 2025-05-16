import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostData, PostData } from '@/lib/blog';
import { useMDXComponents } from '@/components/common/CustomMDXComponents'; // Import the hook

// Use the actual function to get a single post
async function getPost(slug: string): Promise<PostData | null> {
  console.log(`Fetching post content for slug: ${slug} using getPostData...`);
  const post = await getPostData(slug);
  return post;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  return {
    title: post.title,
    description: post.summary || 'A Clavis blog post.',
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      // authors: ['Kartik Iyer'], // Add if author info is available
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-invert lg:prose-xl mx-auto py-12 px-4">
      {/* prose-invert for dark mode, adjust prose classes as per styling needs */}
      <header className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-3 bg-clip-text text-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3">
          {post.title}
        </h1>
        <p className="text-text-secondary text-sm">
          Published on {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </header>
      
      {/* MDX Content Rendering */}
      <div className="markdown-content">
         <MDXRemote source={post.content} components={useMDXComponents({})} />
      </div>
    </article>
  );
}
