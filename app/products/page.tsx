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
    <main className="min-h-screen bg-[#f6f7f8] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับหน้าแรก
          </Link>

          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
            {products.length} สินค้า
          </span>
        </header>

        <section className="mb-10 rounded-[32px] border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
          <h1 className="text-3xl font-black text-gray-950 md:text-5xl">
            รวมสินค้าแนะนำ
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            สินค้าหน้านี้ดึงจาก WooCommerce หลังบ้านอัตโนมัติ เมื่อเพิ่มสินค้าใหม่ใน
            WordPress จะมาแสดงที่นี่
          </p>
        </section>

        {products.length === 0 ? (
          <div className="rounded-[28px] border border-gray-100 bg-white p-10 text-center shadow-sm">
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