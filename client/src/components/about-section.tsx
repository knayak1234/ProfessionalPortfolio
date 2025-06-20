import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Trophy, University, Calendar, MapPin, Users, Award } from "lucide-react";

export default function AboutSection() {
  const education = [
    {
      degree: "PhD in Experimental High-Energy and Nuclear Physics",
      institution: "NISER, Odisha",
      period: "2012-2018",
      icon: GraduationCap,
    },
    {
      degree: "MSc Physics (Particle Physics Specialization)",
      institution: "Utkal University, Vani Vihar",
      period: "2010-2012",
      note: "1st Class",
      icon: GraduationCap,
    },
    {
      degree: "BSc Physics",
      institution: "Panchayat College, Bargarh",
      period: "2007-2010",
      note: "1st Class Distinction, University Topper",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      position: "Assistant Professor (OES-I)",
      institution: "P.G. Department of Physics, Panchayat College Bargarh",
      period: "2023 - Present",
      affiliation: "Sambalpur University, Odisha",
    },
    {
      position: "Post-Doctoral Researcher",
      institution: "Institute of Modern Physics, CCNU, China & IISER Tirupati, India",
      period: "2018-2023",
    },
  ];

  const internationalExp = [
    {
      location: "CERN, Switzerland",
      description: "Visiting Scientist at ALICE experiment, LHC",
      period: "2014-2017",
      icon: Globe,
    },
    {
      location: "INFN, Catania, Italy",
      description: "Research collaboration during doctorate studies",
      icon: Globe,
    },
    {
      location: "Institute of Modern Physics, CCNU, China",
      description: "Post-doctoral Research Scientist",
      period: "2018-2021",
      icon: University,
    },
  ];

  const awards = [
    {
      title: "Odisha Physical Society Young Scientist Award",
      year: "2024",
      icon: Trophy,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 to-gray-100 particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif gradient-text">About Dr. Nayak</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed px-4 mb-6">
              Experimental physicist with extensive international research experience. He currently serves as Assistant Professor (OES-I) in the P.G. Department of Physics at Panchayat College Bargarh, affiliated with Sambalpur University, Odisha.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed px-4">
              His research focuses on understanding the QCD Phase Diagram and medium dynamics of Quark-Gluon Plasma (QGP) formed in relativistic heavy-ion collisions. He has contributed to groundbreaking discoveries through his work with STAR and ALICE collaborations at RHIC, USA and LHC, Switzerland.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education & Experience */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center font-serif">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education & Experience
            </h3>
            
            {/* Current Position */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground mb-1">
                      Assistant Professor (OES-I)
                    </h4>
                    <p className="text-primary font-medium">P.G. Department of Physics</p>
                    <p className="text-muted-foreground">Panchayat College Bargarh</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        2023 - Present
                      </span>
                      <span className="flex items-center">
                        <University className="w-4 h-4 mr-1" />
                        Sambalpur University
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education Timeline */}
            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={index} className="timeline-item research-card hover:glow-border group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{item.degree}</h4>
                        <p className="text-primary font-medium">{item.institution}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{item.period}</span>
                          </div>
                          {item.note && (
                            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                              {item.note}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* International Experience & Recognition */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center font-serif">
              <Globe className="w-6 h-6 mr-3 text-primary" />
              International Experience
            </h3>
            
            <div className="space-y-6">
              {internationalExp.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{item.location}</h4>
                    </div>
                    <p className="text-muted-foreground mb-2">{item.description}</p>
                    {item.period && (
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">STAR Collaboration, RHIC</h4>
                  </div>
                  <p className="text-muted-foreground">Brookhaven National Laboratory, USA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Selected Recognition & Awards - Full Width */}
        <div className="mb-16 relative">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-amber-100/40 to-orange-100/30 rounded-3xl blur-xl -z-10"></div>
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-300/50 rounded-2xl p-8 shadow-2xl">
            <div className="absolute top-4 right-4">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-2 font-serif">
                Selected Recognition & Awards
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
              <p className="text-lg text-amber-700 mt-3">Honoring excellence in experimental physics research</p>
              
              {/* Award Ceremony Photo */}
              <div className="mt-6 flex justify-center">
                <div className="relative group">
                  <img 
                    src="/attached_assets/image_1750443196128.png" 
                    alt="Award ceremony - Dr. Nayak receiving recognition"
                    className="w-48 h-32 object-cover rounded-lg shadow-lg border-2 border-yellow-200 group-hover:border-yellow-400 transition-all duration-300 group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs bg-black/60 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Award ceremony presentation
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-yellow-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Trophy className="w-8 h-8 text-yellow-500 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute -inset-1 bg-yellow-400/30 rounded-full blur animate-pulse"></div>
                      </div>
                      <div>
                        <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">Distinguished Award</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold text-sm rounded-full shadow-md">
                        2024
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent mb-2">
                    Odisha Physical Society Young Scientist Award
                  </h4>
                  
                  <p className="text-amber-600 font-semibold mb-3">Odisha Physical Society</p>
                  
                  <p className="text-gray-600 italic mb-4 leading-relaxed">
                    "Recognizing outstanding contributions to experimental physics research in QCD Phase Diagram studies and heavy-ion collision analysis"
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Experimental Physics</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">QCD Research</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Young Scientist Excellence</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Heavy-Ion Physics</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Additional Recognition Placeholder */}
              <Card className="bg-white/60 backdrop-blur-sm border-yellow-200/40 shadow-lg hover:shadow-xl transition-all duration-300 opacity-70">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-amber-500" />
                      <div>
                        <h5 className="font-semibold text-amber-700">Research Excellence Recognition</h5>
                        <p className="text-sm text-amber-600">Ongoing contributions to international collaborations</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-amber-600 border-amber-300">Continuous</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Research Expertise & Contributions */}
        <div className="mt-12 fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center font-serif">Research Expertise & Key Contributions</h3>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">QCD Phase Diagram</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized research in understanding the Quantum Chromodynamics phase diagram and the transition between hadronic matter and quark-gluon plasma states in extreme conditions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Heavy-Ion Collisions</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive experience in analyzing relativistic heavy-ion collision data from RHIC and LHC experiments to study the properties of quark-gluon plasma and medium dynamics.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">International Collaborations</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Active member of prestigious international collaborations including STAR at RHIC and ALICE at LHC, contributing to groundbreaking discoveries in high-energy nuclear physics.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
