import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: () => <span className="text-2xl">🛒</span>,
      title: "E-commerce Revenue Optimization",
      industry: "Retail",
      challenge: "Global retailer struggling with inventory management and personalization",
      solution: "Implemented AI-powered demand forecasting and personalized recommendation engine",
      results: [
        "35% increase in revenue",
        "28% reduction in inventory costs",
        "45% improvement in customer satisfaction"
      ],
      color: "blue"
    },
    {
      icon: () => <span className="text-2xl">🏭</span>,
      title: "Manufacturing Process Automation",
      industry: "Manufacturing",
      challenge: "Quality control issues and production inefficiencies",
      solution: "Deployed computer vision for defect detection and predictive maintenance",
      results: [
        "50% reduction in defect rates",
        "30% decrease in downtime",
        "25% improvement in overall efficiency"
      ],
      color: "teal"
    },
    {
      icon: () => <span className="text-2xl">👥</span>,
      title: "Customer Service Transformation",
      industry: "Financial Services",
      challenge: "High customer service costs and inconsistent response times",
      solution: "Implemented intelligent chatbots and automated ticket routing",
      results: [
        "60% reduction in response time",
        "40% decrease in operational costs",
        "85% customer satisfaction rate"
      ],
      color: "green"
    }
  ];

  const testimonials = [
    {
      quote: "AgilePartners AI transformed our entire approach to customer analytics. The ROI was evident within the first quarter.",
      author: "Sarah Johnson",
      role: "Chief Digital Officer",
      company: "TechCorp Industries"
    },
    {
      quote: "The team's expertise in AI implementation is unmatched. They delivered on time and exceeded our expectations.",
      author: "Michael Chen",
      role: "VP of Operations",
      company: "Global Manufacturing Ltd"
    },
    {
      quote: "Working with AgilePartners AI has been a game-changer for our business intelligence capabilities.",
      author: "Emily Rodriguez",
      role: "Head of Analytics",
      company: "Financial Solutions Inc"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      teal: "bg-teal-100 text-teal-600",
      green: "bg-green-100 text-green-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve 
            remarkable results through strategic AI implementation.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(study.color)}`}>
                <study.icon />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {study.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Results:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center space-x-2">
                      <span className="text-green-500">📈</span>
                      <span className="text-sm text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group">
                Read Full Case Study
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that have transformed their business with our AI solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
