import React from 'react'
import wallpaper from '../../assets/images/wallpaper.jpg'
const Login = () => {
  return (
    <div className='Login'>
        <section>

            <h1>Space Program</h1>


            <form>
                <input type="email" name="email" placeholder='email@gmail.com' />
                <input type="password" name="password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Login</button>
            </form>

            
        </section>

        <img src={wallpaper} alt="" />

    </div>
  )
}

export default Login