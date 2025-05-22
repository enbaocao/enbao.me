import Pokemon from '@/components/pokemon';
import PostsList from '@/components/postslist';
import ReadingList from '@/components/readinglist';
import ProjectsList from '@/components/projects';
import Layout from '@/components/layout';
import { getRecentPosts } from '@/data/posts';
import { getRecentReadings } from '@/data/readings';

export default function HomePage() {
  // Define sidebar content
  const sidebarContent = (
    <>
      <div className="border border-black p-2">
        <h2 className="font-semibold">Status</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2 flex items-center gap-2">
        pivoting! <Pokemon /> 
      </div>
      
      <div className="border border-black p-2">
        <h2 className="font-semibold">Links</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2">
        <ul className="space-y-1">
          <li><a href="https://github.com/enbaocao" className="hover:text-fuchsia-400 transition-colors duration-200">github.com/enbaocao</a></li>
          <li><a href="mailto:enbaocao@gmail.com" className="hover:text-indigo-400 transition-colors duration-200">enbaocao[at]gmail[dot]com</a></li>
        </ul>
      </div>
    </>
  );

  // Main content
  const mainContent = (
    <>
      {/* About Me section commented out
      <div className="border border-black p-2">
        <h2 className="font-semibold">About me</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2">
        <p className="tracking-very-tight">howdy!</p>
      </div>
      */}
      
      <div className="border border-black p-2">
        <h2 className="font-semibold">Blog</h2>
      </div>
      <PostsList posts={getRecentPosts()} />  
      
      <div className="border border-black p-2">
        <h2 className="font-semibold">Reading</h2>
      </div>
      <ReadingList readings={getRecentReadings(3)} />
      
      <div className="border border-black p-2 mt-4">
        <h2 className="font-semibold">Projects</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2">
        tbd!
      </div>
    </>
  );

  return (
    <Layout sidebarContent={sidebarContent}>
      {mainContent}
    </Layout>
  );
}