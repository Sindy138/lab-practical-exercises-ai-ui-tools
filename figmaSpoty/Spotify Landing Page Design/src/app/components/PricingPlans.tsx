import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Enjoy ad-supported music streaming",
    features: [
      "Play millions of songs",
      "Listen to podcasts",
      "Create playlists",
      "Shuffle play",
      "Ad-supported",
    ],
    cta: "Sign up free",
    popular: false,
  },
  {
    name: "Premium",
    price: "$10.99",
    period: "per month",
    description: "Unlock the full Spotify experience",
    features: [
      "Ad-free music listening",
      "Download to listen offline",
      "Play songs in any order",
      "High audio quality",
      "Group Session for shared listening",
      "3 months free for new users",
    ],
    cta: "Get Premium",
    popular: true,
  },
];

export function PricingPlans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#121212] to-[#0a0a0a]" ref={ref}>
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
            Choose your plan
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Listen free or unlock everything with Premium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-gradient-to-b rounded-3xl p-8 ${
                plan.popular
                  ? "from-[#1DB954]/20 to-[#121212] border-2 border-[#1DB954] shadow-2xl shadow-[#1DB954]/20"
                  : "from-[#282828] to-[#181818] border border-[#282828]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1DB954] text-black px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontWeight: 700 }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-2">
                  <span className="text-5xl font-bold text-white" style={{ fontWeight: 700 }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.popular ? "bg-[#1DB954]" : "bg-white"
                    }`}>
                      <Check className={`w-3.5 h-3.5 ${plan.popular ? "text-black" : "text-black"}`} strokeWidth={3} />
                    </div>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#1DB954] text-black hover:scale-105 hover:bg-[#1ed760] shadow-lg hover:shadow-[#1DB954]/50"
                    : "bg-white text-black hover:scale-105 shadow-lg"
                }`}
                style={{ fontWeight: 700 }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Terms and conditions apply. 3 months free not available for users who have already tried Premium.
        </motion.p>
      </div>
    </section>
  );
}
