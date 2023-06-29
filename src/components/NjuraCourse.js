import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/NjuraCourse.css';

function NjuraCourse() {
    const [searchQuery, setSearchQuery] = useState('');
    const [videoSuggestions, setVideoSuggestions] = useState([]);

    useEffect(() => {
        const fetchVideoSuggestions = async () => {
            try {
                const response = await axios.get(
                    'https://www.googleapis.com/youtube/v3/search',
                    {
                        params: {
                            key: 'AIzaSyDS3DnipRB9nYbP2Nh1S1OGcxuxJmNceuU',
                            part: 'snippet',
                            q: searchQuery,
                            channelId: 'UCuCxer1qR2BBeF99V_n3mKA',
                            maxResults: 5,
                            thumbnail: 'high'
                        },
                    }
                );

                const suggestions = response.data.items.map((item) => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                }));

                setVideoSuggestions(suggestions);
            } catch (error) {
                console.error('Error fetching video suggestions:', error);
            }
        };

        if (searchQuery) {
            fetchVideoSuggestions();
        } else {
            setVideoSuggestions([]);
        }
    }, [searchQuery]);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='CourseBody'>
            <header className='CourseHeader'>
                <Link to="/" className='backLink'>ZURÜCK</Link>

                <h1>NJURA POKAZHE</h1>
                <p>
                    Hier teile ich Tutorials um anderen beim Erlernen der UGS zu helfen und ein tieferes Verständnis für die gehörlosen Gemeinschaft zu schaffen. Complett beginner friendly!
                </p>
                <br />
                <input type='text' value={searchQuery} onChange={handleInputChange} className='NPInput' placeholder='Search...'/>
            </header>
            {videoSuggestions.length > 0 ? (
                <ul>
                    {videoSuggestions.map((video) => (
                        <li key={video.id}>
                            <img
                                src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                                alt={video.title} className='YouTubeImg'
                            />
                            <p>{video.title}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='BethEllenPhrase'>No video suggestions available.</p>
            )}
        </div>
    );
}

export default NjuraCourse;
