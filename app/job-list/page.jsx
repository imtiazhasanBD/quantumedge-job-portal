"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import JobCard from "../components/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
import dummy from "../data/dummyJobs.json";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.mnimedu.com/api/browse/pro-jobs/")
      .then((res) => {
        setJobs(res.data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err);
        setLoading(false);
      });
  }, []);

  const dummyJobs = dummy.data;

  if (loading) return <p className="text-center py-10">Loading jobs...</p>;

  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row gap-4 items-center lg:space-x-4 py-16 bg-[#0f1a0f] px-4 sm:px-8 xl:px-40 relative">
        <div
          className="relative p-[1px] rounded-lg text-sm overflow-hidden w-full lg:w-fit"
          style={{
            background: "linear-gradient(to right, #f97316, #22c55e)",
          }}
        >
          <div className="flex items-center bg-[#1F2C1F] rounded-lg p-1 space-x-2 w-full">
            <input
              type="text"
              placeholder="Search your needs"
              className="bg-transparent text-white placeholder-gray-500 py-2 px-3 focus:outline-none focus:ring-0 w-full"
            />
            <div className="relative">
              <select className="appearance-none bg-transparent text-white py-2 pl-2 pr-8 rounded-md focus:outline-none cursor-pointer">
                <option className="bg-gray-800 text-white">
                  Web Developer
                </option>
                <option className="bg-gray-800 text-white">
                  Graphic Designer
                </option>
                <option className="bg-gray-800 text-white">Video Editor</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-1 text-white">
                <MdOutlineArrowDropDown size={"1.2rem"} />
              </div>
            </div>

            <button className="bg-[#05AF2B] p-2 rounded-full text-white hover:bg-[#049624] transition-colors">
              <IoSearch />
            </button>
          </div>
        </div>

        <button className="bg-[#05AF2B] text-white text-sm py-2.5 px-6 rounded-full font-medium hover:bg-[#049624] transition-colors whitespace-nowrap w-full md:w-fit">
          Advanced search
        </button>
        <img
          src="/Star.png"
          alt="QuantumEdge Logo"
          className="h-18 w-auto absolute right-3/12 bottom-6 hidden md:block"
        />
        {/* Blurred backdrop circles */}
        <div class="hidden md:block absolute top-[-150px] left-20 -translate-x-1/2 -translate-y-1/2 w-[350] h-[350px] bg-custom-green p-8 rounded-full blur-3xl shadow-lg opacity-80 z-10"></div>
      </div>
      <div className="px-2 sm:8 xl:px-32 py-10 space-y-4">
        <h1 className="text-2xl font-bold text-black">
          5 search result(s) found
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {dummyJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
