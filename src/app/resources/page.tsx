import React from 'react'

export default function Resources() {
  return (
    <div>
        <section className={`hero-bg text-white h-full z-0`}>
            <div className="flex justify-center items-center space-y-5 h-full p-10 pt-24 hero-text">
                <h1 className="text-2xl font-[600] uppercase">Resources</h1>
            </div>
        </section>
        <section className="p-10 pb-4 space-y-8">
            <div>
                <h6 className="font-bold">New to town?</h6>
                <p className="text-sm pb-2">Check out our <span className='italic'>free</span> <span className="font-bold">Weekend in Williamsburg</span> guide!</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.lizmoore.com/agent/TiffanyLittle/weekendinwilliamsburg">
                    <img src="resources/weekend_in_williamsburg.png" alt="Weekend in Williamsburg image" className='w-full'/>
                </a>
            </div>
            <div>
                <h6 className="font-bold">Thinking about moving?</h6>
                <p className="text-sm pb-2">We have a <span className='italic'>free</span> <span className="font-bold">Relocation Guide</span> to ease your mind!</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.lizmoore.com/agent/TiffanyLittle/weekendinwilliamsburg">
                    <img src="resources/relocation_guide.png" alt="Weekend in Williamsburg image" className='w-full'/>
                </a>
            </div>
        </section>
    </div>
  )
}
