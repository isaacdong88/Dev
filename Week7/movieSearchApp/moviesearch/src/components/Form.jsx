import React from 'react'
import {useState, useEffect} from "react";

function Form(props) {
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };

    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.moviesearch(formData.searchterm);
        console.log(formData,'*')
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='searchterm' onChange={handleChange} value={formData.searchterm}/>
            <input type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Form