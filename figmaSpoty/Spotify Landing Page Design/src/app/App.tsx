import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { PricingPlans } from "./components/PricingPlans";
import { Testimonials } from "./components/Testimonials";
import { AppDemo } from "./components/AppDemo";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  // Set up SEO meta tags and smooth scroll
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Update page title
    document.title = "Spotify - Music for everyone";

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Listen to millions of songs and podcasts for free. Stream music and podcasts, discover albums, playlists or even single songs for free. Get 3 months of Premium free."
    );

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: "Spotify - Music for everyone" },
      {
        property: "og:description",
        content: "Listen to millions of songs and podcasts for free. Get 3 months of Premium free.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1619275052165-69c202e49ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Spotify - Music for everyone" },
      {
        name: "twitter:description",
        content: "Listen to millions of songs and podcasts for free. Get 3 months of Premium free.",
      },
      {
        name: "twitter:image",
        content: "https://images.unsplash.com/photo-1619275052165-69c202e49ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200",
      },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Update theme color
    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.setAttribute("name", "theme-color");
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute("content", "#121212");

    // Update favicon if needed
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.setAttribute("rel", "icon");
      document.head.appendChild(favicon);
    }
    // Using a Spotify green circle as favicon
    favicon.setAttribute(
      "href",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%231DB954'/><path d='M25 40 Q50 35 75 40' stroke='white' stroke-width='3' fill='none'/><path d='M25 50 Q50 45 75 50' stroke='white' stroke-width='3' fill='none'/><path d='M25 60 Q50 55 75 60' stroke='white' stroke-width='3' fill='none'/></svg>"
    );
  }, []);

  return (
    <div className="min-h-screen bg-[#121212]">
      <Header />
      <main>
        <Hero />
        <Features />
        <PricingPlans />
        <Testimonials />
        <AppDemo />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}