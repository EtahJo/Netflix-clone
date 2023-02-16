import React from 'react'
import GetStarted from './GetStarted'
import QA from './QA'

const FAQ = () => {
  return (
    <div className='border-b-8 border-netflixGray py-100 flex flex-col px-150 '>
        <h2 className='text-white font-bold text-5xl text-center mb-10'>Frequently Asked Questions</h2>
        <div>
            <QA question={'What is Netflix?'}>
                <p className='text-white text-2xl mb-3'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                <p className='text-white text-2xl'>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!</p>
            </QA>
            <QA question={'How much does Netflix cost?'}>
                <p className='text-white text-2xl mb-3'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$3.99 to US$11.99 a month. No extra costs, no contracts.</p>

            </QA>
            <QA question={'Where can I watch?'}>
                <p className='text-white text-2xl mb-3'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                <p className='text-white text-2xl'>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </QA>
            <QA question={'How do I cancel?'}>
                <p className='text-white text-2xl mb-3'>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>

            </QA>
            <QA question={'How can I watch Netflix?'}>
                <p className='text-white text-2xl mb-3'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>

            </QA>
            <QA question={'Is Netflix good for children?'}>
                <p className='text-white text-2xl mb-3'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
                <p className='text-white text-2xl'>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </QA>
        </div>
        <div className='mt-6'>
            <p className='text-white text-center text-2xl my-4'>Ready to watch? Enter your email to create or restart your membership.</p>
            <GetStarted/>
        </div>
    </div>
  )
}

export default FAQ