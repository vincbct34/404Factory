/**
 * @fileoverview Hook for fetching OpenGraph images from URLs via CORS proxies
 * @module hooks/useOpenGraphImage
 */

import { useState, useEffect } from "react";

/** State returned by the useOpenGraphImage hook */
interface OpenGraphImageState {
  /** The resolved image URL (OG image or fallback) */
  imageUrl: string | null;
  /** Whether the fetch is in progress */
  isLoading: boolean;
  /** Error message if fetch failed */
  error: string | null;
}

/** Result of a completed fetch, keyed by the URL it was fetched for */
interface FetchResult {
  url: string;
  imageUrl: string | null;
  error: string | null;
}

/** Cache to avoid refetching the same URLs */
const ogImageCache = new Map<string, string>();

/** List of CORS proxies to try in order of preference */
const CORS_PROXIES = [
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) =>
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url: string) =>
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

/**
 * Extracts OpenGraph image URL from HTML content
 * Tries multiple meta tag patterns including Twitter card fallback
 * @param html - Raw HTML content to parse
 * @returns The OG image URL or null if not found
 */
function extractOgImage(html: string): string | null {
  const patterns = [
    /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
    /<meta[^>]*name=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']og:image["']/i,
    /<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Attempts to fetch content through multiple CORS proxies
 * Falls back to next proxy if current one fails
 * @param url - Target URL to fetch
 * @param signal - AbortSignal for cancellation
 * @returns HTML content as string
 * @throws Error if all proxies fail
 */
async function fetchWithProxies(
  url: string,
  signal: AbortSignal,
): Promise<string> {
  for (const proxyFn of CORS_PROXIES) {
    try {
      const proxyUrl = proxyFn(url);
      const response = await fetch(proxyUrl, {
        signal,
        headers: {
          Accept: "text/html",
        },
      });

      if (response.ok) {
        return await response.text();
      }
    } catch {
      // Try next proxy
      continue;
    }
  }
  throw new Error("All proxies failed");
}

/**
 * Hook to fetch OpenGraph image from a URL using CORS proxies
 * Includes caching, fallback support, and automatic cleanup
 * No-URL and cached cases are derived at render time; state only holds
 * completed fetch results, so the effect never sets state synchronously.
 * @param url - The website URL to fetch OG image from
 * @param fallbackImage - Optional fallback image if OG fetch fails
 * @returns State with imageUrl, isLoading, and error
 */
export function useOpenGraphImage(
  url?: string,
  fallbackImage?: string,
): OpenGraphImageState {
  const [fetched, setFetched] = useState<FetchResult | null>(null);

  useEffect(() => {
    if (!url || ogImageCache.has(url)) return;

    const controller = new AbortController();

    // 10 second timeout for the request
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    async function fetchOgImage() {
      try {
        const html = await fetchWithProxies(url!, controller.signal);
        const imageUrl = extractOgImage(html);

        if (imageUrl) {
          ogImageCache.set(url!, imageUrl);
          setFetched({ url: url!, imageUrl, error: null });
        } else {
          setFetched({ url: url!, imageUrl: null, error: "No OG image found" });
        }
      } catch (err) {
        const error =
          (err as Error).name === "AbortError"
            ? "Request timed out"
            : (err as Error).message;
        setFetched({ url: url!, imageUrl: null, error });
      } finally {
        clearTimeout(timeoutId);
      }
    }

    fetchOgImage();

    // Cleanup on unmount or URL change
    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [url, fallbackImage]);

  if (!url) {
    return { imageUrl: fallbackImage || null, isLoading: false, error: null };
  }

  const cached = ogImageCache.get(url);
  if (cached) {
    return { imageUrl: cached, isLoading: false, error: null };
  }

  if (fetched && fetched.url === url) {
    return {
      imageUrl: fetched.imageUrl ?? fallbackImage ?? null,
      isLoading: false,
      error: fetched.error,
    };
  }

  return { imageUrl: fallbackImage || null, isLoading: true, error: null };
}
