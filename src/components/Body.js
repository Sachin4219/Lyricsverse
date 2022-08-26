import axios from "axios"
import pretty from "pretty"
import { load } from 'cheerio';
import { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import "./Body.css"

function Body() {

const [song, setSong] = useState("");
const [title, setTitle] = useState("");
const [lyrics, setLyrics] = useState("")
const [focus, setFocus] = useState(false)

async function getLink() {
	const apiquery = "https://www.abbreviations.com/services/v2/lyrics.php?uid=10771&tokenid=AwOKzW1EFIhK69NB&term="+song+"&format=json"
	let response = await axios.get(apiquery)
	let result = response.data.result
    setTitle(result[0].song)
	const songlink = result[0]["song-link"];
	console.log(songlink)
	getLyrics(songlink.toString())
}

async function  getLyrics(url) {
	try{
		const {data} = await axios.get(url)
		const $ = load(data)
		const lyricBody = $(".lyric-body")
		setLyrics(pretty(lyricBody.text()))
	}
	catch(err){
		console.log("Lyrics finding: "+err)
	}
}


console.log(lyrics)

function checkEnter(e){
    if(e.keyCode === 13){
        getLink()
    }
}

function print2pdf(){
    console.log("write using backend man")
    // fs.writeFile("lyrics.txt", (lyrics), (err) => {
    //   if (err) {
    //     console.error("file writting: "+err);
    //     return;
    //   }
    //   console.log("Successfully written data to file");
    // });
}


    return ( 
        <div>
            <Header/>

            <div className="container">

                <h1 className="header-text">Welcome to LyricsVerse</h1>

                <div  className="searchBar" style={{boxShadow:focus ? "0px 0px 4px 4px rgba(0,0,0,0.5)" : "none"}}>
                    <input id="search-input" onFocus={() => setFocus(true)} onBlur={()=>setFocus(false)} onKeyDown={(e) => checkEnter(e)} onChange={(event) => setSong(event.target.value)}/>
                    <div id="search-btn" onClick={getLink}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

            {lyrics && 
                <div className="lyrics-container">
                    <div className="printbtn">Print to pdf</div>
                    <h2 id="lyrics-title">{title}</h2>
                    <div id="lyrics-text" >
                        {`${lyrics}`}
                    </div>
                </div>
            }

            </div>

            <Footer/>
        </div>
     );
}

export default Body;