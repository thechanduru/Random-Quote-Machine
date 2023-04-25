import { useState, useEffect } from "react";
import axios from "axios";
import { FaQuoteLeft } from "react-icons/fa";

const Quotegenerator = (props) => {
    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");
    const [appColor,setAppColor] = useState("");


    const getQuote = async () => {
        const response = await axios.get("https://api.quotable.io/random?maxLength=400");
        setQuote(response.data.content);
        setAuthor(response.data.author);
        setAppColor(generateRandomColor());
    }

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(quote + " - " + author);
    }

    useEffect(() => {
        getQuote();
    }, []);

    return (
        <div className="App" style={{backgroundColor:appColor}}>
        <div className="card" style={{backgroundColor:"white"}}>
            <div className="card-body">
                <FaQuoteLeft/> &nbsp; 
                {quote}
            </div>
            <div className="card-footer">
                <span className="author">- {author}</span>
            </div>
            <div className="card-actions">
                <a href="https://twitter.com" target="_blank">
                    <img src="https://clinics.law.harvard.edu/wp-content/uploads/2019/07/Twitter_Logo_WhiteOnImage.png" height={30} style={{backgroundColor: appColor}}></img>
                </a>
                <br></br><br></br>
                <div className="copy-btn btn" onClick={copyToClipboard} style={{backgroundColor: appColor}}>
                copy</div>
                <div className="generate-btn btn" onClick={getQuote} style={{backgroundColor: appColor}}> New Quote</div>
            </div>
        </div>
        <p className="credits">by Chanduru</p>
        </div>
    );
}

export default Quotegenerator;
