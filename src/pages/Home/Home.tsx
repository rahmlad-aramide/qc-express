// import { document } from "../../buffer";
import { documentArray } from "../../buffer";
import { downloadPDF } from "../../utils/_pdf";

const Home = () => {


// console.log(document[0]);
// const download = downloadPDF(base64String, 'testing.pdf')

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Developer Dashboard</h1>
        <p className="text-gray-600">Explore and enjoy the content we have to offer.</p>
        <button className="mt-4 border border-gray-300 p-2 rounded" onClick={()=>downloadPDF(documentArray[0].content, 'document.pdf')}>Download PDF</button>
      </div>
    </div>
  )
}

export default Home