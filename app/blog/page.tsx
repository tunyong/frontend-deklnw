import Link from "next/link";
import WpCard from "@/components/WpCard";
import { getAllPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "บทความและไอเดียน่าอ่าน | DekLNW Deals",
  description:
    "รวมบทความ ไอเดีย และคำแนะนำเกี่ยวกับสินค้า การเลือกซื้อ และดีลน่าสนใจ",
};

export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#f6f7f8] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับไปหน้าแรก
          </Link>

          <Link
            href="/products"
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
          >
            ดูสินค้าแนะนำ
          </Link>
        </header>

        <section className="mb-10 rounded-[32px] border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-orange-500">
            Articles & Guides
          </p>

          <h1 className="text-3xl font-black text-gray-950 md:text-5xl">
            บทความและไอเดียน่าอ่าน
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            รวมไอเดีย คำแนะนำ และเรื่องน่ารู้ที่จะช่วยให้คุณเลือกสินค้าได้ง่ายขึ้น
            เหมาะสำหรับคนที่อยากเปรียบเทียบก่อนตัดสินใจซื้อ
          </p>
        </section>

        {posts.length === 0 ? (
          <div className="rounded-[28px] border border-gray-100 bg-white p-10 text-center shadow-sm">
            <h2 className="text-2xl font-black text-gray-950">
              ยังไม่มีบทความในตอนนี้
            </h2>
            <p className="mt-3 text-gray-600">
              โปรดกลับมาเยี่ยมชมอีกครั้ง เรากำลังเตรียมเนื้อหาดี ๆ สำหรับคุณ
            </p>
          </div>
        ) : (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <WpCard
                key={post.id}
                item={post}
                href={`/blog/${post.slug}`}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}