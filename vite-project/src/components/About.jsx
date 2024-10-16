import React from 'react';
import { Camera, Edit, Film } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Video Editor" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-6">
              With over 10 years of experience in video editing, I bring stories to life through the power of visual storytelling. My passion lies in creating compelling narratives that captivate audiences and leave lasting impressions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Camera className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-bold">Cinematography</h3>
              </div>
              <div className="flex flex-col items-center">
                <Edit className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-bold">Post-Production</h3>
              </div>
              <div className="flex flex-col items-center">
                <Film className="w-12 h-12 text-purple-600 mb-2" />
                <h3 className="text-xl font-bold">Color Grading</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;