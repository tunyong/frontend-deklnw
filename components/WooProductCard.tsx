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
    <article className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={product.images?.[0]?.alt || product.name}
              className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-4xl">🛒</p>
                <p className="mt-3 text-sm font-semibold">No Image</p>
              </div>
            </div>
          )}

          {product.on_sale && (
            <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              Sale
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-extrabold leading-tight text-gray-950 transition hover:text-orange-500">
            {product.name}
          </h3>
        </Link>

        {shortDescription && (
          <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-600">
            {shortDescription}
          </p>
        )}

        <div className="mt-5">
          <p className="text-2xl font-black text-orange-500">{price}</p>
        </div>

        <div className="mt-6 grid gap-3">
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            ดูราคาล่าสุด
          </a>

          <Link
            href={`/product/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-5 py-3 text-sm font-bold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
          >
            อ่านรายละเอียด
          </Link>
        </div>
      </div>
    </article>
  );
}