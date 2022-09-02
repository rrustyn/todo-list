import React, { useState } from "react";
import axios from "axios";
import TextandButton from "./TextAndButton";
/**
 * Manages the quote to be displayed
 * 
 * Props: None
 * 
 * State: quote
 * 
 * App -> TodoApp -> Quote -> TextAndButton
 */
function Quote () {
    const QUOTE_BASE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random'
    
    const [quote, setQuote] = useState(null);
    
    function updateQuote () {
        axios.get(QUOTE_BASE_URL).then(res => {setQuote(`${res.data.quote.text} - ${res.data.quote.author}`)});
        
        // quote = axios.get(QUOTE_BASE_URL).then(res => res.data.quote.text)
        // setQuote(quote)
        // this doesn't work because quote is technically still a promise

    }
    
    return (
        <TextandButton msg={quote} handleClick={updateQuote} buttonText= 'New Quote' />
    )
}

export default Quote;