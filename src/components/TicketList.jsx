import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Some coding BS'
  },
  {
    names: 'someguy and somegal',
    location: 'hell',
    issue: 'too much failure',
  },
  {
    names: 'Jamesy and Mamsey',
    location: 'a bridge',
    issue: 'lost at sea'
  }

];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
