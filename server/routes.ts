import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
