import Link from "next/link";
import WpCard from "@/components/WpCard";
import { getAllPages } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sale Pages ทั้งหมด | DekLNW Deals",
  description: "รวมหน้า Sale Page จาก WordPress หลังบ้าน",
};

export default async function SaleListPage() {
  const allPages = await getAllPages();

  const excludedSlugs = new Set([
    "my-account",
    "checkout",
    "cart",
    "shop",
    "privacy-policy",
    "sample-page",
    "terms-and-conditions",
  ]);

  const pages = allPages.filter((page) => !excludedSlugs.has(page.slug));

  return (
    <main className="min-h-screen bg-[#f6f7f8] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับไปหน้าแรก
          </Link>

          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700">
            {pages.length} หน้า
          </span>
        </header>

        <section className="mb-10 rounded-[32px] border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
          <h1 className="text-3xl font-black text-gray-950 md:text-5xl">
            รวม Sale Page ทั้งหมด
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            หน้านี้ดึงข้อมูลจาก WordPress โดยอัตโนมัติ เมื่อคุณสร้าง Page ใหม่และ Publish
            ใน WordPress หน้าจะมาแสดงที่นี่ทันที
          </p>
        </section>

        {pages.length === 0 ? (
          <div className="rounded-[28px] border border-gray-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">
              ยังไม่พบ Sale Page
            </h2>
            <p className="mt-3 text-gray-600">
              กรุณาสร้าง Page ใน WordPress และตั้งสถานะเป็น Published
            </p>
          </div>
        ) : (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <WpCard
                key={page.id}
                item={page}
                href={`/sale/${page.slug}`}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}