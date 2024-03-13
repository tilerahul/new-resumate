import React from 'react';
import FAQComponent from './FAQComponent';
import QueAns from './QueAns';

const Faq = () => {
  return (
    <section id='faqSection' className='mt-5 w-full flex justify-center items-center pt-10 pb-10 bg-slate-100'>
      <div className='w-11/12 flex flex-col justify-center items-center gap-4'>
        <div className='mt-0 text-center'>
          <p className="font-medium text-xl">Frequently Asked Questions</p>
        </div>
        <div className='w-4/5'>
          {
            QueAns.map((data, id) => (
              <FAQComponent key={id} id={data.id} question={data.question} answer={data.answer}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Faq;
