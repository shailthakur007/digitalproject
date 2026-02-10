import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-slate-900">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-secondary hover:text-orange-500 font-medium flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn pb-20">
      {/* Hero Image */}
      <div className="w-full h-[400px] relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/85" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center text-white">
            <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm md:text-base text-slate-200">
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
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-700 hover:text-secondary mb-8 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Articles
          </Link>
          
          <div className="prose prose-lg max-w-none text-slate-900 leading-loose space-y-6">
            {post.content ? (
              post.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center gap-2 text-sm text-slate-700 font-medium">
            <Tag className="h-4 w-4" />
            <span>Category: {post.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;