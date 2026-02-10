import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search, Filter, X } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(BLOG_POSTS.map(post => post.category))];
    return cats;
  }, []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="bg-dark-950 py-20 border-b border-dark-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Latest Insights</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stay informed with expert articles on health insurance, retirement planning, and financial wellness.
          </p>
        </div>
      </div>

      <section className="py-12 bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-24 z-30 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="block w-full pl-10 pr-10 py-3 border border-slate-300 rounded-full leading-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-secondary focus:border-secondary sm:text-sm transition-all shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-secondary text-white shadow-md transform scale-105'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-[600px]">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="bg-slate-200 inline-block p-6 rounded-full mb-4">
                <Filter className="h-10 w-10 text-slate-500" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">No articles found</h3>
              <p className="text-slate-700 mt-2">Try adjusting your search or category filter.</p>
              <button 
                onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
                className="mt-6 text-secondary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <article key={post.id} className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200 hover:border-secondary/20 transition-all duration-300 group h-full">
                  <Link to={`/blog/${post.id}`} className="block h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold text-slate-900 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-200">
                        {post.category}
                      </span>
                    </div>
                  </Link>
                  <div className="p-8 flex flex-col flex-grow">
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-secondary cursor-pointer transition-colors leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-slate-900 mb-6 flex-grow line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-700 font-medium pt-6 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;