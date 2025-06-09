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
    <section id="home" className="gradient-bg text-white pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-8 fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Experimental Physicist
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif">
              Dr. Kishora Nayak
            </h1>
            
            <h2 className="text-xl lg:text-2xl font-light mb-6 text-blue-100">
              Assistant Professor of Physics
            </h2>
            
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/attached_assets/Panchyat_Logo_1749470233751.jpg" 
                alt="Panchayat College Logo" 
                className="h-8 w-8 object-contain"
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
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
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
          
          <div className="lg:col-span-4 mt-12 lg:mt-0 fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mx-0">
                <img 
                  src="/attached_assets/knayak_pict_1749469261620.jpg" 
                  alt="Dr. Kishora Nayak" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-white p-3 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
