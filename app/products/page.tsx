import Link from "next/link";
import WooProductCard from "@/components/WooProductCard";
import { getWooProducts } from "@/lib/woocommerce";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "สินค้าทั้งหมด | DekLNW Deals",
  description: "รวมสินค้าแนะนำจาก WooCommerce, Shopee Affiliate และ TikTok Shop",
};

export default async function ProductsPage() {
  const products = await getWooProducts();

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
            WooCommerce Products
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            รวมสินค้าแนะนำ
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-200">
            สินค้าหน้านี้ดึงจาก WooCommerce หลังบ้านอัตโนมัติ เมื่อเพิ่มสินค้าใหม่ใน WordPress จะมาแสดงที่นี่
          </p>
        </section>

        {products.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-black text-gray-950">
              ยังไม่พบสินค้า
            </h2>
            <p className="mt-3 text-gray-600">
              กรุณาเพิ่มสินค้าใน WooCommerce และตั้งสถานะ Published
            </p>
          </div>
        ) : (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <WooProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}