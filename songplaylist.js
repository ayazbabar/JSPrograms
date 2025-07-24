const { title } = require("process");

let playlist = [
  {
    name: "Unkown mother Goose",
    duration: 269,
    producer: "Wowaka",
    plays: 67000000,
  },
  { name: "God-ish", duration: 205, producer: "PinochioP", playsInM: 84 },
  { name: "Ghsot Rule", duration: 207, producer: "deco*27", playsInM: 52 },
  { name: "Venom", duration: 204, producer: "Kairiki Bear", playsInM: 68 },
  { name: "Melt", duration: 258, producer: "Supercell", playsInM: 30 },
  { name: "Mind Brand", duration: 261, producer: "Maretu", playsInM: 37 },
  {
    name: "Aishite Aishite Aishite",
    duration: 251,
    producer: "kikyo",
    playsInM: 110,
  },
  { name: "Rolling Girl", duration: 200, producer: "Wowaka", playsInM: 18 },
];

// const addSong = (playlist, newsong) => {
//   const exists = playlist.some(
//     (song) => song.name.toLowerCase() == newsong.name.toLowerCase()
//   );
//   if (exists) {
//     console.log("this song already exists");
//   } else {
//     const updatedPlaylist = [...playlist, newsong];
//     // console.log(updatedPlaylist);
//     return updatedPlaylist
//   }
// };

// console.log(addSong(playlist, {
//   name: "King",
//   duration: 135,
//   producer: "kanrai",
//   playsInM: 96,
// }))

// const removingSong = (playlist,removesong) =>{

//     const playlistlenght = playlist.length;

//  const removedSongPlaylist = playlist.filter(songs=>songs.name.toLowerCase() !== removesong.name.toLowerCase())

//  const newplaylistlenght = removedSongPlaylist.length;

// if (playlistlenght > newplaylistlenght) {
//   console.log(`${removesong.name} was revomed from the playlist`);
// } else {
//   console.log(`${removesong.name} was not found in the playlist`);
// }
//  return removedSongPlaylist;

// }
// const newplaylist = removingSong(playlist,{ name: "Aishite Aishite Aishite", duration: 251, producer: "kikyo", playsInM: 110 });
// console.log(newplaylist)

// const totalPlays = (playlist) => (playlist.reduce((acc,songs)=>acc+songs.playsInM,0))

// const totalplaysss = totalPlays(playlist);
// console.log(totalplaysss)

// const topNviewedSongs = (playlist,n) =>
//    {
//    const  sortedPlaylist = [...playlist].sort((a,b)=>b.playsInM - a.playsInM)
//    const topN = sortedPlaylist.slice(0,n)
//    return topN
//   }

//   const topN = topNviewedSongs(playlist,4);
//   console.log(topN)

// const noOfSongsByProducer = (playlist)=>{
//         const  noOfSongs = playlist.reduce((acc,num) => {
//           acc[num.producer] = (acc[num.producer] || 0) + 1;
//           return acc }  ,{} )

//           return noOfSongs;
//         }

// console.log(noOfSongsByProducer(playlist))

// const noOfSongsByGivenProducer = (playlist, producer) => {
//  const songs = playlist.reduce((acc, song) => {
//     if(song.producer === producer){acc[producer] = (acc[producer] || 0) + 1}
//     return acc;
//   }, {});

//   return songs;

// }
//  console.log(noOfSongsByGivenProducer(playlist, "Wowaka"))

//  const totalViewsByProducer = (playlist,producer) => {

//   const viewsByProducer = playlist.filter(song=>song.producer == producer).reduce((acc,song)=>{
//     acc[song.producer] = (acc[song.producer] || 0 ) + song.playsInM;
//     return acc;
//   },{})

//   return viewsByProducer;

//  }

//  console.log(totalViewsByProducer(playlist,"Wowaka"));

const liveViewCount = (playlist, title) => {
  const currentSont = playlist
    .filter((song) => song.name == title)
    .map((song) => song);

  setInterval(() => {
    currentSont.forEach((song) => {
      song.plays = song.plays + 1;
      console.clear();
      console.log(` 
  name: ${song.name}
  duration: ${song.duration},
  producer: ${song.producer},
  plays: ${song.plays}`);
    });
  }, 400);

  return currentSont;
};

liveViewCount(playlist, "Unkown mother Goose");
