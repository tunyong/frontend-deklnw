import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatWooPrice,
  getWooProductBySlug,
  getWooProductImage,
  getWooProductLink,
  stripHtml,
} from "@/lib/woocommerce";

export const dynamic = "force-dynamic";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getWooProductBySlug(slug);

  if (!product) {
    return {
      title: "ไม่พบสินค้า | DekLNW Deals",
    };
  }

  return {
    title: `${product.name} | DekLNW Deals`,
    description: stripHtml(product.short_description || product.name),
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getWooProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const image = getWooProductImage(product);
  const price = formatWooPrice(product);
  const affiliateUrl = getWooProductLink(product);
  const shortDescription = stripHtml(product.short_description || "");
  const fullDescription = product.description || "";

  return (
    <main className="min-h-screen bg-[#f5f7f6] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex items-center justify-between">
          <Link href="/products" className="font-black text-gray-950">
            ← กลับไปหน้าสินค้า
          </Link>

          <Link
            href="/"
            className="rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm"
          >
            หน้าแรก
          </Link>
        </header>

        <section className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-gray-200/70">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative flex min-h-[360px] items-center justify-center bg-gray-100">
              {image ? (
                <img
                  src={image}
                  alt={product.images?.[0]?.alt || product.name}
                  className="h-full max-h-[560px] w-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <p className="text-6xl">🛒</p>
                  <p className="mt-4 font-black text-gray-400">No Image</p>
                </div>
              )}

              {product.on_sale && (
                <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
                  Sale
                </div>
              )}
            </div>

            <div className="p-6 md:p-10">
              <p className="mb-4 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
                WooCommerce / Affiliate Product
              </p>

              <h1 className="text-3xl font-black leading-tight text-gray-950 md:text-5xl">
                {product.name}
              </h1>

              {shortDescription && (
                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {shortDescription}
                </p>
              )}

              <div className="mt-6">
                <p className="text-3xl font-black text-orange-600">{price}</p>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-full bg-orange-500 px-8 py-4 text-center text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
                >
                  🛒 ดูราคาล่าสุด / สั่งซื้อ
                </a>

                <Link
                  href="/products"
                  className="rounded-full border border-gray-200 px-8 py-4 text-center text-lg font-bold text-gray-800 transition hover:bg-gray-50"
                >
                  ดูสินค้าอื่น ๆ
                </Link>
              </div>

              <p className="mt-5 text-sm text-gray-400">
                *ลิงก์นี้อาจเป็นลิงก์ Affiliate ราคาและโปรโมชันอาจเปลี่ยนแปลงตามร้านค้า
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-black text-gray-950">
              รายละเอียดสินค้า
            </h2>

            {fullDescription ? (
              <div
                className="
                  wp-content mt-5 text-lg leading-8 text-gray-700
                  [&_p]:mb-6
                  [&_strong]:font-black
                  [&_strong]:text-gray-950
                  [&_h2]:mb-4
                  [&_h2]:mt-10
                  [&_h2]:text-2xl
                  [&_h2]:font-black
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
                  [&_img]:mx-auto
                  [&_img]:mb-8
                  [&_img]:h-auto
                  [&_img]:max-w-full
                  [&_img]:rounded-3xl
                  [&_img]:shadow-lg
                "
                dangerouslySetInnerHTML={{ __html: fullDescription }}
              />
            ) : (
              <p className="mt-4 text-gray-600">
                ยังไม่มีรายละเอียดสินค้าเพิ่มเติม
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}