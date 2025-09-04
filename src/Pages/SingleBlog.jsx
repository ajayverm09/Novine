import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogs } from "../Components/BlogsData";
import { FaFacebookF, FaXTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2 className="text-center py-20 text-xl">Blog not found.</h2>;

  // Related blogs
  let relatedBlogs = blogs.filter((b) => b.id !== blog.id && b.category === blog.category);
  if (relatedBlogs.length < 3) {
    const additional = blogs.filter((b) => b.id !== blog.id && b.category !== blog.category).slice(0, 3 - relatedBlogs.length);
    relatedBlogs = [...relatedBlogs, ...additional];
  }

  // Animation variants
  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const cardVariant = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

  return (
    <div>
      {/* HERO SECTION */}
      <motion.div
        className="relative h-[300px] sm:h-[400px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${blog.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-3xl">
          <motion.span
            className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          >
            {blog.category}
          </motion.span>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
          >
            {blog.title}
          </motion.h1>
          <motion.div
            className="mt-3 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }}
          >
            <span>✍️ {blog.author}</span>
            <span>📅 {blog.date}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* CONTENT SECTION */}
      <motion.div
        className="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 md:px-12"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div
          className="prose prose-sm sm:prose lg:prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>

        {/* SOCIAL SHARE */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <FaFacebookF size={18} />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <FaXTwitter size={18} />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${blog.title}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
            <FaLinkedin size={18} />
          </a>
          <a href={`https://api.whatsapp.com/send?text=${blog.title} - ${window.location.href}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
            <FaWhatsapp size={18} />
          </a>
        </div>
      </motion.div>

   

      {/* RELATED BLOGS */}
      {relatedBlogs.length > 0 && (
        <motion.div className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 md:px-12" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6 text-gray-900">Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedBlogs.map((rel, idx) => (
                <motion.div
                  key={rel.id}
                  className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition transform hover:scale-[1.02]"
                  variants={cardVariant}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: idx * 0.2 }}
                >
                  <Link to={`/blog/${rel.id}`}>
                    <img src={rel.image} alt={rel.title} className="w-full h-36 sm:h-40 object-cover" />
                    <div className="p-4 sm:p-5">
                      <h3 className="text-md sm:text-lg font-semibold text-gray-900 mb-1">{rel.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-3">{rel.description}</p>
                      <span className="text-indigo-600 font-semibold hover:underline text-xs sm:text-sm">Read More »</span>
                    </div>
                    <div className="border-t px-4 sm:px-5 py-2 text-xs sm:text-sm text-gray-500 flex justify-between">
                      <span>{rel.author}</span>
                      <span>{rel.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default BlogDetails;
