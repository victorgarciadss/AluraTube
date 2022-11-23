import Header from "./Header";
import Menu from "../src/components/Menu";
import TimeLine from "./TimeLine";

import config from '../config.json';

import { useEffect, useState } from "react";
import videoService from "../src/components/services/videoService";


function HomePage(){

    const service = videoService();

    const [filterValue, setFilterValue] = useState("");
    const [playlists, setPlaylists] = useState({});


    useEffect(() => {
        
        service
            .getAllVideos()
            .then((info) => {
                // console.log(info.data);
                const newPlaylists = {};
                info.data.forEach((video) => {
                    
                    if (!newPlaylists[video.playlist]) {
                        newPlaylists[video.playlist] = [];
                    }
                    newPlaylists[video.playlist] = [
                        video,
                        ...newPlaylists[video.playlist],
                    ]
                })
                setPlaylists(newPlaylists);
            })
        
        
    }, []);


    return (
        <>
        
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                
            }}>
                <Menu  filterValue={filterValue} setFilterValue={setFilterValue}/>
                <Header />
                <TimeLine searchValue={filterValue} playlists={playlists} />
            </div>
        </>
        
    )
}

export default HomePage;