import React from 'react';

const Services = () => {
  const services = [
    {
      icon: () => <span className="text-2xl">🧠</span>,
      title: "AI Strategy & Consulting",
      description: "Comprehensive AI assessment and strategic roadmap development tailored to your business objectives.",
      features: [
        "AI Readiness Assessment",
        "Custom AI Strategy Development",
        "Technology Stack Selection",
        "ROI Analysis & Business Cases"
      ],
      color: "blue"
    },
    {
      icon: () => <span className="text-2xl">💾</span>,
      title: "Machine Learning Solutions",
      description: "End-to-end ML model development, training, and deployment for predictive analytics and automation.",
      features: [
        "Predictive Analytics Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Recommendation Systems"
      ],
      color: "teal"
    },
    {
      icon: () => <span className="text-2xl">🤖</span>,
      title: "AI-Powered Automation",
      description: "Intelligent process automation using AI to streamline operations and reduce manual workload.",
      features: [
        "Robotic Process Automation",
        "Intelligent Document Processing",
        "Workflow Optimization",
        "Business Process Mining"
      ],
      color: "green"
    },
    {
      icon: () => <span className="text-2xl">📊</span>,
      title: "Data Analytics & Insights",
      description: "Advanced analytics platforms that transform raw data into actionable business intelligence.",
      features: [
        "Real-time Analytics Dashboards",
        "Business Intelligence Solutions",
        "Data Visualization",
        "Performance Monitoring"
      ],
      color: "purple"
    },
    {
      icon: () => <span className="text-2xl">🛡️</span>,
      title: "AI Ethics & Governance",
      description: "Responsible AI implementation with proper governance frameworks and ethical guidelines.",
      features: [
        "AI Ethics Framework",
        "Bias Detection & Mitigation",
        "Compliance Management",
        "Risk Assessment"
      ],
      color: "orange"
    },
    {
      icon: () => <span className="text-2xl">⚙️</span>,
      title: "AI Infrastructure & DevOps",
      description: "Scalable AI infrastructure setup and MLOps implementation for continuous deployment.",
      features: [
        "Cloud AI Infrastructure",
        "MLOps Pipeline Setup",
        "Model Monitoring",
        "Scalability Optimization"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      indigo: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive AI Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic planning to full implementation, we provide end-to-end AI solutions 
            that drive measurable business results and competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(service.color)}`}>
                <service.icon />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✔️</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group">
                Learn More
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our AI solutions can drive your success.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
