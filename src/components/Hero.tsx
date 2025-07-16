import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium">
                <span className="mr-2">✨</span>
                AI Startup Building Real Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                We Build AI That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Solves Real Problems</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                From helping people find jobs to simplifying cloud infrastructure, 
                we create practical AI solutions that make complex tasks effortless. 
                Our next frontier? Revolutionizing healthcare with intelligent automation.
              </p>
            </div>

            {/* Current Focus */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-400">LIVE PROJECT</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">AI Job Search Agent</h3>
                  <p className="text-gray-300 text-sm">Helping job seekers find opportunities faster</p>
                </div>
                <a 
                  href="https://aijobsearchagent.online" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>🔗</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center group"
              >
                See Our Projects
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Partner With Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">1</div>
                <div className="text-gray-400 text-sm">Live AI Solution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">3</div>
                <div className="text-gray-400 text-sm">Industries Targeted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">∞</div>
                <div className="text-gray-400 text-sm">Problems to Solve</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Job Search AI</h3>
                      <p className="text-gray-300 text-sm">Live & helping job seekers</p>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Infrastructure AI</h3>
                      <p className="text-gray-300 text-sm">Terraform alternative in development</p>
                    </div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Healthcare AI</h3>
                      <p className="text-gray-300 text-sm">Next frontier in planning</p>
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
