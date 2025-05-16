import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Adjusted path assuming 'content/blog' is directly under 'src'
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  content: string; // Raw MDX content
  // Add any other frontmatter fields you expect
  author?: string;
  tags?: string[];
}

export function getSortedPostsData(): Omit<PostData, 'content'>[] {
  // Get file names under /src/content/blog
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.warn(`Could not read blog posts directory: ${postsDirectory}`, error);
    return [];
  }
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".mdx" or ".md" from file name to get id
      const slug = fileName.replace(/\.(mdx|md)$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        slug,
        title: matterResult.data.title || 'Untitled Post',
        date: matterResult.data.date || new Date().toISOString(),
        summary: matterResult.data.summary || '',
        author: matterResult.data.author || '',
        tags: matterResult.data.tags || [],
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs(): { slug: string }[] {
  let fileNames: string[] = [];
  try {
    fileNames = fs.readdirSync(postsDirectory);
  } catch (error) {
    console.warn(`Could not read blog posts directory for slugs: ${postsDirectory}`, error);
    return [];
  }
  
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.(mdx|md)$/, ''),
      };
    });
}

export async function getPostData(slug: string): Promise<PostData | null> {
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  
  let fullPath = '';
  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  } else {
    console.warn(`Blog post not found for slug: ${slug} at ${mdxPath} or ${mdPath}`);
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // The content for MDXRemote is matterResult.content
  return {
    slug,
    title: matterResult.data.title || 'Untitled Post',
    date: matterResult.data.date || new Date().toISOString(),
    summary: matterResult.data.summary || '',
    author: matterResult.data.author || '',
    tags: matterResult.data.tags || [],
    content: matterResult.content,
  };
}

console.log('Blog library initialized. Posts directory:', postsDirectory);
