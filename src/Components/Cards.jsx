
export function Cards({info}){
    return <div class="card d-flex flex-grow-1 my-3" style={{width: "18rem"}}>
        <img src="https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title text-white">Card title</h5>
        <p class="card-text text-white">{info}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
}

