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
          
          <div className="lg:col-span-4 mt-12 lg:mt-0 fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl mx-auto lg:mx-0">
                <img 
                  src={profileImage} 
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
        
        {/* About Dr. Nayak Preview */}
        <div className="mt-16 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">About Dr. Nayak</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                Dr. Kishora Nayak is a distinguished experimental physicist with extensive international research experience. 
                He currently serves as Assistant Professor (OES-I) in the P.G. Department of Physics at Panchayat College Bargarh, 
                affiliated with Sambalpur University, Odisha.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                His research focuses on understanding the QCD Phase Diagram and medium dynamics of Quark-Gluon Plasma (QGP) 
                formed in relativistic heavy-ion collisions. He has contributed to groundbreaking discoveries through his work 
                with STAR and ALICE collaborations at RHIC and LHC.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">PhD</div>
                  <div className="text-sm text-blue-200">NISER, Odisha</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">2024</div>
                  <div className="text-sm text-blue-200">Young Scientist Award</div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Assistant Professor (2023 - Present)</div>
                      <div className="text-blue-200 text-sm">Panchayat College Bargarh</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Post-Doc (2018-2023)</div>
                      <div className="text-blue-200 text-sm">CCNU China & IISER Tirupati</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">PhD (2012-2018)</div>
                      <div className="text-blue-200 text-sm">NISER, Odisha</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
