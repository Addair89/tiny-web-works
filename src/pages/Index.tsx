import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Monitor, 
  Smartphone, 
  Search, 
  Mail,
  CheckCircle,
  MessageCircle,
  Package,
  Wrench,
  Rocket
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within one business day.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email me directly at addairjared@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-slate-600/5"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Affordable Custom Websites
            <span className="block text-blue-600">for Small Businesses</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mobile-friendly, SEO-optimized, and ready to launch — all at a price that works for you.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Custom Design</h3>
                <p className="text-slate-600">Every site is built from scratch to match your brand — no cookie-cutter templates.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Mobile-Friendly</h3>
                <p className="text-slate-600">Your site will look great on phones, tablets, and desktops.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">SEO Optimized</h3>
                <p className="text-slate-600">Optimized for search engines so local customers can find you.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Contact Form</h3>
                <p className="text-slate-600">Make it easy for customers to reach you with a clean, functional form.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
            Simple Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="p-8 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">1 Page Website</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$100</div>
                <p className="text-slate-600">Perfect for getting started online</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue-200 shadow-lg transform scale-105">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">5 Page Website</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$200</div>
                <p className="text-slate-600">Complete online presence</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Hosting & Maintenance</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$15<span className="text-lg">/month</span></div>
                <p className="text-slate-600">Optional ongoing support</p>
              </CardContent>
            </Card>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every site includes custom design, SEO optimization, mobile responsiveness, and a contact form.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Step 1: We Chat</h3>
              <p className="text-slate-600">Tell me a little about your business and goals.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Step 2: Choose a Package</h3>
              <p className="text-slate-600">Pick between a one-page or five-page site — simple, no upselling.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Step 3: I Build It</h3>
              <p className="text-slate-600">I'll design, develop, and test the site with your feedback.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Step 4: You Launch</h3>
              <p className="text-slate-600">Host it yourself, or let me take care of it for a small monthly fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-100">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 text-lg">
                  "Loved working with [Your Name]! The process was simple and the result looks great."
                </p>
                <p className="text-slate-800 font-semibold">— Happy Client</p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue-100">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 text-lg">
                  "Fast, friendly, and affordable. Highly recommend."
                </p>
                <p className="text-slate-800 font-semibold">— Small Business Owner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Updated with email functionality */}
      <section id="contact" className="px-6 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-6">
            Let's Get Started
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            Ready to get started or have a question? Send me a message — I'll get back to you within one business day.
          </p>
          
          <Card className="p-8 border-2 border-blue-100">
            <CardContent className="pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={isSubmitting}
                    className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="mt-2 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Let's Talk"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Your Web Design Partner</h3>
          <p className="text-slate-300 mb-6">
            <a href="mailto:addairjared@gmail.com" className="hover:text-blue-400 transition-colors">
              addairjared@gmail.com
            </a>
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          <p className="text-slate-400">
            Copyright © {currentYear}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
