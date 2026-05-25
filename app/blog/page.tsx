import Link from "next/link";
import WpCard from "@/components/WpCard";
import { getAllPosts } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "บทความทั้งหมด | DekLNW Deals",
  description: "รวมบทความจาก WordPress หลังบ้าน",
};

export default async function BlogListPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-black text-gray-950">
            ← กลับหน้าแรก
          </Link>

          <Link
            href="/sale"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm"
          >
            ดู Sale Pages
          </Link>
        </header>

        <section className="mb-10 rounded-[2rem] bg-gradient-to-br from-gray-950 to-orange-950 px-6 py-12 text-center text-white shadow-2xl md:px-10">
          <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
            WordPress Posts
          </p>

          <h1 className="text-3xl font-black md:text-5xl">
            รวมบทความทั้งหมด
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-200">
            หน้านี้ดึงข้อมูลจาก WordPress Posts อัตโนมัติ เมื่อคุณสร้าง Post ใหม่ใน WordPress จะมาแสดงที่นี่
          </p>
        </section>

        {posts.length === 0 ? (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-black text-gray-950">
              ยังไม่พบบทความ
            </h2>
            <p className="mt-3 text-gray-600">
              กรุณาสร้าง Post ใน WordPress และตั้งสถานะเป็น Published
            </p>
          </div>
        ) : (
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <WpCard
                key={post.id}
                item={post}
                href={`/blog/${post.slug}`}
                label="Blog"
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}