import Link from 'next/link';

export type BlogCardProps = {
  slug: string;
  title: string;
  date?: string;
  excerpt: string;
};

export default function BlogCard({
  slug,
  title,
  date,
  excerpt,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-background2 p-4 rounded-md hover:bg-background hover:text-accent"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 py-4">
        {/* Blog Info */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-base">{excerpt}</p>
        </div>

        {/* Blog Date */}
        <div className="flex justify-end md:justify-start">
          <p className="text-sm italic">{date}</p>
        </div>
      </div>
    </Link>
  );
}
