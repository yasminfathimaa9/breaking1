import "./Breaking.css";


function Breaking(props) {
    console.log("props", props);
return (
    <div className="Card">
        
     <img className="img" src={props.img} alt="" />
       <p className="name1">{props.name}</p>
        <p className="name2">{props.birthday}</p>
       <p className="name3">{props.category}</p>
        <p className="name4">{props.occupation}</p>
        <p className="name5">{props.nickname}</p>
         <p className="name6">{props.portrayed}</p> 
    
    </div>
);
}
export default Breaking