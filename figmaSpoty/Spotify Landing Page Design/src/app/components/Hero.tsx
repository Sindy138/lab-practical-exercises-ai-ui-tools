import { motion } from "motion/react";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212] pt-20 pb-16 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1DB954]/20 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#1DB954]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1DB954]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontWeight: 700 }}
          >
            Music for everyone
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            Millions of songs. No credit card needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              className="group relative bg-[#1DB954] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-[#1ed760] shadow-lg hover:shadow-[#1DB954]/50"
              style={{ fontWeight: 700 }}
            >
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Listen Free
              </span>
            </button>
            
            <button
              className="group relative bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
              style={{ fontWeight: 700 }}
            >
              Try Premium
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm text-gray-400 mt-6"
          >
            Get 3 months of Premium for free
          </motion.p>
        </motion.div>

        {/* Right content - Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1619275052165-69c202e49ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmclMjBtdXNpYyUyMGhlYWRwaG9uZXMlMjBoYXBweXxlbnwxfHx8fDE3NzM4NDg1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Person enjoying music with headphones"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating equalizer indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute -bottom-6 -right-6 bg-[#1DB954] p-6 rounded-2xl shadow-2xl"
          >
            <div className="flex items-end gap-1.5 h-12">
              {[0.4, 0.8, 0.6, 1, 0.7].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-white rounded-full"
                  initial={{ height: "20%" }}
                  animate={{ height: `${height * 100}%` }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
