const Notification = props => {
    return (
       <li className={`${props.className}`}>
        <img src={`${props.image}`} />
        <p>{props.message}</p>

       </li>
    );
}

const element = (
   <h1>Notifications</h1>
   <div>
   <ul>
       <Notification 
         className="box1"
         image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
         message="Information Message"
        />
        <Notification 
         className="box2"
         image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
         message="Success Message"
        />
        <Notification 
         className="box3"
         image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
         message="Warning Message"
        />
        <Notification 
         className="box4"
         image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
         message="Error Message"
        />

   </ul>
   </div>
);

ReactDOM.render(element, document.getElementById('root'))
