import { useEffect, useState } from "react";
import {
  CheckCircle,
  AlertTriangle,
  Loader2,
  ArrowRight,
  X,
  Info,
  Truck,
  Calendar,
} from "lucide-react";
import SkipOption from "./SkipOption";
import type { Skip } from "../types";

export default function SkipList() {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetch(
      "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load skip options");
        return res.json();
      })
      .then((data) => {
        setSkips(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch skips", err);
        setError("Unable to load skip options. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSelect = (id: number) => {
    setSelectedSkipId((prev) => (prev === id ? null : id));
  };

  const handleContinue = () => {
    if (!selectedSkip) return;
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setSelectedSkipId(null);
    }, 4000);
  };

  const selectedSkip = skips.find((skip) => skip.id === selectedSkipId);

  if (loading) {
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
            <Loader2 className="w-6 h-6 text-emerald-600 animate-spin" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Loading Skip Options
          </h2>
          <p className="text-sm text-gray-600">
            Finding the perfect skip sizes for your project...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 max-w-7xl mx-auto">
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Unable to Load Skip Options
          </h2>
          <p className="text-sm text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
          >
            <span>Try Again</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        
        <p className="text-gray-600 max-w-2xl mx-auto">
          Select the skip size that best suits your project needs.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skips.map((skip) => (
          <SkipOption
            key={skip.id}
            skip={skip}
            selected={skip.id === selectedSkipId}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {selectedSkip && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {selectedSkip.size} Yard Skip Selected
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-1">
                      <span className="font-medium">
                        £{selectedSkip.price_before_vat} excl. VAT
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{selectedSkip.hire_period_days} day hire</span>
                      </span>
                      {selectedSkip.transport_cost && (
                        <span>+ £{selectedSkip.transport_cost} transport</span>
                      )}
                    </div>

                    
                    <p className="mt-3 text-xs text-gray-500 max-w-xl">
                      Imagery and information shown throughout this website may
                      not reflect the exact shape or size specification, colours
                      may vary, options and/or accessories may be featured at
                      additional cost.
                    </p>

                    {!selectedSkip.allowed_on_road && (
                      <div className="mt-2 flex items-center space-x-2 p-2 bg-orange-50 border border-orange-200 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-orange-800 font-medium">
                          Private property only
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 sm:space-x-3">
                <button
                  onClick={() => setSelectedSkipId(null)}
                  className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors font-medium"
                >
                  Change
                </button>
                <button
                  onClick={handleContinue}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all shadow-md text-sm font-medium"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showNotification && selectedSkip && (
        <div className="fixed top-4 right-4 left-4 sm:left-auto sm:max-w-md z-[60] animate-in slide-in-from-top sm:slide-in-from-right duration-300">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm">
                  Skip Selection Confirmed
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedSkip.size} Yard Skip (£
                  {selectedSkip.price_before_vat}) added to order.
                </p>
                {!selectedSkip.allowed_on_road && (
                  <div className="flex items-start space-x-2 mt-2 p-2 bg-orange-50 rounded-lg">
                    <Info className="w-3 h-3 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-orange-700">
                      Requires private property placement.
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}
