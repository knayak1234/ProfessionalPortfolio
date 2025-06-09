import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  University, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ExternalLink,
  Send,
  Atom,
  Flame,
  BarChart3
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. Dr. Nayak will get back to you soon.",
        });
        setFormData({ name: "", email: "", affiliation: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later or contact directly via email.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const researchAreas = [
    { name: "High Energy Physics", icon: Atom },
    { name: "Nuclear Physics", icon: Flame },
    { name: "QCD Studies", icon: BarChart3 },
    { name: "Heavy Ion Collisions", icon: Atom },
    { name: "Data Analysis", icon: BarChart3 },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-serif">Get in Touch</h2>
          <p className="text-xl text-muted-foreground">
            Connect for research collaborations, academic discussions, or institutional partnerships
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <University className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Institution</h4>
                    <p className="text-muted-foreground">P.G. Department of Physics</p>
                    <p className="text-muted-foreground">Panchayat College Bargarh-768028</p>
                    <p className="text-muted-foreground">Odisha, India</p>
                    <p className="text-sm text-muted-foreground mt-1">(Affiliated to Sambalpur University)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-primary hover:text-primary/80 cursor-pointer">
                      kishora.nayak@panchayatcollege.edu
                    </p>
                    <p className="text-sm text-muted-foreground">Academic inquiries and research collaboration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                    <p className="text-sm text-muted-foreground">Office hours: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <ExternalLink className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Professional Profiles</h4>
                    <div className="space-y-1">
                      <p className="text-primary hover:text-primary/80 cursor-pointer text-sm">
                        ORCID: 0000-0000-0000-0000
                      </p>
                      <p className="text-primary hover:text-primary/80 cursor-pointer text-sm">
                        ResearchGate Profile
                      </p>
                      <p className="text-primary hover:text-primary/80 cursor-pointer text-sm">
                        Google Scholar
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Office Hours */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center font-serif">
                  <Clock className="w-5 h-5 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 1:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Please email in advance to schedule appointments outside regular hours.
                </p>
              </CardContent>
            </Card>
            
            {/* Research Collaboration Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif">Research Collaboration Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {researchAreas.map((area, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                      <area.icon className="w-3 h-3" />
                      <span>{area.name}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="affiliation">Institution/Affiliation</Label>
                    <Input
                      id="affiliation"
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleInputChange}
                      placeholder="Your institution or organization"
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full mt-2 px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="research-collaboration">Research Collaboration</option>
                      <option value="academic-inquiry">Academic Inquiry</option>
                      <option value="student-supervision">Student Supervision</option>
                      <option value="conference-invitation">Conference Invitation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Enter your message here..."
                      required
                      className="mt-2 resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
