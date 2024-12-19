import { getPostBySlug, getAllPosts } from '@/utils/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

type BlogPostProps = {
  params: { slug: string; locale: string };
};

export default async function BlogPost({ params }: BlogPostProps) {
  // Access params directly without `await`
  const { slug, locale } = await params;

  // Ensure locale has a default value
  const activeLocale = locale || 'en';

  // Fetch the post by slug and locale
  const post = await getPostBySlug(slug, activeLocale);

  if (!post) {
    // Handle post not found
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link href="/blog" className="text-blue-500 underline">
          Back to blog
        </Link>
      </div>
    );
  }

  const { metadata, content } = post;

  return (
    <div className="flex flex-col gap-8 mt-10 px-8">
      <div className="flex flex-col gap-2">
        <Link href="/blog" className="text-blue-500 underline">
          Back to blog
        </Link>
        <div className="w-full h-80 overflow-hidden rounded-md flex items-center justify-center">
          <img
            src={metadata.image || '/default-image.png'}
            alt={metadata.title || 'Post image'}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">{metadata.title}</h1>
        <p className="text-muted">{metadata.date}</p>
      </div>

      <article className="prose text-foreground">
        <MDXRemote source={content} />
      </article>
    </div>
  );
}

// Generate static params
export async function generateStaticParams() {
  const posts = await getAllPosts('en'); // Adjust locale dynamically if needed
  return posts.map((post) => ({ slug: post.slug, locale: 'en' })); // Include locale if your route structure supports it
}
