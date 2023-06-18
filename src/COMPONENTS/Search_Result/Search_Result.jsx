import React, { createContext, useContext, useReducer, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Search_Result.css";
import { API_DATA } from "../../API/API";
import Reducer, { activeSong } from "../Reducer/Reducer";
import PlayerTrack from "../Player_Track/PlayerTrack";

const songData = createContext();

const Search_Result = () => {
  // get data from server
  const { data } = useContext(API_DATA);
  // get song details on click
  const [state, dispatch] = useReducer(Reducer);
  // active song
  const [isActive,setIsActive] = useState(false)
  return (
    <>
      <div className="songs_card_wrpr">
        <div className="songs_card_inner_wrpr">
          <h2 className="songs_card_heading_txt">Did you get your query ?</h2>
          <div className="songs_card_box">
            {data?.results.map((items, index) => {
              return (
                <>
                  <div className="songs_card_list_wrpr">
                    <div className="songs_card_list_box">
                      <div className={`songs_card_list_img_box  ${(isActive === items.id)  ? 'active' : '' } `}>
                        <img
                          src={items.image[2].link}
                          alt=""
                          className="songs_card_list_img"
                        />
                        <div className="song_card_play_box">
                          <div className="song_card_play_cta">
                            <span
                              onClick={(e) =>
                               {
                                dispatch({
                                  type: "GET_SONG",
                                  songDetails: { ...items },
                                  songList : data,
                                  index : index,
                                  icon : true,
                                  isClicked : undefined,
                                  element : e.target.closest('.songs_card_list_wrpr')
                                })
                                setIsActive(items.id)
                               }
                              }
                            >
                             {isActive === items.id ? <PauseIcon /> : <PlayArrowIcon />}   
                            </span>
                          </div>
                        </div>
                      </div>
                      <h2 className="songs_card_list_song_title">
                        {items.name}
                      </h2>
                      <p className="songs_card_list_song_disc">
                        {items.primaryArtists}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <songData.Provider value={{ ...state,setIsActive,isActive }}>
        <PlayerTrack />
      </songData.Provider>
    </>
  );
};

export default Search_Result;
export { songData };
