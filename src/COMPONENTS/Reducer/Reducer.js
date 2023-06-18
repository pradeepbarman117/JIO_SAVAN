

const Reducer = (state, action) => {
  if (action.type === "GET_SONG") {
    let { album, downloadUrl, name, primaryArtists, image } = action.songDetails;

    let upComingSong = action.songList.results.filter((items,index)=>{
      if(index > action.index) return items
    });
    // console.log(action.songDetails.id)
    return (state = {
      url: downloadUrl[4].link,
      name: name,
      artistName: primaryArtists,
      img: image[2].link,
      allSong: action.songList.results,
      index: action.index,
      nextSong : upComingSong,
      reset : action.reset,
      ele : action.element,
      activeIcon : action.icon,
      songId : action.songDetails.id,
      isClicked : action.isClicked
    });
  }
};

export default Reducer;

// song duration controll
let songDuration;
const songControll = (state, action) => {
  if (action.type === "SONG_DETAILS") {
    const { currentTime, duration } = action.data;
    songDuration = duration;
    if (duration) {
      return (state = {
        currTime: (currentTime % 60).toFixed(0),
        totalDuration: Math.floor(duration / 60),
        totalDurationSecond: Math.floor(duration % 60),
        currMin: Math.floor(currentTime / 60),
        progressBar: (currentTime / duration) * 100,
        Current_Song_Duration: duration,
        Current_Song_Time: currentTime,
      });
    }
  }
};

// progress bar
const progressBarControll = (state, action) => {
  if (action.type === "PROGRESS_BAR_CONTROLL") {
    const { current } = action.data.songDuration;
    let getSecond =
      (action.data.clientX / action.data.clientWidth) * songDuration;
    let getTime = (current.currentTime = getSecond);
    return (state = getTime);
  }
};



let count = 0
const moveToNextSong = (state,action)=>{
  if(action.type === 'NEXT_SONG_PLAY'){
    action.ele.src = action.nextSong[count].downloadUrl[4].link
    count++
    if(action.isClicked == undefined ){
      console.log(state)
     return state = undefined
    }else{
      console.log(state)
    return state = {
      songTitle : action.nextSong[count - 1].name,
      songImage : action.nextSong[count - 1].image[2].link,
      artist : action.nextSong[count - 1].primaryArtists,
      activeSong : action.isClicked
    }
  }
    
  }
}



export { progressBarControll, songControll,moveToNextSong};
