import React, { useMemo, useState } from 'react';
// import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import Slash from "../assets/icons/slash.svg";
import Hash from "../assets/icons/hash.svg";
import { Link } from 'react-router';

const blogPosts = [
   {
     id: 1,
     title: "Building Responsive Mobile Apps with React Native",
     excerpt: "Exploring best practices for creating fluid, responsive mobile experiences that work seamlessly across different device sizes...",
     date: "2025-01-03",
     readTime: "5 min",
     tags: ["Mobile", "React Native", "Development"]
   },
   {
     id: 2,
     title: "The Art of Clean Code: Lessons from Production",
     excerpt: "After years of writing code, I've learned that the best code is not the cleverest, but the most readable and maintainable...",
     date: "2024-12-28",
     readTime: "8 min",
     tags: ["Best Practices", "Clean Code", "Development"]
   },
   {
     id: 3,
     title: "CSS Grid vs Flexbox: When to Use What",
     excerpt: "Understanding the strengths of each layout system helps you build better, more maintainable user interfaces...",
     date: "2024-12-20",
     readTime: "6 min",
     tags: ["CSS", "Frontend", "Web Design"]
   },
   {
     id: 4,
     title: "My Journey from Bootcamp to Senior Developer",
     excerpt: "Reflecting on the path that led me from writing my first 'Hello World' to architecting scalable applications...",
     date: "2024-12-15",
     readTime: "10 min",
     tags: ["Career", "Personal", "Learning"]
   },
   {
     id: 5,
     title: "State Management in Modern React Applications",
     excerpt: "Comparing different approaches to state management and when to reach for Context, Redux, or Zustand...",
     date: "2024-12-08",
     readTime: "7 min",
     tags: ["React", "Frontend", "Development"]
   }];

export default function DeveloperBlog() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchTerm, setSearchTerm] = useState({
    'search': ''
  })

  console.group(searchTerm)

  const allTags = useMemo (() => {
    return ['all', ...new Set(blogPosts.flatMap(post => post.tags))]
  },[])

  const filteredPosts = blogPosts.filter((post) => {
    const matchesTag =  selectedTag ==='all' || post.tags.includes(selectedTag) 
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.search.toLowerCase())
    return matchesTag && matchesSearch;
  });

  const handleChange = (e) => {
    e.preventDefault()
    setSearchTerm({ ...searchTerm, [e.target.id]: e.target.value})
  }


  return (
    <div className="min-h-screen text-gray-300 font-mono mt-10">
      {/* main Header */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col overflow-hidden justify-start">
          <div className="flex flex-shrink-0 gap-[1px] items-center ">
            <img src={Slash} alt="" className="w-[1.2rem]" />
            <p className="text-4xl fira-code-bold">blog</p>
          </div>
          <p className="fira-code-light mt-2 ">Thoughts on development, design, and the intersection of technology and creativity.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl py-12">
        {/* Hero Section */}
        {/* search */}
        <div className='flex items-center justify-center p-1 mb-5'>
          <input 
            className='text-lighttext placeholder:opacity-60 focus:bg-darktext/30 lg:w-[40%] md:w-[50%] w-[90%] bg-none outline-none p-2 fira-code-light border border-darktext '
            id = "search"
            value={searchTerm.search}
            placeholder='Search Article'
            onChange={handleChange}
          />
        </div>
        {/* Tag Filter */}
        <div className="mb-12 flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 text-sm border transition-all flex gap-[0.1rem] cursor-pointer ${
                selectedTag === tag
                  ? "border-white/70 bg-white/10 text-white"
                  : "border-darktext text-gray-400 hover:border-white/70 hover:bg-white/10"
              }`}
            >
              <p>#</p>
              {tag}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Link to={`${post.id}`}>
              <article
                key={post.id}
                className="border border-darktext/30 p-6 mt-3 hover:border-darktext transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-xl text-white group-hover:text-teal-400/80 transition-colors flex-1">
                    {post.title}
                  </h2>
                  {/* <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all flex-shrink-0" /> */}
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    {/* <Calendar className="w-4 h-4" /> */}
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* <Clock className="w-4 h-4" /> */}
                    <span>{post.readTime} read</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* <Tag className="w-4 h-4" /> */}
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-teal-500/80 flex gap-[0.1rem]">
                        <p>#</p>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 border-l-2 border-darktext pl-6 py-4">
          <p className="text-2xl text-gray-400 italic">
            <span className="text-4xl text-gray-600">"</span>
            Code is like humor. When you have to explain it, it's bad.
            <span className="text-4xl text-gray-600">"</span>
          </p>
          <p className="text-gray-600 mt-2">— Cory House</p>
        </div>
      </main>
    </div>
  );
}       