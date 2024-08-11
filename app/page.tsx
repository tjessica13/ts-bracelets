import { albums } from '@/data/albums';

export default function Home() {

  const excludeLetters = ["k", "n"]

  function filterSongs(song: string) {
    let lowerSong = song.toLowerCase()
    
    // https://stackoverflow.com/questions/5582574/how-to-check-if-a-string-contains-text-from-an-array-of-substrings-in-javascript
    if (!excludeLetters.some(letter => lowerSong.includes(letter))){
      return song
    }
  }

  return (
    <main>
      <h1>TS Bracelets</h1>
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
