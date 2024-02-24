import Link from "next/link";

import CTA from '../ui/CTA'
import { projects } from "../../../public/constants";
import { arrow } from "../../../public/assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className="head-text">
        My <span className='purple-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className="mt-5 flex -flex-col gap-3 text-slate-500">
        <p>Check out my awesome projects! From web development to creative experiments, each one is a labor of love. Explore, get inspired, and let's dive into endless possibilities together! 💡🚀</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl.src}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-purple-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow.src}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects