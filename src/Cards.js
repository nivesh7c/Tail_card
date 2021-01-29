import React from 'react'
import Cardsitem from './Cardsitem'
import Cardsdata from './Cardsdata'

function Cards() {
    return (
       <>
      <div className="flex flex-col text-center w-full mt-5">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-5 text-gray-900">From the blog</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Skynox Task</p>
      </div>
      <div className="container px-5 py-14 mx-auto ">
      <div className="flex flex-wrap -m-4 ">
                {
                  Cardsdata.map((val,ind) => {
                      return <Cardsitem
                      key={ind}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      intro={val.intro}
                      content={val.content}
                      client={val.client}
                      clientname={val.clientname}
                      />
                  })
              }
      </div>
      </div>
      </>
    )
}

export default Cards
