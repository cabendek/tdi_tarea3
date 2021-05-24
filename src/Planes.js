import React from "react";


export default class Planes extends React.Component {
  constructor(props) {
    super(props);
  };


  render() {
    const information_flight =this.props.flights.map(flight=>{
      return  <div className="col-3">
                <div className="card card-block card-1" style={{paddingLeft: '13px'}}>
                  <br></br>
                  <strong>{flight.airline}</strong>
                  {flight.plane}<br></br><br></br>
                  Origen: ({Math.round(flight.origin[0])}, {Math.round(flight.origin[1])})<br></br>
                  Destino: ({Math.round(flight.destination[0])}, {Math.round(flight.destination[1])})<br></br>
                  Asientos: {flight.seats}<br></br>

                  <div className="dropup" style={{padding:"3px"}}>
                    <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                      Pasajeros
                    </button>
                    <div className="dropdown-menu" style={{borderRadius:"10px"}}>
                      {flight.passengers.map(pasajero=>
                        // eslint-disable-next-line
                        <a className="dropdown-item">{pasajero.name} : {pasajero.age}</a>
                      )}
                    </div>
                  </div>
            
                </div>
              </div>
            })

    return (

    <div>
      
      <div className="container-fluid">  
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
          <div className="col-3">
          <button onClick={this.props.quitInfo} className="btn btn-outline-info shadow lg-3" style={{marginTop:"0", color:"rgb(143, 143, 143)"}} >Ocultar Información</button>
            <button onClick={this.props.getInfo} className="btn btn-info shadow lg-3" style={{marginTop:"10%", color:"black"}} ><strong>OBTENER INFORMACIÓN</strong></button>
            <br></br><br></br><p style={{color:"rgb(143, 143, 143)"}}>Para ver más información de los vuelos, haz scroll hacia la derecha.</p>
          </div>
          {information_flight}  
        </div>
      </div>
      
    </div>)
    
  }
}