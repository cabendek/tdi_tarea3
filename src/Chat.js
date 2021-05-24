import React from 'react';
//import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';


const { Search } = Input;
const { Text } = Typography;
const { Meta } = Card;

const io = require("socket.io-client")
const socket = io.connect('ws://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {
    path:'/flights'
});

export default class MyForm extends React.Component {

    state = {
        userName: '',
        isLoggedIn: false,
        messages: []
    }

    componentDidMount() {

      socket.on('CHAT', message =>{
        this.setState((state) =>
          ({ messages: [...state.messages,
              {msg: message.message,
              user: message.name,
              date: new Date(message.date)}
            ]})
          );
      });
    };

    onButtonClicked = (value) => {

      var payload = {
        name: this.state.userName,
        message: value
      }

      socket.emit('CHAT', payload);
      this.setState({ searchVal: '' })

    }

    render() {
        return (
          <div className="main" id='wrapper'>
            {this.state.isLoggedIn ?
            <div id="scroller">
              <div className="title">
                <Text id="main-heading" type="secondary" style={{ fontSize: '36px' }}><strong>Centro de Control:</strong> {this.state.userName}</Text>
              </div>
              <div style={{ MozUserFocus:"end", display: 'flex', flexDirection: 'column', paddingBottom: 50 }} id="messages" className="messages">
                {this.state.messages.map(message => 
                  <Card key={message.msg} style={{ width: 300, margin: '16px 4px 0 4px', alignSelf: this.state.userName === message.user ? 'flex-end' : 'flex-start' }} loading={false}>
                    <Meta
                      avatar={
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{message.user[0].toUpperCase()}</Avatar>
                      }
                      title={message.user + " : " + message.date}
                      description={message.msg}
                    />
                  </Card> 
                )}
              </div>
              <div className="bottom">
                <Search
                  placeholder="Escribe un mensaje y envialo..."
                  enterButton="Enviar"
                  value={this.state.searchVal}
                  size="large"
                  onChange={(e) => this.setState({ searchVal: e.target.value })}
                  onSearch={value => this.onButtonClicked(value)}
                />
              </div> 
            </div>
            :
            <div style={{ padding: '200px 40px'}}>
              <Text id="main-heading" type="secondary" style={{ fontSize: '36px', color:"white" }}>Introduce tu nombre de usuario:</Text>
              <br></br><br></br><br></br><br></br>
              <Search
                placeholder="Escribe tu nombre..."
                enterButton="Registrate"
                size="large"
                onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
              />
            </div>
          }
          </div>
        )
    }
}