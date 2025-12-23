import { useState, useEffect } from "react";

interface OpenGraphImageState {
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
}

// Cache to avoid refetching the same URLs
const ogImageCache = new Map<string, string>();

// List of CORS proxies to try (in order of preference)
const CORS_PROXIES = [
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
  (url: string) =>
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`,
  (url: string) =>
    `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
];

/**
 * Extract OG image from HTML content
 */
function extractOgImage(html: string): string | null {
  // Try multiple patterns for og:image
  const patterns = [
    /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
    /<meta[^>]*name=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']og:image["']/i,
    // Twitter card fallback
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
 * Try fetching through multiple CORS proxies
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
 * @param url - The website URL to fetch OG image from
 * @param fallbackImage - Optional fallback image if OG fetch fails
 */
export function useOpenGraphImage(
  url?: string,
  fallbackImage?: string,
): OpenGraphImageState {
  const [state, setState] = useState<OpenGraphImageState>({
    imageUrl: fallbackImage || null,
    isLoading: !!url,
    error: null,
  });

  useEffect(() => {
    // If no URL provided, use fallback
    if (!url) {
      setState({
        imageUrl: fallbackImage || null,
        isLoading: false,
        error: null,
      });
      return;
    }

    // Check cache first
    if (ogImageCache.has(url)) {
      setState({
        imageUrl: ogImageCache.get(url)!,
        isLoading: false,
        error: null,
      });
      return;
    }

    const controller = new AbortController();

    // Set a timeout of 10 seconds
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 10000);

    async function fetchOgImage() {
      try {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));

        const html = await fetchWithProxies(url!, controller.signal);
        const imageUrl = extractOgImage(html);

        if (imageUrl) {
          ogImageCache.set(url!, imageUrl);
          setState({
            imageUrl,
            isLoading: false,
            error: null,
          });
        } else {
          // No OG image found, use fallback
          setState({
            imageUrl: fallbackImage || null,
            isLoading: false,
            error: "No OG image found",
          });
        }
      } catch (err) {
        if ((err as Error).name === "AbortError") {
          setState({
            imageUrl: fallbackImage || null,
            isLoading: false,
            error: "Request timed out",
          });
          return;
        }
        setState({
          imageUrl: fallbackImage || null,
          isLoading: false,
          error: (err as Error).message,
        });
      } finally {
        clearTimeout(timeoutId);
      }
    }

    fetchOgImage();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [url, fallbackImage]);

  return state;
}
