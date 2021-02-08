import React, { useEffect } from 'react'
import Cardsitem from './Cardsitem'
import Cardsdata from './Cardsdata'
import Mode from './Mode';
import Usedarkmode from './Usedarkmode';


function Cards() {
 Usedarkmode();
    return (
       <>
     
      <div className="flex flex-col text-center w-full  dark:bg-black ">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-5 mt-5 text-gray-900 dark:text-white ">From the blog</h1>
      <Mode/>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 dark:text-white" >Skynox Task</p>
      <div className="container px-5 py-12 mx-auto ">
      <div className="flex flex-wrap -m-4 dark:bg-black ">
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
      </div>
     
      </>
    )
}

export default Cards
