const WC_URL = "https://backend.deklnw.com";

export type WooImage = {
  id?: number;
  src: string;
  alt?: string;
};

export type WooPrice = {
  price: string;
  regular_price: string;
  sale_price: string;
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
  currency_decimal_separator: string;
  currency_thousand_separator: string;
  currency_prefix: string;
  currency_suffix: string;
};

export type WooAddToCart = {
  text?: string;
  description?: string;
  url?: string;
};

export type WooProduct = {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  description: string;
  short_description: string;
  prices: WooPrice;
  images: WooImage[];
  categories?: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  tags?: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  on_sale: boolean;
  is_in_stock: boolean;
  is_purchasable: boolean;
  add_to_cart?: WooAddToCart;
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

export function formatWooPrice(product: WooProduct) {
  const priceRaw = product.prices?.price || "0";
  const minorUnit = product.prices?.currency_minor_unit ?? 2;
  const symbol = product.prices?.currency_symbol || "฿";

  const priceNumber = Number(priceRaw) / Math.pow(10, minorUnit);

  if (!Number.isFinite(priceNumber)) {
    return `${symbol}${priceRaw}`;
  }

  return `${symbol}${priceNumber.toLocaleString("th-TH", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export function getWooProductImage(product: WooProduct) {
  return product.images?.[0]?.src || "";
}

export function getWooProductLink(product: WooProduct) {
  return product.add_to_cart?.url || product.permalink || "#";
}

export async function getWooProducts() {
  try {
    const res = await fetch(
      `${WC_URL}/wp-json/wc/store/v1/products?per_page=100`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    return (await res.json()) as WooProduct[];
  } catch (error) {
    console.error("WooCommerce Products Fetch Error:", error);
    return [];
  }
}

export async function getFeaturedWooProducts() {
  try {
    const res = await fetch(
      `${WC_URL}/wp-json/wc/store/v1/products?featured=true&per_page=12`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    return (await res.json()) as WooProduct[];
  } catch (error) {
    console.error("WooCommerce Featured Products Fetch Error:", error);
    return [];
  }
}

export async function getWooProductBySlug(slug: string) {
  try {
    const res = await fetch(
      `${WC_URL}/wp-json/wc/store/v1/products?slug=${slug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }

    const products = (await res.json()) as WooProduct[];

    return products[0] || null;
  } catch (error) {
    console.error("WooCommerce Product Slug Fetch Error:", error);
    return null;
  }
}