import React from 'react'
function Cardsitem(props) {
  
  return (
         <>
          <div className="p-4 md:w-1/3 ">
            <div className=" shadow-xl h-full border-2 text-left border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.imgsrc} alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-s title-font font-medium text-purple-500 mb-4">{props.title}</h2>
                <h1 className="title-font text-lg font-bold  text-gray-900 mb-3">{props.intro}</h1>
                <p className="leading-relaxed mb-10">{props.content}</p>
                <div className="flex items-center flex-wrap ">  
                  <img alt="testimonial" src={props.client} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">{props.clientname}</span>
                  <span className="text-gray-500 text-sm">jan 28, 2021 . 6 min read</span>
                </span>    
                </div>
              </div>
        </div>
      </div>
     </>
  )
}

export default Cardsitem
