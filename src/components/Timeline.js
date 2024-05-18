import styles from "../styles/aboutus.module.css"

export default function Timeline() {

  return (
    <div style={{ backgroundImage: "url('/bg.svg')" }}>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[70%] my-10 ">
          <div className={`${styles.textComponent} pb-2 md:pb-10`}>
            The development process
          </div>
          <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase I</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Brief</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
                <hr className="bg-purple-500" />
              </li>
              <li>
                <hr className="bg-purple-500" />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase II</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Research</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
                <hr className="bg-purple-500" />
              </li>
              <li>
                <hr  className="bg-purple-500" />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase III</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Discover</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>

                </div>
                <hr className="bg-purple-500" />
              </li>
              <li>
                <hr className="bg-purple-500" />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase IV</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Design</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>

                </div>
                <hr className="bg-primary" />
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-start mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase V</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Testing</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
                <hr className="bg-primary"/>
              </li>
              <li>
                <hr className="bg-primary" />
                <div className="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                </div>
                <div className="timeline-end mb-5 timeline-box p-6 bg-opacity-75 border border-gray-500">
                  <h3 className="text-3xl font-bold text-white">Phase VI</h3>
                  <h2 className="text-xl font-bold text-white mt-2">Launching</h2>
                  <p className="text-white mt-4">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  )
}