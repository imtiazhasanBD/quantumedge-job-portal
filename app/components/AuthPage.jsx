"use client";

import { useState } from "react";
import { FaApple, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiLock2Fill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import InputField from "../components/InputField";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

export default function AuthPage() {
  const [mode, setMode] = useState("register"); // or 'login'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      pathname === "/user/login"
        ? "http://api.mnimedu.com/api/auth/login/"
        : "http://api.mnimedu.com/api/auth/registration/";

    const payload =
      pathname === "/user/login"
        ? { email, password }
        : { email, password1: password, password2: confirmPassword };

    try {
      const res = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(
        `✅ ${pathname === "/user/login" ? "Login" : "Account"} successful!`
      );
    } catch (error) {
      const errMsg =
        error.response?.data?.email ||
        error.response?.data?.password ||
        error.response?.data?.detail ||
        "Something went wrong";
      setMessage(`❌ ${errMsg}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="bg-[#0e1a0e] text-white p-8 flex gap-10 rounded-2xl overflow-hidden shadow-lg max-w-5xl w-full relative z-20">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 space-y-8 md:px-14 py-4 text-center my-auto">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">
              {pathname === "/user/login"
                ? "Login your account"
                : "Open your account"}
            </h2>
            <p className="text-xs text-white">
              {pathname === "/user/login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                className="text-custom-green"
                onClick={() => {
                  router.push(
                    pathname === "/user/login" ? "register" : "login"
                  );
                  setMessage("");
                }}
              >
                {pathname === "/user/login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <form className="space-y-6 text-xs" onSubmit={handleSubmit}>
            <InputField
              type="email"
              placeholder="Email Address"
              icon={<MdOutlineMail size={"1.1rem"} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="Password"
              icon={<RiLock2Fill size={"1.1rem"} />}
              showEyeIcon
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {pathname === "/user/register" && (
              <InputField
                type="password"
                placeholder="Confirm Password"
                icon={<RiLock2Fill size={"1.1rem"} />}
                showEyeIcon
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}

            <button
              type="submit"
              className="w-full bg-custom-green hover:bg-green-600 text-white py-3 rounded-full transition"
            >
              {pathname === "/user/login" ? "Login Now" : "Create Account"}
            </button>

            {message && (
              <div className="text-red-500 text-sm p-2 bg-red-500/10 rounded">
                {message}
              </div>
            )}
          </form>

          {/* OR separator */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-700" />
            <span className="px-4 text-white text-[10px]">or</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="bg-[#1f1f1f] py-3 px-8 rounded-full hover:bg-gray-800">
              <FaFacebookF size={"1.2rem"} />
            </button>
            <button className="bg-[#1f1f1f] py-3 px-8 rounded-full hover:bg-gray-800">
              <FaApple size={"1.2rem"} />
            </button>
            <button className="bg-[#1f1f1f] py-3 px-8 rounded-full hover:bg-gray-800">
              <FaXTwitter size={"1.2rem"} />
            </button>
          </div>

          {/* Terms and Privacy Policy */}
          {pathname === "/user/register" && (
            <p className="text-xs text-gray-500 text-center">
              By joining, you agree to the Fiverr{" "}
              <a href="#" className="text-custom-green hover:underline">
                Terms of Service
              </a>{" "}
              and to occasionally receive emails from us. Please read our{" "}
              <a href="#" className="text-custom-green hover:underline">
                Privacy Policy
              </a>{" "}
              to learn how we use your personal data.
            </p>
          )}
        </div>

        {/* Right: Image Section */}
        <div className="hidden md:block md:w-1/2 relative z-30 min-h-[560px]">
          {/* Close Button */}
          <button className="bg-[#0e1a0e] absolute top-[-10px] right-[-10px] p-4 rounded-xl text-gray-400 hover:text-white text-2xl z-10">
            <div className="bg-[#1f1f1f] p-1 rounded-full border border-gray-700">
              <RxCross2 size={"1.6rem"} className="text-custom-green" />
            </div>
          </button>
          <img
            src="/register-image.jpg"
            alt="Team working"
            className="w-full h-full object-cover rounded-lg z-20"
          />
          {/* squre */}
          <div className="bg-[#0e1a0e] absolute bottom-0 left-[-8px] py-6 px-8 rounded-tr-xl  text-gray-400 hover:text-white text-2xl z-10"></div>
        </div>
        {/* Blurred backdrop circles */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-custom-green p-8 rounded-full blur-3xl shadow-lg opacity-35 z-10"></div>
      </div>

      {/* Blurred backdrop circles */}
      <div class="hidden md:block absolute top-0 left-1/12 -translate-x-1/2 -translate-y-1/2 w-[350] h-[350px] bg-custom-green p-8 rounded-full blur-3xl shadow-lg opacity-40 z-10"></div>
    </div>
  );
}
