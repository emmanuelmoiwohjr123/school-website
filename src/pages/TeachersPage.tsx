import React from 'react';

const TeachersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Teachers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Teacher cards will be added here */}
        <div className="p-4 text-center">
          <p>Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;