import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Award, Users, BookOpen } from "lucide-react";
import logoImage from "@assets/Panchyat_Logo_1749470233751.jpg";
import profileImage from "@assets/knayak_pict_1749469261620.jpg";

export default function HeroSection() {
  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    window.open("/attached_assets/Short_CV_KNayak_1749470083644.pdf", "_blank");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="gradient-bg text-white pt-20 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-purple-200 rounded-full float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white rounded-full float" style={{animationDelay: '0.5s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-8 slide-in-left">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 scale-hover pulse-glow">
                <Award className="w-4 h-4 mr-2" />
                Experimental Physicist
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif gradient-text">
              Dr. Kishora Nayak
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light mb-6 text-blue-100 slide-in-left stagger-1">
              Assistant Professor of Physics
            </h2>
            
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={logoImage} 
                alt="Panchayat College Logo" 
                className="h-8 w-8 object-contain rounded-full"
              />
              <span className="text-lg">Panchayat College, Bargarh</span>
            </div>
            
            <p className="text-lg mb-8 text-blue-50 leading-relaxed max-w-2xl">
              Experimental High-Energy and Nuclear Physicist specializing in QCD Phase Diagram research and 
              Quark-Gluon Plasma studies. Contributing to groundbreaking discoveries at RHIC and LHC through 
              STAR and ALICE collaborations.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={handleDownloadCV} className="bg-white text-primary hover:bg-gray-100">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button 
                onClick={scrollToContact}
                className="bg-green-600 text-white hover:bg-green-700 border-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Publications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-1" />
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">2</div>
                <div className="text-sm text-blue-200 flex items-center justify-center">
                  <Users className="w-4 h-4 mr-1" />
                  Collaborations
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 mt-12 lg:mt-0 slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl mx-auto lg:mx-0 float pulse-glow">
                <img 
                  src={profileImage} 
                  alt="Dr. Kishora Nayak" 
                  className="w-full h-full object-cover scale-hover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white p-3 rounded-xl float scale-hover">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
