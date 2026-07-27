import React from 'react';
import { Layers, Server, Database, RefreshCw } from 'lucide-react';

export const Header = ({ backendStatus, dbStatus, onRefresh, loading }) => {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-icon">
          <Layers className="w-6 h-6 text-white" size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">
            React <span className="gradient-text">+ Laravel</span>
          </h1>
          <p className="text-xs text-muted">Fullstack MySQL Architecture</p>
        </div>
      </div>

      <div className="status-pills">
        {/* Laravel Backend Status */}
        <div className={`status-badge ${backendStatus ? 'online' : 'offline'}`}>
          <Server size={14} />
          <span className="pulse-dot"></span>
          <span>Laravel API: {backendStatus ? 'Online' : 'Offline'}</span>
        </div>

        {/* MySQL Database Status */}
        <div className={`status-badge ${dbStatus ? 'online' : 'pending'}`}>
          <Database size={14} />
          <span className="pulse-dot"></span>
          <span>MySQL DB: {dbStatus ? 'Connected' : 'Waiting Connection'}</span>
        </div>

        <button 
          onClick={onRefresh} 
          disabled={loading}
          className="btn btn-secondary text-sm py-1.5 px-3"
          title="Refresh Backend Status"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
