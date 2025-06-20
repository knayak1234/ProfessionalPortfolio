import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { researchKnowledge, collaborations, keyPublications, teachingExpertise, academicBackground, recognition, researchMetrics } from "./chatbot-knowledge";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, affiliation, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: "Missing required fields",
        required: ["name", "email", "message"]
      });
    }
    
    // In a real implementation, this would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to sender
    
    console.log("Contact form submission received:", {
      name,
      email,
      affiliation,
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    
    res.json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    });
  });

  // Publications download endpoint
  app.get("/api/download-publications", (req, res) => {
    const filePath = "./attached_assets/Publication_List_KNayak_1749470127101.pdf";
    
    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="Publication_List_KNayak.pdf"');
    
    // Send the file
    res.sendFile(filePath, { root: '.' }, (err) => {
      if (err) {
        console.error('Error sending publication file:', err);
        res.status(404).json({ error: "Publication list not found" });
      }
    });
  });

  // AI-powered chatbot endpoint
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Comprehensive context about Dr. Nayak's research and academic profile
      const drNayakContext = `
You are Dr. Kishora Nayak's AI research assistant. You provide detailed, accurate information about his experimental physics research, publications, and academic work.

CORE RESEARCH AREAS:
• QCD Phase Diagram Studies: Mapping phase transitions in strongly interacting matter, studying the boundary between hadronic matter and quark-gluon plasma
• Quark-Gluon Plasma Research: Creating and studying QGP at temperatures above 2 trillion Kelvin through relativistic heavy-ion collisions
• Collective Flow Measurements: Analyzing directed flow (v1), elliptic flow (v2), and higher harmonics to understand medium properties
• Heavy Flavor Physics: First observation of D-meson flow, demonstrating charm quark thermalization in QGP

MAJOR COLLABORATIONS:
• STAR Collaboration (Brookhaven National Laboratory): Beam energy scan program, QCD critical point search, flow measurements
• ALICE Collaboration (CERN): Multiplicity studies, multi-strange hadron production, high-pT resonance analysis

KEY PUBLICATIONS (Recent Highlights):
• "Coalescence sum rule and electric charge/strangeness dependences of directed flow" (Physics Letters B, 2024)
• "First observation of directed flow of D⁰ and D̄⁰ in Au+Au collisions" (Physical Review Letters, 2019) - Editor's Suggestion
• "Strange hadron collectivity in pPb and PbPb collisions" (Nature Physics, 2023)

ACADEMIC POSITION:
• Assistant Professor, P.G. Department of Physics, Panchayat College Bargarh, Sambalpur University, Odisha
• Coordinator, Computer Science (Self-Financing) Department
• IQAC Member for quality assurance

RESEARCH EXPERIENCE:
• Post-doctoral Fellow, Central China Normal University (2018-2021)
• Visiting Scientist, CERN/ALICE (2014-2017)
• Ph.D. in Physics, Sambalpur University (2014)

TEACHING (Current 2023-25):
• Statistical Mechanics (MSc Physics)
• Computer Programming (BSc Physics)  
• Particle Physics (MSc Physics)

RESEARCH METRICS:
• 200+ publications
• 10,000+ citations
• H-index: 42
• 10+ Master's thesis supervisions

AWARDS & RECOGNITION:
• Young Scientist Award, Indian Physics Association (2020)
• Research Grant from Government of Odisha (₹15 Lakhs)
• Best Paper Award, National Conference (2019)

Provide informative, accurate responses about Dr. Nayak's work. Be specific about his research contributions, explain complex physics concepts clearly, and highlight his expertise in experimental heavy-ion physics.`;

      // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: drNayakContext
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      });

      const reply = completion.choices[0].message.content || "I apologize, but I couldn't generate a response. Please try asking your question again.";

      res.json({ reply });

    } catch (error) {
      console.error('Chatbot API error:', error);
      res.status(500).json({ 
        error: "Unable to process your request at the moment. Please try again later.",
        fallback: true
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
