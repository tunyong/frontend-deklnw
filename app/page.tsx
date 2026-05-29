import Link from "next/link";
import WooProductCard from "@/components/WooProductCard";
import { getPageById } from "@/lib/wordpress";
import { getFeaturedWooProducts } from "@/lib/woocommerce";

const PAGE_ID = "6";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const wpData = await getPageById(PAGE_ID);
  const featuredProducts = await getFeaturedWooProducts();

  const shopeeLink = "https://s.shopee.co.th/4qBE3Td8JE";

  const headlineTitle =
    wpData?.title?.rendered || "รวมของเด็ด ราคาคุ้ม น่าใช้จาก Shopee";

  const mainContent =
    wpData?.content?.rendered || "<p>กำลังโหลดเนื้อหาจาก WordPress...</p>";

  return (
    <main className="min-h-screen bg-[#f6f7f8] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-black tracking-tight text-gray-950">
            DekLNW Deals
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            <Link
              href="/products"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Products
            </Link>
            <Link
              href="/sale"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Sale Pages
            </Link>
            <Link
              href="/blog"
              className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Blog
            </Link>
            <a
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              ดูโปร Shopee
            </a>
          </nav>

          <a
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white md:hidden"
          >
            Shopee
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pt-8 md:pt-10">
        <div className="rounded-[32px] border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
          <div className="max-w-3xl">
            <h1
              className="text-3xl font-black leading-tight text-gray-950 md:text-5xl"
              dangerouslySetInnerHTML={{ __html: headlineTitle }}
            />

            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              รวมสินค้าแนะนำ โปรดี ของน่าใช้ ดูง่าย อ่านง่าย และกดเช็กราคาล่าสุดได้ทันที
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                ดูโปร Shopee
              </a>

              <Link
                href="/products"
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
              >
                Products
              </Link>

              <Link
                href="/sale"
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
              >
                Sale Pages
              </Link>

              <Link
                href="/blog"
                className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {featuredProducts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-gray-950 md:text-3xl">
                สินค้าแนะนำ
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                สินค้าที่คุณเลือกเป็น Featured ใน WooCommerce
              </p>
            </div>

            <Link
              href="/products"
              className="hidden rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-50 md:inline-flex"
            >
              ดูสินค้าทั้งหมด
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <WooProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-5xl px-4 pb-28 pt-10">
        <article className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
          <div
            className="
              wp-content px-6 py-8 text-base leading-8 text-gray-700 md:px-12 md:py-12 md:text-lg
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
              [&_a]:text-orange-600
              [&_a]:underline
              [&_img]:mx-auto
              [&_img]:mb-8
              [&_img]:h-auto
              [&_img]:max-h-[720px]
              [&_img]:w-auto
              [&_img]:max-w-full
              [&_img]:rounded-3xl
              [&_img]:shadow-sm
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
        </article>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-2">
          <Link
            href="/products"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-bold text-gray-800"
          >
            Products
          </Link>

          <Link
            href="/sale"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-bold text-gray-800"
          >
            Sale
          </Link>

          <Link
            href="/blog"
            className="rounded-full bg-gray-100 px-2 py-3 text-center text-xs font-bold text-gray-800"
          >
            Blog
          </Link>

          <a
            href={shopeeLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="rounded-full bg-orange-500 px-2 py-3 text-center text-xs font-bold text-white"
          >
            Shopee
          </a>
        </div>
      </div>
    </main>
  );
}