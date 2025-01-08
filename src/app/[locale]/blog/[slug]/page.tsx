import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getPostBySlug, getAllPosts } from '@/utils/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '@/components/ui/Container';

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
    <Container className="flex flex-col gap-8 my-10">
      <div className="flex flex-col gap-4">
        <Link
          href="/blog"
          className="text-sm flex items-center gap-2 hover:text-highlight"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-3xl" />
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
        <h1 className="text-5xl font-bold mb-1">{metadata.title}</h1>
        <p className="text-lg text-muted">{metadata.date}</p>
      </div>

      <article className="prose prose-xl prose-img:rounded-lg text-foreground">
        <MDXRemote source={content} />
      </article>
    </Container>
  );
}

// Generate static params
export async function generateStaticParams() {
  const posts = await getAllPosts('en'); // Adjust locale dynamically if needed
  return posts.map((post) => ({ slug: post.slug, locale: 'en' })); // Include locale if your route structure supports it
}
