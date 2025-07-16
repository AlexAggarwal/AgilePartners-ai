import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Job Search Agent",
      description: "An intelligent job search platform that matches candidates with opportunities using advanced AI algorithms and natural language processing.",
      status: "Live",
      url: "https://aijobsearchagent.online",
      image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "OpenAI", "Machine Learning"],
      metrics: [
        { label: "Active Users", value: "2.5K+" },
        { label: "Jobs Matched", value: "15K+" },
        { label: "Success Rate", value: "78%" }
      ],
      features: [
        "AI-powered job matching",
        "Resume optimization",
        "Interview preparation",
        "Application tracking"
      ],
      timeline: "Q2 2024",
      category: "Employment Tech"
    },
    {
      title: "GenAI Infrastructure Tool",
      description: "A revolutionary infrastructure-as-code platform that uses generative AI to simplify cloud deployment. Think Terraform, but with natural language.",
      status: "In Development",
      url: null,
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "Terraform", "AWS", "Generative AI"],
      metrics: [
        { label: "Deployment Time", value: "90% Faster" },
        { label: "Error Reduction", value: "85%" },
        { label: "Learning Curve", value: "Minimal" }
      ],
      features: [
        "Natural language infrastructure",
        "Multi-cloud support",
        "Auto-optimization",
        "Cost prediction"
      ],
      timeline: "Q4 2024",
      category: "DevOps"
    },
    {
      title: "Healthcare AI Platform",
      description: "Next-generation healthcare solutions focusing on patient care optimization, diagnostic assistance, and operational efficiency.",
      status: "Planning",
      url: null,
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "TensorFlow", "FHIR", "Computer Vision"],
      metrics: [
        { label: "Target Accuracy", value: "95%+" },
        { label: "Time Savings", value: "60%" },
        { label: "Cost Reduction", value: "40%" }
      ],
      features: [
        "Diagnostic assistance",
        "Patient monitoring",
        "Treatment optimization",
        "Workflow automation"
      ],
      timeline: "Q2 2025",
      category: "Healthcare"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'In Development': return 'bg-yellow-500';
      case 'Planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-green-700 bg-green-100';
      case 'In Development': return 'text-yellow-700 bg-yellow-100';
      case 'Planning': return 'text-blue-700 bg-blue-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our AI Projects in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From live solutions helping thousands of users to cutting-edge projects 
            in development, see how we're turning AI innovation into practical impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusTextColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.url && (
                    <div className="absolute top-4 right-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <span className="text-xl">🔗</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <div className={`w-3 h-3 ${getStatusColor(project.status)} rounded-full animate-pulse`}></div>
                      </div>
                      <span className="text-sm text-gray-500">{project.category}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <span className="text-blue-500">⚡️</span>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack & Timeline */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">📅</span>
                      <span className="text-sm text-gray-600">{project.timeline}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center"
                      >
                        Visit Project
                        <span className="ml-2">🔗</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
                      >
                        {project.status === 'In Development' ? 'Coming Soon' : 'In Planning'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Development Pipeline */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Development Pipeline
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Live & Scaling</h4>
              <p className="text-gray-600 text-sm">AI Job Search Agent serving thousands of users</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡️</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">In Development</h4>
              <p className="text-gray-600 text-sm">GenAI Infrastructure Tool entering beta phase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Research Phase</h4>
              <p className="text-gray-600 text-sm">Healthcare AI solutions in early planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
