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
  const categories =
    product.categories?.map((category) => category.name).join(" • ") || "";

  return (
    <main className="min-h-screen bg-[#f6f7f8] px-4 py-8 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex items-center justify-between">
          <Link href="/products" className="font-black text-gray-950">
            ← กลับไปหน้าสินค้า
          </Link>

          <Link
            href="/"
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
          >
            หน้าแรก
          </Link>
        </header>

        <section className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative bg-gray-100">
              {image ? (
                <img
                  src={image}
                  alt={product.images?.[0]?.alt || product.name}
                  className="h-full min-h-[320px] w-full object-cover"
                />
              ) : (
                <div className="flex min-h-[320px] items-center justify-center">
                  <div className="text-center text-gray-400">
                    <p className="text-5xl">🛒</p>
                    <p className="mt-3 font-semibold">No Image</p>
                  </div>
                </div>
              )}

              {product.on_sale && (
                <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                  Sale
                </div>
              )}
            </div>

            <div className="p-6 md:p-10">
              {categories && (
                <p className="text-sm font-medium text-gray-500">{categories}</p>
              )}

              <h1 className="mt-2 text-3xl font-black leading-tight text-gray-950 md:text-5xl">
                {product.name}
              </h1>

              {shortDescription && (
                <p className="mt-5 text-base leading-8 text-gray-600 md:text-lg">
                  {shortDescription}
                </p>
              )}

              <div className="mt-6">
                <p className="text-3xl font-black text-orange-500">{price}</p>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white transition hover:bg-orange-600"
                >
                  ดูราคาล่าสุด / สั่งซื้อ
                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 px-8 py-4 text-base font-bold text-gray-900 transition hover:bg-gray-50"
                >
                  ดูสินค้าอื่น
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
                  wp-content mt-5 text-base leading-8 text-gray-700 md:text-lg
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
                  [&_img]:shadow-sm
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