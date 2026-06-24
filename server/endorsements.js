/**
 * @fileoverview Fetches approved endorsements from the MyVouch API.
 *   The bearer token is account-scoped and kept server-side (never bundled to
 *   the client). The response is normalized to the shape the Studio page uses.
 * @module server/endorsements
 */

const MYVOUCH_API_URL =
  process.env.MYVOUCH_API_URL || "https://www.myvouch.fr/api/me/endorsements";
const MYVOUCH_API_TOKEN = process.env.MYVOUCH_API_TOKEN;

/**
 * @typedef {Object} NormalizedReview
 * @property {number} id
 * @property {string} author_name
 * @property {string} company_name
 * @property {string} position
 * @property {number} rating
 * @property {string} comment
 * @property {boolean} verified
 */

/**
 * Fetches approved endorsements and derived stats from MyVouch.
 * @returns {Promise<{reviews: NormalizedReview[], stats: {total_reviews: string, average_rating: string, verified_count: string}}>}
 */
export async function fetchEndorsements() {
  if (!MYVOUCH_API_TOKEN) {
    throw new Error("MYVOUCH_API_TOKEN is not configured");
  }

  const res = await fetch(MYVOUCH_API_URL, {
    headers: { Authorization: `Bearer ${MYVOUCH_API_TOKEN}` },
  });

  if (!res.ok) {
    throw new Error(`MyVouch API request failed (${res.status})`);
  }

  const data = await res.json();
  const endorsements = Array.isArray(data.endorsements)
    ? data.endorsements.filter((e) => e.status === "approved")
    : [];

  const reviews = endorsements.map((e) => ({
    id: e.id,
    author_name: e.reviewer_name,
    company_name: e.reviewer_company,
    position: e.reviewer_role ?? "",
    rating: e.rating,
    comment: e.body,
    verified: Boolean(e.email_confirmed || e.employer_overlap_verified),
  }));

  const total = reviews.length;
  const average =
    total > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  const verifiedCount = reviews.filter((r) => r.verified).length;

  return {
    reviews,
    stats: {
      total_reviews: String(total),
      average_rating: average.toFixed(2),
      verified_count: String(verifiedCount),
    },
  };
}
