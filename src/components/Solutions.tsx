import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      icon: () => <span className="text-4xl">🔍</span>,
      title: "AI-Powered Job Matching",
      description: "Intelligent job search that understands your skills, preferences, and career goals to find perfect opportunities.",
      industry: "Career & Employment",
      status: "Live",
      features: [
        "Smart resume analysis",
        "Personalized job recommendations",
        "Application tracking",
        "Interview preparation"
      ],
      color: "from-green-400 to-blue-500",
      statusColor: "bg-green-500"
    },
    {
      icon: () => <span className="text-4xl">☁️</span>,
      title: "Generative Infrastructure",
      description: "AI-powered infrastructure as code that's simpler than Terraform. Describe what you need, and we'll generate it.",
      industry: "DevOps & Cloud",
      status: "In Development",
      features: [
        "Natural language infrastructure",
        "Auto-generated configurations",
        "Multi-cloud deployment",
        "Cost optimization"
      ],
      color: "from-purple-400 to-pink-500",
      statusColor: "bg-yellow-500"
    },
    {
      icon: () => <span className="text-4xl">❤️</span>,
      title: "Healthcare Intelligence",
      description: "AI solutions for healthcare providers to improve patient outcomes, streamline operations, and reduce costs.",
      industry: "Healthcare",
      status: "Planning",
      features: [
        "Patient data analysis",
        "Treatment recommendations",
        "Workflow automation",
        "Predictive diagnostics"
      ],
      color: "from-red-400 to-orange-500",
      statusColor: "bg-blue-500"
    }
  ];

  const industries = [
    {
      icon: () => <span className="text-3xl">👥</span>,
      name: "Employment",
      description: "Connecting talent with opportunities",
      projects: 1
    },
    {
      icon: () => <span className="text-3xl">🏢</span>,
      name: "Infrastructure",
      description: "Simplifying cloud deployment",
      projects: 1
    },
    {
      icon: () => <span className="text-3xl">⚕️</span>,
      name: "Healthcare",
      description: "Improving patient outcomes",
      projects: "Coming Soon"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI Solutions for Real-World Problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build AI for the sake of it. Every solution we create addresses 
            genuine pain points and delivers measurable value to users and businesses.
          </p>
        </div>

        {/* Industries Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
                <industry.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Active Projects</span>
                <span className="font-semibold text-blue-600">{industry.projects}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center`}>
                      <solution.icon />
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                        <div className={`w-3 h-3 ${solution.statusColor} rounded-full animate-pulse`}></div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">{solution.industry}</span>
                        <span className="text-sm font-medium text-blue-600">{solution.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <span className="text-green-500 flex-shrink-0">✔️</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className={`w-full h-64 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center text-white">
                      <solution.icon />
                      <div className="text-lg font-semibold">{solution.status}</div>
                      {solution.status === "Live" && (
                        <div className="text-sm opacity-80 mt-2">Available Now</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Have a Problem That Needs Solving?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for new challenges where AI can make a real difference.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group"
            >
              Let's Discuss Your Challenge
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
