import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "สินค้าทั้งหมด | DekLNW Deals",
  description: "รวมสินค้าแนะนำจาก Shopee และ TikTok Shop",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับหน้าแรก
          </Link>

          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
            {products.length} สินค้า
          </span>
        </header>

        <section className="mb-10 rounded-[2rem] bg-gradient-to-br from-gray-950 to-teal-950 px-6 py-12 text-center text-white shadow-2xl md:px-10">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-teal-100">
            Product Collection
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            รวมสินค้าแนะนำ
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-200">
            คัดสินค้าโปรดี ของน่าใช้ เหมาะสำหรับทำ Sale Page และ Affiliate Content
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}