import React from 'react';

const About = () => {
  const values = [
    {
      icon: () => <span className="text-2xl">💡</span>,
      title: "Problem-First Approach",
      description: "We start with real problems, not cool technology. Every AI solution we build addresses genuine pain points."
    },
    {
      icon: () => <span className="text-2xl">🎯</span>,
      title: "Practical Impact",
      description: "We measure success by user adoption and real-world impact, not just technical achievements."
    },
    {
      icon: () => <span className="text-2xl">🚀</span>,
      title: "Rapid Innovation",
      description: "From idea to deployment, we move fast while maintaining quality and user focus."
    },
    {
      icon: () => <span className="text-2xl">❤️</span>,
      title: "Human-Centered AI",
      description: "Technology should enhance human capabilities, not replace them. We build AI that empowers people."
    }
  ];

  const team = [
    {
      name: "Alex Aggarwal",
      role: "Founder & CEO",
      bio: "Visionary entrepreneur with deep expertise in AI and machine learning, leading the charge in building practical AI solutions that solve real-world problems.",
      expertise: ["AI Strategy", "Machine Learning", "Product Leadership"],
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mona Aggarwal",
      role: "Co-Founder & Head of Product",
      bio: "Product strategist with extensive experience in user-centered design and AI product development, ensuring our solutions truly meet user needs.",
      expertise: ["Product Strategy", "UX Design", "AI Applications"],
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Raj Patel",
      role: "Co-Founder & Head of AI",
      bio: "AI researcher and engineer with expertise in natural language processing and computer vision, focused on building robust AI systems.",
      expertise: ["NLP", "Computer Vision", "AI Research"],
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    {
      year: "June 1, 2025",
      title: "The Hackathon Spark",
      description: "AgilePartners AI was born from a winning hackathon idea focused on solving real-world problems with AI"
    },
    {
      year: "Q3 2025",
      title: "First Product Launch",
      description: "AI Job Search Agent goes live, helping thousands find jobs"
    },
    {
      year: "Q1 2026",
      title: "Infrastructure AI Beta",
      description: "GenAI infrastructure tool enters beta testing"
    },
    {
      year: "Q3 2026",
      title: "Healthcare Expansion",
      description: "Planned entry into healthcare AI solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building the Future, One Problem at a Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a startup on a mission to make AI practical and accessible. 
            Instead of chasing the latest trends, we focus on solving real problems 
            that matter to real people.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              To democratize AI by building practical solutions that solve everyday problems. 
              We believe AI should be a tool that empowers people and businesses, not a 
              complex technology that only experts can use.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            What Drives Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon />
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Responsive Horizontal/Vertical Milestones */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative w-full flex flex-col items-center">
            {/* Timeline Line */}
            <div className="relative w-full flex items-center justify-center" style={{ minHeight: '220px' }}>
              {/* Horizontal line for desktop, vertical for mobile */}
              <div className="hidden md:block absolute left-0 right-0 mx-auto h-2 bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 rounded-full" style={{ top: '50%', zIndex: 0 }}>
                {/* Bullets aligned with the center axis of each milestone block */}
                <div className="absolute w-full h-full" style={{ left: 0, right: 0, top: 0, pointerEvents: 'none' }}>
                  <div className="flex w-full h-full" style={{ position: 'relative' }}>
                    {milestones.map((_, idx) => (
                      <div key={idx} className="flex-1 flex justify-center items-center" style={{ position: 'relative' }}>
                        <span
                          className="w-6 h-6 rounded-full border-4 border-white bg-purple-600 shadow-lg"
                          style={{ zIndex: 2 }}
                        ></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:hidden absolute top-0 bottom-0 mx-auto w-2 bg-gradient-to-b from-blue-500 via-purple-400 to-purple-600 rounded-full" style={{ left: '50%', zIndex: 0 }}></div>
              {/* Milestones */}
              <div className="flex md:flex-row flex-col w-full justify-between items-center relative flex-wrap" style={{ zIndex: 1 }}>
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center group md:w-1/4 w-full"
                    style={{ maxWidth: '250px', flex: '1 1 200px', margin: '0 8px', position: 'relative', alignItems: 'center', justifyContent: 'center' }}
                  >
                    {/* Desktop: alternate above/below line, Mobile: stack vertically */}
                    <div className={
                      `flex flex-col items-center justify-center ${
                        'mb-8 md:mb-0 md:mt-0' +
                        (index % 2 === 0 ? ' md:mb-60' : ' md:mt-60')
                      }`
                    }>
                      <div className={`bg-white rounded-xl shadow-2xl p-6 border border-gray-100 min-w-[180px] max-w-xs text-center relative group-hover:bg-blue-50 transition-colors duration-300`}>
                        <div className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">{milestone.year}</div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{milestone.title}</h4>
                        <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Impact So Far
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600 text-sm">Live AI Product</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2.5K+</div>
              <div className="text-gray-600 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600 text-sm">Industries Targeted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">AI Working</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
