import { Logo } from "./Logo";

export function Menu(){

    return <div className="">
        <nav className="w-100 d-flex justify-content-between align-items-center px-5 py-4 flex-nowrap" >
            <div>
                <Logo/>
            </div>

            <a href="../src/Pages/Login.html" className="btn btn-primary">
                Login
            </a>
        </nav>
    </div>
    

}