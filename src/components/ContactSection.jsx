import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, Loader2 } from "lucide-react"
import { cn } from '@/lib/utils'
import emailjs from '@emailjs/browser';
import { useState } from "react";

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            );

            console.log(result.text);
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error.text || error);
            alert("Failed to send message. Please try again.");
        }
    };

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? feel free to reach out i'm always open to discussing new opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />

                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:" className="text-muted-foreground hover:text-primary transition-colors">ysodiq870@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />

                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:09067823827" className="text-muted-foreground hover:text-primary transition-colors">09067823827</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />

                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <a href="mailto:" className="text-muted-foreground hover:text-primary transition-colors">Nigeria, kwara state</a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/yusuf-sodiq">
                                <Linkedin  />
                            </a>
                            <a href="https://www.x.com/zionlooty89">
                                <Twitter />
                            </a>
                            <a href="https://www.instagram.com/zionlooty__">
                                <Instagram />
                            </a>
                           

                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                            <input type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                            <input type="text"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Your message</label>
                            <textarea type="text"
                                id="message"
                                name="massage"
                                required
                                value={formData.message}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            Send Message
                            <Send size={16} />

                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default ContactSection