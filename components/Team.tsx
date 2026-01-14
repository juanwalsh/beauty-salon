import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import FadeIn from './ui/FadeIn';

const Team: React.FC = () => {
  return (
    <section className="py-24 bg-lumiere-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="text-xs font-sans tracking-[0.3em] uppercase text-lumiere-400 mb-4">Specialists</p>
            <h2 className="font-serif text-4xl md:text-5xl text-lumiere-900">Our Team</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <FadeIn 
              key={member.id} 
              delay={idx * 150} 
              className="group relative w-[90%] mx-auto md:w-full"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-md bg-lumiere-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center">
                <h3 className="font-serif text-xl text-lumiere-900 mb-1">{member.name}</h3>
                <p className="font-sans text-[0.65rem] uppercase tracking-widest text-lumiere-500">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;