import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, stripHtml } from "@/lib/wordpress";

export const dynamic = "force-dynamic";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "ไม่พบบทความ | DekLNW Deals",
    };
  }

  return {
    title: `${stripHtml(post.title.rendered)} | DekLNW Deals`,
    description: stripHtml(post.excerpt?.rendered || post.title.rendered),
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const title = post.title.rendered;
  const content = post.content?.rendered || "";

  return (
    <main className="min-h-screen bg-[#f5f7f6] text-gray-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-lg font-black tracking-tight text-gray-950">
            DekLNW Deals
          </Link>

          <Link
            href="/blog"
            className="rounded-full bg-gray-950 px-5 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600"
          >
            Blog
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 pb-8 pt-10 md:pt-14">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 p-6 text-white shadow-2xl md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100">
              WordPress Blog
            </p>

            <h1
              className="text-3xl font-black leading-tight md:text-5xl"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-200 md:text-lg">
              บทความนี้ดึงข้อมูลจาก WordPress อัตโนมัติ
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-28">
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
            "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </section>
    </main>
  );
}