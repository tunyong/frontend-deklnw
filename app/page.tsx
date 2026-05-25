import Link from "next/link";
import { getPageById } from "@/lib/wordpress";

const PAGE_ID = "6";

export const dynamic = "force-dynamic";

export default async function SalePage() {
  const wpData = await getPageById(PAGE_ID);

  const shopeeLink = "https://s.shopee.co.th/4qBE3Td8JE";

  const headlineTitle =
    wpData?.title?.rendered || "รวมของเด็ด ราคาคุ้ม น่าใช้จาก Shopee";

  const mainContent =
    wpData?.content?.rendered || "<p>กำลังโหลดเนื้อหาจาก WordPress...</p>";

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-black tracking-tight text-gray-950">
            DekLNW Deals
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href="/sale"
              className="rounded-full px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
            >
              Sale Pages
            </Link>

            <Link
              href="/blog"
              className="rounded-full px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
            >
              Blog
            </Link>

            <Link
              href="/products"
              className="rounded-full px-4 py-2 text-sm font-bold text-gray-700 transition hover:bg-gray-100"
            >
              Products
            </Link>

            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
            >
              ดูโปร Shopee
            </a>
          </nav>

          <a
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 md:hidden"
          >
            Shopee
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-8 pt-10 md:pt-14">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-950 via-gray-900 to-teal-950 p-6 text-white shadow-2xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-teal-100">
              Shopee Affiliate Sale Page
            </p>

            <h1
              className="text-3xl font-black leading-tight md:text-5xl"
              dangerouslySetInnerHTML={{ __html: headlineTitle }}
            />

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
              รวมสินค้าแนะนำ โปรดี ของน่าใช้ คัดมาให้อ่านง่าย กดดูราคาล่าสุดได้ทันที
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-full bg-orange-500 px-6 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
              >
                🛒 ดูโปร Shopee
              </a>

              <Link
                href="/sale"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                Sale Pages
              </Link>

              <Link
                href="/blog"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                Blog
              </Link>

              <Link
                href="/products"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="content" className="mx-auto max-w-5xl px-4 pb-28">
        <article className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl shadow-gray-200/60">
          <div
            className="
              wp-content px-6 py-8 text-lg leading-8 text-gray-700 md:px-12 md:py-12

              [&_p]:mb-6
              [&_strong]:font-black
              [&_strong]:text-gray-950

              [&_h2]:mb-4
              [&_h2]:mt-10
              [&_h2]:text-2xl
              [&_h2]:font-black
              [&_h2]:leading-tight
              [&_h2]:text-gray-950

              [&_h3]:mb-3
              [&_h3]:mt-8
              [&_h3]:text-xl
              [&_h3]:font-black
              [&_h3]:text-gray-950

              [&_ul]:mb-6
              [&_ul]:list-disc
              [&_ul]:pl-6

              [&_ol]:mb-6
              [&_ol]:list-decimal
              [&_ol]:pl-6

              [&_li]:mb-2

              [&_a]:font-bold
              [&_a]:text-teal-700
              [&_a]:underline

              [&_img]:mx-auto
              [&_img]:mb-8
              [&_img]:h-auto
              [&_img]:max-h-[720px]
              [&_img]:w-auto
              [&_img]:max-w-full
              [&_img]:rounded-3xl
              [&_img]:shadow-lg

              [&_figure]:mx-auto
              [&_figure]:mb-8
              [&_figure]:w-full
              [&_figure_img]:mx-auto
              [&_figure_img]:h-auto
              [&_figure_img]:max-h-[720px]
              [&_figure_img]:w-auto
              [&_figure_img]:max-w-full
              [&_figure_img]:rounded-3xl

              [&_.wp-block-image]:mx-auto
              [&_.wp-block-image]:mb-8
              [&_.wp-block-image_img]:mx-auto
            "
            dangerouslySetInnerHTML={{ __html: mainContent }}
          />

          <div className="border-t border-gray-100 bg-gradient-to-br from-orange-50 to-teal-50 px-6 py-10 text-center md:px-12">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-orange-600">
              Limited Deal
            </p>

            <h2 className="text-2xl font-black text-gray-950 md:text-3xl">
              สนใจสินค้า กดดูโปรล่าสุดที่ Shopee
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              ราคาและโปรโมชันอาจเปลี่ยนแปลงตามร้านค้า แนะนำกดเช็กราคาล่าสุดก่อนสั่งซื้อ
            </p>

            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-orange-500 px-10 py-5 text-xl font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              🛒 สั่งซื้อเลยที่ Shopee
            </a>

            <p className="mt-5 text-sm text-gray-500">
              *หน้านี้อาจมีลิงก์ Affiliate หากสั่งซื้อผ่านลิงก์นี้ เว็บไซต์อาจได้รับค่าคอมมิชชัน
            </p>
          </div>
        </article>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <Link
            href="/sale"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-black text-gray-800"
          >
            Sale
          </Link>

          <Link
            href="/blog"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-black text-gray-800"
          >
            Blog
          </Link>

          <Link
            href="/products"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-black text-gray-800"
          >
            Product
          </Link>

          <a
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-2 py-3 text-center text-xs font-black text-white"
          >
            Shopee
          </a>
        </div>
      </div>
    </main>
  );
}