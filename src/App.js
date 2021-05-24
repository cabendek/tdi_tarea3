import React from "react";
//import { Map, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
//import { Icon } from "leaflet";
//import * as parkData from "./data/skateboard-parks.json";
import "./App.css";
import MapaMundi from "./Map.js"
import Planes from "./Planes.js";
import MyForm from "./Chat.js";
//import Planes from "./Planes"

const io = require("socket.io-client")
const socket = io.connect('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {
    path:'/flights'
});
document.body.style.backgroundColor="rgb(21, 23, 25)"

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      flights: [],
      userName: "",
      isLogged: false,
      messages: [],
      position: []
    }
  }

  componentDidMount(){
    socket.on("POSITION", position => {
      if(this.state.position.some(e => e.code === position.code)) {

        let new_position = this.state.position.slice()
        let index = new_position.findIndex(e => e.code === position.code)
        new_position[index]=position
        this.setState({ position: new_position })

      } else
        this.setState((state) => ({ position: [...state.position, position]}))
        //this.state.position.push(position)
    })
   
  }

  getInfo = (e) => {
    e.preventDefault();
    socket.emit('FLIGHTS',"");
    socket.on('FLIGHTS', message => {
      console.log(message);
      this.setState({ flights: message })
    })
  }

  quitInfo = (e) => {
    e.preventDefault();
    this.setState({ flights: []})
    
  }

  render () {
    return(
      <div className="root">
        <div>
          <MapaMundi
          flights= {this.state.flights}
          position= {this.state.position}
          />
        </div>
        <div className="information">
          <Planes
          getInfo= {this.getInfo}
          quitInfo= {this.quitInfo}
          flights= {this.state.flights}
          />
        </div>
        <div className="chat">
          <MyForm/>
        </div>
      </div>

    )
  }
}
