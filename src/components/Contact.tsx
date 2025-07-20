import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  const projectTypes = [
    "AI Solution Development",
    "Problem Consultation",
    "Partnership Opportunity",
    "Investment Inquiry",
    "Technical Collaboration",
    "Other"
  ];

  const contactOptions = [
    {
      icon: () => <span className="text-2xl">✉️</span>,
      title: "General Inquiries",
      description: "Questions about our solutions or company",
      contact: "support@agilepartners-ai.com",
      action: "Email Us"
    },
    {
      icon: () => <span className="text-2xl">🚀</span>,
      title: "Project Collaboration",
      description: "Have a problem that needs an AI solution?",
      contact: "projects@agilepartners-ai.com",
      action: "Start a Project"
    },
    {
      icon: () => <span className="text-2xl">💬</span>,
      title: "Partnership & Investment",
      description: "Interested in partnering or investing?",
      contact: "partnerships@agilepartners-ai.com",
      action: "Let's Talk"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✔️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Message Received!
              </h3>
              <p className="text-gray-600 mb-6">
                Thanks for reaching out! We'll get back to you within 24 hours to discuss your project.
              </p>
              <div className="text-sm text-gray-500">
                Redirecting in 3 seconds...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a problem that could benefit from AI? Want to collaborate on the next 
            breakthrough solution? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <option.icon />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{option.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 font-medium">{option.contact}</span>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  <span>✉️</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Start a Conversation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your project or idea *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Describe the problem you're trying to solve, your goals, timeline, or any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                Send Message
                <span className="ml-2 group-hover:translate-x-1 transition-transform">➤</span>
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Why Work With Us?</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✔️</span>
                  <span>Proven track record with live AI solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✔️</span>
                  <span>Focus on practical, real-world applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✔️</span>
                  <span>Rapid prototyping and iteration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-green-500">✔️</span>
                  <span>End-to-end development and deployment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Current Projects</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">AI Job Search Agent</div>
                    <div className="text-sm text-gray-600">Live & serving 2.5K+ users</div>
                  </div>
                  <a 
                    href="https://aijobsearchagent.online" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <span>🔗</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">GenAI Infrastructure</div>
                    <div className="text-sm text-gray-600">In development</div>
                  </div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-900">Healthcare AI</div>
                    <div className="text-sm text-gray-600">Planning phase</div>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Response Time</h4>
              <p className="text-gray-600 text-sm mb-4">
                We typically respond to project inquiries within 24 hours. For urgent 
                matters or time-sensitive opportunities, please mention it in your message.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Business Hours:</strong> Monday-Friday, 9AM-6PM EST
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
