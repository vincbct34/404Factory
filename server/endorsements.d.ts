export interface NormalizedReview {
  id: number;
  author_name: string;
  company_name: string;
  position: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export interface EndorsementStats {
  total_reviews: string;
  average_rating: string;
  verified_count: string;
}

export function fetchEndorsements(): Promise<{
  reviews: NormalizedReview[];
  stats: EndorsementStats;
}>;
