import React from "react";
import { useState } from "react";

function ZipFinder() {

    const [zone, setZone] = useState(null);
    const [zip, setZip]=useState('')

    const handleChange = (event) => {
        setZip(event.target.value)
     }
     
    const findZone = () => {
        console.log(zip)
      const options = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      };
      fetch(`https://phzmapi.org/${zip}.json`, options)
        .then(response => response.json())
        .then(data => {
            console.log(data.zone)
            setZone(data.zone.slice(0,-1))
        });
    }
    
    return (
        <>
        <form>
        <label for="first_name">First Name</label>
        <br></br>
        <input type="text" id="first" name="first"/>
        <br></br>
        <label for="last_name">Last Name</label>
        <br></br>
        <input type="text" id="last" name="last"/>
        <br></br>
        <label for="email">Email Address</label>
        <br></br>
        <input type="email" id="email" name="email"/>
        <br></br>
        <label for="zipcode">Zip code</label>
        <br></br>
        <input type="text" id="zip" name="zip" placeholder="12345" onChange={handleChange}/>
        <br></br>
        <button onClick={findZone}type="button" >Find Plant Hardiness Zone</button>
        </form>
        <div>
            <p>Your zone is {zone}</p>
        </div>
        </>
    );
}

export default ZipFinder;