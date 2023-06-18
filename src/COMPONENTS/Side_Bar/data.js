
import HistoryIcon from '@mui/icons-material/History';
import SongIcon from '@mui/icons-material/LibraryMusicOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import PodcastsIcon from '@mui/icons-material/PodcastsOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const data = [
    {
        text : 'New Release',
        link : '/release',
        id:1
    },
    {
        text : 'Top Charts',
        link : '/charts',
        id:2
    },
    {
        text : 'Top Playlist',
        link : '/playlist',
        id:3
    },
    {
        text : 'Podcasts',
        link : '/podcasts',
        id:4
    },
    {
        text : 'Top Artist',
        link : '/artist',
        id:5
    }
]


const LibraryData = [
    {
        text : 'History',
        link : '/history',
        icon : <HistoryIcon/>,
        id:1
    },
    {
        text : 'Songs',
        link : '/songs',
        icon : <SongIcon/>,
        id:2
    },
    {
        text : 'Albums',
        link : '/albums',
        icon : <AlbumOutlinedIcon/>,
        id:3
    },
    {
        text : 'Podcates',
        link : '/podcates',
        icon : <PodcastsIcon/>,
        id:4
    }
    ,
    {
        text : 'Artist',
        link : '/artist',
        icon : <MicOutlinedIcon/>,
        id:5
    }
]

export default data
export {LibraryData}