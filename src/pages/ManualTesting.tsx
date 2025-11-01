import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Users,
  Award,
  BookOpen,
  Code,
  Target,
  TrendingUp,
  Star,
  Phone,
  Mail,
  MessageCircle,
  X,
  Briefcase,
  Download,
  FileText,
  ChevronRight,
  Home,
  Plus,
  Minus,
  Database,
  Wrench,
  Calendar,
  MapPin,
  Laptop,
  MessageSquare,
  GraduationCap,
  HelpCircle,
  Lightbulb,
  Monitor,
  UserCheck,
  CheckCircle,
  ClipboardList,
  Trophy,
  PresentationChartLine,
  FolderOpen,
  Certificate,
  ArrowUp,
  UserCircle,
  BadgeCheck,
  Rocket
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { CourseStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";
import { useToast } from "@/hooks/use-toast";
import BranchSection from "@/components/BranchSection";

const ManualTesting = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const partners = [
    { name: "Accenture", logo: "/images/Logo folder/accenture.jpg" },
    { name: "TCS", logo: "/images/Logo folder/tcs.jpg" },
    { name: "Capgemini", logo: "/images/Logo folder/capgemini.jpg" },
    { name: "Infosys", logo: "/images/Logo folder/infosos.jpg" },
  ];

  const courseHighlights = [
    { title: "Pan India Placements", icon: MapPin, description: "Access to placement opportunities across India." },
    { title: "80% Practical Training", icon: Laptop, description: "Hands-on experience with real-world projects." },
    { title: "Global Certifications", icon: Award, description: "Earn industry-recognized certifications." },
    { title: "Expert Mentorship", icon: Users, description: "Learn from industry professionals." },
  ];

  const curriculumModules = [
    {
      title: "Introduction to Manual Testing",
      topics: ["Software Testing Basics", "SDLC Models", "STLC - Software Test Life Cycle", "Test Planning"]
    },
    {
      title: "Test Design Techniques",
      topics: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Table Testing", "State Transition Testing"]
    },
    {
      title: "Test Case Development",
      topics: ["Writing Test Cases", "Test Case Templates", "Test Data Preparation", "Test Case Review"]
    },
    {
      title: "Defect Management",
      topics: ["Bug Lifecycle", "Defect Reporting", "Severity vs Priority", "Bug Tracking Tools - JIRA"]
    }
  ];

  const careerOpportunities = [
    "Software Test Engineer",
    "QA Analyst",
    "Test Lead",
    "Quality Assurance Engineer",
    "Manual Tester"
  ];

  return (
    <DarkModeProvider>
      <SEO 
        title="Manual Testing Course - QA Testing Training"
        description="Master Manual Testing with comprehensive training in Test Planning, Test Cases, Bug Reporting, and Quality Assurance. Get hands-on experience and placement support."
        keywords="manual testing course, QA testing, test cases, bug reporting, quality assurance training"
        canonical="/manual-testing"
        ogImage="/images/software testing/software testing.png"
        category="IT Courses"
      />
      <CourseStructuredData 
        name="Manual Testing Training Course"
        description="Complete Manual Testing training covering test planning, test case development, defect management, and QA methodologies."
        url="https://quastech.co.in/manual-testing"
        duration="P3M"
        courseMode="blended"
        image="https://quastech.co.in/images/software testing/software testing.png"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Courses", url: "/#courses" },
          { name: "Manual Testing", url: "/manual-testing" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* Hero Banner Section */}
        <section 
          className="relative w-full h-[600px] flex items-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #f97316 100%)'
          }}
        >
          <div className="absolute inset-0 bg-black/20" />
          
          <div className="relative z-10 w-full container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white/90 text-sm"
                >
                  <Link to="/" className="hover:text-white flex items-center gap-1">
                    <Home className="w-4 h-4" />
                    Home
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span>Courses</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>Manual Testing</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold"
                >
                  Manual Testing Training
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-white/90"
                >
                  Master the fundamentals of software quality assurance
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Download Brochure
                  </Button>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="hidden lg:block"
              >
                <img
                  src="/images/software testing/software testing.png"
                  alt="Manual Testing"
                  className="w-full h-auto"
                  onError={(e) => e.currentTarget.src = "/placeholder.svg"}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courseHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <highlight.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculumModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-white shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-600">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {careerOpportunities.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100 text-center"
                >
                  <p className="font-semibold text-gray-800">{career}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Enquire Now</h2>
            <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-6 text-lg">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </section>

        <BranchSection />
        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default ManualTesting;

