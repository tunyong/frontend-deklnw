import Link from "next/link";
import WpCard from "@/components/WpCard";
import { getAllPages } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Sale Pages ทั้งหมด | DekLNW Deals",
  description: "รวมหน้า Sale Page จาก WordPress หลังบ้าน",
};

export default async function SaleListPage() {
  const pages = await getAllPages();

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับหน้าแรก
          </Link>

          <Link
            href="/blog"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm"
          >
            ดูบทความ
          </Link>
        </header>

        <section className="mb-10 rounded-[2rem] bg-gradient-to-br from-gray-950 to-teal-950 px-6 py-12 text-center text-white shadow-2xl md:px-10">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-teal-100">
            WordPress Pages
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            รวม Sale Page ทั้งหมด
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-200">
            หน้านี้ดึงข้อมูลจาก WordPress Pages อัตโนมัติ เมื่อคุณสร้าง Page ใหม่ใน WordPress จะมาแสดงที่นี่
          </p>
        </section>

        {pages.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
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
                label="Sale Page"
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}