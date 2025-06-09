import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Trophy, University, Calendar, MapPin, Users } from "lucide-react";

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
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">About Dr. Nayak</h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
            Distinguished experimental physicist with extensive international research experience. He currently serves as Assistant Professor (OES-I) in the P.G. Department of Physics at Panchayat College Bargarh, affiliated with Sambalpur University, Odisha.
          </p>
          <p className="text-lg text-muted-foreground max-w-5xl mx-auto mt-6 leading-relaxed">
            His research focuses on understanding the QCD Phase Diagram and medium dynamics of Quark-Gluon Plasma (QGP) formed in relativistic heavy-ion collisions. He has contributed to groundbreaking discoveries through his work with STAR and ALICE collaborations at RHIC, USA and LHC, Switzerland.
          </p>
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
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{item.degree}</h4>
                        <p className="text-primary font-medium">{item.institution}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                          {item.note && (
                            <Badge variant="outline" className="text-xs">
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
            
            {/* Awards */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center font-serif">
                <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                Recognition & Awards
              </h4>
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    <div>
                      <h5 className="font-semibold text-foreground">
                        Odisha Physical Society Young Scientist Award
                      </h5>
                      <p className="text-sm text-muted-foreground">2024</p>
                    </div>
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
