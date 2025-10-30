export type OpenGraphData = {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  favicon?: string;
};

// Resolve possibly-relative URLs against a base
function resolveUrl(base: string, maybeRelative?: string): string | undefined {
  if (!maybeRelative) return undefined;
  try {
    return new URL(maybeRelative, base).toString();
  } catch {
    return undefined;
  }
}

// Very small meta tag extractor leaning on common og/twitter tags
function extractMetaTags(html: string) {
  const metas: Record<string, string> = {};
  const metaRe = /<meta\s+([^>]*?)>/gi;
  let m: RegExpExecArray | null;
  while ((m = metaRe.exec(html))) {
    const tag = m[1];
    const propMatch = /(?:property|name)\s*=\s*(["'])(.*?)\1/i.exec(tag);
    const contentMatch = /content\s*=\s*(["'])(.*?)\1/i.exec(tag);
    if (propMatch && contentMatch) {
      const key = propMatch[2].trim().toLowerCase();
      const val = contentMatch[2].trim();
      if (key && val) metas[key] = val;
    }
  }
  const titleMatch = /<title[^>]*>(.*?)<\/title>/i.exec(html);
  const linkIconMatch = /<link[^>]+rel=["'](?:shortcut\s+icon|icon)["'][^>]*href=["']([^"']+)["'][^>]*>/i.exec(html);
  return { metas, title: titleMatch?.[1]?.trim(), iconHref: linkIconMatch?.[1] };
}

export async function fetchOpenGraph(url: string, revalidateSeconds = 86400): Promise<OpenGraphData> {
  // Let Next.js cache this for some time to avoid hammering the origin
  const res = await fetch(url, { next: { revalidate: revalidateSeconds } });
  if (!res.ok) {
    return { url };
  }
  const html = await res.text();
  const { metas, title, iconHref } = extractMetaTags(html);

  const ogTitle = metas['og:title'] || metas['twitter:title'] || title;
  const ogDesc = metas['og:description'] || metas['twitter:description'] || metas['description'];
  const ogImage = metas['og:image'] || metas['twitter:image'] || metas['og:image:url'];
  const siteName = metas['og:site_name'] || metas['twitter:site'] || undefined;

  return {
    url,
    title: ogTitle || undefined,
    description: ogDesc || undefined,
    image: resolveUrl(url, ogImage),
    siteName,
    favicon: resolveUrl(url, iconHref),
  };
}
