import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Monitor,
  Smartphone,
  Search,
  Mail,
  CheckCircle,
  MessageCircle,
  Package,
  Wrench,
  Rocket,
  ArrowRight,
  Star,
  Phone,
  Download,
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "85d40ae8-f4b3-48da-8884-a582930f3a82",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission from Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within one business day.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description:
          "Please try again or email me directly at addairdesign.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section
        className={`relative px-6 py-20 md:py-32 transition-all duration-1000 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200/50">
            <Star className="w-4 h-4" />
            No Monthly Fees • You Own The Code
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Affordable Custom
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Websites
            </span>
            <span className="block text-4xl md:text-5xl font-semibold text-slate-700">
              for Small Businesses
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
            Mobile-friendly, SEO-optimized, and ready to launch — all at a price
            that works for you.
            <span className="block mt-2 text-lg text-slate-500">
              No hidden fees. No upselling. You get the complete source code.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToPricing}
              variant="outline"
              size="lg"
              className="group border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a professional online presence — yours to
              own forever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Custom Design",
                description:
                  "Every site is built from scratch to match your brand — no cookie-cutter templates.",
              },
              {
                icon: Smartphone,
                title: "Mobile-Friendly",
                description:
                  "Your site will look great on phones, tablets, and desktops.",
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description:
                  "Optimized for search engines so local customers can find you.",
              },
              {
                icon: Download,
                title: "You Own The Code",
                description:
                  "Get the complete source code in a zip file — no ongoing dependencies on me.",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className={`group text-center p-8 border-0 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Dark Theme */}
      <section
        id="pricing"
        className="px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300">
              No hidden fees. No upselling. No monthly payments. Just honest,
              one-time pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              {
                title: "1 Page Website",
                price: "$100",
                description: "Perfect for getting started online",
                popular: false,
              },
              {
                title: "5 Page Website",
                price: "$250",
                description: "Complete online presence",
                popular: true,
              },
            ].map((plan, index) => (
              <Card
                key={plan.title}
                className={`relative p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up ${
                  plan.popular
                    ? "border-2 border-blue-400 bg-gradient-to-br from-slate-800 to-slate-700 shadow-xl scale-105"
                    : "border border-slate-600 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="pt-0">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">
                    {plan.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-slate-300 text-lg">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-slate-600 mb-8">
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Every site includes custom design, SEO optimization, mobile
              responsiveness, and a contact form.
              <span className="block mt-2 text-blue-400 font-medium">
                Launch in 7-14 days or your money back!
              </span>
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Launch Support Included
            </h3>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Don't worry about the technical stuff! I'll provide step-by-step
              instructions for launching your site and offer a guided
              walkthrough if needed. You'll have your website live and ready for
              customers in no time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Simple process, professional results — no upselling, ever
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "We Chat",
                description:
                  "Tell me about your business and goals — no sales pitch, just understanding what you need.",
                step: "01",
              },
              {
                icon: Package,
                title: "Choose Your Package",
                description:
                  "Pick between a 1-page or 5-page site. That's it — no add-ons or hidden costs.",
                step: "02",
              },
              {
                icon: Wrench,
                title: "I Build It",
                description:
                  "I design and develop your custom site with your feedback. You'll see progress every step of the way.",
                step: "03",
              },
              {
                icon: Rocket,
                title: "You Get Everything",
                description:
                  "Receive the complete website files in a zip folder — it's yours forever, no strings attached.",
                step: "04",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className={`relative text-center group animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-slate-600">
              Beautiful, functional websites that drive business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: "/lovable-uploads/seejanecook.png",
                title: "See Jane Cook",
                description:
                  "Experience culinary excellence with Chef Jane, accredited private chef specializing in intimate dinners, exclusive events, and custom seasonal menus.",
                url: "https://seejanecook.com",
                category: "Personal ChefServices",
              },
              {
                image:
                  "/lovable-uploads/947c1b4e-094b-413e-b5f7-1e189c1e4fd6.png",
                title: "GreenShield Pest Control",
                description:
                  "Professional pest control website featuring service areas, testimonials, and instant quote requests",
                url: "https://pest-pro-spotlight.lovable.app/",
                category: "Pest Control Services",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up rounded-2xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
                    >
                      View Live Site
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Dark Theme */}
      <section
        id="contact"
        className="px-6 py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Get Started
            </h2>
            <p className="text-xl text-slate-300">
              Ready to get your website? Send me a message — I'll get back to
              you within one business day with a clear quote and timeline.
            </p>
          </div>

          <Card className="p-10 bg-slate-800/50 backdrop-blur-sm border border-slate-600 shadow-2xl rounded-3xl">
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="text-slate-200 font-medium text-lg"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      disabled={isSubmitting}
                      className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500 h-12 text-lg rounded-xl"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-slate-200 font-medium text-lg"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      disabled={isSubmitting}
                      className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500 h-12 text-lg rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-slate-200 font-medium text-lg"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="mt-2 bg-slate-700 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500 text-lg rounded-xl"
                    placeholder="Tell me about your business and whether you need a 1-page or 5-page website..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    "Let's Talk 🚀"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-heading text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Your Web Design Partner
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            <a
              href="mailto:addairdesign.com"
              className="hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              addairdesign.com
            </a>
          </p>
          <div className="flex justify-center items-center mb-8">
            <a
              href="tel:928-310-6868"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              <Phone className="w-5 h-5" />
              928-310-6868
            </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              Copyright © {currentYear} • Built with ❤️ for small businesses
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
