const WP_URL = "https://backend.deklnw.com";

export type WordPressItem = {
  id: number;
  slug: string;
  link: string;
  date: string;
  modified: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
  };
};

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .trim();
}

export function getFeaturedImage(item: WordPressItem) {
  return item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
}

export async function getPageById(id: string | number) {
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2/pages/${id}?_embed=1`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as WordPressItem;
  } catch (error) {
    console.error("WordPress Page ID Fetch Error:", error);
    return null;
  }
}

export async function getAllPages() {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/pages?per_page=100&_embed=1&status=publish`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    return (await res.json()) as WordPressItem[];
  } catch (error) {
    console.error("WordPress Pages Fetch Error:", error);
    return [];
  }
}

export async function getPageBySlug(slug: string) {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed=1&status=publish`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const pages = (await res.json()) as WordPressItem[];

    return pages[0] || null;
  } catch (error) {
    console.error("WordPress Page Slug Fetch Error:", error);
    return null;
  }
}

export async function getAllPosts() {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?per_page=100&_embed=1&status=publish`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    return (await res.json()) as WordPressItem[];
  } catch (error) {
    console.error("WordPress Posts Fetch Error:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const res = await fetch(
      `${WP_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=1&status=publish`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const posts = (await res.json()) as WordPressItem[];

    return posts[0] || null;
  } catch (error) {
    console.error("WordPress Post Slug Fetch Error:", error);
    return null;
  }
}