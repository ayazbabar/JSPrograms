const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

rl.question("Enter the name of anime which you want the information of: ", async (ANIME)=>{
try {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(ANIME)}&limit=1`
    );
    const data = await response.json(response);
    if(data.data && data.data.length > 0){
    
    const anime = data.data[0]
    console.log(`Anime Found..`)
    console.log(`Title: ${anime.title}`)
    console.log(`Score :${anime.score}`);
    console.log(`Episodes: ${anime.episodes}`);
    console.log(`Status: ${anime.status}`)
    console.log(`Synopsis ${anime.synopsis?anime.synopsis.substring(0,300)+'...':"No synopsis"}`)
    }
} catch (error) {
    console.log("no anime was found with such title")
}
finally{rl.close()}

})