import { ArrowRightIcon } from '@/components/svgs';
import { getPostBySlug, getAllPosts } from '@/utils/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

type BlogPostProps = {
  params: Promise<{ slug: string; locale?: string }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
  // Await params if it's a promise
  const { slug, locale = 'en' } = await params;

  // Fetch the post by slug and locale
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    // Handle post not found
    return notFound();
  }

  const { metadata, content } = post;

  return (
    <div className="flex flex-col gap-8 mt-10 px-8">
      <div className="flex flex-col gap-2">
        <Link
          href="/blog"
          className="text-sm flex items-center gap-2 hover:text-highlight"
        >
          <ArrowRightIcon className="w-6 h-6 md:h-8 md:w-8 transform rotate-180" />
        </Link>
        <div className="w-full h-80 overflow-hidden rounded-md flex items-center justify-center">
          <Image
            src={metadata.image || '/default-image.png'}
            alt={metadata.title || 'Post image'}
            className="w-full h-auto object-cover"
            width={400}
            height={200}
            priority
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
