import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Markdown Editor</h1>
      <p className="text-lg mb-4">
        Markdown Editor is a powerful, yet simple, tool for creating and previewing Markdown documents. With a user-friendly interface and real-time preview, it is designed to make writing in Markdown a seamless experience.
      </p>
      <p className="text-lg mb-4">
        Whether you are writing documentation, notes, or a blog post, Markdown Editor provides you with all the tools you need to efficiently produce well-formatted content. Its intuitive toolbar helps you apply formatting without needing to remember Markdown syntax.
      </p>
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Live preview</li>
        <li>Syntax highlighting</li>
        <li>Dark mode</li>
        <li>Export to HTML and PDF</li>
        <li>Customizable themes</li>
      </ul>
      <p className="text-lg">
        Created by @0x1Shub, Markdown Editor aims to enhance your productivity and make Markdown writing a joy.
      </p>
    </div>
  );
}

export default About;
