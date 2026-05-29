import Link from "next/link";
import { notFound } from "next/navigation";
import { getPageBySlug, stripHtml } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

type SalePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: SalePageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: "ไม่พบหน้า Sale Page | DekLNW Deals",
    };
  }

  return {
    title: `${stripHtml(page.title.rendered)} | DekLNW Deals`,
    description: stripHtml(page.excerpt?.rendered || page.title.rendered),
  };
}

export default async function SaleDetailPage({ params }: SalePageProps) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const title = page.title.rendered;
  const content = page.content?.rendered || "";

  return (
    <main className="min-h-screen bg-[#f6f7f8] text-gray-900">
      <header className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/sale" className="font-black text-gray-950">
            ← กลับไปหน้า Sale Pages
          </Link>

          <Link
            href="/"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-gray-900 transition hover:bg-gray-50"
          >
            หน้าแรก
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pt-8">
        <div className="rounded-[32px] border border-gray-100 bg-white px-6 py-8 shadow-sm md:px-10 md:py-12">
          <h1
            className="text-3xl font-black leading-tight text-gray-950 md:text-5xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 pt-8">
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
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </section>
    </main>
  );
}