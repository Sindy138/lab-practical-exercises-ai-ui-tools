import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Music, Podcast, Volume2, Download } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "100M+ songs",
    description: "Discover millions of tracks from artists around the world in every genre imaginable.",
  },
  {
    icon: Podcast,
    title: "600K+ podcasts",
    description: "Listen to exclusive and original podcasts you can't find anywhere else.",
  },
  {
    icon: Volume2,
    title: "Ad-free music",
    description: "Enjoy uninterrupted music. Premium subscribers get zero ads.",
  },
  {
    icon: Download,
    title: "Offline playback",
    description: "Download your favorites and listen anywhere, even without internet.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-[#121212]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontWeight: 700 }}
          >
            Why you'll love Spotify
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to discover, stream, and enjoy the content you love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-[#282828] to-[#181818] p-8 rounded-2xl hover:from-[#2a2a2a] hover:to-[#1a1a1a] transition-all duration-300 border border-[#282828] hover:border-[#1DB954]/50"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-[#1DB954]/10 rounded-2xl group-hover:bg-[#1DB954]/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#1DB954]" strokeWidth={2} />
                </div>
                
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1DB954]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
