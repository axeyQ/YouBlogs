import React from "react";


const Login=()=>{
    return <>
    <div className="login">
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" required placehloder="Abc" />
                </div>
                <div>
                    <label>Mobile No</label>
                    <input type="tel"  placehloder="123" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder="Abc@email.com" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" required />
                </div>
                <div>
                    <label>Rewrite Password</label>
                    <input type="password" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    </div>

    </>
}

export default Login;