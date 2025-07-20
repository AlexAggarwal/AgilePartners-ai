import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    solutions: [
      { name: 'AI Job Search Agent', href: 'https://aijobsearchagent.online', external: true },
      { name: 'GenAI Infrastructure', href: '#projects' },
      { name: 'Healthcare AI', href: '#projects' },
      { name: 'Custom Solutions', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Projects', href: '#projects' },
      { name: 'Team', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Project Consultation', href: '#contact' },
      { name: 'Partnership Opportunities', href: '#contact' },
      { name: 'Technical Blog', href: '#' },
      { name: 'Case Studies', href: '#projects' }
    ]
  };

  const socialLinks = [
    { icon: () => <span className="text-xl">🐙</span>, href: '#', label: 'GitHub' },
    { icon: () => <span className="text-xl">💼</span>, href: '#', label: 'LinkedIn' },
    { icon: () => <span className="text-xl">🐦</span>, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <img
              src="/ap_logo_white.png"
              alt="AP Logo"
              className="w-10 h-auto object-contain"
              style={{ background: 'transparent' }}
              />
              <span className="text-xl font-bold">AgilePartners AI</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Building practical AI solutions that solve real-world problems. 
              From job search to infrastructure automation, we're making AI 
              accessible and useful for everyone.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <span className="text-gray-300">support@agilepartners-ai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">🔗</span>
                <a 
                  href="https://aijobsearchagent.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  aijobsearchagent.online
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      {link.name}
                      <span className="ml-1">🔗</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => link.href.startsWith('#') && scrollToSection(link.href.substring(1))}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.href.startsWith('#') && scrollToSection(link.href.substring(1))}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => link.href.startsWith('#') && scrollToSection(link.href.substring(1))}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get notified when we launch new AI solutions and share insights from our projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400">
              <span>© 2024 AgilePartners AI. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
