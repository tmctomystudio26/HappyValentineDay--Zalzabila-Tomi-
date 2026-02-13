import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { Code2, Layout, Smartphone, ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-secondary/50 to-transparent opacity-60 rounded-bl-[100px]" />
        
        <div className="container-custom">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-secondary text-xs font-semibold tracking-widest uppercase text-primary"
            >
              Portfolio & Services
            </motion.span>
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground"
            >
              Crafting digital <br/>
              <span className="text-primary italic">experiences</span> that matter.
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
            >
              I build accessible, pixel-perfect, and performant web interfaces with a focus on semantic HTML and modern clean design.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-14 px-8 rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Start a Project
              </Button>
              <Button variant="outline" size="lg" className="text-base h-14 px-8 rounded-full hover:bg-secondary border-primary/20" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                {/* HTML Semantic Placeholder for Profile Image */}
                {/* landscape scenic nature photography workspace */}
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" 
                  alt="Minimalist workspace with laptop" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-background p-6 rounded-xl shadow-xl border border-border/50 flex flex-col justify-center items-start hidden md:flex">
                <span className="text-4xl font-serif font-bold text-primary">5+</span>
                <span className="text-sm text-muted-foreground mt-2">Years of crafting digital solutions</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About the approach</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In a world of complex frameworks and bloated code, I believe in returning to the fundamentals. 
                  Semantic HTML, accessible structures, and clean CSS architecture form the bedrock of my work.
                </p>
                <p>
                  Whether it's a simple landing page or a complex dashboard, the philosophy remains the same: 
                  <strong>clarity over complexity</strong>.
                </p>
                <p>
                  I specialize in translating design concepts into functional, responsive, and maintainable code 
                  that stands the test of time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground text-lg">
              Specialized services tailored to building a better web.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ServiceCard 
                title="Frontend Development" 
                description="Clean, semantic React code that prioritizes performance, accessibility, and maintainability."
                icon={Code2}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ServiceCard 
                title="UI/UX Implementation" 
                description="Translating design files into pixel-perfect, responsive interfaces that delight users."
                icon={Layout}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ServiceCard 
                title="Responsive Design" 
                description="Ensuring your experience looks and feels exceptional on every device, from mobile to desktop."
                icon={Smartphone}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Let's work together</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Have a project in mind? Looking to elevate your digital presence? 
                I'm currently accepting new projects and would love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-serif font-bold text-lg mb-2">Contact Details</h4>
                  <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">hello@example.com</a>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="font-serif font-bold text-lg mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                      <Github size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Minimal Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
