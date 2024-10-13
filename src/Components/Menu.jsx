import { Logo } from "./Logo";

export function Menu(){

    return <div className="">
        <nav className="w-100 d-flex justify-content-between align-items-center px-5 py-4 flex-nowrap" >
            <div>
                <Logo/>
            </div>

            {/* <div className="d-flex gap-2 align-items-center">
                
                <i class="fa-solid fa-bars text-white d-md-none d-block"></i>
                
                <div className="d-none d-md-flex flex-column flex-md-row gap-3 align-items-center flex-nowrap">
                    <a href="#" className=" text-decoration-none text-white">About</a>
                    <a href="#" className=" text-decoration-none text-white">Explore</a>
                    <a href="#" className=" text-decoration-none text-white">Journal</a>
                </div>

                <button className="btn text-white" style={{background:"#df643F"}}>Contact</button>
            </div> */}
        </nav>
    </div>
    

}