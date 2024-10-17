
export function FormLogin(){
    return <form action="#" className="shadow w-50 p-3">
        <h3 className=" text-center">Login</h3>
        <label className="form-label">Email</label>
        <input className="form-control" type="email" placeholder="Email" required></input>
        <label className="form-label mt-3">Password</label>
        <input className="form-control" type="password" placeholder="Password" minLength={8} required></input>

        <div className="my-3">
            <small ><a href="#">¿Olvidaste tu contraseña?</a></small>
        </div>
        

        <button type="submit" className="w-100 btn btn-primary">Ingresar</button>

    </form>
}

