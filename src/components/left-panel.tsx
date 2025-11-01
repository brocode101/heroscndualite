import React from 'react';
import { Sparkles, Mail, ChevronDown } from 'lucide-react';
import { GoogleIcon, GithubIcon, AppleIcon } from './icons';

const LeftPanel = () => {
  return (
    <div className="relative flex flex-col justify-center items-center lg:items-start p-8 lg:pl-24 xl:pl-32 bg-dark-bg text-white min-h-screen overflow-hidden">
      <div className="w-full max-w-sm z-10">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-bold text-2xl tracking-wider">emergent</span>
        </div>
        <div className="relative mb-6">
          <Sparkles className="w-10 h-10 text-gray-400 absolute -top-10 -right-2 transform-gpu" />
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
            The fastest path from idea to <span className="text-emergent-green">product</span>
          </h1>
        </div>
        <p className="mt-6 text-gray-400">
          Already have an account?{' '}
          <a href="#" className="text-white font-medium underline hover:text-emergent-green transition-colors">
            Sign in
          </a>
        </p>
        <div className="mt-8 space-y-4">
          <button className="w-full bg-white text-black font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-200">
            <GoogleIcon className="w-5 h-5" />
            Continue with Google
          </button>
          <div className="flex gap-4">
            <button className="w-full bg-dark-card text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-800">
              <GithubIcon className="w-6 h-6" />
            </button>
            <button className="w-full bg-dark-card text-white font-semibold p-3 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-gray-800">
              <AppleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex items-center my-8">
          <hr className="w-full border-gray-700" />
          <span className="px-4 text-gray-500 text-sm whitespace-nowrap">Or start with email</span>
          <hr className="w-full border-gray-700" />
        </div>
        <button className="w-full bg-dark-green-button text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-dark-green-button-hover">
          <Mail className="w-5 h-5" />
          Sign up with Email
        </button>
        <p className="mt-8 text-xs text-gray-500 text-center">
          By continuing, you agree to our{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
      <div className="absolute bottom-8 text-gray-400 hidden lg:flex items-center gap-2 animate-bounce">
        <ChevronDown className="w-4 h-4" />
        <span className="text-sm">Scroll down to see magic</span>
      </div>
    </div>
  );
};

export default LeftPanel;
