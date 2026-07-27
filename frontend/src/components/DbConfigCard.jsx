import React from 'react';
import { Database, ShieldCheck, Terminal, Cpu } from 'lucide-react';

export const DbConfigCard = ({ dbStatus, serverDetails }) => {
  return (
    <div className="glass-panel mb-6">
      <div className="card-header">
        <div className="flex items-center gap-2">
          <Database size={18} className="text-indigo-400" />
          <h3 className="font-semibold text-lg">Environment & MySQL Setup</h3>
        </div>
        <span className={`status-badge ${dbStatus ? 'online' : 'pending'}`}>
          {dbStatus ? 'Connected' : 'Action Required'}
        </span>
      </div>

      <div className="card-body">
        <p className="text-sm text-muted mb-3">
          Configured in <code className="text-indigo-300">backend/.env</code> for MySQL database connectivity:
        </p>

        <div className="config-grid">
          <div className="config-item">
            <label>Connection</label>
            <span>mysql</span>
          </div>
          <div className="config-item">
            <label>Host</label>
            <span>127.0.0.1</span>
          </div>
          <div className="config-item">
            <label>Port</label>
            <span>3306</span>
          </div>
          <div className="config-item">
            <label>Database</label>
            <span>react_laravel_db</span>
          </div>
          <div className="config-item">
            <label>Username</label>
            <span>root</span>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-black/30 border border-white/10 text-xs font-mono text-gray-300">
          <div className="flex items-center gap-2 mb-1 text-indigo-400 font-sans font-semibold">
            <Terminal size={14} /> Quick Terminal Commands:
          </div>
          <div className="text-emerald-400"># Start Laravel Server (in /backend):</div>
          <div className="mb-2">php artisan serve</div>
          <div className="text-emerald-400"># Run Migrations (when MySQL is running):</div>
          <div>php artisan migrate</div>
        </div>
      </div>
    </div>
  );
};

export default DbConfigCard;
