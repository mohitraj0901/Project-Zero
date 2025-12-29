import React, { useState } from "react";

const sample = {
  district: [
    { id: 1, title: "Road repairs begin", body: "Major pothole repairs are scheduled for the main artery roads starting next Monday.", time: "2h ago" },
    { id: 2, title: "New school approved", body: "Local education board has finalized the site for the new elementary school.", time: "5h ago" },
  ],
  state: [
    { id: 3, title: "Power grid upgrade", body: "State to invest $200M in grid improvements to prevent outages.", time: "1d ago" },
    { id: 4, title: "Health initiative", body: "New vaccination drive launched targeting rural communities.", time: "2d ago" },
  ],
  national: [
    { id: 5, title: "Budget announced", body: "Significant changes to green energy taxation proposed in the new budget.", time: "3h ago" },
    { id: 6, title: "International summit", body: "Global leaders to meet next month to discuss climate action.", time: "6h ago" },
  ],
};

export default function News() {
  const [tab, setTab] = useState("district");
  const list = sample[tab];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* --- Main Content Area --- */}
      <div className="flex-1 space-y-8">
        
        {/* Modern Tab Navigation */}
        <div className="flex p-1 bg-slate-100/50 rounded-2xl w-fit">
          {["district", "state", "national"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                tab === t 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {list.map((item) => (
            <article 
              key={item.id} 
              className="group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                  {tab}
                </span>
                <span className="text-xs text-slate-400">{item.time || "Recently"}</span>
              </div>
              
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                {item.body}
              </p>
              
              <div className="mt-6 pt-4 border-t border-slate-50">
                <button className="text-xs font-bold text-slate-400 group-hover:text-indigo-500 flex items-center transition-colors">
                  READ FULL STORY <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- Sidebar (Engaging Element) --- */}
      <aside className="w-full lg:w-80 space-y-6">
        <div className="p-6 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-200">
          <h5 className="font-bold text-lg mb-2">Weekly Briefing 📩</h5>
          <p className="text-indigo-100 text-xs leading-relaxed mb-4">
            Get the most important local news delivered to your inbox every Sunday.
          </p>
          <button className="w-full py-3 bg-white text-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors">
            Subscribe
          </button>
        </div>

        <div className="p-6 bg-white rounded-3xl border border-slate-100">
          <h5 className="font-bold text-slate-800 mb-4">Trending Topics</h5>
          <div className="space-y-4">
            {["#RoadSafety", "#GreenEnergy", "#TechSummit"].map((tag) => (
              <div key={tag} className="flex justify-between items-center group cursor-pointer">
                <span className="text-sm text-slate-600 group-hover:text-indigo-600 transition-colors">{tag}</span>
                <span className="text-[10px] font-bold text-slate-300">2.4k posts</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}