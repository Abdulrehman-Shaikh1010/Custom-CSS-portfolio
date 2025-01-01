import React from 'react'
import './styles/Project.css';
import Image from 'next/image';
import Link from 'next/link';


const ProjectSection = () => {
  return (
    <section className='projects'>
      <h2 className='section-title'>Recent Project</h2>
      <div className="projects-grid">
        <div className="project-card">
          {/* Image Section */}
          <div className='img'>
          <Link href='https://custom-css-website-nine.vercel.app/' target='_blank'>
            <Image
            src='/pr1.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓕𝓾𝓻𝓷𝓲𝓽𝓮 <br />𝓦𝓮𝓫𝓼𝓲𝓽𝓮</h3>
          <p>A dynamic and responsive E-Commerce Website built with Next.js HTML, Typescript Custom CSS</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://custom-css-website-nine.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
      
          </div>

        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://hackathon-template-8-steel.vercel.app/' target='_blank'>
            <Image
            src='/pr2.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓔-𝓒𝓸𝓶𝓶𝓮𝓻𝓬𝓮 𝓦𝓮𝓫𝓼𝓲𝓽𝓮</h3>
          <p>Pixel-perfect responsive E-Commerce Website in Next.js HTML Typescript and Tailwind CSS matching the Figma design</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://hackathon-template-8-steel.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://student-id-cards.vercel.app/' target='_blank'>
            <Image
            src='/Pr3.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼 <br />𝓘𝓓 𝓒𝓪𝓻𝓭𝓼</h3>
          <p>Discover elegant and stylish collections at Jasmine Sheikh Clothing Brand</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://student-id-cards.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
   
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://abdulrehmanshaikh.vercel.app/' target='_blank'>
            <Image
            src='/Pr4.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓟𝓮𝓻𝓼𝓸𝓷𝓪𝓵 𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</h3>
          <p>Showcasing a sleek portfolio built with Next.js and Tailwind CSS highlighting my skills and projects.</p>
          <div className="btn-group">
            <div className="btn">
              <Link href='https://abdulrehmanshaikh.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://milestone-3-sigma-six.vercel.app/' target='_blank'>
            <Image
            src='/Pr5.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓓𝔂𝓷𝓪𝓶𝓲𝓬 𝓡𝓮𝓼𝓾𝓶𝓮 𝓑𝓾𝓲𝓵𝓭𝓮𝓻</h3>
          <p>Create a professional customizable resume with ease using our Dynamic Resume Builder</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://milestone-3-sigma-six.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
    
          </div>
          
        </div>

        <div className="project-card">
          {/* Image Section */}
          <div className="img">
          <Link href='https://milestone-1-inky.vercel.app/' target='_blank'>
            <Image
            src='/Pr6.jpg'
            alt='Project1'
            width={200}
            height={200}
            />
          </Link>
          </div>

          <h3>𝓢𝓽𝓪𝓽𝓲𝓬 <br />𝓡𝓮𝓼𝓾𝓶𝓮</h3>
          <p>A static visually appealing resume showcasing your skills and achievements in a clean layout</p>
          <div className="btn-group">
          <div className="btn">
              <Link href='https://milestone-1-inky.vercel.app/' target='_blank'>Go To Live</Link>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default ProjectSection
