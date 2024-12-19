import { getAllPosts, PostMetadata } from '@/utils/blog';
import BlogCard from '@/components/BlogCard';
import { useLocale } from 'next-intl';
import React from 'react';

export default function BlogGrid({ limit }: { limit?: number }) {
  const locale = useLocale();
  const posts: PostMetadata[] = getAllPosts(locale);

  const limitedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div className="flex flex-col">
      <div className="snes-container p-0 bg-foreground text-background">
        {limitedPosts.map((post, index) => (
          <React.Fragment key={post.slug}>
            <BlogCard
              slug={post.slug}
              title={post.title}
              date={post.formattedDate}
              excerpt={post.excerpt}
            />
            {/* Add line only if there is another post after */}
            {index < limitedPosts.length - 1 && (
              <hr className="w-[calc(100%+28px)] -mx-4 border-primary border-2 !mb-0" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
