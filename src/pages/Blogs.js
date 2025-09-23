import React from 'react';
import { Link } from "react-router-dom";
import './Blogs.css';

import sentry from "../resources/blog/sentry.jpg"
import pstore from "../resources/blog/pstore.jpg"
import boot from "../resources/blog/boot.jpg"
import distro from "../resources/blog/distros.png"

const blogs = [
  {
    id: 1,
    title: 'Embedded Linux booting process',
    image: boot,
    description: 'This article will walk you through every step of the process of Embedded Linux booting. This is meant for engineers who are....',
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'Log kernel crash with ramoops',
    image: pstore,
    description: 'Discover the new ES6 features that make your JavaScript code cleaner and more efficient.',
    link: '/blog/2',
  },
  {
    id: 3,
    title: 'Set-Up sentry self-hosted server for error tracing',
    image: sentry,
    description: 'Since Sentry is an open-source system, the code is available online to deploy on your own infrastructure.',
    link: '/blog/3',
  },
  {
    id: 4,
    title: 'Exploring the Best Linux Distros for Every Need',
    image: distro,
    description: 'Linux, a versatile and powerful operating system, has gained immense popularity recently...',
    link: '/blog/4',
  },
];

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      <h1 className="page-title">Latest Blogs</h1>

      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-description">{blog.description}</p>
              <Link to={blog.link} className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
