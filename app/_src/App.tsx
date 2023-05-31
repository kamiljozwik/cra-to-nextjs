import { Routes, Route, Outlet, Link } from "react-router-dom";
import NextLink from "next/link";

// https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/blog">Blog (Link RR)</Link>
          </li>
          <li>
            <NextLink href="/blog">Blog (Link Next)</NextLink>
          </li>
          <li>
            <Link to="/login">Login (Link RR)</Link>
          </li>
          <li>
            <NextLink href="/login">Login (Link Next)</NextLink>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login page</h2>
      <ul>
        <li>
          <NextLink href="/">Home (Link Next)</NextLink>
        </li>
        <li>
          <Link to="/">Home (Link RR)</Link>
        </li>

        <li>
          <NextLink href="/about">About (Link Next)</NextLink>
        </li>
        <li>
          <Link to="/about">About (Link RR)</Link>
        </li>

        <li>
          <NextLink href="/blog">Blog (Link Next)</NextLink>
        </li>
        <li>
          <Link to="/blog">Blog (Link RR)</Link>
        </li>
      </ul>
    </div>
  );
}
