import React, { useState } from 'react';
import { Eye, EyeOff, Save, FileText, Calendar, Tag, Image, Code, Bold, Italic, List, Link2 } from 'lucide-react';

export default function MarkdownBlogEditor() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  const insertMarkdown = (syntax) => {
    const textarea = document.getElementById('content-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    let newText = '';
    let cursorOffset = 0;

    switch(syntax) {
      case 'bold':
        newText = `**${selectedText || 'bold text'}**`;
        cursorOffset = selectedText ? newText.length : 2;
        break;
      case 'italic':
        newText = `*${selectedText || 'italic text'}*`;
        cursorOffset = selectedText ? newText.length : 1;
        break;
      case 'code':
        newText = `\`${selectedText || 'code'}\``;
        cursorOffset = selectedText ? newText.length : 1;
        break;
      case 'link':
        newText = `[${selectedText || 'link text'}](url)`;
        cursorOffset = selectedText ? newText.length - 4 : 1;
        break;
      case 'list':
        newText = `\n- ${selectedText || 'list item'}`;
        cursorOffset = newText.length;
        break;
      case 'h2':
        newText = `\n## ${selectedText || 'Heading'}`;
        cursorOffset = newText.length;
        break;
      case 'codeblock':
        newText = `\n\`\`\`javascript\n${selectedText || '// your code here'}\n\`\`\`\n`;
        cursorOffset = selectedText ? newText.length : 15;
        break;
    }

    const newContent = content.substring(0, start) + newText + content.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + cursorOffset, start + cursorOffset);
    }, 0);
  };

  const renderMarkdown = (text) => {
    let html = text;
    
    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-800 border border-gray-700 p-4 overflow-x-auto text-sm mb-6"><code class="text-teal-400">$2</code></pre>');
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl text-white mt-8 mb-4"><span class="text-teal-500">//</span> $1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl text-white mt-12 mb-4"><span class="text-teal-500">//</span> $1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl text-white mt-12 mb-6">$1</h1>');
    
    // Bold and italic
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong class="text-white font-bold"><em>$1</em></strong>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em class="text-gray-300">$1</em>');
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-800 text-teal-400 px-2 py-1 text-sm">$1</code>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-teal-400 hover:underline">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.+)$/gim, '<li class="ml-6">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc text-gray-300 mb-6">$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(p => {
      if (!p.trim()) return '';
      if (p.startsWith('<')) return p;
      return `<p class="text-gray-300 leading-relaxed mb-6">${p}</p>`;
    }).join('');
    
    return html;
  };

  const handleSave = () => {
    const post = {
      title,
      excerpt,
      tags: tags.split(',').map(t => t.trim()),
      content,
      date: new Date().toISOString(),
    };
    console.log('Saving post:', post);
    alert('Post saved! (Check console for data)');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-mono">
      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-teal-500"></div>
            <span className="text-xl text-white">Ivan</span>
            <span className="text-gray-600 ml-2">/ Blog Editor</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-700 text-gray-400 hover:border-gray-600 transition-all text-sm"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? 'Hide' : 'Show'} Preview
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 border border-teal-500 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-all text-sm"
            >
              <Save className="w-4 h-4" />
              Save Draft
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl text-white mb-6">
                <span className="text-teal-500">//</span> Post Details
              </h2>
              
              {/* Title Input */}
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title..."
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Excerpt Input */}
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Excerpt
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief description of your post..."
                  rows="3"
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Tags Input */}
              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="React, JavaScript, Tutorial"
                  className="w-full bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Markdown Toolbar */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Content (Markdown)</label>
              <div className="flex flex-wrap gap-2 mb-3 pb-3 border-b border-gray-800">
                <button
                  onClick={() => insertMarkdown('bold')}
                  className="p-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all"
                  title="Bold"
                >
                  <Bold className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('italic')}
                  className="p-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all"
                  title="Italic"
                >
                  <Italic className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('code')}
                  className="p-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all"
                  title="Inline Code"
                >
                  <Code className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('link')}
                  className="p-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all"
                  title="Link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('list')}
                  className="p-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all"
                  title="List"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => insertMarkdown('h2')}
                  className="px-3 py-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all text-sm"
                  title="Heading"
                >
                  H2
                </button>
                <button
                  onClick={() => insertMarkdown('codeblock')}
                  className="px-3 py-2 border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all text-sm"
                  title="Code Block"
                >
                  {'</>'}
                </button>
              </div>

              {/* Content Editor */}
              <textarea
                id="content-editor"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Start writing your post in markdown...

## Example Heading

This is a paragraph with **bold** and *italic* text.

- List item 1
- List item 2

```javascript
const example = 'code block';
```"
                className="w-full h-[600px] bg-gray-800 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-teal-500 focus:outline-none transition-colors resize-none font-mono text-sm"
              />
            </div>

            {/* Quick Reference */}
            <div className="bg-gray-800/50 border border-gray-700 p-4">
              <p className="text-teal-400 text-sm mb-2">MARKDOWN REFERENCE</p>
              <div className="text-xs text-gray-400 space-y-1">
                <p><code className="text-teal-500">## Heading</code> - Section heading</p>
                <p><code className="text-teal-500">**bold**</code> - Bold text</p>
                <p><code className="text-teal-500">*italic*</code> - Italic text</p>
                <p><code className="text-teal-500">`code`</code> - Inline code</p>
                <p><code className="text-teal-500">[text](url)</code> - Link</p>
                <p><code className="text-teal-500">- item</code> - List item</p>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          {showPreview && (
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-xl text-white mb-6">
                <span className="text-teal-500">//</span> Live Preview
              </h2>
              
              <div className="border border-gray-700 bg-gray-800/30 p-8">
                {/* Preview Header */}
                {title && (
                  <div className="mb-8 border-b border-gray-800 pb-6">
                    {tags && (
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-4">
                        <Tag className="w-4 h-4" />
                        {tags.split(',').map((tag, idx) => (
                          <span key={idx} className="text-teal-500">
                            #{tag.trim()}
                          </span>
                        ))}
                      </div>
                    )}
                    <h1 className="text-3xl text-white mb-4 leading-tight">
                      {title}
                    </h1>
                    {excerpt && (
                      <p className="text-lg text-gray-400 leading-relaxed">
                        {excerpt}
                      </p>
                    )}
                  </div>
                )}

                {/* Preview Content */}
                {content ? (
                  <div 
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
                  />
                ) : (
                  <p className="text-gray-500 text-center py-12">
                    Start typing to see preview...
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}