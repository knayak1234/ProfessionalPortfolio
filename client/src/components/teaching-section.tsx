import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Settings, BookOpen, Award, Quote } from "lucide-react";

export default function TeachingSection() {
  const courses = [
    { name: "Nuclear & Particle Physics", level: "MSc", year: "2023-2024", semester: "Odd", color: "bg-blue-500" },
    { name: "Classical Mechanics", level: "BSc/MSc", year: "2023-2024", semester: "Even", color: "bg-green-500" },
    { name: "Statistical Mechanics", level: "MSc", year: "2024", semester: "Odd", color: "bg-purple-500" },
    { name: "Computer Programming", level: "BSc", year: "2023-2024", semester: "Odd", color: "bg-orange-500" },
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
    <section id="teaching" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">Teaching & Mentorship</h2>
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
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Course</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Level</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Semester</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 ${course.color} rounded-full flex-shrink-0`}></div>
                          <span className="font-medium text-foreground">{course.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline">{course.level}</Badge>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={course.semester === "Odd" ? "default" : "secondary"} className="text-xs">
                          {course.semester}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-center text-muted-foreground">
                        {course.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <role.icon className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{role.title}</h4>
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
            
            {/* Teaching Statistics */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">Courses Taught</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Teaching</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
