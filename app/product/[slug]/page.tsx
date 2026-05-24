import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "ไม่พบสินค้า | DekLNW Deals",
    };
  }

  return {
    title: `${product.title} | DekLNW Deals`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

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
              <img
                src={product.image}
                alt={product.title}
                className="h-full max-h-[560px] w-full object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-white shadow-lg">
                {product.badge}
              </div>
            </div>

            <div className="p-6 md:p-10">
              <p className="mb-4 inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700">
                Shopee / TikTok Affiliate
              </p>

              <h1 className="text-3xl font-black leading-tight text-gray-950 md:text-5xl">
                {product.title}
              </h1>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                {product.shortDescription}
              </p>

              <div className="mt-6 flex items-end gap-3">
                <p className="text-3xl font-black text-orange-600">
                  {product.price}
                </p>

                {product.oldPrice && (
                  <p className="pb-1 text-gray-400 line-through">
                    {product.oldPrice}
                  </p>
                )}
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="rounded-full bg-orange-500 px-8 py-4 text-center text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
                >
                  🛒 ดูราคาล่าสุดที่ Shopee
                </a>

                {product.tiktokUrl && (
                  <a
                    href={product.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="rounded-full bg-gray-950 px-8 py-4 text-center text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-black"
                  >
                    🎵 ดูสินค้าที่ TikTok
                  </a>
                )}
              </div>

              <p className="mt-5 text-sm text-gray-400">
                *ลิงก์นี้อาจเป็นลิงก์ Affiliate ราคาและโปรโมชันอาจเปลี่ยนแปลงตามร้านค้า
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 p-6 md:p-10">
            <h2 className="text-2xl font-black text-gray-950">
              จุดเด่นสินค้า
            </h2>

            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="rounded-2xl bg-gray-50 p-4 font-bold text-gray-700"
                >
                  ✅ {benefit}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-black text-gray-950">
              รายละเอียดเพิ่มเติม
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              {product.details}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}