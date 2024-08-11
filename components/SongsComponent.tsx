"use client"
import { albums } from '@/data/albums';
import { useState } from 'react';

const SongsComponent = () => {
    //https://stackoverflow.com/questions/68459964/how-to-create-a-string-array-in-the-usestate-hook-and-update-that-same-array-in
    const [excludeLetters, setExcludeLetters] = useState<string[]>(["e", "p"]);

    function filterSongs(song: string) {
        let lowerSong = song.toLowerCase()
        
        // https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript
        if (!excludeLetters.some(letter => lowerSong.includes(letter))){
            return song
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
        <main>
        <h1>TS Bracelets</h1>
            <h1>{excludeLetters}</h1>
            <button value={"e"} onClick={() => handleClick("e")}>E</button>
            <button value={"a"} onClick={() => handleClick("a")}>A</button>
        <div>
            {
            albums.map((item, i) => (
                <div>
                <h2>{i}</h2>
                <h2>{item.album}</h2>
                {
                    item.songs.map((song, j) => (
                    <div>
                        <h2>{filterSongs(song)}</h2>
                    </div>
                    ))
                }
                </div>
            ))
            }
        </div>
        </main>
    );
}

export default SongsComponent