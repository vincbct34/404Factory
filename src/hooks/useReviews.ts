/**
 * @fileoverview Hook for fetching reviews from the QReview external API
 * @module hooks/useReviews
 */

import { useState, useEffect } from "react";

const QREVIEW_API_URL = import.meta.env.VITE_QREVIEW_API_URL;
const QREVIEW_API_TOKEN = import.meta.env.VITE_QREVIEW_API_TOKEN;

/** Shape of a single review from the QReview API */
export interface Review {
  id: number;
  author_name: string;
  company_name: string;
  position: string;
  duration: string;
  rating: number;
  comment: string;
  created_at: string;
  company_verified: boolean;
}

/** Shape of the stats response from the QReview API */
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
 * Fetches validated reviews and stats from the QReview external API
 * Falls back gracefully if the API is unavailable or not configured
 */
export function useReviews(): UseReviewsResult {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState<ReviewStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!QREVIEW_API_URL || !QREVIEW_API_TOKEN) {
      setIsLoading(false);
      return;
    }

    const headers = { Authorization: `Bearer ${QREVIEW_API_TOKEN}` };

    async function fetchReviews() {
      try {
        const [reviewsRes, statsRes] = await Promise.all([
          fetch(`${QREVIEW_API_URL}/reviews?sort=rating&order=desc&limit=6`, {
            headers,
          }),
          fetch(`${QREVIEW_API_URL}/reviews/stats`, { headers }),
        ]);

        if (!reviewsRes.ok || !statsRes.ok) {
          throw new Error("API request failed");
        }

        const reviewsData = await reviewsRes.json();
        const statsData = await statsRes.json();

        setReviews(reviewsData.reviews ?? []);
        setStats(statsData);
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
