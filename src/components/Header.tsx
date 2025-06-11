import { Recycle, MapPin, Clock, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 overflow-hidden">
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20`}
        aria-hidden="true" 
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 group" aria-label="REMWaste Home">

              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:scale-105">
                <Recycle className="w-7 h-7 text-white" aria-hidden="true" /> 
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">REMWaste</h1>
                <p className="text-emerald-100 text-sm">Professional Skip Hire</p>
              </div>
            </a>
          </div>

          {/* Progress Indicator */}
          <div className="hidden md:flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            {/* Step 1: Location */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-emerald-900" aria-hidden="true" />
              </div>
              <span className="text-white text-sm font-medium">Location</span>
            </div>
            <div className="w-8 h-0.5 bg-emerald-400 rounded-full" aria-hidden="true"></div>
            {/* Step 2: Waste Type */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <Recycle className="w-4 h-4 text-emerald-900" aria-hidden="true" />
              </div>
              <span className="text-white text-sm font-medium">Waste Type</span>
            </div>
            <div className="w-8 h-0.5 bg-emerald-400 rounded-full" aria-hidden="true"></div>
            {/* Step 3: Skip Size */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-emerald-600 text-sm font-bold">3</span>
              </div>
              <span className="text-white text-sm font-medium">Skip Size</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pb-16 pt-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Perfect Skip
              </span>
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional waste management solutions tailored to your project needs.
              From small home clearances to major construction projects.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Clock className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span className="text-emerald-100 text-sm">14-Day Hire</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span className="text-emerald-100 text-sm">Fully Licensed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="w-4 h-4 text-emerald-200" aria-hidden="true" />
                <span className="text-emerald-100 text-sm">UK Wide Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
