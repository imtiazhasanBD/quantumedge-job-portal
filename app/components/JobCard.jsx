import { FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function JobCard({ job }) {
  const postedDate = new Date(job.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const skills = job.skills.map((s) => s.label);
  const keywords = job.keywords.map((k) => k.title);

  return (
    <div className="w-full max-w-md bg-white rounded-xl hover:drop-shadow-xl/25 px-5 py-7 space-y-6 text-gray-800 text-sm">
      <p className="text-gray-400 text-xs">{postedDate}</p>
      <h2 className="font-semibold text-base">{job.title}</h2>

      <div className="bg-gray-100 rounded flex items-center justify-between text-xs pr-4 mr-8">
        <span className="text-gray-400 px-4 py-2">
          {job.budget_type}
        </span>
        <span className="text-gray-700 font-semibold">
          ${parseInt(job.rate_from)} - ${parseInt(job.rate_to)}
        </span>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">
        {job.job_description}
      </p>

      <div className="flex flex-wrap gap-2 text-[11px] font-medium py-2">
        <span className="flex items-center gap-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
          <FaMapMarkerAlt className="text-xs" /> Remote
        </span>
        <span className="flex items-center gap-1 bg-red-100 text-red-500 px-2 py-1 rounded-full">
          <MdWork className="text-xs" /> {job.experience_level}
        </span>
        <span className="flex items-center gap-1 bg-green-100 text-green-600 px-2 py-1 rounded-full">
          <FaUserFriends className="text-xs" /> {job.hiring_capacity} Freelancer
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        {skills.slice(0, 3).map((skill, i) => (
          <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
        {skills.length > 3 && (
          <span className="text-gray-500 text-xs font-semibold mt-1">
            +{skills.length - 3} more
          </span>
        )}
      </div>

       {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Posted by <strong className="text-gray-700">{job.postedBy}</strong></span>
        </div>
      </div>
        <button className="bg-black hover:bg-custom-green text-white px-5 py-2 rounded-full text-xs font-medium shadow">
          Apply Now
        </button>
    </div>
  );
}
