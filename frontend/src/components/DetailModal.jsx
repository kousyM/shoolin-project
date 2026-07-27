import React from 'react';
import { X, Calendar, Clock, Award, Building2 } from 'lucide-react';

export const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close-btn" aria-label="Close Modal">
          <X size={20} />
        </button>

        {item.image_url && (
          <img
            src={item.image_url}
            alt={item.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
        )}

        <div className="flex items-center gap-3 text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
          {item.category && <span>{item.category}</span>}
          {item.type && <span>&bull; {item.type}</span>}
          {item.date_str && (
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar size={12} /> {item.date_str}
            </span>
          )}
          {item.read_time && (
            <span className="flex items-center gap-1 text-slate-500">
              <Clock size={12} /> {item.read_time}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-extrabold text-slate-900 mb-4">{item.title}</h2>

        {item.client && (
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-4 bg-slate-100 p-3 rounded-lg">
            <Building2 size={16} className="text-blue-600" />
            <span className="font-semibold">Client:</span> {item.client}
          </div>
        )}

        {item.metric_number && (
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mb-6">
            <div className="text-2xl font-black text-blue-700">{item.metric_number}</div>
            <div className="text-xs text-slate-600 font-medium">{item.metric_label}</div>
          </div>
        )}

        <div className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed mb-6">
          <p className="font-semibold text-slate-900 mb-4">{item.summary}</p>
          <p>{item.content || item.description}</p>
        </div>

        {item.features && item.features.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <h4 className="font-bold text-sm text-slate-900 mb-2">Core Capabilities:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button onClick={onClose} className="btn-ncs-primary">
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
