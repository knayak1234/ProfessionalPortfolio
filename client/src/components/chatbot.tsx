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

  // Knowledge base for fallback responses
  const getKnowledgeResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('research') || lowerQuery.includes('qcd') || lowerQuery.includes('plasma')) {
      return "Dr. Nayak's research focuses on:\n\n• QCD Phase Diagram studies\n• Quark-Gluon Plasma dynamics in relativistic heavy-ion collisions\n• Flow measurements of identified hadrons and high-pT particles\n• STAR Collaboration at RHIC, BNL\n• ALICE Collaboration at LHC, CERN\n\nHis work contributes to understanding the fundamental properties of matter under extreme conditions.";
    }
    
    if (lowerQuery.includes('publication') || lowerQuery.includes('paper') || lowerQuery.includes('journal')) {
      return "Dr. Nayak has 150+ publications including:\n\n• \"Coalescence sum rule and the electric charge- and strangeness-dependences of directed flow\" (Physics Letters B, 2024)\n• \"First observation of the directed flow of D⁰ and D̄⁰ in Au+Au collisions\" (Physical Review Letters, 2019)\n• Research on multi-strange hadrons in Nature Physics\n\nYou can view his complete publication list on Google Scholar or ORCID: 0000-0003-1942-317X";
    }
    
    if (lowerQuery.includes('teaching') || lowerQuery.includes('course') || lowerQuery.includes('student')) {
      return "Dr. Nayak teaches:\n\n• Nuclear & Particle Physics (MSc)\n• Classical Mechanics & Statistical Mechanics\n• Modern Physics & Computer Programming\n• Optics\n\nHe supervises PhD students as an official guide at Sambalpur University and has guided 50+ students in research projects.";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
      return "Contact Dr. Kishora Nayak:\n\n📧 Email: k.nayak1234@gmail.com\n📞 Phone: +91 9938735081\n🏢 P.G. Department of Physics\n   Panchayat College Bargarh\n   Sambalpur University, Odisha\n\n⏰ Office Hours: Mon-Fri 10AM-4PM, Sat 10AM-1PM";
    }
    
    if (lowerQuery.includes('award') || lowerQuery.includes('recognition')) {
      return "Dr. Nayak's recent recognition:\n\n🏆 Odisha Physical Society Young Scientist Award (2024)\n\nHe has also received significant research funding:\n• China Post-doctoral Science Foundation (₹10,00,000)\n• Mukhyamantri Research & Innovation Grant (₹9,00,000)";
    }
    
    if (lowerQuery.includes('collaboration') || lowerQuery.includes('star') || lowerQuery.includes('alice')) {
      return "Dr. Nayak collaborates with:\n\n🔬 STAR Collaboration at RHIC, Brookhaven National Laboratory, USA\n🔬 ALICE Collaboration at LHC, CERN, Switzerland\n\nHe has extensive international experience at CERN, INFN Catania (Italy), and Institute of Modern Physics, CCNU (China).";
    }
    
    if (lowerQuery.includes('education') || lowerQuery.includes('phd') || lowerQuery.includes('degree')) {
      return "Dr. Nayak's Education:\n\n🎓 PhD in Experimental High-Energy and Nuclear Physics\n   NISER, Odisha (2012-2018)\n🎓 MSc Physics (Particle Physics Specialization)\n   Utkal University, 1st Class (2010-2012)\n🎓 BSc Physics\n   Panchayat College, 1st Class Distinction, University Topper (2007-2010)";
    }
    
    return "I can help you learn about Dr. Nayak's:\n\n• Research in QCD and Quark-Gluon Plasma\n• Publications and academic work\n• Teaching and courses\n• Contact information\n• Awards and recognition\n• International collaborations\n• Educational background\n\nPlease ask a specific question about any of these topics!";
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
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 pulse-glow"
        >
          <Bot className="w-8 h-8 text-white" />
        </Button>
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