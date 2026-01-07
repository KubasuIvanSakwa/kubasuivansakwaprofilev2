import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

// 1. We create a reusable component for code blocks
// This tells the markdown parser: "When you see code, use this highlighter"
const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-gray-800 text-teal-400 px-2 py-1 rounded text-sm" {...props}>
      {children}
    </code>
  );
};

// 2. The Main Component now accepts 'post' data as a Prop
export default function BlogReadPage({ post }) {
  const [bookmarked, setBookmarked] = useState(false);

  // Fallback if no post is passed (so the app doesn't crash while testing)
  const currentPost = post || {
    title: "Building Responsive Mobile Apps",
    date: "January 03, 2025",
    readTime: "5 min",
    tags: ["Mobile", "React Native"],
    content: `
When I first started building mobile applications, I made a common mistake...

## Understanding the Context

Mobile users interact with apps in diverse contexts.

\`\`\`javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
\`\`\`

> Design for thumbs, not cursors.
    ` 
  };

  return (
    <div className="min-h-screen text-gray-300 font-mono bg-gray-900">
      <article className="max-w-4xl mx-auto py-12 px-6">
        
        {/* Header Section */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span>{currentPost.date}</span>
            <span>•</span>
            <span>{currentPost.readTime}</span>
            <div className="flex gap-2 ml-4">
              {currentPost.tags.map(tag => (
                <span key={tag} className="text-teal-500">#{tag}</span>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
            {currentPost.title}
          </h1>

          <button 
            onClick={() => setBookmarked(!bookmarked)}
            className={`mt-4 px-4 py-2 border transition-all ${
              bookmarked 
                ? 'border-teal-500 text-teal-400' 
                : 'border-gray-700 text-gray-400 hover:border-gray-600'
            }`}
          >
            {bookmarked ? '[ Saved ]' : '[ Save Post ]'}
          </button>
        </header>

        {/* THE MAGIC PART: Dynamic Markdown Rendering */}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock, // Use our custom highlighter
              // Custom styling for other elements
              h2: ({node, ...props}) => <h2 className="text-2xl text-white mt-12 mb-4 border-l-4 border-teal-500 pl-4" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-300 leading-relaxed mb-6" {...props} />,
              blockquote: ({node, ...props}) => <div className="bg-gray-800/50 border-l-4 border-teal-500 p-4 my-8 italic text-gray-400" {...props} />,
            }}
          >
            {currentPost.content}
          </ReactMarkdown>
        </div>

        {/* Author Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex items-center gap-4">
           <div className="w-12 h-12 bg-teal-900 rounded-full flex items-center justify-center text-teal-400 font-bold">IV</div>
           <div>
             <p className="text-white font-bold">Kubasu Ivan</p>
             <p className="text-sm text-gray-500">Full Stack Developer</p>
           </div>
        </div>

      </article>
    </div>
  );
}