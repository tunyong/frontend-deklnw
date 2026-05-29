import Link from "next/link";
import {
  formatWooPrice,
  getWooProductImage,
  getWooProductLink,
  stripHtml,
  type WooProduct,
} from "@/lib/woocommerce";

export default function WooProductCard({ product }: { product: WooProduct }) {
  const image = getWooProductImage(product);
  const price = formatWooPrice(product);
  const affiliateUrl = getWooProductLink(product);
  const shortDescription = stripHtml(product.short_description || "");

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg shadow-gray-200/60 transition hover:-translate-y-1 hover:shadow-2xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={product.images?.[0]?.alt || product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-center">
              <p className="text-5xl">🛒</p>
              <p className="mt-3 font-black text-gray-400">No Image</p>
            </div>
          )}

          {product.on_sale && (
            <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
              Sale
            </div>
          )}

          {!product.is_in_stock && (
            <div className="absolute right-4 top-4 rounded-full bg-gray-950 px-4 py-2 text-sm font-black text-white shadow-lg">
              หมด
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-black leading-tight text-gray-950 transition group-hover:text-orange-600">
            {product.name}
          </h3>
        </Link>

        {shortDescription && (
          <p className="mt-3 line-clamp-3 text-gray-600">{shortDescription}</p>
        )}

        <div className="mt-5">
          <p className="text-2xl font-black text-orange-600">{price}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-5 py-3 text-center font-black text-white transition hover:bg-orange-600"
          >
            ดูราคาล่าสุด
          </a>

          <Link
            href={`/product/${product.slug}`}
            className="rounded-full border border-gray-200 px-5 py-3 text-center font-bold text-gray-800 transition hover:bg-gray-50"
          >
            อ่านรายละเอียด
          </Link>
        </div>
      </div>
    </article>
  );
}