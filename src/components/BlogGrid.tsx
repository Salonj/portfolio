import { getAllPosts, PostMetadata } from '@/utils/blog';
import BlogCard from '@/components/BlogCard';
import { useLocale } from 'next-intl';
import React from 'react';

interface BlogGridProps {
  limit?: number;
  showBorders?: boolean;
}

export default function BlogGrid({ limit, showBorders = true }: BlogGridProps) {
  const locale = useLocale();
  const posts: PostMetadata[] = getAllPosts(locale);

  const limitedPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <div
      className={`flex flex-col ${
        showBorders ? 'border-4 border-foreground rounded-md' : 'gap-2'
      }`}
    >
      {limitedPosts.map((post, index) => (
        <React.Fragment key={post.slug}>
          <BlogCard
            slug={post.slug}
            title={post.title}
            date={post.formattedDate}
            excerpt={post.excerpt}
          />
          {/* Add line only if there is another post after */}
          {index < limitedPosts.length - 1 && showBorders && (
            <hr className="w-full border-foreground border-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
