import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Sajjad Ahmad</span>
      <nav className="footer-nav" aria-label="Footer">
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/locations">Locations</Link>
      </nav>
      <div className="footer-links">
        <a href="https://github.com/sajjadxdev" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /></a>
        <a href="https://linkedin.com/in/sajjadxdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
        <a href="mailto:sajjadxdev@gmail.com" aria-label="Email"><Mail size={16} /></a>
        <a href="tel:+923166400174" aria-label="Phone"><Phone size={16} /></a>
      </div>
    </footer>
  );
}
