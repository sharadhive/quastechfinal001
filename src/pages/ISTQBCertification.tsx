import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle2, Users, Award, Code, Star, ChevronRight, Home, MapPin, Laptop } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import { useToast } from "@/hooks/use-toast";
import BranchSection from "@/components/BranchSection";

const ISTQBCertification = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Submitted!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const highlights = [
    { title: "Global Certification", icon: Award, description: "ISTQB recognized worldwide" },
    { title: "Expert Training", icon: Users, description: "Learn from certified trainers" },
    { title: "Mock Exams", icon: Code, description: "Practice with real exam patterns" },
    { title: "Placement Support", icon: Star, description: "100% job assistance" },
  ];

  const modules = [
    { title: "Fundamentals of Testing", topics: ["Testing Basics", "Why Testing Necessary", "Testing Principles", "Test Process"] },
    { title: "Testing Throughout SDLC", topics: ["Software Development Models", "Test Levels", "Test Types", "Maintenance Testing"] },
    { title: "Static Testing", topics: ["Static Techniques", "Review Process", "Tool Support"] },
    { title: "Test Techniques", topics: ["Black Box", "White Box", "Experience Based"] }
  ];

  return (
    <DarkModeProvider>
      <SEO title="ISTQB Certification Course - Foundation Level Training" description="Get ISTQB Foundation Level certification with expert training. Prepare for the exam with comprehensive study material and mock tests." keywords="ISTQB certification, ISTQB foundation level, software testing certification, ISTQB exam" canonical="/istqb-certification" ogImage="/images/software testing/software testing.png" category="IT Courses" />
      <CourseStructuredData name="ISTQB Certification Training" description="ISTQB Foundation Level certification preparation with expert guidance." url="https://quastech.co.in/istqb-certification" duration="P2M" courseMode="blended" image="https://quastech.co.in/images/software testing/software testing.png" />
      <BreadcrumbStructuredData items={[{ name: "Home", url: "/" }, { name: "Courses", url: "/#courses" }, { name: "ISTQB Certification", url: "/istqb-certification" }]} />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        <section className="relative w-full h-[600px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)' }}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm"><Link to="/" className="hover:text-white"><Home className="w-4 h-4 inline" /> Home</Link><ChevronRight className="w-4 h-4" /><span>ISTQB Certification</span></motion.div>
                <h1 className="text-5xl font-bold">ISTQB Certification</h1>
                <p className="text-xl">Get globally recognized testing certification</p>
                <div className="flex gap-4"><Button className="bg-white text-blue-600">Enroll Now</Button><Button variant="outline" className="border-white text-white">Download Brochure</Button></div>
              </div>
              <img src="/images/software testing/software testing.png" alt="ISTQB" className="hidden lg:block" onError={(e) => e.currentTarget.src = "/placeholder.svg"} />
            </div>
          </div>
        </section>
        <section className="py-16 px-4"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Course Highlights</h2><div className="grid md:grid-cols-4 gap-6">{highlights.map((h, i) => (<div key={i} className="p-6 rounded-xl bg-white shadow-lg"><h.icon className="w-12 h-12 text-blue-600 mb-4" /><h3 className="font-semibold mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></div>))}</div></div></section>
        <section className="py-16 px-4 bg-gray-50"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2><div className="grid md:grid-cols-2 gap-6">{modules.map((m, i) => (<div key={i} className="p-6 rounded-xl bg-white shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">{m.title}</h3><ul className="space-y-2">{m.topics.map((t, idx) => (<li key={idx} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" /><span>{t}</span></li>))}</ul></div>))}</div></div></section>
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50"><div className="container mx-auto max-w-2xl"><h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2><form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6"><Input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /><Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /><Input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /><Textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} /><Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-500 py-6">Submit</Button></form></div></section>
        <BranchSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default ISTQBCertification;

