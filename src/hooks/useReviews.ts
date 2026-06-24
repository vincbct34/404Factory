/**
 * @fileoverview Hook for fetching endorsements via the server-side MyVouch proxy
 * @module hooks/useReviews
 */

import { useState, useEffect } from "react";

/** Shape of a single normalized review from /api/endorsements */
export interface Review {
  id: number;
  author_name: string;
  company_name: string;
  position: string;
  rating: number;
  comment: string;
  verified: boolean;
}

/** Derived stats returned alongside the reviews */
export interface ReviewStats {
  total_reviews: string;
  average_rating: string;
  verified_count: string;
}

interface UseReviewsResult {
  reviews: Review[];
  stats: ReviewStats | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Fetches approved endorsements and stats from the server-side MyVouch proxy
 * (`/api/endorsements`). The bearer token stays server-side. Falls back
 * gracefully to the static review on the Studio page if the API is unavailable.
 */
export function useReviews(): UseReviewsResult {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/endorsements");
        if (!res.ok) {
          throw new Error("API request failed");
        }

        const data = await res.json();
        setReviews(data.reviews ?? []);
        setStats(data.stats ?? null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch reviews",
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return { reviews, stats, isLoading, error };
}
