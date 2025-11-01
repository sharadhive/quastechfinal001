import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle2, Clock, Users, Award, BookOpen, Code, Target, Star, Phone, Mail, MessageCircle, X, Briefcase, Download, FileText, ChevronRight, Home, MapPin, Laptop, MessageSquare, GraduationCap, Monitor, UserCheck } from "lucide-react";
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

const SeleniumTesting = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Submitted!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const courseHighlights = [
    { title: "Selenium WebDriver", icon: Code, description: "Master Selenium automation framework" },
    { title: "Real Projects", icon: Laptop, description: "Work on live automation projects" },
    { title: "TestNG Framework", icon: Award, description: "Learn testing frameworks" },
    { title: "100% Placement", icon: Users, description: "Guaranteed interview opportunities" },
  ];

  const curriculumModules = [
    { title: "Selenium Basics", topics: ["Introduction to Selenium", "Selenium Components", "WebDriver Setup", "Locators"] },
    { title: "WebDriver Advanced", topics: ["Handling Elements", "Waits", "Alerts & Popups", "Frames & Windows"] },
    { title: "TestNG", topics: ["Annotations", "Assertions", "Test Configuration", "Reporting"] },
    { title: "Frameworks", topics: ["Page Object Model", "Data Driven Framework", "Keyword Driven", "Hybrid Framework"] }
  ];

  const careerOpportunities = ["Selenium Automation Engineer", "Test Automation Lead", "SDET", "QA Automation Analyst"];

  return (
    <DarkModeProvider>
      <SEO title="Selenium Testing Course - Automation Testing Training" description="Learn Selenium WebDriver, Test Automation, TestNG, and Framework Development. Become a certified Selenium automation tester with placement assistance." keywords="selenium testing, selenium webdriver, automation testing, testNG, selenium certification" canonical="/selenium-testing" ogImage="/images/software testing/software testing.png" category="IT Courses" />
      <CourseStructuredData name="Selenium Automation Testing" description="Complete Selenium automation training with WebDriver, TestNG, and framework development." url="https://quastech.co.in/selenium-testing" duration="P4M" courseMode="blended" image="https://quastech.co.in/images/software testing/software testing.png" />
      <BreadcrumbStructuredData items={[{ name: "Home", url: "/" }, { name: "Courses", url: "/#courses" }, { name: "Selenium Testing", url: "/selenium-testing" }]} />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        <section className="relative w-full h-[600px] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)' }}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 w-full container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm">
                  <Link to="/" className="hover:text-white"><Home className="w-4 h-4 inline" /> Home</Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>Selenium Testing</span>
                </motion.div>
                <h1 className="text-5xl font-bold">Selenium Automation Testing</h1>
                <p className="text-xl">Become an expert in test automation</p>
                <div className="flex gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Enroll Now</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">Download Brochure</Button>
                </div>
              </div>
              <img src="/images/software testing/software testing.png" alt="Selenium" className="hidden lg:block" onError={(e) => e.currentTarget.src = "/placeholder.svg"} />
            </div>
          </div>
        </section>
        <section className="py-16 px-4"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Course Highlights</h2><div className="grid md:grid-cols-4 gap-6">{courseHighlights.map((h, i) => (<div key={i} className="p-6 rounded-xl bg-white shadow-lg"><h.icon className="w-12 h-12 text-blue-600 mb-4" /><h3 className="font-semibold mb-2">{h.title}</h3><p className="text-gray-600 text-sm">{h.description}</p></div>))}</div></div></section>
        <section className="py-16 px-4 bg-gray-50"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Curriculum</h2><div className="grid md:grid-cols-2 gap-6">{curriculumModules.map((m, i) => (<div key={i} className="p-6 rounded-xl bg-white shadow-md"><h3 className="text-xl font-bold mb-4 text-blue-600">{m.title}</h3><ul className="space-y-2">{m.topics.map((t, idx) => (<li key={idx} className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>{t}</span></li>))}</ul></div>))}</div></div></section>
        <section className="py-16 px-4"><div className="container mx-auto"><h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2><div className="grid grid-cols-2 md:grid-cols-4 gap-4">{careerOpportunities.map((c, i) => (<div key={i} className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 text-center font-semibold">{c}</div>))}</div></div></section>
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50"><div className="container mx-auto max-w-2xl"><h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2><form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6"><Input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required /><Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required /><Input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required /><Textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} /><Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-500 py-6 text-lg">Submit</Button></form></div></section>
        <BranchSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default SeleniumTesting;

