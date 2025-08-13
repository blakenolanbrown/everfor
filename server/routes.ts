import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/leads", async (req, res) => {
    try {
      const validatedData = insertLeadSchema.parse(req.body);
      const lead = await storage.createLead(validatedData);
      
      // TODO: Integrate with email service (Nodemailer) to send notifications
      // TODO: Integrate with CRM system if needed
      
      res.status(201).json({ success: true, leadId: lead.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit form" 
        });
      }
    }
  });

  // Get all leads (for admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch leads" 
      });
    }
  });

  // Serve coming soon page for preview
  app.get("/coming-soon", (req, res) => {
    const comingSoonHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EVERfor - Legacy Video Services</title>
    <meta name="description" content="Professional family legacy video preservation services. Capture precious family stories before they're lost forever.">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root {
            --gold: #E6B73A;
            --gold-light: #F4D03F;
            --navy: #3A4A66;
            --deep-charcoal: #2C3E50;
            --cream: #FDFCF5;
            --warm-gray: #7F8C8D;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, var(--cream) 0%, #F8F6F0 100%);
            color: var(--deep-charcoal);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        
        .container {
            max-width: 800px;
            text-align: center;
            background: white;
            border-radius: 24px;
            padding: 3rem 2rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            border: 1px solid rgba(230, 183, 58, 0.2);
        }
        
        .logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 4rem;
            font-weight: 700;
            color: var(--deep-charcoal);
            margin-bottom: 1rem;
            letter-spacing: -2px;
        }
        
        .tagline {
            font-size: 1.5rem;
            color: var(--warm-gray);
            margin-bottom: 3rem;
            font-weight: 300;
        }
        
        .video-container {
            margin: 3rem 0;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
            aspect-ratio: 16/9;
        }
        
        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .cta-section {
            margin-top: 3rem;
        }
        
        .cta-title {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem;
            font-weight: 600;
            color: var(--deep-charcoal);
            margin-bottom: 1rem;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
            color: var(--navy);
            text-decoration: none;
            padding: 1rem 2.5rem;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            box-shadow: 0 8px 16px rgba(230, 183, 58, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(230, 183, 58, 0.4);
        }
        
        .footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid #E5E5E5;
            color: var(--warm-gray);
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 2rem 1.5rem;
            }
            
            .logo {
                font-size: 3rem;
            }
            
            .tagline {
                font-size: 1.2rem;
            }
            
            .cta-title {
                font-size: 1.6rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="logo">EVERfor</h1>
        <p class="tagline">Leave more than a faded photo</p>
        
        <div class="video-container">
            <iframe 
                src="https://www.youtube.com/embed/w34PbS24nTQ" 
                title="EVERfor Legacy Video - Family Stories" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
        
        <div class="cta-section">
            <h2 class="cta-title">Early Access</h2>
            <a href="https://calendly.com/blakenolanbrown/legacy-video-discovery-call" 
               target="_blank" 
               class="cta-button">
                Schedule Your Legacy Session
            </a>
        </div>
        
        <div class="footer">
            <p>Professional family legacy video preservation services</p>
            <p>Contact: blake@everfor.family</p>
        </div>
    </div>
</body>
</html>`;
    res.send(comingSoonHtml);
  });

  const httpServer = createServer(app);
  return httpServer;
}
