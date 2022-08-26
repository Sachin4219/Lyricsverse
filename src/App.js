import './App.css';
import Body from './components/Body';

function App() {

// const [song, setSong] = useState("");
// const [lyrics, setLyrics] = useState("")

// async function getLink() {
// 	const apiquery = "https://www.abbreviations.com/services/v2/lyrics.php?uid=10771&tokenid=AwOKzW1EFIhK69NB&term="+song+"&format=json"
// 	let response = await axios.get(apiquery)
// 	let result = response.data.result
// 	const songlink = result[0]["song-link"];
// 	console.log(songlink)
// 	getLyrics(songlink.toString())
// }

// async function  getLyrics(url) {
// 	try{
// 		const {data} = await axios.get(url)
// 		const $ = load(data)
// 		const lyricBody = $(".lyric-body")
// 		setLyrics(pretty(lyricBody.text()))
// 		console.log(lyrics)
// 	}
// 	catch(err){
// 		console.log("Lyrics finding: "+err)
// 	}

	// fs.writeFile('lyrics.txt', lyrics, function (err) {
  // 	if (err) throw err;
  // 		console.log('File is created successfully.');
	// });
// }

//Footer content addressing STANDS4 API
//https://www.lyrics.com/api.php
  return (
	<Body/>
  );
}

export default App;
