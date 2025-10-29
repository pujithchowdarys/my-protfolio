import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={`py-16 md:py-20 px-4 ${className || ''}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-indigo-700 tracking-tight leading-tight">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;