"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/UI/badge";
import { CheckIcon, ArrowRightIcon, MailIcon } from "lucide-react";
// Import the bunny image
import bunnyImage from "@/assets/bunny.png";
import axios from "axios";
import { toast } from "sonner";
import { Toaster } from "@/components/UI/sonner";

export default function LandingPage() {
  // const [openFaq, setOpenFaq] = useState(null);
  // Replace single isLoading state with a map for individual button loading states
  // const [loadingStates, setLoadingStates] = useState({
  //   basic: false,
  //   professional: false,
  // });
  // const auth = useAuth();
  // const isAuthenticated = auth.isAuthenticated;

  // const tryItRef = useRef(null);
  // const howItWorksRef = useRef(null);
  // const useCasesRef = useRef(null);
  // const pricingRef = useRef(null);
  // const faqRef = useRef(null);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send email to the API as a string in the body (not wrapped in a JSON object)
      const response = await axios.post(
        'https://rlaqkdf5gb.execute-api.us-east-1.amazonaws.com/prod/sign-up',
        email,
        {
          headers: {
            'Content-Type': 'text/plain'
          }
        }
      );
      toast.success("Successfully signed up for early access!");
      setSubmitted(true);
    } catch (error) {
      console.error("Error signing up:", error);
      
      // Handle different types of errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(`Signup failed: ${error.response.data.message || 'Please try again later'}`);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("Network error. Please check your connection and try again.");
      } else {
        // Something happened in setting up the request
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (ref) => {
    // Add offset for navbar height (adjust the 80 value based on your navbar height)
    const offset = 80;
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Handle anchor links for smooth scrolling when clicking from navbar
  // useEffect(() => {
  //   const handleAnchorClick = (e) => {
  //     const href = e.target.getAttribute("href");
  //     if (href && href.startsWith("#")) {
  //       e.preventDefault();
  //       const targetId = href.substring(1);
  //       const targetElement = document.getElementById(targetId);

  //       if (targetElement) {
  //         // Add offset for navbar height
  //         const offset = 80;
  //         const elementPosition = targetElement.getBoundingClientRect().top;
  //         const offsetPosition = elementPosition + window.pageYOffset - offset;

  //         window.scrollTo({
  //           top: offsetPosition,
  //           behavior: "smooth",
  //         });
  //       }
  //     }
  //   };

  //   // Add click event listeners to all anchor links
  //   const links = document.querySelectorAll('a[href^="#"]');
  //   links.forEach((link) => {
  //     link.addEventListener("click", handleAnchorClick);
  //   });

  //   // Clean up
  //   return () => {
  //     links.forEach((link) => {
  //       link.removeEventListener("click", handleAnchorClick);
  //     });
  //   };
  // }, []);

  // const toggleFaq = (index) => {
  //   setOpenFaq(openFaq === index ? null : index);
  // };

  // const faqItems = [
  //   {
  //     question: "What is Brifify?",
  //     answer:
  //       "Brifify is an AI-powered tool that helps non-technical users generate detailed project briefs by asking contextual follow-up questions. It bridges the communication gap between creators and developers.",
  //   },
  //   {
  //     question: "Do I need to know how to code?",
  //     answer:
  //       "Not at all. Brifify is built for entrepreneurs, designers, marketers, and others who want to define and communicate their ideas without diving into technical jargon.",
  //   },
  //   {
  //     question: "What does a Brifify brief include?",
  //     answer:
  //       "Your brief will typically include project goals, features, platform requirements, suggested tech stack, and any unique constraints or notes customized to your specific project type.",
  //   },
  //   {
  //     question: "Can I use Brifify without signing up?",
  //     answer:
  //       "Yes, you can generate a few briefs anonymously. When you're ready to save or access your history, you'll be prompted to log in or create an account.",
  //   },
  //   {
  //     question: "How does Brifify save me time?",
  //     answer:
  //       "Instead of going back and forth with a developer to clarify your vision, Brifify helps you articulate everything upfront potentially saving you hours of emails, meetings, and miscommunications.",
  //   },
  // ];

  // const pricingPlans = [
  //   {
  //     name: "Free",
  //     price: "$0",
  //     period: "No payment required",
  //     features: ["Generate 2 briefs", "Export to PDF"],
  //     cta: "Get Started",
  //     popular: false,
  //     accountNeeded: false,
  //     safePayment: false,
  //   },
  //   {
  //     name: "Professional",
  //     price: "$14.99",
  //     period: "One Time Payment",
  //     features: [
  //       "Create 100 briefs",
  //       "Export to multiple formats",
  //       "Edit briefs",
  //       "Save briefs",
  //       "Share briefs via link",
  //     ],
  //     cta: "Buy Now",
  //     popular: true,
  //     accountNeeded: true,
  //     safePayment: true,
  //   },
  //   {
  //     name: "Basic",
  //     price: "$4.99",
  //     period: "One Time Payment",
  //     features: [
  //       "Create 20 briefs",
  //       "Export to multiple formats",
  //       "Edit briefs",
  //       "Save briefs",
  //       "Share briefs via link",
  //     ],
  //     cta: "Buy Now",
  //     popular: false,
  //     accountNeeded: true,
  //     safePayment: true,
  //   },
  // ];

  // Add features data for cards

  return (
    <div className="w-full mx-auto font-inter bg-gradient-to-br from-white to-gray-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmUyZTIiLz48L3N2Zz4=')]">
      {/* Import Toaster for notifications */}
      <Toaster position="top-right" richColors />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 max-w-6xl mx-auto">
        <div className="text-center mb-4 md:mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
            <span className="relative inline-block">
              A/
              <span className="relative z-10">Bunny</span>
              <img 
                src={bunnyImage} 
                alt="Bunny" 
                className="absolute -top-12.5 right-26 w-18 h-18 object-contain transform z-100 hidden md:block" 
              />
            </span>
            <span className="ml-2">coming soon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 w-auto">
            Simple, fast, easy A/B testing
            <span className="block mt-2">No coding, no BS, just results.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="pt-0 md:pt-6">
                <div className="w-8 h-8 rounded-full bg-[#FF3366]/10 flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF3366]"></div>
                </div>
                <h3 className="font-medium text-lg mb-1">For solopreneurs</h3>
                <p className="text-gray-500 text-sm">
                  Perfect for individual creators and entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="pt-0 md:pt-6">
                <div className="w-8 h-8 rounded-full bg-[#8A2BE2]/10 flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-[#8A2BE2]"></div>
                </div>
                <h3 className="font-medium text-lg mb-1">Small businesses</h3>
                <p className="text-gray-500 text-sm">
                  Tailored for teams with limited resources and $$
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
              <CardContent className="pt-0 md:pt-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF3366]/20 to-[#8A2BE2]/20 flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#FF3366] to-[#8A2BE2]"></div>
                </div>
                <h3 className="font-medium text-lg mb-1">Simple to Use</h3>
                <p className="text-gray-500 text-sm">
                  Simple setup, immidiate results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Email Signup Variation 1 - Floating Card */}
        {!submitted ? (
          <Card className="w-full max-w-md border-0 shadow-lg overflow-hidden pt-0">
            <div className="h-4 bg-gradient-to-r from-[#FF3366] to-[#8A2BE2]"></div>
            <CardContent className="pt-1">
              <p className="text-gray-600 text-center mb-6">
                Sign up for early access.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <MailIcon className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="pl-10"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#FF3366] to-[#8A2BE2] hover:opacity-90"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing up...
                    </>
                  ) : (
                    <>
                      Notify me
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="w-full max-w-md border-0 shadow-lg text-center py-6">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF3366] to-[#8A2BE2] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Thank you for signing up!
              </h2>
              <p className="text-gray-600">
                We'll send you an email when A/Bunny is ready for launch. Stay tuned!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Email Signup Variation 2 - Inline Form */}
        <div className="hidden w-full max-w-xl mt-16">
          <div className="text-center mb-6">
            <Badge className="bg-gradient-to-r from-[#FF3366] to-[#8A2BE2] text-white mb-2">
              Coming Soon
            </Badge>
            <h2 className="text-2xl font-bold">Join the waitlist</h2>
            <p className="text-gray-600 mt-2">
              Be among the first to experience A/Bunny
            </p>
          </div>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-1"
              required
            />
            <Button className="bg-gradient-to-r from-[#FF3366] to-[#8A2BE2] hover:opacity-90">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Email Signup Variation 3 - Minimal */}
        <div className="hidden w-full max-w-md mt-16">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100">
            <h2 className="text-xl font-medium mb-4">Stay in the loop</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="email@example.com"
                className="flex-1"
                required
              />
              <Button className="bg-gradient-to-r from-[#FF3366] to-[#8A2BE2] hover:opacity-90 whitespace-nowrap">
                Get notified
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 A/Bunny. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
