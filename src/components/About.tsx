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

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">Expertise:</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
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
