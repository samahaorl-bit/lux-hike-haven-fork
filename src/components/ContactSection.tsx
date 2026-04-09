"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("❌ Please provide a valid email address.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          title: formData.message, // or "message" depending on template
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(() => {
        toast.dismiss(toastId);
        toast.success("✅ Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
        toast.dismiss(toastId);
        toast.error("❌ Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-muted/55 via-background to-muted/45"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Plan With Confidence
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our apartment or need hiking recommendations?
            We'd love to help you plan your Luxembourg adventure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 section-reveal">
              <Card className="h-full border-border/70 bg-card/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <MessageSquare className="h-5 w-5" /> Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">
                        Luxembourg City Center
                        <br />
                        Walking distance to main attractions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Email</h4>
                      <a
                        href="mailto:luxtraveler@proton.me"
                        className="text-sm text-primary hover:underline"
                      >
                        luxtraveler@proton.me
                      </a>
                    </div>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <h4 className="font-medium text-primary mb-2">
                      Quick Response
                    </h4>
                    <p className="text-sm text-primary/80">
                      We typically respond within 2-4 hours and are happy to
                      provide personalized hiking recommendations for your stay!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 section-reveal section-reveal-delay">
              <Card className="border-border/70 bg-card/90 backdrop-blur-sm shadow-soft">
                <CardHeader>
                  <CardTitle className="text-primary">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your hiking plans and we'll help you make the
                    most of your Luxembourg adventure.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your travel dates, hiking preferences, or any questions you have..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Send className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="section-reveal section-reveal-delay mt-12">
            <Card className="overflow-hidden border-primary/30 bg-gradient-forest text-primary-foreground">
              <CardContent className="p-0">
                <div className="h-64 flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      Prime Luxembourg Location
                    </h3>
                    <p className="text-primary-foreground/80">
                      Perfectly positioned for easy access to hiking trails and
                      city amenities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
