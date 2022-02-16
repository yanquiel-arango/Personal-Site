

const Contact = () => {
  return (
    <section className='section  has-background-white-bis'>
    <div className="container pt-6"> 
        <div className="columns is-variable  is-8">               
            <div className="column">
                <div className="image  has-text-centered">
                    <img  src="/assets/contact.svg" alt='about'/>
                </div>                     
            </div>
            <div className="column is-5">
                    <p className="is-size-1 is-size-3-mobile has-text-weight-bold is-family-code">Contact me</p>
                    <form className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="e.g Alex Smith"/>
                        </div>                        

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
                            </div>
                        </div>
                            <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                            <button className="button is-primary  mt-4">Send📤</button>
                    </form>
            </div>
                
                
        </div>
    </div>
</section>
  )
}

export default Contact