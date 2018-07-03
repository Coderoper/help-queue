import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillReceiveProps(){
    console.log('comoponentWillReceiveProps');
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTicketElapsedWaitTime(){
    console.log('check');
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) => ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true));
    this.setState({masterTicketList: newMasterTicketList});
  }
  componentDidMount(){
    console.log('componentDidMount');
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component = {Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
