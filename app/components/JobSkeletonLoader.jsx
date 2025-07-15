// components/JobCardSkeletonLoader.jsx
import React from 'react';

const JobSkeletonLoader = ({ count = 6 }) => {
  const skeletonCards = Array(count).fill(0);

  return (
    // Adjust grid layout to match how your actual job cards are displayed
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> {/* Adjust padding/margins as per parent */}
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="w-full max-w-md bg-gray-100 rounded-xl px-5 py-7 space-y-6 text-gray-800 text-sm animate-pulse"
        >
          {/* Posted Date Placeholder */}
          <div className="h-3 bg-gray-200 rounded w-24"></div>

          {/* Job Title Placeholder */}
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>

          {/* Budget Type & Rate Placeholder */}
          <div className="bg-gray-200 rounded flex items-center justify-between text-xs pr-4 mr-8 py-2">
            <div className="h-4 bg-gray-200 rounded w-20 ml-4"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>

          {/* Job Description Placeholder */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-11/12"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>

          {/* Tags/Attributes Placeholder (Remote, Experience, Hiring Capacity) */}
          <div className="flex flex-wrap gap-2 py-2">
            <div className="h-6 bg-gray-200 rounded-full w-20"></div> {/* Remote */}
            <div className="h-6 bg-gray-200 rounded-full w-24"></div> {/* Experience */}
            <div className="h-6 bg-gray-200 rounded-full w-28"></div> {/* Hiring Capacity */}
          </div>

          {/* Skills Placeholder */}
          <div className="flex flex-wrap gap-2">
            <div className="h-6 bg-gray-200 rounded-full w-16"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20"></div>
            <div className="h-6 bg-gray-200 rounded-full w-14"></div>
            <div className="h-6 bg-gray-200 rounded-full w-16"></div> {/* Added one more for potential "+x more" space */}
          </div>

          {/* Footer - Posted by Placeholder */}
          <div className="flex items-center justify-between mt-6">
            <div className="h-4 bg-gray-200 rounded w-32"></div> {/* "Posted by Strong Name" */}
          </div>

          {/* Apply Now Button Placeholder */}
          <div className="h-10 bg-gray-200 rounded-full w-32 mt-4"></div> {/* Button size placeholder */}
        </div>
      ))}
    </div>
  );
};

export default JobSkeletonLoader;