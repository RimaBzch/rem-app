import { AlertTriangle, CheckCircle, Calendar, Truck, Shield } from 'lucide-react';
import type { Skip } from "../types";

interface SkipOptionProps {
  skip: Skip;
  selected: boolean;
  onSelect: (id: number) => void;
}

export default function SkipOption({ skip, selected, onSelect }: SkipOptionProps) {
  return (
    <div
      onClick={() => onSelect(skip.id)}
      className={`group relative bg-white rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
        selected
          ? 'ring-4 ring-emerald-400/30 scale-[1.02] border-emerald-300 shadow-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/50'
          : 'border-gray-200 hover:border-emerald-200 hover:scale-[1.01] hover:shadow-xl shadow-lg'
      }`}
    >
      {/* Selection Indicator */}
      {selected && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
      )}

      {/* Header Section */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 tracking-wide uppercase">
                {skip.size} Yard
              </span>
              {selected && (
                <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {skip.size} Yard Skip
            </h3>
            
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{skip.hire_period_days} day hire period</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-6 mb-6">
        <div className="relative w-full h-40 bg-gradient-to-br from-slate-100 to-gray-200 rounded-2xl overflow-hidden border border-gray-100">
          
          <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-teal-500/20 to-transparent"></div>
          
          {/* Skip Image */}
          <div className="flex items-center justify-center h-full p-4">
            <img
              src="https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg"
              alt={`${skip.size} Yard Skip`}
              className="max-w-full max-h-full object-contain filter drop-shadow-lg"
            />
          </div>

          {/* Size Badge */}
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm border border-white/50">
            <div className="flex items-center space-x-1">
              <Truck className="w-3 h-3 text-emerald-600" />
              <span className="text-emerald-800 text-xs font-bold">{skip.size} Yards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Restrictions */}
      <div className="px-6 mb-6">
        <div className="grid grid-cols-1 gap-3">
          <div className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
            skip.allowed_on_road 
              ? 'bg-emerald-50 border border-emerald-100' 
              : 'bg-orange-50 border border-orange-100'
          }`}>
            {skip.allowed_on_road ? (
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-600" />
              </div>
             ) : (
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
            )}
            <div className="flex-1">
              <span className={`text-sm font-semibold ${
                skip.allowed_on_road ? 'text-emerald-800' : 'text-orange-800'
              }`}>
                {skip.allowed_on_road ? 'Road Placement Permitted' : 'Private Property Only'}
              </span>
            </div>
          </div>

          <div className={`flex items-center space-x-3 p-3 rounded-xl transition-colors ${
            skip.allows_heavy_waste 
              ? 'bg-emerald-50 border border-emerald-100' 
              : 'bg-orange-50 border border-orange-100'
          }`}>
            {skip.allows_heavy_waste ? (
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
            ) : (
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-orange-600" />
              </div>
            )}
            <div className="flex-1">
              <span className={`text-sm font-semibold ${
                skip.allows_heavy_waste ? 'text-emerald-800' : 'text-orange-800'
              }`}>
                {skip.allows_heavy_waste ? 'Heavy Waste Accepted' : 'Light Waste Only'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-6 py-5 border-t border-gray-100">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">
            £{skip.price_before_vat}
          </div>
          <div className="text-sm text-gray-600 font-medium mb-2">
            Excluding VAT
          </div>
          {skip.transport_cost && (
            <div className="inline-flex items-center space-x-1 text-xs text-gray-500 bg-gray-100 rounded-full px-3 py-1">
              <Truck className="w-3 h-3" />
              <span>+ £{skip.transport_cost} transport</span>
            </div>
          )}
        </div>
      </div>

      {/* Selection Button */}
      <div className="p-6 pt-4">
        <button
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
            selected
              ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105 ring-4 ring-emerald-200'
              : 'bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 hover:text-white hover:shadow-lg hover:scale-105'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip.id);
          }}
        >
          {selected ? (
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Selected</span>
            </div>
          ) : (
            'Select This Skip'
          )}
        </button>
      </div>
    </div>
  );
}
