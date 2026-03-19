import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      setSubmitted(true);
      // In a real app, this would send to a backend
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setIsValid(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#1DB954] to-[#169c46] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-white rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              <span className="text-white text-sm font-bold">Limited Time Offer</span>
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold text-black mb-4"
              style={{ fontWeight: 700 }}
            >
              Get 3 months free
            </h2>
            
            <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto">
              Sign up for Premium and enjoy ad-free music, offline listening, and more. No credit card needed to start.
            </p>

            {/* Email form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-full text-black bg-white focus:outline-none focus:ring-4 focus:ring-black/20 transition-all"
                      style={{ fontWeight: 500 }}
                      aria-label="Email address"
                      required
                    />
                    {isValid && (
                      <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                    style={{ fontWeight: 700 }}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black/20 rounded-2xl p-6 max-w-md mx-auto mb-6"
              >
                <CheckCircle2 className="w-12 h-12 text-black mx-auto mb-3" />
                <p className="text-black font-bold text-lg">Thanks for signing up!</p>
                <p className="text-black/80 text-sm mt-1">Check your email to get started.</p>
              </motion.div>
            )}

            <p className="text-black/70 text-sm">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>

            {/* Equalizer animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-end justify-center gap-2 h-16"
            >
              {[0.3, 0.6, 0.4, 0.8, 0.5, 0.7, 0.4, 0.9, 0.6].map((height, i) => (
                <motion.div
                  key={i}
                  className="w-2 bg-black/30 rounded-full"
                  initial={{ height: "20%" }}
                  animate={{ height: `${height * 100}%` }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Cancel anytime", value: "No commitment" },
            { label: "Student discount", value: "50% off Premium" },
            { label: "Family plan", value: "Up to 6 accounts" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-b from-[#282828] to-[#181818] rounded-2xl p-6 text-center border border-[#282828]"
            >
              <p className="text-gray-400 text-sm mb-2">{item.label}</p>
              <p className="text-white font-bold text-lg" style={{ fontWeight: 700 }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
