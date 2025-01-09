import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { formatDate, normalizeLocale } from '@/utils/misc';

const contentDirectory = path.join(process.cwd(), 'content');

// Define the metadata type
export type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  formattedDate?: string;
};

export type PostData = {
  metadata: PostMetadata;
  content: string;
};

// Fetch all posts
export function getAllPosts(locale: string): PostMetadata[] {
  const normalizedLocale = normalizeLocale(locale);
  const files = fs.readdirSync(contentDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(contentDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    // Validate metadata
    if (!data.title || !data.date) {
      throw new Error(
        `Missing "title" or "date" in the frontmatter of ${fileName}. Ensure the file has the required fields.`
      );
    }

    return {
      slug,
      title: data.title,
      date: data.date, // Keep the raw date for sorting
      formattedDate: formatDate(data.date, normalizedLocale), // Use formatted date for display
      excerpt: data.excerpt || '',
      image: data.image || '',
    };
  });

  // Sort posts by date (most recent first)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
// Fetch a single post by slug
export function getPostBySlug(slug: string, locale: string): PostData | null {
  const normalizedLocale = normalizeLocale(locale);
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null; // Return null if file does not exist
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  if (!data.title || !data.date) {
    throw new Error(
      `Missing "title" or "date" in the frontmatter of ${slug}.mdx.`
    );
  }

  return {
    metadata: {
      slug,
      title: data.title,
      date: formatDate(data.date, normalizedLocale), // Format the date
      excerpt: data.excerpt || '',
      image: data.image || '',
    },
    content,
  };
}
