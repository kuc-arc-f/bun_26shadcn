
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
        <div class="p-2">
          <a href="/datatable"><button class="btn-outline-blue">DataTable</button>
          </a>
        </div>
      </div>
    </div>
    
  </>
  )
}
/*
<h1 className="text-4xl text-gray-700 font-bold my-2"
>Home!</h1>
*/