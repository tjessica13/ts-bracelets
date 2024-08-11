"use client"
import { albums } from '@/data/albums';
import { useState } from 'react';

const SongsComponent = () => {

    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    //https://stackoverflow.com/questions/68459964/how-to-create-a-string-array-in-the-usestate-hook-and-update-that-same-array-in
    const [excludeLetters, setExcludeLetters] = useState<string[]>([]);

    function filterSongs(song: string) {
        let lowerSong = song.toLowerCase()
        
        // https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript
        if (!excludeLetters.some(letter => lowerSong.includes(letter.toLowerCase()))){
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
            {
                alphabet.map((letter) => (
                    <button value={letter} onClick={() => handleClick(letter)}>{letter}</button>
                ))
            }
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