import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

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

  // Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      // Create context about Dr. Nayak from the website content
      const drNayakContext = `
You are Dr. Kishora Nayak's research assistant chatbot. You help visitors learn about his academic work and research.

About Dr. Kishora Nayak:
- Assistant Professor (OES-I) at P.G. Department of Physics, Panchayat College Bargarh, Sambalpur University, Odisha
- Experimental High-Energy and Nuclear Physicist
- PhD in Experimental High-Energy and Nuclear Physics from NISER, Odisha (2012-2018)
- Research focus: QCD Phase Diagram and Quark-Gluon Plasma (QGP) dynamics
- Extensive international experience at CERN (Switzerland), INFN Catania (Italy), and Institute of Modern Physics, CCNU (China)

Research Areas:
- QCD Phase Diagram studies
- Quark-Gluon Plasma medium dynamics in relativistic heavy-ion collisions
- Flow measurements (directed and elliptic) of identified hadrons and high-pT particles
- STAR Collaboration at RHIC, BNL, USA
- ALICE Collaboration at LHC, CERN, Switzerland

Notable Publications (150+ total):
- "Coalescence sum rule and the electric charge- and strangeness-dependences of directed flow in heavy ion collisions" (Physics Letters B, 2024)
- "First observation of the directed flow of D⁰ and D̄⁰ in Au+Au collisions" (Physical Review Letters, 2019)
- Research on enhanced production of multi-strange hadrons published in Nature Physics

Teaching:
- Nuclear & Particle Physics (MSc)
- Classical Mechanics, Statistical Mechanics
- Modern Physics, Computer Programming, Optics
- Research supervision: Official PhD guide at Sambalpur University

Administrative Roles:
- Coordinator, Department of Computer Science (SF), Panchayat College
- IQAC Member (Internal Quality Assurance Cell)

Awards:
- Odisha Physical Society Young Scientist Award (2024)

Funding:
- China Post-doctoral Science Foundation (₹10,00,000) - Completed
- Mukhyamantri Research & Innovation (MRIP-2023): ₹9,00,000 - Active

Contact: k.nayak1234@gmail.com, +91 9938735081

Always be helpful, informative, and professional. Answer questions about his research, publications, teaching, and academic background. If asked about something not related to Dr. Nayak's work, politely redirect to his academic expertise.
`;

      // Prepare messages for OpenAI
      const messages = [
        { role: "system", content: drNayakContext },
        ...history.map((msg: any) => ({
          role: msg.role,
          content: msg.content
        })),
        { role: "user", content: message }
      ];

      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      });

      const response = completion.choices[0].message.content;

      res.json({ response });
    } catch (error) {
      console.error("Chat API error:", error);
      res.status(500).json({ 
        error: "Failed to generate response",
        message: "I'm having trouble responding right now. Please try again later or contact Dr. Nayak directly."
      });
    }
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
