import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Smartphone, Headphones, Speaker } from "lucide-react";

export function AppDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#1DB954]/20 blur-3xl rounded-full" />
              
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-[#282828] to-[#181818] rounded-[3rem] p-3 border-8 border-[#1a1a1a] shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-black px-6 py-2 flex items-center justify-between">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 bg-white rounded-sm" />
                      <div className="w-4 h-3 bg-white rounded-sm" />
                      <div className="w-4 h-3 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* App image */}
                  <img
                    src="https://images.unsplash.com/photo-1619462729239-ca28ab216892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbXVzaWMlMjBhcHAlMjBzY3JlZW4lMjBtb2NrdXB8ZW58MXx8fHwxNzczOTM3ODMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Spotify app interface showing music player"
                    className="w-full h-auto"
                    loading="lazy"
                  />

                  {/* Mock player controls */}
                  <div className="bg-gradient-to-b from-[#282828] to-[#181818] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-white font-bold text-sm mb-1">Currently Playing</p>
                        <p className="text-gray-400 text-xs">Your Favorite Artist</p>
                      </div>
                      <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <div className="w-0 h-0 border-l-8 border-l-black border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-[#404040] h-1 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#1DB954]"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: "60%" } : {}}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-[#1DB954] p-4 rounded-2xl shadow-xl"
              >
                <Headphones className="w-8 h-8 text-black" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <Speaker className="w-8 h-8 text-black" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#1DB954]/10 px-4 py-2 rounded-full mb-6 border border-[#1DB954]/30">
              <Smartphone className="w-4 h-4 text-[#1DB954]" />
              <span className="text-[#1DB954] text-sm font-bold">Available on all devices</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontWeight: 700 }}
            >
              Take your music anywhere
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Stream your favorite tracks on your phone, tablet, computer, smart speakers, TV, and more. Your music follows you everywhere.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Seamless listening",
                  description: "Start on one device, continue on another without missing a beat",
                },
                {
                  title: "High-quality streaming",
                  description: "Experience crystal-clear audio up to 320kbps on Premium",
                },
                {
                  title: "Smart downloads",
                  description: "Auto-download your favorite playlists when connected to WiFi",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 bg-[#1DB954] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold mb-1" style={{ fontWeight: 700 }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 bg-[#1DB954] text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-[#1ed760] shadow-lg hover:shadow-[#1DB954]/50"
              style={{ fontWeight: 700 }}
            >
              Download the app
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
