import React, { useState } from "react";

export default function PostBox({ onAddPost }) {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function submit(e) {
  e.preventDefault();

  if (!text.trim() && !imageUrl.trim()) return;

  // 🔥 ONLY SEND TEXT
  onAddPost({ text: text.trim() });

  setText("");
  setImageUrl("");
}
   
  return (
    <form 
      onSubmit={submit} 
      className="p-6 transition-all duration-300"
    >
      <div className="flex gap-4">
        {/* User Avatar Placeholder */}
        <div className="w-12 h-12 rounded-2xl bg-slate-100 flex-shrink-0 flex items-center justify-center font-bold text-slate-400 border border-slate-200/50">
          Y
        </div>

        <div className="flex-1 space-y-4">
          {/* Main Text Area */}
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={3}
            placeholder="Share an update with your community..."
            className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 border-none focus:ring-0 resize-none text-lg font-medium leading-relaxed"
          ></textarea>

          {/* Optional Image Input - Styled as a subtle bar */}
          <div className="flex items-center gap-3 p-1 bg-slate-50 rounded-2xl border border-slate-100 focus-within:border-indigo-200 transition-colors">
            <span className="pl-3 text-lg opacity-50">🖼️</span>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Paste an image URL..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-slate-600 placeholder:text-slate-400 font-medium"
            />
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-2">
              <button type="button" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">📍</button>
              <button type="button" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">📊</button>
              <button type="button" className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">😊</button>
            </div>

            <div className="flex gap-3">
              {(text || imageUrl) && (
                <button
                  type="button"
                  onClick={() => {
                    setText("");
                    setImageUrl("");
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-400 hover:text-slate-600 transition-all uppercase tracking-widest"
                >
                  Clear
                </button>
              )}
              <button
                type="submit"
                disabled={!text.trim() && !imageUrl.trim()}
                className="px-8 py-2.5 rounded-2xl bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 disabled:opacity-30 disabled:shadow-none transition-all active:scale-95"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}