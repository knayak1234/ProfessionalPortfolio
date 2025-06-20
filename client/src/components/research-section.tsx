import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Atom, Flame, BarChart3, Globe, DollarSign, Users, GraduationCap, Target, Zap, TrendingUp, Eye, Play, ExternalLink } from "lucide-react";

export default function ResearchSection() {
  const researchAreas = [
    {
      title: "QCD Phase Diagram",
      description: "Understanding the fundamental properties of Quantum Chromodynamics through experimental investigation of phase transitions in strongly interacting matter.",
      icon: Atom,
      color: "bg-blue-500",
      impact: "High",
      publications: "25+",
      progress: 85,
    },
    {
      title: "Quark-Gluon Plasma",
      description: "Investigating medium dynamics and properties of Quark-Gluon Plasma formed in relativistic heavy-ion collisions at RHIC and LHC energies.",
      icon: Flame,
      color: "bg-orange-500",
      impact: "Critical",
      publications: "40+",
      progress: 92,
    },
    {
      title: "Flow Measurements",
      description: "Directed and elliptic flow studies of identified hadrons, high-pT charged particles, and light nuclei in heavy-ion collisions.",
      icon: BarChart3,
      color: "bg-green-500",
      impact: "Significant",
      publications: "30+",
      progress: 78,
    },
  ];

  const researchStats = [
    { number: "200+", label: "Total Publications", icon: Target, color: "from-blue-500 to-blue-600" },
    { number: "10K+", label: "Total Citations", icon: Eye, color: "from-red-500 to-red-600" },
    { number: "5+", label: "Years Experience", icon: TrendingUp, color: "from-green-500 to-green-600" },
    { number: "2", label: "Major Collaborations", icon: Users, color: "from-purple-500 to-purple-600" },
    { number: "₹19L", label: "Research Funding", icon: DollarSign, color: "from-orange-500 to-orange-600" },
  ];

  const collaborations = [
    {
      name: "STAR Collaboration",
      location: "RHIC, BNL, USA",
      description: "Working on directed and elliptic flow studies of identified hadrons in Au+Au collisions to understand the medium dynamics of QGP.",
      icon: "⭐",
      url: "https://www.star.bnl.gov",
    },
    {
      name: "ALICE Collaboration",
      location: "LHC, CERN, Switzerland",
      description: "Research on multiplicity dependence of light hadron production and high-pT resonance studies in various collision systems.",
      icon: "🔬",
      url: "https://alice-collaboration.web.cern.ch/",
    },
  ];

  const funding = [
    {
      title: "China Post-doctoral Science Foundation",
      grantId: "2019M662681",
      amount: "₹10,00,000",
      status: "Completed",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Mukhyamantri Research & Innovation (MRI)",
      organization: "Government of Odisha",
      grantId: "MRIP-2023 (23EM/PH/124)",
      amount: "₹9,00,000",
      status: "Active",
      color: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <section id="research" className="section-padding bg-gradient-to-br from-slate-50 to-blue-50 particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif gradient-text">Research Focus</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the fundamental properties of matter under extreme conditions through experimental high-energy physics
          </p>
        </div>

        {/* Research Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 fade-in">
          {researchStats.map((stat, index) => (
            <Card key={index} className={`text-center research-card glow hover:glow-border stagger-${index + 1}`}>
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 float`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold stat-number mb-2 counter">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Research Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 fade-in">
          {researchAreas.map((area, index) => (
            <Card key={index} className="research-card reveal group cursor-pointer">
              <CardHeader>
                <div className={`w-16 h-16 ${area.color} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold flex items-center justify-between">
                  {area.title}
                  <Badge variant="outline" className="text-xs">{area.impact}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">{area.description}</p>
                
                <div className="reveal-content space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Publications</span>
                    <span className="font-semibold text-primary">{area.publications}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Research Progress</span>
                      <span className="font-semibold">{area.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full progress-bar ${area.color.replace('bg-', 'bg-gradient-to-r from-')}`}
                        style={{ width: `${area.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-3 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Current Research Projects */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-serif">
            Major Collaborations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborations.map((collab, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <a
                      href={collab.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-3xl hover:scale-110 transition-transform duration-200 cursor-pointer"
                      title={`Visit ${collab.name} website`}
                    >
                      {collab.icon}
                    </a>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <a
                          href={collab.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
                          title={`Visit ${collab.name} website`}
                        >
                          {collab.name}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </a>
                        <a
                          href={collab.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-primary/10 hover:bg-primary hover:text-white text-primary rounded-full text-xs font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                        >
                          Visit Site
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                      <p className="text-primary font-medium mb-3">{collab.location}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{collab.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Research Funding */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-serif">
            Research Funding
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {funding.map((grant, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">{grant.title}</h4>
                      {grant.organization && (
                        <p className="text-sm text-primary font-medium mb-1">{grant.organization}</p>
                      )}
                      <p className="text-sm text-muted-foreground mb-2">Grant ID: {grant.grantId}</p>
                      <p className="text-lg font-semibold text-primary">{grant.amount}</p>
                    </div>
                    <Badge className={grant.color}>{grant.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Research Supervision */}
        <Card className="fade-in">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center font-serif">
              Research Supervision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Current Supervision
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Project Assistant funded by MRIP-2023 (23EM/PH/124)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multiple BSc and MSc thesis students</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Recognition
                </h4>
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <p className="text-foreground flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      Official PhD Guide recognition by Sambalpur University, Odisha
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
