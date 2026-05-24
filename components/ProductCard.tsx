import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-lg shadow-gray-200/60 transition hover:-translate-y-1 hover:shadow-2xl">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
            {product.badge}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-xl font-black leading-tight text-gray-950 transition group-hover:text-orange-600">
            {product.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-gray-600">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-end gap-3">
          <p className="text-2xl font-black text-orange-600">{product.price}</p>

          {product.oldPrice && (
            <p className="pb-1 text-sm text-gray-400 line-through">
              {product.oldPrice}
            </p>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <a
            href={product.shopeeUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-5 py-3 text-center font-black text-white transition hover:bg-orange-600"
          >
            ดูราคาที่ Shopee
          </a>

          <Link
            href={`/product/${product.slug}`}
            className="rounded-full border border-gray-200 px-5 py-3 text-center font-bold text-gray-800 transition hover:bg-gray-50"
          >
            อ่านรายละเอียด
          </Link>
        </div>
      </div>
    </div>
  );
}