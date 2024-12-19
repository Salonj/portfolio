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
    <Link href={`/blog/${slug}`} className="">
      <div className="flex flex-col hover:text-3xl md:flex-row md:justify-between md:items-center py-4 gap-4 ">
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-base md:text-lg">{title}</h2>
          <p className="text-sm">{excerpt}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-xs">{date}</p>
        </div>
      </div>
    </Link>
  );
}
