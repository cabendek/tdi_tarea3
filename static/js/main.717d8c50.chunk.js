(this["webpackJsonpleaflet-react-demo"]=this["webpackJsonpleaflet-react-demo"]||[]).push([[0],{113:function(e,t,a){e.exports=a.p+"static/media/paper-plane2.d8a5c98e.svg"},126:function(e,t,a){e.exports=a(164)},131:function(e,t,a){},164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),l=a.n(o),s=(a(131),a(87)),i=a(47),c=a(48),u=a(56),m=a(49),d=a(57),p=(a(96),a(174)),g=a(175),f=a(168),h=a(176),b=a(173),E=a(23),v=a(113),y=a.n(v),w=new E.Icon({iconUrl:y.a,iconSize:[35,35]});function N(e){var t=e.flights,a=e.position;return r.a.createElement(p.a,{center:[-35.6,-71.54],zoom:4},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),a.map((function(e){return r.a.createElement(f.a,{position:e.position,icon:w},r.a.createElement(h.a,null,e.code,r.a.createElement("br",null)," Lat: ",e.position[0]," ",r.a.createElement("br",null)," Long: ",e.position[1]))})),";",t.map((function(e){return r.a.createElement(b.a,{positions:[e.origin,e.destination]})})))}var O=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.flights.map((function(e){return r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card card-block card-1",style:{paddingLeft:"13px"}},r.a.createElement("br",null),r.a.createElement("strong",null,e.airline),e.plane,r.a.createElement("br",null),r.a.createElement("br",null),"Origen: (",Math.round(e.origin[0]),", ",Math.round(e.origin[1]),")",r.a.createElement("br",null),"Destino: (",Math.round(e.destination[0]),", ",Math.round(e.destination[1]),")",r.a.createElement("br",null),"Asientos: ",e.seats,r.a.createElement("br",null),r.a.createElement("div",{className:"dropup",style:{padding:"3px"}},r.a.createElement("button",{type:"button",className:"btn btn-info dropdown-toggle","data-toggle":"dropdown"},"Pasajeros"),r.a.createElement("div",{className:"dropdown-menu",style:{borderRadius:"10px"}},e.passengers.map((function(e){return r.a.createElement("a",{className:"dropdown-item"},e.name," : ",e.age)}))))))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2"},r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{onClick:this.props.quitInfo,className:"btn btn-outline-info shadow lg-3",style:{marginTop:"0",color:"rgb(143, 143, 143)"}},"Ocultar Informaci\xf3n"),r.a.createElement("button",{onClick:this.props.getInfo,className:"btn btn-info shadow lg-3",style:{marginTop:"10%",color:"black"}},r.a.createElement("strong",null,"OBTENER INFORMACI\xd3N")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{style:{color:"rgb(143, 143, 143)"}},"Para ver m\xe1s informaci\xf3n de los vuelos, haz scroll hacia la derecha.")),e)))}}]),t}(r.a.Component),I=a(171),x=a(170),k=a(169),j=a(172),S=(a(134),I.a.Search),C=x.a.Text,M=k.a.Meta,z=a(99).connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userName:"",isLoggedIn:!1,messages:[]},a.onButtonClicked=function(e){var t={name:a.state.userName,message:e};z.emit("CHAT",t),a.setState({searchVal:""})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;z.on("CHAT",(function(t){e.setState((function(e){return{messages:[].concat(Object(s.a)(e.messages),[{msg:t.message,user:t.name,date:new Date(t.date)}])}}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"main",id:"wrapper"},this.state.isLoggedIn?r.a.createElement("div",{id:"scroller"},r.a.createElement("div",{className:"title"},r.a.createElement(C,{id:"main-heading",type:"secondary",style:{fontSize:"36px"}},r.a.createElement("strong",null,"Centro de Control:")," ",this.state.userName)),r.a.createElement("div",{style:{MozUserFocus:"end",display:"flex",flexDirection:"column",paddingBottom:50},id:"messages",className:"messages"},this.state.messages.map((function(t){return r.a.createElement(k.a,{key:t.msg,style:{width:300,margin:"16px 4px 0 4px",alignSelf:e.state.userName===t.user?"flex-end":"flex-start"},loading:!1},r.a.createElement(M,{avatar:r.a.createElement(j.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},t.user[0].toUpperCase()),title:t.user+" : "+t.date,description:t.msg}))}))),r.a.createElement("div",{className:"bottom"},r.a.createElement(S,{placeholder:"Escribe un mensaje y envialo...",enterButton:"Enviar",value:this.state.searchVal,size:"large",onChange:function(t){return e.setState({searchVal:t.target.value})},onSearch:function(t){return e.onButtonClicked(t)}}))):r.a.createElement("div",{style:{padding:"200px 40px"}},r.a.createElement(C,{id:"main-heading",type:"secondary",style:{fontSize:"36px",color:"white"}},"Introduce tu nombre de usuario:"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(S,{placeholder:"Escribe tu nombre...",enterButton:"Registrate",size:"large",onSearch:function(t){return e.setState({isLoggedIn:!0,userName:t})}})))}}]),t}(r.a.Component),T=a(99).connect("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"});document.body.style.backgroundColor="rgb(21, 23, 25)";var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getInfo=function(e){e.preventDefault(),T.emit("FLIGHTS",""),T.on("FLIGHTS",(function(e){console.log(e),a.setState({flights:e})}))},a.quitInfo=function(e){e.preventDefault(),a.setState({flights:[]})},a.state={flights:[],userName:"",isLogged:!1,messages:[],position:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.on("POSITION",(function(t){if(e.state.position.some((function(e){return e.code===t.code}))){var a=e.state.position.slice(),n=a.findIndex((function(e){return e.code===t.code}));a[n]=t,e.setState({position:a})}else e.setState((function(e){return{position:[].concat(Object(s.a)(e.position),[t])}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"root"},r.a.createElement("div",null,r.a.createElement(N,{flights:this.state.flights,position:this.state.position})),r.a.createElement("div",{className:"information"},r.a.createElement(O,{getInfo:this.getInfo,quitInfo:this.quitInfo,flights:this.state.flights})),r.a.createElement("div",{className:"chat"},r.a.createElement(L,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.717d8c50.chunk.js.map