"use client"
import { albums } from '@/data/albums';
import { useState } from 'react';

const SongsComponent = () => {
    
  const [excludeLetters, setExcludeLetters] = useState<string[]>(["e", "p"]);

  function filterSongs(song: string) {
    let lowerSong = song.toLowerCase()
    
    // https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript
    if (!excludeLetters.some(letter => lowerSong.includes(letter))){
        return song
    }
  }

  function handleClick(letter: string) {
    setExcludeLetters(l => l.filter(item => item !== letter));
  }

  return (
    <main>
      <h1>TS Bracelets</h1>
        <h1>{excludeLetters}</h1>
        <button value={"e"} onClick={() => handleClick("e")}>E</button>

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