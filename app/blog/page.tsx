import Link from "next/link";
import { Link as RouterLink } from "react-router-dom";

const BlogPage = () => {
  return (
    <div>
      <p>Blog page</p>
      <ul>
        <li>
          <Link href="/">Go back to home</Link>
        </li>
        <li>
          <Link href="/about">About (Link Next)</Link>
        </li>
        <li>
          <a href="/about">About (a tag)</a>
        </li>
        {/* <RouterLink /> wont work here as it is not in the context of react-router + it requires 'use client' */}
        {/* <li>
          <RouterLink to="/about">About (a tag)</RouterLink>
        </li> */}

        <li>
          <Link href="/login">Login (Link Next)</Link>
        </li>
        <li>
          <a href="/login">Login (a tag)</a>
        </li>
      </ul>
    </div>
  );
};

export default BlogPage;
