import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence, easeOut } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Users,
  GraduationCap,
  Target,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Check,
  HeartPulse,
  Cpu,
  ShieldCheck,
  Activity,
  BarChart3,
  ListChecks,
  Layers,
  Smartphone,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

import manojSirImg from "@/assets/manoj-sir.jpg";
import janviImg from "@/assets/janvi.jpg";
import yogeshImg from "@/assets/yogesh.jpg";
import paramjeetImg from "@/assets/paramjeet.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 h-1 origin-left bg-accent z-50"
      style={{ scaleX }}
    />
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "Results", href: "#results" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${isScrolled ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-slate-200/80" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 lg:px-6">
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center text-accent font-extrabold shadow-lg shadow-primary/20">GT</div>
            <div>
              <p className={`text-sm font-semibold tracking-[0.25em] uppercase ${isScrolled ? "text-slate-900" : "text-white"}`}>Gurtron</p>
              <p className={`text-xs tracking-[0.3em] uppercase ${isScrolled ? "text-slate-500" : "text-slate-200"}`}>Smart Learning</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="transition hover:text-accent">{item.name}</a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="rounded-full bg-accent text-slate-950 px-5 py-3 font-semibold shadow-md shadow-accent/20 hover:bg-yellow-400">
              <a href="#contact">Download App</a>
            </Button>
          </div>

          <button className="lg:hidden p-2 text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/95 border-t border-slate-200 shadow-xl"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-slate-700 font-medium py-3 border-b border-slate-200" onClick={() => setMobileOpen(false)}>
                  {item.name}
                </a>
              ))}
              <Button asChild className="rounded-full bg-primary text-white px-5 py-3 w-full font-semibold shadow-md shadow-primary/10">
                <a href="#contact">Download App</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-32">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold text-slate-900">
              <Sparkles size={18} className="text-accent" />
              Premium AI + Offline Coaching
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                NEET, JEE & Board Preparation with <span className="text-accent">Smart AI Learning</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Trusted offline mentoring combined with AI-powered tests, quizzes and performance tracking.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { label: "AI Learning", icon: HeartPulse },
                { label: "Expert Mentorship", icon: Users },
                { label: "Smart Analytics", icon: BarChart3 },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                    <Icon size={18} className="text-accent" />
                    {item.label}
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full bg-slate-950 text-white px-6 py-4 font-semibold shadow-xl shadow-slate-950/10 hover:bg-slate-900">
                <a href="#contact">Join Institute</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-950 hover:border-slate-300 hover:bg-slate-50">
                <a href="#contact">Download App</a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-4xl font-semibold text-slate-950">12+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Years Experience</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-4xl font-semibold text-slate-950">1000+</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Students Mentored</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-4xl font-semibold text-slate-950">98%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-500">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: easeOut }} className="relative mx-auto max-w-[520px]">
            <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-slate-950/95 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-3xl bg-slate-900 px-4 py-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="text-xs uppercase tracking-[0.3em]">Gurtron App</span>
                </div>
                <div className="text-xs text-slate-500">Live analytics</div>
              </div>

              <div className="mt-6 rounded-[1.75rem] bg-[#091624] p-5 text-slate-100 shadow-inner">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Weekly Growth</p>
                    <p className="text-2xl font-semibold text-white">+22.8%</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 px-3 py-2 text-xs text-accent">Smart AI</div>
                </div>
                <div className="h-48 rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4">
                  <div className="grid h-full gap-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Completion</span>
                      <span>82%</span>
                    </div>
                    <div className="relative flex-1 overflow-hidden rounded-3xl bg-slate-800">
                      <div className="h-full w-[82%] rounded-3xl bg-accent" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-3xl bg-slate-900 p-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Tests</p>
                        <p className="mt-2 text-lg font-semibold">18</p>
                      </div>
                      <div className="rounded-3xl bg-slate-900 p-3">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Rank</p>
                        <p className="mt-2 text-lg font-semibold">Top 3%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-20 w-44 rounded-3xl border border-white/10 bg-white/95 p-4 text-slate-900 shadow-xl shadow-slate-900/10 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Performance</p>
              <p className="mt-2 text-sm font-semibold">AI identifies weak topics and suggests study plans.</p>
            </div>

            <div className="absolute -right-8 bottom-10 w-44 rounded-3xl border border-white/10 bg-slate-950/95 p-4 text-white shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Leaderboard</p>
              <p className="mt-3 text-xl font-semibold">Rank 7</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutManoj() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-28">
      <div className="absolute left-0 top-8 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <BookOpen size={18} className="text-accent" />
              Meet Manoj Sir
            </motion.div>
            <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              The trusted mentor at the heart of Gurtron's smart learning ecosystem.
            </motion.h2>
            <motion.p variants={fadeUp} className="max-w-2xl text-lg leading-8 text-slate-600">
              Manoj Sir brings over a decade of classroom coaching experience to Gurtron, blending structured offline teaching with adaptive AI support for every student.
            </motion.p>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
              {[
                { value: "14+ years", label: "Teaching" },
                { value: "NEET, JEE, Boards", label: "Subjects" },
                { value: "500+ selections", label: "Results" },
                { value: "Personal mentorship", label: "Philosophy" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 70 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: easeOut }} className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-100 bg-slate-900">
              <img src={manojSirImg} alt="Manoj Sir" className="h-[460px] w-full object-cover object-center" />
            </div>
            <div className="relative mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-slate-900 text-lg font-semibold">Mentorship Philosophy</p>
              <p className="mt-3 text-slate-600 leading-7">
                Real learning starts with trust, clarity and confidence. Manoj Sir focuses on concepts, revision clarity and performance habits that last beyond exams.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-accent/30">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-sm transition group-hover:bg-primary/10">
        <Icon size={24} />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

function Features() {
  const features = [
    { title: "AI Test Generator", description: "Auto-create exam-style quizzes using syllabus intelligence.", icon: Activity },
    { title: "Daily Quiz Practice", description: "Bite-sized mocks for daily learning momentum.", icon: ListChecks },
    { title: "Performance Analytics", description: "Visual dashboards that pinpoint score gaps instantly.", icon: BarChart3 },
    { title: "PYQ Practice", description: "Smart revision with previous-year questions and solutions.", icon: Layers },
    { title: "Live Tests", description: "Real-time full-length exams with immediate ranking.", icon: ShieldCheck },
    { title: "Smart Ranking System", description: "Track standing across the batch and zone.", icon: Target },
    { title: "Weak Area Detection", description: "AI surfaces the chapters you need to strengthen.", icon: Zap },
    { title: "Progress Reports", description: "Weekly reports for students and parents alike.", icon: Clock },
  ];

  return (
    <section id="features" className="py-24 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Gurtron App</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Powerful edtech features built for modern students.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">A smart platform that supports offline teaching with AI-backed preparation at every step.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const courses = [
    { title: "NEET", description: "Complete medical entrance preparation with AI-guided revision.", subjects: "Physics, Chemistry, Biology", duration: "12 months", icon: HeartPulse },
    { title: "JEE", description: "Advanced engineering coaching with concept-driven practice.", subjects: "Physics, Chemistry, Maths", duration: "12 months", icon: Cpu },
    { title: "CBSE", description: "Board-focused learning for Class 11 and 12 with test support.", subjects: "All subjects", duration: "6-12 months", icon: GraduationCap },
    { title: "HBSE", description: "HBSE board coaching with targeted revision and exam strategy.", subjects: "All subjects", duration: "6-12 months", icon: ShieldCheck },
  ];

  return (
    <section id="courses" className="py-24 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Courses</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Structured programs for every competitive journey.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {courses.map((course) => (
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} key={course.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-sm">
                <course.icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{course.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">{course.description}</p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-950">Subjects:</span> {course.subjects}</p>
                <p><span className="font-semibold text-slate-950">Duration:</span> {course.duration}</p>
              </div>
              <Button asChild className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 font-semibold text-slate-950 shadow-md shadow-accent/20 hover:bg-yellow-400">
                <a href="#contact">Enroll Now</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Different() {
  const rows = [
    { label: "Delivery", old: "Offline only", neu: "Offline + AI app" },
    { label: "Tests", old: "Manual test prep", neu: "AI-generated smart tests" },
    { label: "Analytics", old: "No data insights", neu: "Smart performance analytics" },
    { label: "Practice", old: "Limited sets", neu: "Unlimited adaptive practice" },
    { label: "Preparation", old: "Generic coaching", neu: "Personalised learning path" },
  ];

  return (
    <section className="py-24 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Why Gurtron</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Modern coaching built for smarter results.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Gurtron is not just a coaching institute. It is an intelligent education ecosystem that blends expert guidance with powerful AI tools.</p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-1 bg-slate-100 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 sm:grid-cols-[1fr_1fr_1fr]">
            <div className="sm:col-span-1">Comparison</div>
            <div className="sm:col-span-1">Traditional Coaching</div>
            <div className="sm:col-span-1">Gurtron Smart Learning</div>
          </div>
          <div className="divide-y divide-slate-200">
            {rows.map((row) => (
              <div key={row.label} className="grid items-center gap-4 px-6 py-6 text-sm sm:grid-cols-[1fr_1fr_1fr]">
                <div className="text-slate-700 font-semibold">{row.label}</div>
                <div className="text-slate-600">{row.old}</div>
                <div className="text-slate-900 font-semibold">{row.neu}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, title }: { end: number; title: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        if (!started) {
          setStarted(true);
          let start: number | null = null;
          const duration = 1800;
          const animate = (time: number) => {
            if (!start) start = time;
            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      }}
      className="rounded-[1.75rem] bg-white p-8 text-center shadow-sm border border-slate-200"
    >
      <p className="text-4xl font-bold text-slate-950">{count}+</p>
      <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-500">{title}</p>
    </motion.div>
  );
}

function Results() {
  const stats = [
    { title: "Students Mentored", value: 1200 },
    { title: "Tests Conducted", value: 4300 },
    { title: "Questions Practiced", value: 98000 },
    { title: "Success Rate", value: 98 },
  ];

  const toppers = [
    { name: "Janvi", score: "100/100", subject: "Physics", image: janviImg },
    { name: "Yogesh", score: "99.8%", subject: "Biology", image: yogeshImg },
    { name: "Paramjeet", score: "Rank 8", subject: "Chemistry", image: paramjeetImg },
  ];

  return (
    <section id="results" className="py-24 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Results</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Proven achievements from real Gurtron students.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Highlights from toppers and successful selections in NEET, JEE and board exams.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat) => (
            <CountUp key={stat.title} end={stat.value} title={stat.title} />
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {toppers.map((topper) => (
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} key={topper.name} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img src={topper.image} alt={topper.name} className="h-56 w-full object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-200">{topper.subject}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-950">{topper.name}</h3>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">{topper.score}</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">Gurtron student achieving strong board and entrance exam performance through blended coaching.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  const screens = [
    { title: "Quiz Interface", accent: "Minimal, fast practice", color: "from-slate-950 via-slate-900 to-slate-800" },
    { title: "Analytics", accent: "Insightful score trends", color: "from-slate-950 via-slate-900 to-slate-800" },
    { title: "Leaderboard", accent: "Batch ranking system", color: "from-slate-950 via-slate-900 to-slate-800" },
    { title: "AI Tests", accent: "Smart generated mocks", color: "from-slate-950 via-slate-900 to-slate-800" },
  ];

  return (
    <section id="screenshots" className="py-24 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">App Screens</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">A premium app experience for students and parents.</h2>
        </div>

        <div className="space-y-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:space-y-0 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-slate-950">Mobile-first learning interface</h3>
              <p className="text-slate-600">Swipe through modern mobile screens designed for quick review and clear progress tracking.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Glassmorphism preview</div>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 pt-4">
            {screens.map((screen) => (
              <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35 }} key={screen.title} className="min-w-[320px] rounded-[2rem] border border-slate-200 bg-gradient-to-br p-6 shadow-xl shadow-slate-900/10">
                <div className="mb-5 flex items-center justify-between text-sm font-semibold text-slate-200">
                  <span>{screen.title}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Live</span>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white">
                  <div className="mb-5 h-48 rounded-[1.4rem] bg-slate-900/80 p-4 shadow-inner">
                    <div className="h-2.5 w-16 rounded-full bg-slate-700" />
                    <div className="mt-6 grid gap-3">
                      <div className="h-3 rounded-full bg-slate-700/90" />
                      <div className="h-3 rounded-full bg-slate-700/80 w-5/6" />
                      <div className="h-3 rounded-full bg-slate-700/80 w-4/6" />
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{screen.accent}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Aditi Sharma", exam: "NEET", content: "Gurtron made my prep feel crisp, focused and connected to real exam patterns. The blend of offline coaching and AI tests was a game changer.", image: janviImg },
    { name: "Rohit Kumar", exam: "JEE", content: "I loved the analytics dashboard. It helped me track weak chapters and gave me confidence in the final months.", image: yogeshImg },
    { name: "Priya Singh", exam: "CBSE", content: "Manoj Sir's guidance plus the app’s daily quizzes helped me stay consistent without pressure.", image: paramjeetImg },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Testimonials</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">What students say about Gurtron.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} key={review.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="h-14 w-14 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.exam} preparation</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-600">“{review.content}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Join Coaching", description: "Enroll in offline batches guided by Manoj Sir.", icon: Users },
    { title: "Practice on App", description: "Daily quizzes and AI-assisted tests keep you on track.", icon: Smartphone },
    { title: "AI Performance Analysis", description: "See your weak zones and progress trends instantly.", icon: BarChart3 },
    { title: "Improve Weak Areas", description: "Targeted practice plans improve scores fast.", icon: ShieldCheck },
  ];

  return (
    <section id="how" className="py-24 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">How Gurtron Works</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">A smooth four-step path to smarter exam readiness.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} key={step.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/5 text-primary shadow-sm">
                <step.icon size={24} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent">Step {index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How does Gurtron work?", a: "Gurtron blends offline coaching with AI-driven tests, progress analytics and personalised practice plans." },
    { q: "Is app access included?", a: "Yes, every student gets Gurtron app access as part of the program, with tests and analytics included." },
    { q: "Which classes are supported?", a: "We support NEET, JEE, CBSE and HBSE students across Class 11, 12 and repeaters." },
    { q: "Is it for NEET/JEE only?", a: "No. While our focus is NEET and JEE, Gurtron also offers strong board preparation and foundation support." },
    { q: "Are tests AI generated?", a: "Yes. Our platform generates AI-aligned tests and quizzes based on your progress, practice history and weak topics." },
  ];

  return (
    <section id="faq" className="py-24 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">FAQs</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Frequently asked questions.</h2>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <AccordionTrigger className="font-semibold text-slate-950">{faq.q}</AccordionTrigger>
                <AccordionContent className="mt-4 text-slate-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry sent!", { description: "Our team will contact you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-28 bg-slate-950 text-white">
      <div className="absolute -left-16 top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Connect with Gurtron and book your seat.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Visit the institute, chat on WhatsApp, or submit your details for a personalised demo.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/30">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent"><Phone size={20} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Phone</p>
                  <a href="tel:+919996655191" className="mt-2 block text-lg font-semibold text-white">+91 99966-55191</a>
                  <a href="tel:+918295852556" className="mt-1 block text-sm text-slate-400">+91 82958-52556</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent"><Mail size={20} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
                  <a href="mailto:info@gurtroninstitute.com" className="mt-2 block text-lg font-semibold text-white">info@gurtroninstitute.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
                  <p className="mt-2 text-lg font-semibold text-white">Near City Kids, Sain Chowk, Narnaul, Haryana</p>
                  <a href="https://maps.app.goo.gl/dggbBmyUmo2CdSot6" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-yellow-300">
                    Open in maps <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 shadow-xl">
              <iframe
                src="https://maps.app.goo.gl/dggbBmyUmo2CdSot6"
                className="h-full w-full"
                title="Gurtron Institute Location"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: easeOut }}>
            <div className="rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
              <h3 className="text-3xl font-semibold text-slate-950">Inquiry Form</h3>
              <p className="mt-3 text-slate-600">Submit your details and our Gurtron counsellor will reach out with the best program recommendation.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <Input required placeholder="Full name" className="mt-3 bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Class / Exam</label>
                  <Input required placeholder="Class 11 / NEET / JEE" className="mt-3 bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Phone number</label>
                  <Input required type="tel" placeholder="+91 9XXXXXXXXX" className="mt-3 bg-slate-50" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <Textarea placeholder="Your query or preferred batch" className="mt-3 bg-slate-50" rows={5} />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:bg-slate-900">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-accent text-slate-950 text-xl font-bold">GT</div>
              <div>
                <p className="text-lg font-semibold text-white">Gurtron</p>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Smart Learning</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">Gurtron — Smart Learning for Future Achievers. Blending trusted classroom coaching with adaptive AI tools for NEET, JEE and board success.</p>
            <Button asChild className="rounded-full bg-accent px-5 py-3 font-semibold text-slate-950 shadow-md shadow-accent/20 hover:bg-yellow-400">
              <a href="#contact">Download App</a>
            </Button>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Courses</h4>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>NEET Preparation</li>
              <li>JEE Coaching</li>
              <li>CBSE Board</li>
              <li>HBSE Board</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</h4>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>+91 99966-55191</p>
              <p>+91 82958-52556</p>
              <p>info@gurtroninstitute.com</p>
              <p>Near City Kids, Sain Chowk, Narnaul</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-sm text-slate-500">© 2026 Gurtron — Smart Learning for Future Achievers.</div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a href="https://wa.me/919996655191" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition-transform hover:-translate-y-1">
      <MessageCircle size={28} />
    </a>
  );
}

export default function App() {
  return (
    <div className="font-sans text-slate-950 bg-white selection:bg-accent selection:text-slate-950 antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <AboutManoj />
        <Features />
        <Courses />
        <Different />
        <Results />
        <Screenshots />
        <Testimonials />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
