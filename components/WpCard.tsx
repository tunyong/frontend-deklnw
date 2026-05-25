import Link from "next/link";
import { getFeaturedImage, stripHtml, type WordPressItem } from "@/lib/wordpress";

type WpCardProps = {
  item: WordPressItem;
  href: string;
  label: string;
};

export default function WpCard({ item, href, label }: WpCardProps) {
  const image = getFeaturedImage(item);
  const title = stripHtml(item.title.rendered);
  const excerpt = stripHtml(item.excerpt?.rendered || "");

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg shadow-gray-200/60 transition hover:-translate-y-1 hover:shadow-2xl">
      <Link href={href} className="block">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="px-6 text-center">
              <p className="text-5xl">🛒</p>
              <p className="mt-3 font-black text-gray-400">DekLNW Deals</p>
            </div>
          )}

          <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
            {label}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={href}>
          <h3 className="text-xl font-black leading-tight text-gray-950 transition group-hover:text-orange-600">
            {title}
          </h3>
        </Link>

        {excerpt && (
          <p className="mt-3 line-clamp-3 text-gray-600">{excerpt}</p>
        )}

        <Link
          href={href}
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gray-950 px-5 py-3 text-center font-black text-white transition hover:bg-orange-600"
        >
          อ่านรายละเอียด
        </Link>
      </div>
    </article>
  );
}