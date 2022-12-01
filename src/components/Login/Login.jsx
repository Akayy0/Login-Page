import React from 'react'

const Login = () => {
  return (
    <div>
        <section>
            <h1>Login</h1>

            <form>
                <input type="email" name="email" placeholder='email@gmail.com' />
                <input type="password" name="password" />
                <a href="#">Forgot your password?</a>
                <button type="submit">Login</button>
            </form>

            
        </section>
    </div>
  )
}

export default Login