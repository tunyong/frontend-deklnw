import Link from "next/link";
import {
  getFeaturedImage,
  stripHtml,
  type WordPressItem,
} from "@/lib/wordpress";

type WpCardProps = {
  item: WordPressItem;
  href: string;
  label?: string;
};

export default function WpCard({ item, href }: WpCardProps) {
  const image = getFeaturedImage(item);
  const title = stripHtml(item.title.rendered);
  const excerpt = stripHtml(item.excerpt?.rendered || "");

  return (
    <article className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-4xl">🛒</p>
                <p className="mt-3 text-sm font-semibold">DekLNW Deals</p>
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={href}>
          <h3 className="text-xl font-extrabold leading-tight text-gray-950 transition hover:text-orange-500">
            {title}
          </h3>
        </Link>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
            {excerpt}
          </p>
        )}

        <div className="mt-6">
          <Link
            href={href}
            className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
          >
            อ่านรายละเอียด
          </Link>
        </div>
      </div>
    </article>
  );
}