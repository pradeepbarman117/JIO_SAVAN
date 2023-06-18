import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./PlayerTrack.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import song from "./SongList/first.mp3";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { songData } from "../Search_Result/Search_Result";
import { moveToNextSong,progressBarControll, songControll } from "../Reducer/Reducer";
const PlayerTrack = (props) => {
  const getAudio = useRef();
  // show volume slider
  const [isVolumeActive, setIsVolumeActive] = useState(false);
  // get current song url
  const {
    url,
    name,
    artistName,
    img,
    allSong,
    index,
    nextSong,
    ele,
    setIsActive,
    isActive,
    activeIcon,
    songId,
    isClicked
  } = useContext(songData);
  // this function for song controll
  const [state, dispatch] = useReducer(songControll);

  const songDetail = (e) => {
    dispatch({
      type: "SONG_DETAILS",
      data: e.target,
    });
  };

  // play song from clicked progress bar length
  const [progressBarDetails, dispatchProgress] = useReducer(progressBarControll);
  const changeDuration = ({ clientX, ...target }) => {
    dispatchProgress({
      type: "PROGRESS_BAR_CONTROLL",
      data: {
        clientX: clientX,
        clientWidth: target.target.clientWidth,
        songDuration: getAudio,
      },
    });
  };


  // next song Function
  const [changeNextSong,dispatchNextSong] = useReducer(moveToNextSong)
  
  const playNextSong = () => {
   
    dispatchNextSong({
      type : 'NEXT_SONG_PLAY',
      ele : getAudio.current,
      nextSong : nextSong,
      counter : 0,
      songId : songId,
      isClicked : isClicked
    })
  };

// console.log(changeNextSong)
  // pause play button
  const [pauseIcon, setPauseIcon] = useState(false);
  useEffect(() => {
    setPauseIcon(activeIcon);
  }, [activeIcon]);
  const pausePlay = () => {
    if (url) {
      setPauseIcon(!pauseIcon);
      if (pauseIcon == true) {
        getAudio.current.pause();
        setIsActive(false)
      } else {
        getAudio.current.play();
        setIsActive(songId)
      }
    }
  };

  return (
    <>
      <div className="player_track_wrpr">
        <div className="player_track_inner_wrpr">
          <div className="player_track_box">
            <audio
              src={url}
              controls
              autoPlay
              style={{ display: "block" }}
              onTimeUpdate={songDetail}
              ref={getAudio}
            ></audio>
            <div className="player_track_song_details">
              <div className="player_track_song_img">
                <span>
                  <img src={changeNextSong ?  changeNextSong.songImage : img} alt="" />
                </span>
              </div>
              <div className="player_track_song_details_txt">
                <h2 className="player_track_song_heading">{ (changeNextSong)  ? changeNextSong.songTitle : name }</h2>
                <p className="player_track_song_disc">{changeNextSong ? changeNextSong.artist : artistName}</p>
              </div>
            </div>
            <div className="payer_track_song_controll">
              <div className="player_track_song_controll_icon">
                <SkipPreviousIcon />
              </div>
              <div
                className="player_track_song_controll_icon"
                onClick={() => pausePlay()}
              >
                {pauseIcon ? <PauseIcon /> : <PlayArrowIcon />}
              </div>
              <div
                className="player_track_song_controll_icon"
                onClick={() => playNextSong()}
              >
                <SkipNextIcon />
              </div>
            </div>
            <div className="player_track_song_timer">
              <div className="player_track_song_time">
                <span className="player_track_song_time_disc">
                  {state?.currMin}:
                  {state?.currTime.length === 1
                    ? `0${state?.currTime}`
                    : state?.currTime}
                  &nbsp;/&nbsp;
                </span>
                <span className="player_track_song_time_disc">
                  {state?.totalDuration}:{state?.totalDurationSecond}
                </span>
              </div>
              <div className="payer_track_song_action_btn">
                <span className="player_track_song_action_icon dots">
                  <MoreHorizIcon />
                </span>
                <span
                  className="player_track_song_action_icon valume"
                  onClick={() => setIsVolumeActive(!isVolumeActive)}
                >
                  {/* {isVolumeActive ? <VolumeOffIcon /> : <VolumeUpIcon />}  */}
                  <VolumeUpIcon />
                </span>
                <span className="player_track_song_action_icon fullScreen">
                  <OpenInFullIcon />
                </span>
                <div className={`volume_box ${isVolumeActive && "active"} `}>
                  <input type="range" max={10} name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="song_duration_line_bar" onClick={changeDuration} />
        <div
          className="song_duration_line"
          style={{ width: `${state?.progressBar}%` }}
        ></div>
      </div>
    </>
  );
};

export default PlayerTrack;
