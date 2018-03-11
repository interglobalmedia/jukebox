function Jukebox() {

    let tracks = [];
    let trackIndex = 0;
    let currentTime = 0;
    // let currentIndex = 0;
    this.createElements = function() {
        // create the body elment
        const body = document.createElement('body');
        document.body.setAttribute('class', 'Site');

        // create outer container for Sticky Footer set up
        const outerContainer = document.createElement('div');
        // set class attribute site-content
        outerContainer.setAttribute('class', 'Site-content');
        document.body.appendChild(outerContainer);

        // create wrapperContainer that contains all other tags
        // all tags bound in some way to wrapperContainer either
        // directly or through parent.
        const wrapperContainer = document.createElement('div');
        // append wrapperContainer to body
        outerContainer.appendChild(wrapperContainer);
        // create wrapper-container class
        wrapperContainer.classList.add('wrapper-container');

        // create app title
        const theGroove = document.createElement('h1');
        // set id attribute
        theGroove.setAttribute('id', 'groove');
        // append theGroove to wrapperContainer
        wrapperContainer.appendChild(theGroove);
        // set theGroove innerHTML
        theGroove.innerHTML = `Welcome To The Groove`;

        // create search input label
        const searchLabel = document.createElement('label');
        // create an id attribute for searchLabel
        searchLabel.setAttribute('id', 'searchLabel');
        // set searchlabel innerHTML
        searchLabel.innerHTML = `search by trackId, songName, artist, or song duration:`;
        // append searchLabel to wrapperContainer
        wrapperContainer.appendChild(searchLabel);

        // create a search container for search input and reset button
        const searchContainer = document.createElement('fieldset');
        // set class attribute for searchContainer
        searchContainer.setAttribute('class', 'search-container');
        wrapperContainer.appendChild(searchContainer);

        // create search input
        const search = document.createElement('input');
        // create id attribute for search
        search.setAttribute('id', 'search');
        // create placeholder attribute for search
        search.setAttribute('placeholder', 'search ...');
        // create type attribute for search
        search.setAttribute('type', 'text');
        // append search to wrapperConainer
        searchContainer.appendChild(search);

        // create reset button to clear search resuls
        const resetSongsDiv = document.createElement('button');
        // set id attribute for resetSongsDiv
        resetSongsDiv.setAttribute('id', 'reset');
        // set resetSongsDiv innerHTML
        resetSongsDiv.innerHTML = `<i class="material-icons">refresh</i>`;
        searchContainer.appendChild(resetSongsDiv);

        // create audio element
        const audio = document.createElement('audio');
        // set the id attribute to audio element
        audio.setAttribute('id', 'audio');
        // set controls attribute to audio element to create
        // default audio player (for testing purposes only)
        // audio.setAttribute('controls', 'controls');
        // append audio element to wrapperContainer
        wrapperContainer.appendChild(audio);

        // create the source element inside of audio
        // where audio file resides
        const audioSrc = document.createElement('source');
        // add id attribute to source
        audioSrc.setAttribute('id', 'source');
        // add type attribute to source
        audioSrc.setAttribute('type', 'audio/mp3');
        // add src attribute to source
        // // add first song in playlist as src value
        audioSrc.setAttribute('src', 'audio/7th_Floor_Tango.mp3');
        // append source element to audio element
        audio.appendChild(audioSrc);

        // create buttonsContainer div
        // wraps around jukebox custom buttons
        const buttonsContainer = document.createElement('div');
        // set id attribute to buttonsContainer
        buttonsContainer.setAttribute('id', 'buttons-div');
        // append buttonsContainer to wrapperContainer
        wrapperContainer.appendChild(buttonsContainer);

        // create prevSong button
        const prevSong = document.createElement('button');
        prevSong.setAttribute('id', 'prev');
        // add innerHTML to prevSong button with value of 'prev'
        prevSong.innerHTML = `<i class="material-icons">navigate_before</i>`;
        // append prevSong button to buttonsContainer
        buttonsContainer.appendChild(prevSong);

        // create stop button
        const stopAudio = document.createElement('button');
        // set id attribute to stopAudio
        stopAudio.setAttribute('id', 'stop');
        // add innerHTML to stopAudio button
        stopAudio.innerHTML = `<i class="material-icons">stop</i>`;
        // append stopAudio to buttonsContainer
        buttonsContainer.appendChild(stopAudio);

        // create playPauseAudio button
        // toggles play/pause
        const playPauseAudio = document.createElement('button');
        // set id attribute to playPauseAudio
        playPauseAudio.setAttribute('id', 'play');
        // add innerHTML to playPauseAudio button with value of 'play'
        playPauseAudio.innerHTML = `<i class="material-icons">play_arrow</i>`;
        // append playPauseAudio button to buttonsContainer
        buttonsContainer.appendChild(playPauseAudio);

        // create nextSong button
        const nextSong = document.createElement('button');
        // set id attribute to nextSong button
        nextSong.setAttribute('id', 'next');
        // add innerHTML to nextSong button with value of 'next'
        nextSong.innerHTML = `<i class="material-icons">navigate_next</i>`;
        // append nextSong button to buttonsContainer
        buttonsContainer.appendChild(nextSong);

        // create span for current song
        const currentSpan = document.createElement('span');
        currentSpan.setAttribute('id', 'result');
        wrapperContainer.appendChild(currentSpan);

        // add songListContainer ul to store list of songs 
        // select because responds to change event instead of click
        const songListContainer = document.createElement('ul');
        // set id attribute to songListContainer
        songListContainer.setAttribute('id', 'list');
        // append songListContainer to wrapperContainer
        wrapperContainer.appendChild(songListContainer);

        const firstLi = document.createElement('li');
        firstLi.setAttribute('class', 'selected');
        firstLi.setAttribute('data-value', 'audio/7th_Floor_Tango.mp3');
        firstLi.setAttribute('data-trackId', '1');
        firstLi.setAttribute('data-songName', '7th Floor Tango');
        firstLi.setAttribute('data-artist', 'Silent Partner');
        firstLi.setAttribute('data-duration', '2:21');
        songListContainer.appendChild(firstLi);

        // create a fieldset in which to place songList select 
        const songDiv = document.createElement('div');
        songDiv.setAttribute('id', 'songdiv');

        wrapperContainer.appendChild(songDiv);

        // create inputs so user can add new song

        // add inputContainer
        const inputContainer = document.createElement('div');
        // add id attribute
        inputContainer.setAttribute('id', 'input-container');
        // append inputContainer to wrapperContainer
        wrapperContainer.appendChild(inputContainer);

        // add input instructions div
        // for instructions on how to add new song
        const inputInstructions = document.createElement('div');
        // add id attribute
        inputInstructions.setAttribute('id', 'addInstructions');
        // append inputInstructions to inputContainer
        inputContainer.appendChild(inputInstructions);

        // add paragraph to inputContainer
        const paragraphDesc = document.createElement('p');
        paragraphDesc.setAttribute('class', 'paraDesc');
        inputContainer.appendChild(paragraphDesc);
        // paragraph text for instuctions re adding new song to list
        // paragraph text for instuctions re adding new song to list
        paragraphDesc.innerHTML = `<h2 class="para-heading">Songs available to add to playlist:</h2>
        <h3>Firefly:</h3>
        ❖
        TrackId: 7 ❖
        SongName: Firefly ❖ Path: audio/Firefly.mp3 ❖ Artist: Quincas Moreira ❖ Duration: 2:28 ❖ <br>
        <h3>Psychedelicacy:</h3>
        ❖
        TrackId: 8 ❖ SongName: Psychedelicacy ❖ Path: audio/Psychedelicacy.mp3 ❖ Artist: Doug Maxwell ❖ Duration: 1:31 ❖<br>
        <h3>Stranger Danger:</h3>
        ❖
        TrackId: 9 ❖ SongName: Stranger Danger ❖ Path: audio/Stranger_Danger.mp3 ❖ Artist: Francis Preve ❖ Duration: 1:53 ❖<br>
        <h3>Race Car:</h3>
        ❖
        TrackId: 10 ❖ SongName: Race Car ❖ Path: audio/Race_Car.mp3 ❖ Artist: Rondo Brothers ❖ Duration: 1:29 ❖<br>
        <h3>Upstairs With Cat:</h3>
        ❖
        TrackId: 11 ❖ SongeName: Upstairs With Cat ❖ Path: audio/Upstairs_With_Cat.mp3 ❖ Artist: Diamond Ortiz ❖ Duration: 3:33 ❖<br>
        <h3>Wild Pogo</h3>
        ❖
        Trackid: 12 ❖ SongName: Wild Pogo ❖ Path: audio/Wild_Pogo.mp3 ❖ Artist: Francis Preve ❖ Duration: 2:10 ❖<br>`

        // add inputContainer heading
        const inputContainerHeading = document.createElement('h1');
        // add inputContainerHeading id attribute
        inputContainerHeading.setAttribute('id', 'inputContainerHead');
        // append inputContainerHeading to inputContainer
        inputContainer.appendChild(inputContainerHeading);
        inputContainerHeading.innerHTML = `Additional Songs:`
        inputContainerHeading.style.color = `#ffc600`;

        // add trackId input
        const addTrackId = document.createElement('input');
        // add id attribute
        addTrackId.setAttribute('id', 'addTrackId');
        // add placeholder attribute
        addTrackId.setAttribute('placeholder', 'track id here');
        // append addTrackId to inputContainer
        inputContainer.appendChild(addTrackId);

        // add songName input
        const addSongName = document.createElement('input');
        // add id attribute
        addSongName.setAttribute('id', 'addSongName');
        // add placeholder attribute
        addSongName.setAttribute('placeholder', 'song name here');
        // append addSongName to inputContainer
        inputContainer.appendChild(addSongName);

        // add src input
        const addSrc = document.createElement('input');
        // add id attribute
        addSrc.setAttribute('id', 'addSrc');
        // add placeholder attribute
        addSrc.setAttribute('placeholder', 'path to song here');
        // append addSrc o input Container
        inputContainer.appendChild(addSrc);

        // add artist input
        const addArtist = document.createElement('input');
        // add id attribute
        addArtist.setAttribute('id', 'addArtist');
        // add placeholder attribute
        addArtist.setAttribute('placeholder', 'artist here');
        // append addArtist to inputContainer
        inputContainer.appendChild(addArtist);

        // add duration input
        const addDuration = document.createElement('input');
        // add id attribute
        addDuration.setAttribute('id', 'addDuration');
        // add placeholder attribute
        addDuration.setAttribute('placeholder', 'song duration here');
        // append addDuration to inputContainer
        inputContainer.appendChild(addDuration);

        // add submitBtn to add new songs to playlist
        const submitBtn = document.createElement('button');
        // add id attribute
        submitBtn.setAttribute('id', 'submitSong');
        // add button text with innerHTML property
        submitBtn.innerHTML = `submit`;
        // append submitBtn to inputContainer
        inputContainer.appendChild(submitBtn);

        // create footer
        const footer = document.createElement('footer');
        // set class attribute
        footer.setAttribute('class', 'site-footer');
        document.body.appendChild(footer);
        footer.innerHTML = `<p>&dagger; © 2018 Maria D. Campbell &dagger;</p>`;
    }
    this.addSongToTrack = function(song) {
        const songListContainer = document.getElementById('songdiv');
        tracks.push(song);
        return tracks;
    }
    this.displaySongs = function() {
        for (let i in tracks) {
            const audioSrc = document.getElementById('source');
            audioSrc.setAttribute('src', tracks[0].src);
            const songSelect = document.querySelector('#songdiv');
            const option = document.createElement('li');
            option.className = 'song';
            option.id = `${i}`;
            option.setAttribute('data-id', `${i}`);
            option.setAttribute('data-trackId', `${tracks[i].trackId}`);
            option.setAttribute('data-songName', `${tracks[i].songName}`);
            option.setAttribute('data-artist', `${tracks[i].artist}`);
            option.setAttribute('data-duration', `${tracks[i].duration}`);
            option.setAttribute('data-value', `${tracks[i].src}`);
            option.innerHTML += `${tracks[i].trackId} ❖ ${tracks[i].songName} ❖ ${tracks[i].artist} ❖ ${tracks[i].duration}`;

            songSelect.appendChild(option);
        }
        this.loadSong = function(id) {

            trackIndex = id;

            const audioSrc = document.getElementById('source');
            audioSrc.src = tracks[id].src;

            return trackIndex;
        }
        this.loadNextSong = function() {

            audio.pause();

            if (trackIndex === tracks.length - 1) {
                trackIndex = 0;
            } else {
                trackIndex = trackIndex + 1;
            }

            const audioSrc = document.getElementById('source');
            audioSrc.setAttribute('src', tracks[trackIndex].src);
            const songListContainer = document.querySelector('#list');
            const option = document.querySelector('li');
            option.className = 'selected';
            option.id = `${trackIndex}`;
            option.setAttribute('data-id', `${trackIndex}`);
            option.setAttribute('data-trackId', `${tracks[trackIndex].trackId}`);
            option.setAttribute('data-songName', `${tracks[trackIndex].songName}`);
            option.setAttribute('data-artist', `${tracks[trackIndex].artist}`);
            option.setAttribute('data-value', `${tracks[trackIndex].src}`);
            option.setAttribute('data-duration', `${tracks[trackIndex].duration}`);
            const trackId = option.getAttribute('data-trackId');
            const songName = option.getAttribute('data-songName');
            const artist = option.getAttribute('data-artist');
            const duration = option.getAttribute('data-duration');
            const currentSpan = document.getElementById('result');
            currentSpan.innerHTML = `${trackId} ❖ ${songName} ❖ ${artist} ❖ ${duration}`;

            this.loadSong(trackIndex);
            return trackIndex;
        }

        this.loadPrevSong = function() {

            audio.pause();

            if (trackIndex === 0) {
                trackIndex = tracks.length - 1;
            } else {
                trackIndex = trackIndex - 1;
            }

            const audioSrc = document.getElementById('source');
            audioSrc.getAttribute('src', tracks[trackIndex].src);
            const songListContainer = document.querySelector('#list');
            const option = document.querySelector('li');
            option.className = 'selected';
            option.id = `${trackIndex}`;
            option.getAttribute('data-id', `${trackIndex}`);
            option.getAttribute('data-trackId', `${tracks[trackIndex].trackId}`);
            option.getAttribute('data-songName', `${tracks[trackIndex].songName}`);
            option.getAttribute('data-artist', `${tracks[trackIndex].artist}`);
            option.getAttribute('data-value', `${tracks[trackIndex].src}`);
            option.getAttribute('data-duration', `${tracks[trackIndex].duration}`);
            const currentSpan = document.getElementById('result');
            currentSpan.innerHTML = `${tracks[trackIndex].trackId} ❖ ${tracks[trackIndex].songName} ❖ ${tracks[trackIndex].artist} ❖ ${tracks[trackIndex].duration}`;

            this.loadSong(trackIndex);
            return trackIndex;
        }
        this.addSong = function() {
            let trackId = document.getElementById('addTrackId').value;
            let songName = document.getElementById('addSongName').value;
            let src = document.getElementById('addSrc').value;
            let artist = document.getElementById('addArtist').value;
            let duration = document.getElementById('addDuration').value;
            let newSong = new Song(trackId, songName, src, artist, duration);
            let songListContainer = document.getElementById('list');
            tracks.push(newSong);
            songListContainer.innerHTML = '';
            this.displaySongs();
            return tracks;
        }
        this.togglePlay = function() {
                const audio = document.getElementById('audio');
                const audioPlay = document.getElementById('play');
                const firstLi = document.querySelectorAll('li.selected')[0];

                const trackId = firstLi.getAttribute('data-trackId');
                const songName = firstLi.getAttribute('data-songName');
                const artist = firstLi.getAttribute('data-artist');
                const duration = firstLi.getAttribute('data-duration');
                const currentSpan = document.getElementById('result');
                currentSpan.innerHTML = `${trackId} ❖ ${songName} ❖ ${artist} ❖ ${duration}`;

                if (audio.paused) {
                    audioPlay.innerHTML = `<i class="material-icons">pause</i>`;
                    currentTime = audio.currentTime;
                    audio.pause();
                } else if (audio.play) {
                    audioPlay.innerHTML = `<i class="material-icons">play_arrow</i>`;

                }
                return audio.paused ? audio.play() : audio.pause();
                this.loadSong(trackIndex);
            }
            // text search by trackId, songName, artist, or song duration
        this.searchSong = function() {
            const searchInput = document.getElementById("search");
            const filterSearch = searchInput.value.toUpperCase();
            const songDiv = document.getElementById("songdiv");
            const songs = songDiv.getElementsByTagName("li");
            for (let i = 0; i < songs.length; i++) {
                // songs[i] represents individual song
                songs[i] = songs[i].getElementsByTagName[0];
                if (songs[i].innerHTML.toUpperCase().indexOf(filterSearch) > -1) {
                    songs[i].style.display = "";
                } else {
                    songs[i].style.display = "none";
                }
            }
        }
    }
}

function Song(trackId, songName, src, artist, duration) {
    this.trackId = trackId;
    this.songName = songName;
    this.src = src;
    this.artist = artist;
    this.duration = duration;
}

const seventh_floor_tango = new Song(1, '7th Floor Tango', 'audio/7th_Floor_Tango.mp3', 'Silent Partner', '2:21');
const beach_disco = new Song(2, 'Beach Disco', 'audio/Beach_Disco.mp3', 'Dougie Wood', '3:03');
const butchers = new Song(3, 'Butchers', 'audio/Butchers.mp3', 'Silent Partner', '1:36');
const righteous = new Song(4, 'Righteous', 'audio/Righteous.mp3', 'Silent Partner', '2:58');
const thump_and_jump = new Song(5, 'Thump and Jump', 'audio/Thump_and_Jump.mp3', 'Jimmy Fontanez', '1:38');
const trespass = new Song(6, 'Trespass', 'audio/Trespass.mp3', 'Gunnar Olsen', '2:54');
const firefly = new Song(7, 'Firefly', 'audio/Firefly.mp3', 'Quincas Moreira', '2:28');
const psychedelicacy = new Song(8, 'Psychedelicacy', 'audio/Psychedelicacy.mp3', 'Doug Maxwell', '1:31');
const stranger_danger = new Song(9, 'Stranger Danger', 'audio/Stranger_Danger.mp3', 'Francis Preve', '1:53');
const race_car = new Song(10, 'Race Car', 'audio/Race_Car.mp3', 'Rondo Brothers', '1:29');
const upstairs_with_cat = new Song(11, 'Upstairs With Cat', 'audio/Upstairs_With_Cat.mp3', 'Diamond Ortiz', '3:33');
const wild_pogo = new Song(12, 'Wild Pogo', 'audio/Wild_Pogo.mp3', 'Francis Peve', '2;10');

const jukeBox = new Jukebox();
jukeBox.createElements();

jukeBox.addSongToTrack(seventh_floor_tango);
jukeBox.addSongToTrack(beach_disco);
jukeBox.addSongToTrack(butchers);
jukeBox.addSongToTrack(righteous);
jukeBox.addSongToTrack(thump_and_jump);
jukeBox.addSongToTrack(trespass);

jukeBox.displaySongs();

const search = document.getElementById('search');
// search input event listener
search.addEventListener('change', () => {
    jukeBox.searchSong();
})

// reset button to clear search input and reset 
// songDiv playlist
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    let searchInput = document.getElementById('search');
    searchInput.value = ``;
    const songDiv = document.getElementById('songdiv');
    songDiv.innerHTML = ``;
    jukeBox.displaySongs();
})

// button variables
const playPauseAudio = document.querySelector('#play');
const stopAudio = document.querySelector('#stop');
const nextSong = document.querySelector('#next');
const previousSong = document.querySelector('#prev');
const audio = document.getElementById('audio');
const shuffleAudio = document.getElementById('shuffle');

// prevSong event listener
previousSong.addEventListener('click', (e) => {

    const currentSpan = document.getElementById('result');
    currentSpan.innerHTML = '';

    jukeBox.loadPrevSong();
    audio.load();
    audio.play();
})

// stop audio button event listener
stopAudio.addEventListener('click', (e) => {
    console.log("stop clicked");
    let currentTime = 0;
    audio.load();
})

// playPause button event listener
playPauseAudio.addEventListener('click', (e) => {

    jukeBox.togglePlay();

})

// next song event listener
nextSong.addEventListener('click', (e) => {
    // audio.pause();

    let currentSpan = document.getElementById('result');
    currentSpan.innerHTML = ``;

    jukeBox.loadNextSong();
    audio.load();
    audio.play();
})

const songDiv = document.querySelector('#songdiv');
// click on any song in the list and it starts playing
// click on any song and it changes color. previously clicked
// link clears with removal `of the .activate class
songDiv.addEventListener('click', (e) => {
    e.preventDefault();
    let elem = e.target;

    if (elem && elem.nodeName == "LI") {
        console.log(e.target.id + " was clicked");
        if (e.target.id) {
            var elems = document.querySelector(".active");
            if (elems !== null) {
                elems.classList.remove("active");
            }
            e.target.className = "song active";
        }
    }
    const currentSpan = document.getElementById('result');
    currentSpan.innerHTML = '';

    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('source');
    audioSource.src = elem.getAttribute('data-value');
    const trackId = elem.getAttribute('data-trackId');
    const songName = elem.getAttribute('data-songName');
    const artist = elem.getAttribute('data-artist');
    const duration = elem.getAttribute('data-duration');
    currentSpan.innerHTML = `${trackId} ❖ ${songName} ❖ ${artist} ❖ ${duration}`

    audio.load();
    audio.play();
})

// event listener for submitSong button to add new song to playlist
const submitBtn = document.getElementById('submitSong');
submitBtn.addEventListener('click', () => {
    jukeBox.addSong();
    let trackId = document.getElementById('addTrackId');
    let songName = document.getElementById('addSongName');
    let src = document.getElementById('addSrc');
    let artist = document.getElementById('addArtist');
    let duration = document.getElementById('addDuration');
    trackId.value = '';
    songName.value = '';
    src.value = '';
    artist.value = '';
    duration.value = '';
})