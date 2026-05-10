'use client';

import React from 'react';
import { Phone, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="app-footer" data-testid="app-footer">
      {/* Decorative top border */}
      <div className="footer-divider" />

      <div className="footer-inner">
        {/* Brand / About */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-mark">AJ</span>
            <div className="footer-logo-text">
              <h3 className="footer-title">Avinash Jadhav</h3>
             
            </div>
          </div>
    
        </div>

        {/* Quick Links */}
        {/* <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/" data-testid="footer-link-home">Home</a></li>
            <li><a href="/about" data-testid="footer-link-about">About</a></li>
            <li><a href="/projects" data-testid="footer-link-projects">Projects</a></li>
            <li><a href="/contact" data-testid="footer-link-contact">Contact</a></li>
          </ul>
        </div> */}

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-contact">
            <li>
              <a
                href="https://github.com/Avi7620"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                data-testid="footer-github-link"
              >
                <FiGithub size={16} />
                <span>Github</span>
                <ArrowUpRight size={14} className="footer-arrow" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/avinash-jadhav-45489824a/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
                data-testid="footer-linkedin-link"
              >
                <FiLinkedin size={16} />
                <span>Linkedin</span>
                <ArrowUpRight size={14} className="footer-arrow" />
              </a>
            </li>
            <li>
  
            </li>
            <li>
              <a
                href="mailto:jadhavavi7620@gmail.com"
                className="footer-contact-link"
                data-testid="footer-email-link"
              >
                <Mail size={16} />
                <span>jadhavavi7620@gmail.com</span>
              </a>
            </li>
    
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
 
        <p className="footer-made">
          Designed &amp; Developed with <Heart size={14} className="footer-heart" /> by{' '}
          <span className="footer-author">Avinash Jadhav</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
