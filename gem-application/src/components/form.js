import React from "react";

function Form() {
    return (
        <form >
            <label for="zone">Zone Number </label>
            <br></br>
            <input type="text" id="zoneNum" name="zone" placeholder="ex:7"/>
            <br></br>
            <button type="button" >Find your Vegetables</button>
            <button onclick="document.getElementById('myInput').value = ''">Clear Results</button>
        </form>   

    );
}

export default Form;