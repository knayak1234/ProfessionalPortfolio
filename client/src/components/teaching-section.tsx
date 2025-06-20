import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Settings, BookOpen, Award, Quote } from "lucide-react";

export default function TeachingSection() {
  const courses = [
    { name: "Statistical Mechanics", level: "BSc/MSc", year: "2023-24, 25", semester: "Even", color: "bg-purple-500" },
    { name: "Computer Programming", level: "BSc/MSc", year: "2023-24, 25", semester: "Odd", color: "bg-orange-500" },
    { name: "Nuclear & Particle Physics", level: "MSc", year: "2023-2024", semester: "Odd", color: "bg-blue-500" },
    { name: "Classical Mechanics", level: "BSc/MSc", year: "2023-2024", semester: "Even", color: "bg-green-500" },
    { name: "Modern Physics", level: "BSc", year: "2024", semester: "Even", color: "bg-red-500" },
    { name: "Optics", level: "BSc", year: "2023-2024", semester: "Even", color: "bg-indigo-500" },
  ];

  const administrativeRoles = [
    {
      title: "Coordinator",
      department: "Department of Computer Science (SF)",
      institution: "Panchayat College",
      description: "Leading the self-financing computer science program, overseeing curriculum development and student affairs.",
      icon: Settings,
    },
    {
      title: "IQAC Member",
      department: "Internal Quality Assurance Cell",
      institution: "Panchayat College",
      description: "Contributing to institutional quality enhancement initiatives, accreditation processes, and academic excellence programs.",
      icon: Award,
    },
  ];

  const supervisionHighlights = [
    "Official PhD guide recognized by Sambalpur University, Odisha",
    "Currently guiding Project Assistant funded by MRIP-2023",
    "Supervising thesis projects for several BSc and MSc students",
    "Teaching assistant experience at NISER, Bhubaneswar",
  ];

  return (
    <section id="teaching" className="section-padding bg-gradient-to-br from-white to-blue-50 particles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif gradient-text">Teaching & Mentorship</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to nurturing the next generation of physicists through comprehensive education and research guidance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Teaching Experience */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center font-serif">
              <BookOpen className="w-6 h-6 mr-3 text-primary" />
              Courses Taught
            </h3>
            
            <div className="grid gap-4 mb-8">
              {courses.map((course, index) => (
                <Card key={index} className="research-card hover:glow-border group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 ${course.color} text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{course.name}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">{course.level}</Badge>
                            <Badge variant={course.semester === "Odd" ? "default" : "secondary"} className="text-xs">
                              {course.semester} Semester
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-muted-foreground">{course.year}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Teaching Philosophy */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-serif">
                  <Quote className="w-5 h-5 mr-2 text-primary" />
                  Teaching Philosophy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic mb-4">
                  "I believe in bridging theoretical concepts with practical applications, inspiring students to see physics as a tool for understanding the universe and solving real-world problems."
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Theory and practical laboratory sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>BSc and MSc level instruction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Research mentorship and guidance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Administrative Roles & Supervision */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center font-serif">
              <Settings className="w-6 h-6 mr-3 text-primary" />
              Administrative Roles
            </h3>
            
            <div className="space-y-6 mb-8">
              {administrativeRoles.map((role, index) => (
                <Card key={index} className="research-card hover:glow-border group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <role.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{role.title}</h4>
                        <p className="text-primary font-medium">{role.department}</p>
                        <p className="text-sm text-muted-foreground">{role.institution}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Research Supervision */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  Research Supervision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supervisionHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Teaching Statistics Dashboard */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 text-center">Teaching Impact</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="text-center research-card glow">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 float">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold stat-number mb-1">6+</div>
                    <div className="text-xs text-muted-foreground">Courses Taught</div>
                  </CardContent>
                </Card>
                <Card className="text-center research-card glow">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 float">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold stat-number mb-1">5+</div>
                    <div className="text-xs text-muted-foreground">Years Teaching</div>
                  </CardContent>
                </Card>
                <Card className="text-center research-card glow">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 float">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold stat-number mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Students Guided</div>
                  </CardContent>
                </Card>
                <Card className="text-center research-card glow">
                  <CardContent className="p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 float">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold stat-number mb-1">2</div>
                    <div className="text-xs text-muted-foreground">Admin Roles</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
