export default function Sidebar() {
    return (
      <aside className="w-64 min-h-screen border-r bg-white px-6 py-8">
   
        <div className="mb-10 text-xl font-semibold">
          SaaS Panel
        </div>
  

        <nav>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="/dashboard"
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </a>
            </li>
  
            <li>
              <a
                href="/dashboard/users"
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Users
              </a>
            </li>
  
            <li>
              <a
                href="/dashboard/posts"
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Posts
              </a>
            </li>
  
            <li>
              <a
                href="/dashboard/settings"
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  