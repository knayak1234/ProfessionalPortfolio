import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, ExternalLink, Globe, Presentation, Calendar } from "lucide-react";

export default function PublicationsSection() {
  const publicationStats = [
    { number: "25+", label: "Total Publications", icon: BookOpen, color: "bg-blue-500" },
    { number: "9", label: "Journal Articles", icon: Award, color: "bg-green-500" },
    { number: "16", label: "Conference Papers", icon: Presentation, color: "bg-purple-500" },
    { number: "11", label: "Invited Talks", icon: Globe, color: "bg-orange-500" },
  ];

  const selectedPublications = [
    {
      title: "Directed and elliptic flow of identified hadrons, high-pT charged hadrons and light nuclei in Au+Au collisions at STAR",
      authors: "Kishora Nayak (STAR Collaboration)",
      journal: "Nuclear Physics A",
      volume: "1005",
      pages: "121855",
      year: "2021",
      type: "First Author",
      collaboration: "STAR",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "First observation of the directed flow of D⁰ and D̄⁰ in Au+Au collisions at √sNN = 200 GeV",
      authors: "J. Adam et al. (STAR Collaboration)",
      journal: "Physical Review Letters",
      volume: "123",
      pages: "162301",
      year: "2019",
      type: "High Impact",
      collaboration: "STAR",
      color: "bg-red-100 text-red-800",
    },
    {
      title: "Enhanced production of multi-strange hadrons in high-multiplicity proton collisions",
      authors: "ALICE Collaboration (J. Adam et al.)",
      journal: "Nature Physics",
      volume: "13",
      pages: "535-539",
      year: "2017",
      type: "Nature Journal",
      collaboration: "ALICE",
      color: "bg-purple-100 text-purple-800",
    },
    {
      title: "Energy dependence study of directed flow in Au+Au collisions using an improved coalescence in a multiphase transport model",
      authors: "Kishora Nayak et al.",
      journal: "Physical Review C",
      volume: "100",
      pages: "054903",
      year: "2019",
      type: "Lead Author",
      collaboration: "Theory",
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  const recentConferences = [
    {
      title: "Quark Matter 2019",
      location: "Wuhan, China",
      year: "2019",
      talk: "Directed and elliptic flow of identified hadrons, high-pT charged hadrons and light nuclei in Au+Au collisions at STAR",
      type: "Invited",
    },
    {
      title: "ATHIC 2018",
      location: "Hefei, China",
      year: "2018",
      talk: "Using AMPT study: The directed flow in Au+Au collisions at 7.7-200 GeV",
      type: "Talk",
    },
    {
      title: "Moriond QCD 2017",
      location: "La Thule, Italy",
      year: "2017",
      talk: "Multiplicity dependence of identified particle production in pp collisions with ALICE",
      type: "Invited",
    },
    {
      title: "ICPAQGP 2015",
      location: "VECC, Kolkata, India",
      year: "2015",
      talk: "High transverse momentum resonance production in pp, p-Pb, Pb-Pb collisions at LHC",
      type: "Talk",
    },
  ];

  return (
    <section id="publications" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">Publications & Presentations</h2>
          <p className="text-xl text-muted-foreground">
            Peer-reviewed research contributions and international conference presentations
          </p>
        </div>
        
        {/* Publication Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16 fade-in">
          {publicationStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${stat.color} text-white rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Selected Publications */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 font-serif">Selected Publications</h3>
          <div className="space-y-6">
            {selectedPublications.map((pub, index) => (
              <Card key={index} className="publication-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className={pub.color}>{pub.type}</Badge>
                    <span className="text-sm text-muted-foreground">{pub.year}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground mb-3 leading-relaxed">
                    "{pub.title}"
                  </h4>
                  
                  <p className="text-muted-foreground mb-2">
                    <span className="font-medium">{pub.authors}</span>
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="italic">{pub.journal}</span>{" "}
                    <span className="font-mono">{pub.volume}</span>, {pub.pages} ({pub.year})
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {pub.collaboration}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('/api/download-publications', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Complete Publication List
            </Button>
          </div>
        </div>
        
        {/* Research Profiles */}
        <div className="mb-16 fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 font-serif text-center">Research Profiles</h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open('https://orcid.org/0000-0000-0000-0000', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">ORCID</h4>
                <p className="text-sm text-muted-foreground">0000-0000-0000-0000</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open('https://www.researchgate.net/profile/Kishora-Nayak', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">ResearchGate</h4>
                <p className="text-sm text-muted-foreground">Profile</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open('https://scholar.google.com/citations?user=AUTHOR_ID', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Google Scholar</h4>
                <p className="text-sm text-muted-foreground">Citations</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="fade-in">
          <h3 className="text-2xl font-semibold text-foreground mb-8 font-serif">Recent Conference Presentations</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recentConferences.map((conf, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Presentation className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{conf.title}</h4>
                    </div>
                    {conf.type === "Invited" && (
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                        {conf.type}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Globe className="w-4 h-4 mr-1" />
                      {conf.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {conf.year}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic">
                    "{conf.talk}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
