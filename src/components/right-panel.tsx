import React from 'react';
import WavyBackground from './ui/wavy-background';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { YCIcon } from './icons';

const RightPanel = () => {
    return (
        <WavyBackground className="h-full">
            <div className="relative z-10 flex flex-col items-center justify-between h-full p-4 sm:p-8 text-white">
                {/* Top Badge */}
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-3">
                    <div className="flex -space-x-2">
                        <img src="https://i.pravatar.cc/150?img=1" alt="user 1" className="w-8 h-8 rounded-full border-2 border-white/20" />
                        <img src="https://i.pravatar.cc/150?img=2" alt="user 2" className="w-8 h-8 rounded-full border-2 border-white/20" />
                        <img src="https://i.pravatar.cc/150?img=3" alt="user 3" className="w-8 h-8 rounded-full border-2 border-white/20" />
                    </div>
                    <span className="font-medium text-sm">Trusted by 1.5M+ Users</span>
                </div>

                {/* Main Content Card */}
                <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center my-8 shadow-2xl">
                    <img src="https://creature.emergent.co/creature/660c6753086350002c171e51" alt="Curious Me Illustration" className="w-20 h-20 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-white/90">Curious me.</h2>
                    <p className="text-2xl text-white/70 mt-2">Discover fascinating facts about anything!</p>
                    <div className="mt-8 relative">
                        <input type="text" placeholder="What are you curious about..." className="w-full bg-white/10 border border-white/30 rounded-full py-3 pl-6 pr-12 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all" />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                    </div>
                    
                    <div className="mt-8 relative h-32 flex items-center justify-center">
                         <div className="bg-purple-200/10 backdrop-blur-md p-4 rounded-2xl text-left text-sm text-white/90 max-w-sm shadow-lg border border-white/10">
                            <p className="font-bold">Pyramids of Egypt</p>
                            <p className="mt-1 text-white/80">The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years until the completion of Lincoln Cathedral in England in 1311 AD.</p>
                         </div>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20">
                            <ArrowLeft className="w-5 h-5 text-white" />
                        </button>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                        </div>
                        <button className="bg-white/10 p-2 rounded-full transition-colors hover:bg-white/20">
                            <ArrowRight className="w-5 h-5 text-white" />
                        </button>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-x-12 gap-y-4 text-white/80">
                    <div className="text-center">
                        <p className="text-2xl font-semibold">1.5M+</p>
                        <p className="text-sm">Users</p>
                    </div>
                    <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">2M+</p>
                        <p className="text-sm">Apps</p>
                    </div>
                    <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
                    <div className="text-center">
                        <p className="text-2xl font-semibold">180+</p>
                        <p className="text-sm">Countries</p>
                    </div>
                    <div className="h-8 w-px bg-white/30 hidden sm:block"></div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                            <YCIcon className="w-6 h-6 rounded-sm" />
                            <span className="text-2xl font-semibold">YC</span>
                        </div>
                        <p className="text-sm">Backed by</p>
                    </div>
                </div>
            </div>
        </WavyBackground>
    );
};

export default RightPanel;
