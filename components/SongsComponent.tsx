"use client"
import { albums } from '@/data/albums';
import { useState } from 'react';

import { Sacramento } from 'next/font/google';

const sacramento = Sacramento({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-sacramento',
});

const SongsComponent = () => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //https://stackoverflow.com/questions/68459964/how-to-create-a-string-array-in-the-usestate-hook-and-update-that-same-array-in
    const [excludeLetters, setExcludeLetters] = useState<string[]>([]);

    function filterSongs(song: string) {
        let lowerSong = song.toLowerCase()
        
        // https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript
        if (!excludeLetters.some(letter => lowerSong.includes(letter.toLowerCase()))){
            return (<div className="song">
                <p>{song}</p>
            </div>)
        }
    }

    function handleClick(letter: string) {
        if (excludeLetters.includes(letter)){
            // https://stackoverflow.com/questions/57341541/removing-object-from-array-using-hooks-usestate
            setExcludeLetters(l => l.filter(item => item !== letter));
        } else {
            //https://react.dev/learn/updating-arrays-in-state
            setExcludeLetters([
                ...excludeLetters,
                letter
            ]);
        }
    }

    return (
        <div className={`${sacramento.variable}`}>
            <div className="Home">
                <h1>Taylor Swift Friendship Bracelets</h1>
                <div className="letter-container">
                    <h2>Exclude Letters</h2>
                    <h1>{excludeLetters}</h1>
                    <div className="letter-buttons">
                        {
                        alphabet.map((letter) => (
                        <button value={letter} onClick={() => handleClick(letter)}>{letter}</button>
                        ))
                        }
                    </div>
                    
                </div>
                
            </div>
            
            <div className="albums">
                {
                albums.map((item) => (
                    <div className="album" id={item.id}>
                        <h2>{item.album}</h2>
                            <div className="songs">
                                {
                                    item.songs.map((song, j) => (
                                        filterSongs(song)
                                    ))
                                }
                            </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default SongsComponent