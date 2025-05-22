import ReadingList from '@/components/readinglist';
import Layout from '@/components/layout';
import { getAllReadings } from '@/data/readings';

export default function ReadingPage() {
  // Define sidebar content
  const sidebarContent = (
    <>
      <div className="border border-black p-2">
        <h2 className="font-semibold">Navigation</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2">
        <ul className="space-y-1">
          <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">← home</a></li>
          <li><a href="/posts" className="hover:text-blue-600 transition-colors duration-200">blog</a></li>
        </ul>
      </div>
      
      <div className="border border-black p-2">
        <h2 className="font-semibold">About</h2>
      </div>
      <div className="mb-4 border border-black border-t-0 p-2">
        <p className="text-2xs">articles, papers, and other things i've been reading recently and in the past.</p>
      </div>
    </>
  );

  // Main content
  const mainContent = (
    <>
      <div className="border border-black p-2">
        <h2 className="font-semibold">Reading List</h2>
      </div>
      <ReadingList readings={getAllReadings()} showAll={true} />
    </>
  );

  return (
    <Layout sidebarContent={sidebarContent}>
      {mainContent}
    </Layout>
  );
}