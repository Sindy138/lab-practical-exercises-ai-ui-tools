import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Star, Users } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Music Enthusiast",
    image: "https://images.unsplash.com/photo-1623594675959-02360202d4d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4NTA5Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Spotify has completely changed how I discover music. The playlists are incredible and I've found so many new artists I love.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Podcast Listener",
    image: "https://images.unsplash.com/photo-1764816657425-b3c79b616d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGhhcHB5JTIwY2FzdWFsfGVufDF8fHx8MTc3MzkzNzgzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Premium is worth every penny. Offline downloads saved my commute, and the audio quality is phenomenal.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Premium User",
    image: "https://images.unsplash.com/photo-1618590067690-2db34a87750a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzczODYyODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    quote: "Best music app hands down. The personalized recommendations are scary good – it's like Spotify knows me better than I know myself!",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1DB954]/20 via-[#1DB954]/10 to-[#1DB954]/20 rounded-3xl p-8 md:p-12 mb-16 border border-[#1DB954]/30"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-[#1DB954]" />
                <span className="text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
                  615M+
                </span>
              </div>
              <p className="text-gray-400">Active listeners worldwide</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-[#1DB954] fill-current" />
                <span className="text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
                  4.8
                </span>
              </div>
              <p className="text-gray-400">Average app store rating</p>
            </div>
            
            <div>
              <div className="mb-2">
                <span className="text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
                  100M+
                </span>
              </div>
              <p className="text-gray-400">Songs in our catalog</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontWeight: 700 }}
          >
            Loved by millions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our community has to say about their Spotify experience
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-b from-[#282828] to-[#181818] rounded-2xl p-8 border border-[#282828] hover:border-[#1DB954]/30 transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#1DB954] fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-white font-bold" style={{ fontWeight: 700 }}>
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
