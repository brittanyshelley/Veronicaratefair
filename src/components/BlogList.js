// components/BlogList.js
export default function BlogList({ posts }) {
  return (
    <div className=" bg-gradient-to-r from-blue-400 to-blue-900 p-10">
      <div className="container mx-auto px-4 py-8  p-10  text-base-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="card  shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="bg-white/40 backdrop-blur-lg p-6 shadow-xl hover:scale-105 transition-transform rounded-lg text-center">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <p className="text-sm text-primary">Published on {post.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
