import React, { useState } from 'react';
import { Plus, Trash2, Tag, AlertCircle, CheckCircle2 } from 'lucide-react';
import { createItem, deleteItem } from '../api';

export const ItemManager = ({ items, onRefresh, backendOnline }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Feature');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    setFeedback(null);

    const result = await createItem({
      title: title.trim(),
      category,
      description: description.trim()
    });

    setIsSubmitting(false);

    if (result.success) {
      setTitle('');
      setDescription('');
      setFeedback({ type: 'success', message: 'Item created successfully in backend!' });
      onRefresh();
    } else {
      setFeedback({ type: 'error', message: result.error || 'Failed to submit item.' });
    }
  };

  const handleDelete = async (id) => {
    const result = await deleteItem(id);
    if (result.success) {
      onRefresh();
    } else {
      alert('Delete failed: ' + result.error);
    }
  };

  return (
    <div className="main-grid">
      {/* Create Form */}
      <div className="glass-panel">
        <div className="card-header">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Plus size={18} className="text-indigo-400" />
            Add New Record
          </h3>
        </div>
        <div className="card-body">
          {feedback && (
            <div className={`p-3 rounded-lg text-sm mb-4 flex items-center gap-2 ${
              feedback.type === 'success' 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}>
              {feedback.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              <span>{feedback.message}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Title / Feature Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. React Frontend Setup"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="API Integration">API Integration</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                rows="3"
                placeholder="Brief description of the item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className="btn btn-primary w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Save to Laravel API'}
            </button>
          </form>
        </div>
      </div>

      {/* Item List */}
      <div className="glass-panel">
        <div className="card-header">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Tag size={18} className="text-purple-400" />
            Live Backend Data ({items.length})
          </h3>
        </div>

        <div className="card-body">
          {items.length === 0 ? (
            <div className="empty-state">
              <AlertCircle size={36} className="mx-auto mb-2 opacity-40 text-indigo-400" />
              <p className="font-medium text-gray-300">No items available yet</p>
              <p className="text-xs text-muted mt-1">
                {backendOnline 
                  ? 'Use the form on the left to add a new record to Laravel API.' 
                  : 'Start Laravel backend server (php artisan serve) to load data.'}
              </p>
            </div>
          ) : (
            <div className="item-list">
              {items.map((item) => (
                <div key={item.id || item.title} className="item-card">
                  <div className="item-info">
                    <h4>
                      <span className="category-tag">{item.category || 'General'}</span>
                      {item.title}
                    </h4>
                    {item.description && <p>{item.description}</p>}
                    <span className="text-[10px] text-gray-500">
                      Created: {item.created_at ? new Date(item.created_at).toLocaleTimeString() : 'Just now'}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger p-2"
                    title="Delete item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemManager;
