import React, { useState, useEffect } from "react";
import {
  Menu,
  Home,
  Phone,
  MessageCircle,
  X,
  Info,
  Grid,
  Send,
  Mail,
  User,
  BookOpen,
  Zap,
  Users,
  Book,
  Star,
  Clock,
  Building2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Globe,
  Layout,
  Atom,
  Box,
  Triangle,
  Hexagon,
  Wind,
  LayoutGrid,
  Layers,
  Server,
  Leaf,
  Coffee,
  Code,
  Cog,
  Smartphone,
  Database,
  Flame,
  Container,
  Network,
  Cloud,
  GitBranch,
  Github,
  Package,
  Gem,
  Droplet,
  Moon,
} from "lucide-react";

// App Data Structure
const appsData = [
  {
    id: 1,
    name: "CAREER WILL ",
    logo: "https://tse2.mm.bing.net/th/id/OIP.4F6qEJS83WVEcmU1jyPOLwHaHa?pid=Api&P=0&h=180",
    link: "https://vipcw.vercel.app",
  },
  {
    id: 2,
    name: "KGS",
    logo: "https://sp.yimg.com/ib/th/id/OIP.T8NeG_XyxPyBrps5qLaQ8QHaHa?pid=Api&w=148&h=148&c=7&rs=1",
    link: "https://vip-khan-sir.vercel.app",
  },
  {
    id: 3,
    name: "RWA",
    logo: "https://sp.yimg.com/ib/th/id/OIP.0F-EqWAXUeKtyEK5o1QlUgHaHa?pid=Api&w=148&h=148&c=7&rs=1",
    link: "https://viprwa.vercel.app",
  },
  {
    id: 5,
    name: "CW OLD BATCHES",
    logo: "https://tse2.mm.bing.net/th/id/OIP.4F6qEJS83WVEcmU1jyPOLwHaHa?pid=Api&P=0&h=180",
    link: "#",
  },
  {
    id: 6,
    name: "UTKARSH CLASSES",
    logo: "https://tse2.mm.bing.net/th/id/OIP._0BaEU_S97FKShlNmsDfvQHaHa?pid=Api&P=0&h=180",
    link: "https://viputkarsh.vercel.app",
  },
  {
    id: 7,
    name: "TEST WAY",
    logo: "https://cdn.phototourl.com/uploads/2026-02-20-5acbea92-51a6-46dd-9d37-eda7dae70e25.png",
    link: "https://testway.netlify.app",
  },
];

const statsData = [
  {
    id: 1,
    icon: <Users className="w-5 h-5" />,
    value: "15K+",
    label: "Active Learners",
  },
  {
    id: 2,
    icon: <Book className="w-5 h-5" />,
    value: "1200+",
    label: "Courses",
  },
  {
    id: 3,
    icon: <Star className="w-5 h-5" />,
    value: "98%",
    label: "Success Rate",
  },
  {
    id: 4,
    icon: <Clock className="w-5 h-5" />,
    value: "24/7",
    label: "Anytime Access",
  },
];

const technicalSkills = [
  { name: "HTML5", icon: Globe, color: "text-orange-500" },
  { name: "CSS3", icon: Layout, color: "text-blue-500" },
  { name: "JAVASCRIPT", icon: Code, color: "text-yellow-500" },
  { name: "TYPESCRIPT", icon: Code, color: "text-blue-500" },
  { name: "REACT", icon: Atom, color: "text-cyan-500" },
  { name: "NEXT.JS", icon: Box, color: "text-slate-800" },
  { name: "VUE.JS", icon: Triangle, color: "text-emerald-500" },
  { name: "NUXT.JS", icon: Box, color: "text-emerald-500" },
  { name: "ANGULAR", icon: Hexagon, color: "text-red-500" },
  { name: "SVELTE", icon: Zap, color: "text-orange-600" },
  { name: "TAILWIND CSS", icon: Wind, color: "text-cyan-500" },
  { name: "BOOTSTRAP", icon: LayoutGrid, color: "text-purple-500" },
  { name: "MATERIAL UI", icon: Layers, color: "text-blue-500" },
  { name: "NODE.JS", icon: Server, color: "text-green-600" },
  { name: "DENO", icon: Server, color: "text-slate-800" },
  { name: "EXPRESS.JS", icon: Server, color: "text-slate-500" },
  { name: "NESTJS", icon: Server, color: "text-red-500" },
  { name: "DJANGO", icon: Server, color: "text-green-700" },
  { name: "FLASK", icon: Server, color: "text-slate-600" },
  { name: "SPRING BOOT", icon: Leaf, color: "text-green-500" },
  { name: "LARAVEL", icon: Server, color: "text-red-500" },
  { name: "PYTHON", icon: Code, color: "text-blue-500" },
  { name: "JAVA", icon: Coffee, color: "text-red-500" },
  { name: "C", icon: Code, color: "text-blue-600" },
  { name: "C++", icon: Code, color: "text-blue-700" },
  { name: "C#", icon: Code, color: "text-purple-600" },
  { name: "GO", icon: Code, color: "text-cyan-600" },
  { name: "RUST", icon: Cog, color: "text-orange-600" },
  { name: "KOTLIN", icon: Code, color: "text-purple-500" },
  { name: "SWIFT", icon: Code, color: "text-orange-500" },
  { name: "DART", icon: Code, color: "text-blue-500" },
  { name: "REACT NATIVE", icon: Smartphone, color: "text-cyan-500" },
  { name: "FLUTTER", icon: Smartphone, color: "text-blue-500" },
  { name: "ANDROID", icon: Smartphone, color: "text-green-500" },
  { name: "IOS", icon: Smartphone, color: "text-slate-400" },
  { name: "MONGODB", icon: Database, color: "text-green-600" },
  { name: "MYSQL", icon: Database, color: "text-blue-500" },
  { name: "POSTGRESQL", icon: Database, color: "text-blue-600" },
  { name: "SQLITE", icon: Database, color: "text-blue-400" },
  { name: "FIREBASE", icon: Flame, color: "text-yellow-500" },
  { name: "REDIS", icon: Database, color: "text-red-500" },
  { name: "DOCKER", icon: Container, color: "text-blue-600" },
  { name: "KUBERNETES", icon: Network, color: "text-blue-700" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "AZURE", icon: Cloud, color: "text-blue-600" },
  { name: "GOOGLE CLOUD", icon: Cloud, color: "text-red-500" },
  { name: "GIT", icon: GitBranch, color: "text-orange-600" },
  { name: "GITHUB", icon: Github, color: "text-slate-800" },
  { name: "WEBPACK", icon: Package, color: "text-blue-500" },
  { name: "VITE", icon: Zap, color: "text-purple-500" },
  { name: "PHP", icon: Code, color: "text-indigo-500" },
  { name: "RUBY", icon: Gem, color: "text-red-600" },
  { name: "SCALA", icon: Code, color: "text-red-500" },
  { name: "PERL", icon: Code, color: "text-blue-600" },
  { name: "HASKELL", icon: Code, color: "text-purple-600" },
  { name: "ELIXIR", icon: Droplet, color: "text-purple-600" },
  { name: "LUA", icon: Moon, color: "text-blue-600" },
];

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [selectedAppPopup, setSelectedAppPopup] = useState<
    (typeof appsData)[0] | null
  >(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsFadingOut(true), 2500);
    const timer2 = setTimeout(() => {
      setShowSplash(false);
      setShowWelcomePopup(true);
    }, 3000);

    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveTab(customEvent.detail);
    };

    window.addEventListener("navigate", handleNavigate);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("navigate", handleNavigate);
    };
  }, []);

  if (showSplash) {
    return (
      <div
        className={`fixed inset-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${isFadingOut ? "opacity-0 scale-110 pointer-events-none blur-md" : "opacity-100 scale-100 blur-0"}`}
      >
        <SplashScreen />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-[#fafafa] text-slate-800 font-sans overflow-x-hidden selection:bg-violet-200 selection:text-violet-900 pb-28 relative">
        {/* Premium Grid Background */}
        <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

        {/* Animated Background Blobs */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-violet-300/20 blur-[120px] pointer-events-none animate-float"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-300/20 blur-[120px] pointer-events-none animate-float-delayed"></div>
        <div
          className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-sky-300/20 blur-[100px] pointer-events-none animate-float"
          style={{ animationDelay: "-10s" }}
        ></div>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-2xl border-b border-white/50 px-4 py-3 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 rounded-full hover:bg-slate-100 transition-colors active:scale-95 text-slate-600"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            VIP Study
          </h1>
          <div
            onClick={() => setActiveTab("profile")}
            className="w-9 h-9 rounded-full bg-white p-[2px] cursor-pointer hover:scale-105 transition-transform border border-slate-200 shadow-sm relative overflow-hidden"
          >
            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden relative">
              <img
                src="https://picsum.photos/seed/avatar/100/100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[1px]">
                <span className="text-[8px] font-black text-slate-800 drop-shadow-sm">
                  RAJE
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar Overlay */}
        <div
          className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[260px] bg-white/80 backdrop-blur-2xl border-r border-white/60 z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[20px_0_40px_rgba(0,0,0,0.05)] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-5 flex items-center justify-between border-b border-slate-100">
            <h2 className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              VIP Study
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 -mr-2 rounded-full hover:bg-slate-100 transition-colors active:scale-95 text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="p-3 space-y-1 mt-2">
            <SidebarItem
              icon={<Home />}
              label="Home"
              onClick={() => {
                setActiveTab("home");
                setIsSidebarOpen(false);
              }}
              active={activeTab === "home"}
            />
            <SidebarItem
              icon={<Users />}
              label="Community"
              onClick={() => {
                setActiveTab("community");
                setIsSidebarOpen(false);
              }}
              active={activeTab === "community"}
            />
            <SidebarItem
              icon={<Phone />}
              label="Contact"
              onClick={() => {
                setActiveTab("contact");
                setIsSidebarOpen(false);
              }}
              active={activeTab === "contact"}
            />
          </nav>

          <div className="absolute bottom-8 left-0 w-full px-5">
            <div className="p-4 rounded-2xl bg-violet-50 border border-violet-100 text-center">
              <p className="text-xs text-violet-800 font-bold mb-1">
                Premium Study Platform
              </p>
              <p className="text-[9px] text-violet-500 uppercase tracking-widest font-semibold">
                Powered by Raj
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto relative z-10">
          {activeTab === "home" && (
            <HomeSection onAppClick={setSelectedAppPopup} />
          )}
          {activeTab === "community" && <CommunitySection />}
          {activeTab === "contact" && <ContactSection />}
          {activeTab === "profile" && (
            <ProfileSection onBack={() => setActiveTab("home")} />
          )}
        </main>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[85%] max-w-sm h-16 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-full px-8 flex justify-between items-center z-50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <BottomNavItem
          icon={<Home />}
          label="Home"
          active={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <BottomNavItem
          icon={<Users />}
          label="Community"
          active={activeTab === "community"}
          onClick={() => setActiveTab("community")}
        />
        <BottomNavItem
          icon={<Phone />}
          label="Contact"
          active={activeTab === "contact"}
          onClick={() => setActiveTab("contact")}
        />
      </div>

      {/* Welcome WhatsApp Popup */}
      {showWelcomePopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-8 max-w-sm w-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative transform transition-all animate-scale-in text-center">
            <button
              onClick={() => setShowWelcomePopup(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-800 mb-2">
              Welcome!
            </h3>
            <p className="text-slate-500 mb-8">
              Join our official WhatsApp channel for the latest updates and
              study materials.
            </p>
            <button
              onClick={() => {
                window.open(
                  "https://www.whatsapp.com/channel/0029VbAvDSX0QeahEg4kkE3U",
                  "_blank",
                );
                setShowWelcomePopup(false);
              }}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_8px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_10px_25px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join Channel
            </button>
          </div>
        </div>
      )}

      {/* App Action Popup */}
      {selectedAppPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAppPopup(null)}
        >
          <div
            className="bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[2rem] p-6 max-w-sm w-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative transform transition-all animate-scale-in text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAppPopup(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 mx-auto rounded-full p-[3px] bg-gradient-to-tr from-violet-400 to-fuchsia-400 mb-4 shadow-md">
              <div className="w-full h-full rounded-full bg-white overflow-hidden border-[3px] border-white">
                <img
                  src={selectedAppPopup.logo}
                  alt={selectedAppPopup.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 mb-6">
              {selectedAppPopup.name}
            </h3>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  window.open(selectedAppPopup.link, "_blank");
                  setSelectedAppPopup(null);
                }}
                className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:shadow-[0_10px_25px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <ChevronRight className="w-5 h-5" />
                Continue to App
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://www.whatsapp.com/channel/0029VbAvDSX0QeahEg4kkE3U",
                    "_blank",
                  );
                }}
                className="w-full bg-green-50 text-green-600 border border-green-200 font-bold py-3.5 px-6 rounded-xl hover:bg-green-100 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Channel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SplashScreen() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between bg-[#fafafa] text-slate-800 p-8 relative overflow-hidden">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-300/30 blur-[120px] animate-float"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-300/30 blur-[120px] animate-float-delayed"></div>

      <div className="flex-1 flex flex-col items-center justify-center w-full animate-fade-in z-10">
        {/* Dynamic Glowing Logo */}
        <div className="relative mb-8 group">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-fuchsia-500 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse"></div>
          {/* Inner Glow */}
          <div
            className="absolute inset-[-4px] bg-gradient-to-tr from-violet-400 to-fuchsia-400 rounded-[2.5rem] blur-md opacity-60 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          <div className="w-32 h-32 bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center relative z-10 border border-white/60 overflow-hidden transform transition-transform duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-100/40 to-fuchsia-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <BookOpen className="w-14 h-14 text-violet-600 drop-shadow-md transform group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        <h1 className="text-5xl font-black tracking-tight mb-4 text-center drop-shadow-sm">
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            VIP
          </span>
          <span className="text-slate-800"> Study</span>
        </h1>

        <div className="h-1.5 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mb-6 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>

        <p className="text-slate-500 font-semibold text-center max-w-[280px] leading-relaxed tracking-wide">
          Premium App Collection
        </p>
      </div>

      <div
        className="absolute bottom-10 left-0 w-full px-6 z-10 animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="p-5 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-xs mx-auto">
          <p className="text-xs text-slate-500 font-bold mb-1.5 tracking-wider uppercase">
            Powered by Raj
          </p>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"></div>
            <div
              className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeSection({
  onAppClick,
}: {
  onAppClick: (app: (typeof appsData)[0]) => void;
}) {
  return (
    <div className="animate-fade-in flex flex-col items-center mt-2 sm:mt-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-8 w-full max-w-3xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-xs font-semibold mb-6 shadow-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>Future of Learning</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-[1.15] mb-4 tracking-tight">
          Unlock the Universe <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            of Learning
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
          Where knowledge meets innovation. Explore institutes, courses, and
          videos in one seamless ecosystem.
        </p>

        {/* Top Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4">
          <button
            onClick={() =>
              document
                .getElementById("institutes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 transition-all text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Explore Institutes
          </button>
          <button
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("navigate", { detail: "community" }),
              )
            }
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 hover:border-violet-300 hover:text-violet-600 transition-all shadow-sm text-sm"
          >
            <Users className="w-4 h-4" />
            Explore Community
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 w-full max-w-4xl px-2">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[1.5rem] p-4 flex flex-col items-center justify-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all"
          >
            <div className="mb-2 bg-violet-50 p-2 rounded-xl text-violet-600">
              {stat.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-0.5">
              {stat.value}
            </h3>
            <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Premier Learning Partners Section */}
      <div
        id="institutes"
        className="w-full mb-8 text-center pt-4 scroll-mt-20"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 flex items-center justify-center gap-2 mb-2">
          <Building2 className="w-6 h-6 text-violet-500" />
          Learning Partners
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mb-6">
          Select an institute to begin your journey
        </p>
      </div>

      {/* App Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-6xl px-4">
        {appsData.map((app) => (
          <button
            key={app.id}
            onClick={() => onAppClick(app)}
            className="group relative bg-white/70 backdrop-blur-xl rounded-xl p-5 flex items-center gap-5 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(139,92,246,0.12)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden text-left w-full"
          >
            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/80 to-fuchsia-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Circular Logo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[3px] bg-gradient-to-tr from-slate-100 to-slate-200 group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-colors duration-500 flex-shrink-0 shadow-sm z-10">
              <div className="w-full h-full rounded-full bg-white overflow-hidden border-[3px] border-white relative">
                <img
                  src={app.logo}
                  alt={app.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] pointer-events-none"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 min-w-0 z-10 flex flex-col justify-center py-1">
              <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-1 truncate group-hover:text-violet-700 transition-colors duration-300">
                {app.name}
              </h3>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-500 group-hover:text-violet-500 transition-colors duration-300">
                Click to explore courses & more
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto mt-2 px-2">
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-violet-50/50 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-violet-100 rounded-[1.5rem] flex items-center justify-center mx-auto mb-5 border border-violet-200 shadow-sm transform rotate-3 hover:rotate-0 transition-transform">
            <Users className="w-8 h-8 text-violet-600" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-800">
            Join Our Community
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Connect with thousands of learners, share resources, and grow
            together. Find study partners and get your questions answered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
            <button className="flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 px-5 py-3.5 rounded-2xl font-bold hover:bg-indigo-100 transition-all hover:-translate-y-0.5 shadow-sm text-sm border border-indigo-100">
              <MessageCircle className="w-5 h-5" />
              Discord Server
            </button>
            <button className="flex items-center justify-center gap-2 bg-sky-50 text-sky-600 px-5 py-3.5 rounded-2xl font-bold hover:bg-sky-100 transition-all hover:-translate-y-0.5 shadow-sm text-sm border border-sky-100">
              <Send className="w-5 h-5" />
              Telegram Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="animate-fade-in max-w-3xl mx-auto mt-2 pb-20 px-2">
      <div
        className="flex items-center mb-6 cursor-pointer text-slate-500 hover:text-violet-600 transition-colors w-fit bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full shadow-sm border border-white/60"
        onClick={onBack}
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span className="font-bold text-xs tracking-wide">BACK</span>
      </div>

      <div className="flex flex-col items-center mb-8 bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60">
        <div className="w-24 h-24 rounded-[1.5rem] bg-gradient-to-tr from-violet-100 to-fuchsia-100 p-1 relative z-10 shadow-md border border-white mb-3 flex items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform">
          <div className="w-full h-full rounded-[1.3rem] bg-white flex items-center justify-center relative overflow-hidden">
            <img
              src="https://picsum.photos/seed/avatar/200/200"
              alt="Avatar"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-[1px]">
              <span className="text-xl font-black text-slate-800 drop-shadow-md tracking-widest">
                RAJE
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-extrabold text-slate-800 mb-0.5">RAJE</h2>
        <p className="text-violet-500 text-[10px] font-bold tracking-widest uppercase bg-violet-50 px-3 py-1 rounded-full mt-1">
          Website Developer
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-8">
        <button
          onClick={() => window.open("https://wa.me/", "_blank")}
          className="flex flex-col items-center justify-center gap-1.5 bg-white/70 backdrop-blur-xl border border-white/60 hover:border-green-200 hover:bg-green-50/80 rounded-[1.5rem] p-4 transition-all hover:shadow-md group"
        >
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 text-green-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-600 tracking-wider mt-1">
            WHATSAPP
          </span>
        </button>
        <button
          onClick={() => window.open("https://t.me/", "_blank")}
          className="flex flex-col items-center justify-center gap-1.5 bg-white/70 backdrop-blur-xl border border-white/60 hover:border-blue-200 hover:bg-blue-50/80 rounded-[1.5rem] p-4 transition-all hover:shadow-md group"
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Send className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-[10px] font-bold text-slate-600 tracking-wider mt-1">
            TELEGRAM
          </span>
        </button>
      </div>

      <div className="max-w-2xl mx-auto bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-white/60">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
            <Code className="w-4 h-4 text-violet-600" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 tracking-wide uppercase">
            Technical Skills
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {technicalSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 bg-slate-50 border border-slate-100 rounded-xl p-2.5 hover:border-violet-200 hover:bg-white hover:shadow-sm transition-all"
            >
              <div className="w-6 h-6 rounded-md bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <skill.icon
                  className={`w-3.5 h-3.5 ${skill.color.replace("text-white", "text-slate-700")}`}
                />
              </div>
              <span className="font-semibold text-[10px] sm:text-xs text-slate-700 truncate">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="animate-fade-in max-w-2xl mx-auto mt-2 px-2">
      <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-violet-100 rounded-full mix-blend-multiply filter blur-[40px] opacity-60 pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="w-16 h-16 bg-fuchsia-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-4 border border-fuchsia-100 shadow-sm transform -rotate-3 hover:rotate-0 transition-transform">
            <Mail className="w-8 h-8 text-fuchsia-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-800">
            Get in Touch
          </h2>
          <p className="text-slate-500 text-sm">
            Have questions? Reach out to us through any platform.
          </p>
        </div>

        <div className="space-y-3 relative z-10 max-w-md mx-auto">
          <ContactButton
            icon={<MessageCircle className="w-5 h-5" />}
            label="Chat on WhatsApp"
            color="bg-green-50 text-green-700 border-green-100 hover:bg-green-100"
            onClick={() => window.open("https://wa.me/", "_blank")}
          />
          <ContactButton
            icon={<Send className="w-5 h-5" />}
            label="Join Telegram"
            color="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
            onClick={() => window.open("https://t.me/", "_blank")}
          />
          <ContactButton
            icon={<Mail className="w-5 h-5" />}
            label="Email Us"
            color="bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
            onClick={() =>
              (window.location.href = "mailto:contact@vipstudy.com")
            }
          />
        </div>
      </div>
    </div>
  );
}

function ContactButton({
  icon,
  label,
  color,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center space-x-2.5 py-3.5 px-5 rounded-2xl ${color} border font-bold text-sm shadow-sm hover:-translate-y-0.5 transition-all active:scale-95`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function SidebarItem({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 ${active ? "bg-violet-50 text-violet-600 border border-violet-100 shadow-sm" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"}`}
    >
      <div className={`${active ? "text-violet-600" : ""}`}>
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-5 h-5",
        })}
      </div>
      <span className="font-semibold text-sm">{label}</span>
    </button>
  );
}

function BottomNavItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center w-12 h-full"
    >
      <div
        className={`absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col items-center justify-center ${active ? "-top-5 w-14 h-14 rounded-full bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_8px_20px_rgba(139,92,246,0.15)]" : "top-1/2 -translate-y-1/2 w-10 h-10 text-slate-400 hover:text-slate-600"}`}
      >
        <div
          className={`${active ? "text-violet-600 mb-0.5" : ""} [&>svg]:w-5 [&>svg]:h-5 transition-colors duration-300`}
        >
          {icon}
        </div>
        {active && (
          <span className="text-[9px] font-bold text-violet-600 tracking-wide animate-fade-in">
            {label}
          </span>
        )}
        {active && (
          <div className="absolute -bottom-[3px] w-1 h-1 rounded-full bg-violet-500 shadow-[0_0_8px_2px_rgba(139,92,246,0.5)] animate-fade-in"></div>
        )}
      </div>
    </button>
  );
}
