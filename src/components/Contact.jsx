import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>

                <form >
                    <div>
                        <label >Name</label>
                        <input type="text" placeholder='Abc' required />
                    </div>
                    <div>
                        <label >Email</label>
                        <input type="email" placeholder='Abc@xyz.com' required />
                    </div>
                    <div>
                        <label >Number</label>
                        <input type="Number" placeholder='032...' required />
                    </div>
                    <div>
                        <label >Massage</label>
                        <input type="text" placeholder='Type here'  />
                    </div>

                    <button type='submit'> Submit</button>
                </form>
            </main>

        </div>
    )
}
 export default Contact
