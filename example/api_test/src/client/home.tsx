
import Head from '../components/Head'
//

export default function Home() {
  return (
    <>
    <div className="main_body_wrap container mx-auto my-2 px-8 bg-white">
      <Head />
      {/* navi */}
      {/* items */}
      <h1 className="text-4xl font-bold">Components</h1>
      <hr className="my-2" />
      <div className="flex flex-wrap">
        <div className="p-2 m-0">
          <a href="/api_test" className="" >
            <button className="btn-outline-blue">ApiTest</button>
          </a>
        </div>

      </div>
    </div>
    
  </>
  )
}
/*
*/