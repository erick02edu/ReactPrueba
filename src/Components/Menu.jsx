import { Logo } from "./Logo";

export function Menu(){

    return <nav className="w-100 d-flex justify-content-between align-items-center px-5 py-4" >
        <div>
            <Logo/>
        </div>
        <div className=" d-flex justify-content-between align-items-center gap-5">
            <a href="#" className=" text-decoration-none text-white">About</a>
            <a href="#" className=" text-decoration-none text-white">Explore</a>
            <a href="#" className=" text-decoration-none text-white">Journal</a>
            <button className="btn text-white" style={{background:"#df643F"}}>Contact</button>
        </div>
    </nav>
}