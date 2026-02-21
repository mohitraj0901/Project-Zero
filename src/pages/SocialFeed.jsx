import React, { useState } from "react";
import PostBox from "../components/PostBox";
import FeedItem from "../components/FeedItem";
import { useEffect } from "react";
import { getPosts, createPost } from "../services/postService";
import { toggleLike } from "../services/postService";



export default function SocialFeed() {
  const [posts, setPosts] = useState([]);
 const handleLike = async (postId) => {
  try {
    const data = await toggleLike(postId);

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, likes: data.likesCount }
          : post
      )
    );
  } catch (err) {
    console.error("Like failed", err);
  }
};
  useEffect(() => {
    
  const fetchPosts = async () => {
    try {
      const data = await getPosts();

      // Transform backend format → your UI format
      const formatted = data.map((post) => ({
        id: post._id,
        author: post.user?.name || "Unknown",
        handle: "@user",
        text: post.content,
        imageUrl: null,
        createdAt: post.createdAt,
        likes: post.likes?.length || 0,
        dislikes: 0,
        comments: [],
      }));

      setPosts(formatted);
    } catch (err) {
      console.error(err);
    }
  };

  fetchPosts();
}, []);

  async function addPost(post) {
  try {
    const newPost = await createPost(post.text);

    const formatted = {
      id: newPost._id,
      author: newPost.user?.name || "You",
      handle: "@you",
      text: newPost.content,
      imageUrl: null,
      createdAt: newPost.createdAt,
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    setPosts((p) => [formatted, ...p]);
  } catch (err) {
    console.error(err);
  }
}

  function updatePost(updated) {
    setPosts((p) => p.map((x) => (x.id === updated.id ? updated : x)));
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* --- Main Feed Area --- */}
      <div className="flex-1 space-y-8">
        
        {/* Post Creation Area */}
        <div className="bg-white rounded-[32px] p-2 shadow-sm border border-slate-100">
           <PostBox onAddPost={addPost} />
        </div>

        {/* The Feed */}
        <div className="space-y-6">
          {posts.map((p) => (
            <div 
              key={p.id} 
              className="bg-white rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden"
            >
              <FeedItem 
  item={p} 
  onUpdate={updatePost}
  onLike={handleLike}
/>
            </div>
          ))}
        </div>
      </div>

      {/* --- Social Sidebar --- */}
      <aside className="w-full lg:w-[340px] space-y-8">
        
        {/* Profile Snapshot / Engagement Card */}
        <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] text-white shadow-xl shadow-slate-200">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20">
              M
            </div>
            <div>
              <div className="font-bold">Mohit Raj</div>
              <div className="text-xs text-slate-400">@mohitraj</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold">128</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Posts</div>
            </div>
            <div>
              <div className="text-lg font-bold">1.2k</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Followers</div>
            </div>
            <div>
              <div className="text-lg font-bold">450</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest">Following</div>
            </div>
          </div>
        </div>

        {/* Suggested People */}
        <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm">
          <h5 className="font-black text-slate-800 mb-6 tracking-tight">Who to follow</h5>
          <div className="space-y-6">
            {[
              { name: "Sarah Chen", handle: "@sarahc", img: "S" },
              { name: "Tech Weekly", handle: "@techmag", img: "T" }
            ].map((person) => (
              <div key={person.handle} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    {person.img}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-700">{person.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium">{person.handle}</div>
                  </div>
                </div>
                <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors border-t border-slate-50 pt-6">
            VIEW ALL SUGGESTIONS
          </button>
        </div>
      </aside>
    </div>
  );
}