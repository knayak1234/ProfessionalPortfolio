import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Zap } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Dr. Nayak's research assistant. I can help you learn about his work in experimental physics, QCD Phase Diagram research, and Quark-Gluon Plasma studies. You can ask me about his publications, research areas, teaching experience, or contact information.",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced knowledge base for more specific responses
  const getKnowledgeResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Contact and collaboration responses (check first to avoid greeting fallback)
    if (lowerQuery.includes('collaborate') || lowerQuery.includes('collaboration') || 
        lowerQuery.includes('work with') || lowerQuery.includes('partner') ||
        lowerQuery.includes('joint research') || lowerQuery.includes('contact') || 
        lowerQuery.includes('reach') || lowerQuery.includes('email') || 
        lowerQuery.includes('phone') || lowerQuery.includes('get in touch') ||
        lowerQuery.includes('connect with')) {
      return "Contact Dr. Kishora Nayak for collaboration or inquiries:\n\n📧 Email: k.nayak1234@gmail.com\n📞 Phone: +91 9938735081\n🏢 Address: P.G. Department of Physics\n   Panchayat College Bargarh\n   Sambalpur University, Odisha, India\n\n⏰ Office Hours:\n• Monday-Friday: 10:00 AM - 4:00 PM\n• Saturday: 10:00 AM - 1:00 PM\n\n🤝 For research collaboration, please email with:\n• Your research interests\n• Proposed collaboration area\n• Your institutional affiliation\n\nHe welcomes collaboration in QCD research, heavy-ion physics, and data analysis projects.";
    }

    // Greeting responses
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return "Hello! I'm here to help you learn about Dr. Kishora Nayak's research in experimental physics. You can ask me about his QCD studies, publications, teaching, or any other aspect of his academic work.";
    }
    
    // Specific research topics
    if (lowerQuery.includes('qcd') && lowerQuery.includes('phase')) {
      return "Dr. Nayak specializes in QCD Phase Diagram research, focusing on:\n\n• Understanding phase transitions in strongly interacting matter\n• Mapping the QCD phase boundary between hadronic matter and quark-gluon plasma\n• Studying the critical point in the QCD phase diagram\n• Experimental verification of theoretical predictions\n\nThis work helps us understand how matter behaved in the early universe microseconds after the Big Bang.";
    }
    
    if (lowerQuery.includes('quark') && lowerQuery.includes('gluon')) {
      return "Dr. Nayak's Quark-Gluon Plasma research involves:\n\n• Creating QGP in relativistic heavy-ion collisions at temperatures >2 trillion Kelvin\n• Studying medium dynamics and transport properties\n• Measuring collective flow patterns to understand QGP properties\n• Analyzing how quarks and gluons behave in this primordial state of matter\n\nThis research recreates conditions from the first microseconds after the Big Bang!";
    }
    
    if (lowerQuery.includes('flow') || lowerQuery.includes('elliptic') || lowerQuery.includes('directed')) {
      return "Flow measurements are Dr. Nayak's specialty:\n\n• Directed flow (v1): Measures sideward deflection of particles\n• Elliptic flow (v2): Indicates collective motion and medium properties\n• Studies flow of identified hadrons (protons, kaons, pions)\n• High-pT charged particle flow analysis\n• Light nuclei flow measurements\n\nThese measurements reveal how the QGP medium responds to initial collision geometry.";
    }
    
    // Collaborations with more detail
    if (lowerQuery.includes('star') && !lowerQuery.includes('collaboration')) {
      return "STAR (Solenoidal Tracker at RHIC) Collaboration:\n\n• Located at Brookhaven National Laboratory, USA\n• Studies Au+Au collisions at various energies\n• Dr. Nayak contributes to flow measurements and QGP studies\n• Focus on beam energy scan program\n• Searching for the QCD critical point\n\nSTAR has been instrumental in discovering the strongly coupled QGP.";
    }
    
    if (lowerQuery.includes('alice') && !lowerQuery.includes('collaboration')) {
      return "ALICE (A Large Ion Collider Experiment) at LHC:\n\n• Based at CERN, Switzerland\n• Studies Pb+Pb collisions at highest energies\n• Dr. Nayak worked on multiplicity dependence studies\n• Research on multi-strange hadron production\n• High-pT resonance studies in various collision systems\n\nALICE studies QGP at the highest temperatures ever achieved in laboratory.";
    }
    
    // Specific publications
    if (lowerQuery.includes('coalescence') || lowerQuery.includes('strangeness')) {
      return "Recent breakthrough publication (2024):\n\n\"Coalescence sum rule and the electric charge- and strangeness-dependences of directed flow in heavy ion collisions\"\n\n• Published in Physics Letters B\n• First author: Dr. Nayak\n• Explores how particle formation depends on electric charge and strangeness\n• Provides new insights into QGP hadronization\n• Bridges theory and experimental observations";
    }
    
    if (lowerQuery.includes('d meson') || lowerQuery.includes('charm')) {
      return "Landmark discovery (Physical Review Letters, 2019):\n\n\"First observation of the directed flow of D⁰ and D̄⁰ in Au+Au collisions\"\n\n• Historic first measurement of charm quark flow\n• Demonstrates thermalization of heavy quarks in QGP\n• Shows charm quarks participate in collective motion\n• Major breakthrough in understanding QGP properties\n• Featured as editor's suggestion in PRL";
    }
    
    // Teaching specifics
    if (lowerQuery.includes('nuclear physics') || lowerQuery.includes('particle physics')) {
      return "Dr. Nayak teaches Nuclear & Particle Physics at MSc level:\n\n• Quantum mechanics applied to nuclear systems\n• Radioactivity and nuclear reactions\n• Particle accelerators and detection methods\n• Standard Model of particle physics\n• Experimental techniques in high-energy physics\n• Current research frontiers in the field\n\nHe brings real research experience from CERN and major collaborations into the classroom.";
    }
    
    if (lowerQuery.includes('classical mechanics')) {
      return "Classical Mechanics course covers:\n\n• Lagrangian and Hamiltonian formulations\n• Central force problems and orbital mechanics\n• Rigid body dynamics and rotational motion\n• Small oscillations and normal modes\n• Advanced mathematical methods in physics\n• Connections to modern physics concepts\n\nDr. Nayak emphasizes the mathematical foundations essential for advanced physics.";
    }
    
    // Experience and background
    if (lowerQuery.includes('cern') || lowerQuery.includes('switzerland')) {
      return "Dr. Nayak's CERN experience (2014-2017):\n\n• Visiting scientist at ALICE experiment\n• Worked on Large Hadron Collider physics\n• Gained expertise in large-scale detector systems\n• Collaborated with international physics community\n• Contributed to understanding of QGP at LHC energies\n\nThis experience shaped his research approach and international perspective.";
    }
    
    if (lowerQuery.includes('china') || lowerQuery.includes('postdoc')) {
      return "Post-doctoral research in China (2018-2021):\n\n• Institute of Modern Physics, Central China Normal University\n• Theoretical and computational QGP studies\n• Developed advanced analysis techniques\n• China Post-doctoral Science Foundation funding\n• Bridged experimental and theoretical approaches\n\nThis period expanded his research toolkit beyond experimental work.";
    }
    
    // Administrative roles
    if (lowerQuery.includes('coordinator') || lowerQuery.includes('computer science')) {
      return "Administrative leadership at Panchayat College:\n\n• Coordinator of Computer Science (Self-Financing) Department\n• Overseeing curriculum development and modernization\n• Managing faculty recruitment and student affairs\n• Implementing quality enhancement initiatives\n• Bridging physics and computational sciences\n\nCombining his computational physics background with administrative duties.";
    }
    
    if (lowerQuery.includes('iqac') || lowerQuery.includes('quality')) {
      return "IQAC (Internal Quality Assurance Cell) member:\n\n• Contributing to institutional accreditation processes\n• Developing quality benchmarks for academic programs\n• Implementing best practices in higher education\n• Fostering research culture in the institution\n• Ensuring continuous improvement in education quality\n\nWorking to elevate the overall academic standards of the college.";
    }
    
    // General categories with more specificity
    if (lowerQuery.includes('research') || lowerQuery.includes('work')) {
      return "Dr. Nayak's research spans experimental and theoretical physics:\n\n• QCD Phase Diagram mapping through heavy-ion collisions\n• Quark-Gluon Plasma medium property studies\n• Collective flow measurements in STAR and ALICE\n• Multi-strange hadron production mechanisms\n• Charm quark thermalization in hot matter\n• Advanced data analysis and computational methods\n\nHis work contributes to understanding the fundamental structure of matter.";
    }
    
    if (lowerQuery.includes('publication') || lowerQuery.includes('paper')) {
      return "Dr. Nayak's 150+ publications span top-tier journals:\n\n• Physics Letters B, Physical Review Letters (first author works)\n• Nature Physics (multi-strange hadron studies)\n• Physical Review C (theoretical collaborations)\n• Nuclear Physics A (experimental results)\n• Conference proceedings from major international meetings\n\nHis work has significant impact in the QGP research community.";
    }
    
    if (lowerQuery.includes('teaching') || lowerQuery.includes('course')) {
      return "Dr. Nayak's teaching portfolio includes:\n\n• Nuclear & Particle Physics (MSc level)\n• Classical and Statistical Mechanics\n• Modern Physics and quantum concepts\n• Computer Programming for physics applications\n• Optics and electromagnetic theory\n• Research methodology and data analysis\n\nHe mentors students from undergraduate to PhD levels.";
    }
    

    
    // Default response with more engaging options
    return "I'm here to help you learn about Dr. Nayak's work! Try asking about:\n\n🔬 \"What is QCD Phase Diagram research?\"\n⚛️ \"Tell me about Quark-Gluon Plasma\"\n📊 \"What are flow measurements?\"\n🏆 \"What awards has he received?\"\n📚 \"What courses does he teach?\"\n🌍 \"Tell me about CERN experience\"\n📧 \"How can I contact him?\"\n\nI have detailed information about all aspects of his academic career!";
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          history: messages.slice(-5)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Use knowledge base as fallback
      const fallbackResponse = getKnowledgeResponse(currentInput);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackResponse,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "What is Dr. Nayak's research focus?",
    "Tell me about his publications",
    "What are his teaching areas?",
    "How can I collaborate with him?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 pulse-glow border-2 border-white/20"
          >
            <div className="relative">
              {/* Chat bubble background */}
              <div className="w-10 h-8 bg-white rounded-2xl flex items-center justify-center relative">
                {/* Bot eyes */}
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                {/* Small antenna */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-0.5 h-2 bg-white"></div>
                  <div className="w-1 h-1 bg-white rounded-full -mt-0.5 mx-auto"></div>
                </div>
              </div>
              {/* Chat tail */}
              <div className="absolute -bottom-1 left-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </div>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 ${isMinimized ? 'h-16' : 'h-[500px]'} transition-all duration-300 shadow-2xl border-2 border-blue-200`}>
        <CardHeader className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6" />
              <CardTitle className="text-lg font-semibold">Research Assistant</CardTitle>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm opacity-90">Online</span>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.role === 'assistant' && (
                        <Bot className="w-4 h-4 mt-0.5 text-blue-600" />
                      )}
                      {message.role === 'user' && (
                        <User className="w-4 h-4 mt-0.5 text-white" />
                      )}
                      <div className="text-sm leading-relaxed">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="p-4 border-t bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-50 text-xs p-1 px-2"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Dr. Nayak's research..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSend} 
                  disabled={!input.trim() || isLoading}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}