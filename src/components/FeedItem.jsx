import React, { useState } from "react";

export default function FeedItem({ item, onUpdate, onLike }) {
  const [commentText, setCommentText] = useState("");

  

  function dislike() {
    onUpdate({ ...item, dislikes: item.dislikes + 1 });
  }

  function addComment(e) {
    e.preventDefault();
    if (!commentText.trim()) return;
    const newComments = [
      ...item.comments,
      { id: Date.now(), author: "You", text: commentText.trim(), createdAt: new Date().toISOString() },
    ];
    onUpdate({ ...item, comments: newComments });
    setCommentText("");
  }

  return (
    <article className="p-6 transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* Profile Avatar with custom styling */}
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex-shrink-0 flex items-center justify-center font-bold text-indigo-600 shadow-sm border border-indigo-100/50">
          {item.author[0]}
        </div>

        <div className="flex-1">
          {/* Header Info */}
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-slate-800 tracking-tight">{item.author}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">
                {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • Community
              </div>
            </div>
          </div>

          {/* Post Content */}
          <p className="mt-4 text-slate-600 leading-relaxed text-sm lg:text-base">
            {item.text}
          </p>

          {/* Elegant Image Handling */}
          {item.imageUrl && (
            <div className="mt-4 rounded-3xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
              <img
                src={item.imageUrl}
                alt="post media"
                className="max-h-[400px] w-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}

          {/* Action Bar */}
          <div className="mt-6 flex items-center gap-2">
            <button 
  onClick={() => onLike(item.id)} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 transition-all text-xs font-bold"
            >
              <span>👍</span> {item.likes}
            </button>
            <button 
              onClick={dislike} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-all text-xs font-bold"
            >
              <span>👎</span> {item.dislikes}
            </button>
            <div className="ml-auto text-[10px] font-black text-slate-300 uppercase tracking-widest">
              {item.comments.length} Comments
            </div>
          </div>

          {/* Comments list - Refined and nested */}
          {item.comments.length > 0 && (
            <div className="mt-6 space-y-3 pl-2 border-l-2 border-slate-50">
              {item.comments.map((c) => (
                <div key={c.id} className="group p-3 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-xs text-slate-700">{c.author}</span>
                    <span className="text-[9px] text-slate-300 font-bold uppercase">Just now</span>
                  </div>
                  <div className="text-sm text-slate-500 leading-snug">{c.text}</div>
                </div>
              ))}
            </div>
          )}

          {/* Add comment - Integrated Form */}
          <form onSubmit={addComment} className="mt-6 flex gap-3">
            <input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a thoughtful reply..."
              className="flex-1 px-5 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400 placeholder:font-medium"
            />
            <button 
              type="submit" 
              className="px-6 py-3 rounded-2xl bg-indigo-600 text-white text-xs font-black uppercase tracking-widest hover:bg-indigo-700 shadow-lg shadow-indigo-100 active:scale-95 transition-all"
            >
              Reply
            </button>
          </form>
        </div>
      </div>
    </article>
  );
}