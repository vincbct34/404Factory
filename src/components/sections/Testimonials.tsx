/**
 * @fileoverview Testimonials section fetching real reviews from QReview API
 * @module components/sections/Testimonials
 */

import { motion } from "framer-motion";
import { Quote, Star, Loader2 } from "lucide-react";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui";
import { useLanguage } from "@/hooks/useLanguage";
import { useReviews } from "@/hooks/useReviews";

/**
 * Renders a row of filled/empty stars for a given rating
 */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Testimonials section displaying client feedback from QReview API
 * Falls back to static translation content if API is unavailable
 */
export function Testimonials() {
  const { t } = useLanguage();
  const { reviews, stats, isLoading } = useReviews();

  const hasApiReviews = reviews.length > 0;

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="section-title">
            {t.testimonials.title}
            <span className="text-electric">.</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="section-subtitle font-mono">
              {t.testimonials.subtitle}
            </p>
            {/* Global stats badge */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-sm font-mono"
              >
                <StarRating
                  rating={Math.round(parseFloat(stats.average_rating))}
                />
                <span className="text-gray-400">
                  {parseFloat(stats.average_rating).toFixed(1)}/5 (
                  {stats.total_reviews})
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-electric animate-spin" />
          </div>
        )}

        {/* API reviews grid */}
        {!isLoading && hasApiReviews && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div key={review.id} variants={fadeInUp}>
                <GlassCard className="p-6 h-full" hover={false}>
                  <div className="flex flex-col h-full">
                    {/* Rating */}
                    <div className="mb-3">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 leading-relaxed mb-4 flex-grow text-sm italic">
                      &ldquo;{review.comment}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="border-t border-white/10 pt-3">
                      <p className="font-bold text-white text-sm">
                        {review.author_name}
                      </p>
                      <p className="text-xs text-electric font-mono">
                        {review.position} — {review.company_name}
                        {review.company_verified && (
                          <span
                            className="text-green-400 ml-1"
                            title="Verified"
                          >
                            ✓
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Fallback: static testimonials from translations */}
        {!isLoading && !hasApiReviews && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="p-8 h-full" hover={false}>
                  <div className="flex flex-col h-full">
                    {/* Quote icon */}
                    <div className="w-10 h-10 rounded-lg bg-electric/10 flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 text-electric" />
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-300 leading-relaxed mb-6 flex-grow italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author info */}
                    <div className="border-t border-white/10 pt-4">
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-electric font-mono">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
