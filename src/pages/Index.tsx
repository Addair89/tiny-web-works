import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Monitor, Smartphone, Search, Mail, CheckCircle, MessageCircle, Package, Wrench, Rocket, ArrowRight, Star, Phone } from "lucide-react";
import { FloatingTriangle, FloatingCircle, FloatingHexagon, FloatingDiamond, SectionDivider } from "@/components/GeometricShapes";

const Index = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '85d40ae8-f4b3-48da-8884-a582930f3a82',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Contact Form Submission from Website'
        })
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within one business day."
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly at addairdesign.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl animate-bounce-gentle"></div>
        
        {/* Floating Geometric Shapes */}
        <FloatingTriangle className="top-20 left-20" color="bg-teal-400/30" size={24} delay={0} />
        <FloatingCircle className="top-32 right-32" color="bg-coral-400/30" size={20} delay={1} />
        <FloatingHexagon className="top-64 left-1/4" color="bg-emerald-400/30" size={28} delay={2} />
        <FloatingDiamond className="top-96 right-1/4" color="bg-amber-400/30" size={22} delay={0.5} />
        <FloatingTriangle className="bottom-32 left-1/3" color="bg-purple-400/30" size={32} delay={1.5} />
        <FloatingCircle className="bottom-64 right-20" color="bg-blue-400/30" size={26} delay={2.5} />
      </div>

      {/* Hero Section - Blue/Purple Theme */}
      <section className={`relative px-6 py-20 md:py-32 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-200/50 shadow-lg">
            <Star className="w-4 h-4" />
            Trusted by Small Businesses
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
            Affordable Custom
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              Websites
            </span>
            <span className="block text-4xl md:text-5xl font-semibold text-slate-700">for Small Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Mobile-friendly, SEO-optimized, and ready to launch — all at a price that works for you.
            <span className="block mt-2 text-lg text-slate-500">No hidden fees.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToContact} size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-medium">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="bg-gradient-to-r from-teal-50 to-emerald-50" />

      {/* What You Get Section - Teal/Emerald Theme */}
      <section className="px-6 py-20 bg-gradient-to-br from-teal-50 to-emerald-50 relative">
        <FloatingHexagon className="top-10 right-10" color="bg-teal-500/20" size={40} delay={0} />
        <FloatingCircle className="bottom-20 left-20" color="bg-emerald-500/20" size={35} delay={1} />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What You Get
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for a professional online presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Custom Design",
                description: "Every site is built from scratch to match your brand — no cookie-cutter templates.",
                color: "from-teal-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "Mobile-Friendly",
                description: "Your site will look great on phones, tablets, and desktops.",
                color: "from-emerald-500 to-teal-500"
              },
              {
                icon: Search,
                title: "SEO Optimized",
                description: "Optimized for search engines so local customers can find you.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Mail,
                title: "Contact Form",
                description: "Make it easy for customers to reach you with a clean, functional form.",
                color: "from-teal-600 to-emerald-600"
              }
            ].map((item, index) => (
              <Card key={item.title} className={`group text-center p-8 border-0 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up relative overflow-hidden`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full transform translate-x-8 -translate-y-8"></div>
                <CardContent className="pt-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" color="bg-gradient-to-r from-orange-50 to-coral-50" />

      {/* Pricing Section - Orange/Coral Theme */}
      <section className="px-6 py-20 bg-gradient-to-br from-orange-50 to-coral-50 relative">
        <FloatingTriangle className="top-16 left-16" color="bg-orange-500/20" size={36} delay={0.5} />
        <FloatingDiamond className="bottom-16 right-16" color="bg-coral-500/20" size={32} delay={1.5} />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              No hidden fees. No surprises. Just honest pricing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "1 Page Website",
                price: "$100",
                description: "Perfect for getting started online",
                popular: false,
                accent: "from-orange-400 to-coral-400"
              },
              {
                title: "5 Page Website",
                price: "$200",
                description: "Complete online presence",
                popular: true,
                accent: "from-coral-500 to-orange-500"
              },
              {
                title: "Hosting & Maintenance",
                price: "$15",
                period: "/month",
                description: "Optional ongoing support",
                popular: false,
                accent: "from-amber-400 to-orange-400"
              }
            ].map((plan, index) => (
              <Card key={plan.title} className={`relative p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-coral-400 bg-gradient-to-br from-white to-orange-50/50 shadow-xl scale-105' 
                  : 'border border-orange-200 bg-white/90 backdrop-blur-sm hover:bg-white'
              } animate-fade-in-up overflow-hidden`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={`bg-gradient-to-r ${plan.accent} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-coral-400/10 rounded-full transform translate-x-10 -translate-y-10"></div>
                <CardContent className="pt-0">
                  <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent`}>{plan.price}</span>
                    {plan.period && <span className="text-xl text-slate-500">{plan.period}</span>}
                  </div>
                  <p className="text-slate-600 text-lg">{plan.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-400/5 to-coral-400/5 rounded-full transform -translate-x-16 -translate-y-16"></div>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed relative z-10">
              Every site includes custom design, SEO optimization, mobile responsiveness, and a contact form.
              <span className="block mt-2 text-coral-600 font-medium">Launch in 7-14 days or your money back!</span>
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="zigzag" color="bg-gradient-to-r from-purple-50 to-indigo-50" />

      {/* How It Works Section - Purple/Indigo Theme */}
      <section className="px-6 py-20 bg-gradient-to-br from-purple-50 to-indigo-50 relative">
        <FloatingCircle className="top-12 right-12" color="bg-purple-500/20" size={42} delay={0} />
        <FloatingHexagon className="bottom-24 left-24" color="bg-indigo-500/20" size={38} delay={2} />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Simple process, professional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "We Chat",
                description: "Tell me a little about your business and goals.",
                step: "01",
                color: "from-purple-600 to-indigo-600"
              },
              {
                icon: Package,
                title: "Choose a Package",
                description: "Pick between a one-page or five-page site — simple, no upselling.",
                step: "02",
                color: "from-indigo-600 to-purple-600"
              },
              {
                icon: Wrench,
                title: "I Build It",
                description: "I'll design, develop, and test the site with your feedback.",
                step: "03",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: Rocket,
                title: "You Launch",
                description: "Host it yourself, or let me take care of it for a small monthly fee.",
                step: "04",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((step, index) => (
              <div key={step.title} className={`relative text-center group animate-fade-in-up`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="relative">
                  <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {step.step}
                  </div>
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-45 scale-110"></div>
                    <step.icon className="w-12 h-12 text-white relative z-10" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
                {index < 3 && <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" color="bg-gradient-to-r from-emerald-50 to-teal-50" flip />

      {/* Testimonials Section - Green/Teal Theme */}
      <section className="px-6 py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative">
        <FloatingDiamond className="top-20 left-20" color="bg-emerald-500/20" size={34} delay={1} />
        <FloatingTriangle className="bottom-20 right-20" color="bg-teal-500/20" size={30} delay={0.5} />
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real feedback from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Loved working with this team! The process was simple and the result looks amazing. Our website has helped us get so many new customers.",
                author: "Sarah M.",
                business: "Local Bakery Owner",
                accent: "from-emerald-400 to-teal-400"
              },
              {
                text: "Fast, friendly, and affordable. The website perfectly captures our brand and works flawlessly on all devices. Highly recommend!",
                author: "Mike R.",
                business: "Small Business Owner",
                accent: "from-teal-400 to-emerald-400"
              }
            ].map((testimonial, index) => (
              <Card key={index} className={`p-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up relative overflow-hidden`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${testimonial.accent} opacity-5 rounded-full transform translate-x-12 -translate-y-12`}></div>
                <CardContent className="pt-0 relative z-10">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="text-slate-800 font-semibold">{testimonial.author}</p>
                    <p className="text-slate-500">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="diagonal" color="bg-gradient-to-r from-blue-50 to-cyan-50" flip />

      {/* Contact Form Section - Blue/Cyan Theme */}
      <section id="contact" className="px-6 py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
        <FloatingHexagon className="top-16 left-16" color="bg-blue-500/20" size={44} delay={0} />
        <FloatingCircle className="bottom-16 right-16" color="bg-cyan-500/20" size={40} delay={1} />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Let's Get Started
            </h2>
            <p className="text-xl text-slate-600">
              Ready to get started or have a question? Send me a message — I'll get back to you within one business day.
            </p>
          </div>
          
          <Card className="p-10 bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full transform -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-400/5 to-blue-400/5 rounded-full transform translate-x-16 translate-y-16"></div>
            <CardContent className="pt-0 relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium text-lg">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                      required 
                      disabled={isSubmitting} 
                      className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg rounded-xl" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium text-lg">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                      required 
                      disabled={isSubmitting} 
                      className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg rounded-xl" 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium text-lg">Message</Label>
                  <Textarea 
                    id="message" 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    required 
                    disabled={isSubmitting} 
                    rows={5} 
                    className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500 text-lg rounded-xl" 
                    placeholder="Tell me about your business and what kind of website you need..." 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 font-medium"
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
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-16 relative overflow-hidden">
        <FloatingTriangle className="top-10 right-10" color="bg-white/5" size={28} delay={0} />
        <FloatingCircle className="bottom-10 left-10" color="bg-white/5" size={32} delay={1.5} />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h3 className="font-heading text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Your Web Design Partner
          </h3>
          <p className="text-slate-300 mb-8 text-lg">
            <a href="mailto:addairdesign.com" className="hover:text-blue-400 transition-colors duration-300 font-medium">
              addairdesign.com
            </a>
          </p>
          <div className="flex justify-center items-center mb-8">
            <a href="tel:928-310-6868" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-300 text-lg">
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
    </div>;
};

export default Index;
