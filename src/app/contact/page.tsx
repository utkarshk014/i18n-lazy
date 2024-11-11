"use client";

import { Mail, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-foreground mb-6">Contact</h1>

        {/* Description */}
        <p className="text-md text-muted-foreground mb-12">
          Please contact me if you wish to participate in early Beta, or have
          general inquiries!
        </p>

        {/* Personal Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 text-muted-foreground">👤</div>
            <span className="text-md text-foreground">Utkarsh Suneela</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 text-muted-foreground">💼</div>
            <span className="text-md text-foreground">Software Engineer</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 text-muted-foreground">🌎</div>
            <span className="text-md text-foreground">Bangalore, India</span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          <a
            href="https://calendly.com/utkarshsuneela/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              variant="outline"
              className="w-full justify-start text-primary hover:text-primary space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule a meeting with me</span>
            </Button>
          </a>

          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Email: </span>
            <a
              href="mailto:utkarshsuneela@gmail.com"
              className="text-primary hover:underline"
            >
              utkarshsuneela@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Linkedin className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/utkarsh-suneela-a65b12246/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/utkarsh-suneela-a65b12246/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}