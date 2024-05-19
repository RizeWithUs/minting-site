import React, { useState } from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Engineer",
      image: "https://spacema-dev.com/elevate/assets/images/team/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Graphic Designer",
      image: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Marketing Manager",
      image: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
    },
    {
      name: "Peter Johnson",
      role: "SEO Specialist",
      image: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
    },
    {
      name: "Emily Brown",
      role: "UX Designer",
      image: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
    },
    {
      name: "Michael Davis",
      role: "Frontend Developer",
      image: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "Content Writer",
      image: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      image: "https://spacema-dev.com/elevate/assets/images/team/8.jpg",
    },
  ];

  return (
    <section id="our-team" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-3 my-1 text-center border border-red-${
                index + 1
              }00`}
            >
              <img
                src={member.image}
                alt={`Team Member ${index + 1}`}
                className="w-32 h-auto rounded-full mb-2 object-cover mx-auto"
              />
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-700 text-sm">Role: {member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
