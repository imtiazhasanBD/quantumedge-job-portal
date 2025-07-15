import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <main className="bg-white rounded-lg shadow-md w-full max-w-md text-center px-8 py-20">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome to QuantumEdge Jobs
        </h1>
        <p className="text-gray-600 mb-8">
          Find your dream job or post opportunities with our platform.
        </p>

        <div className="space-y-6 font-semibold">
          <Link
            href="/user/login"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200 hover:scale-105"
          >
            Login Page
          </Link>
          
          <Link
            href="/user/register"
            className="block w-full bg-custom-green hover:bg-green-600 text-white py-2 px-4 rounded-md transition duration-200 hover:scale-105"
          >
            Registration Page
          </Link>
          
          <Link
            href="/job-list"
            className="block w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md transition duration-200 hover:scale-105"
          >
            Job Listings Page
          </Link>
        </div>
      </main>
    </div>
  );
}