import { Cards } from "./Cards";


export function Contenido(){
    return <div class="container text-white py-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col d-flex">
        <Cards info="card 1"/>
      </div>
      <div class="col d-flex">
        <Cards info="card 2"/>
      </div>

      <div class="col d-flex">
        <Cards info="card 3"/>
      </div>

      <div class="col d-flex">
        <Cards info="card 4"/>
      </div>

      <div class="col d-flex">
        <Cards info="card 5"/>
      </div>
    
    </div>

  </div>
}