import Yanquiel from '../../public/assets/Yanquiel.pdf'



const Hero = () => {
  return (
    <>
        <section className='section '>
                <div className="container"> 
                    <div className="columns is-vcentered">
                        <div className="column is-7">
                            <p className="is-size-1 is-size-3-mobile  has-text-weight-bold is-family-code">I am Yanquiel</p>
                            <p className="is-size-6 mb-4 has-text-weight-light is-family-secondary">Second column with more content. This is so you can see the vertical alignment.</p>
                            <a href={Yanquiel} download='/assets/Yanquiel.pdf' className="button is-primary is-size-7-mobile">Download CV</a>
                        </div>
                        <div className="column">
                        <div className="image  has-text-centered">
                            <img  src="/assets/programing.svg" alt='programing'/>
                        </div> 
                            
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Hero