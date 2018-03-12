# Jukebox

## NYCDA Evening JS Intensive Project

## Goal:

Demonstrate an understanding of objects in JavaScript.

**Assignment:**

This **Starter Kit** workshop was designed for us to create the foundation for our subsequent project. We had a bit of time to get familiar with object oriented JavaScript. Now it was time build a Jukebox!

We build a music player that will end up playing any mp3 we can find online (I got mine from the free Youtube music library). We had to think about what functionality we might need for this to work. We had to encapsulate all of this functionality in a JavaScript object so that starting a song is as simple as calling Jukebox.play(). We needed an array of song objects and the ability to play, stop and pause a song. Then we had to think about how we would switch songs. Could we shuffle songs?  We focus on getting the JavaScript to work and keep the HTML/CSS minimal, make it work before we make it look good!

**Hint:** The next project we will be able to continue styling this Jukebox and API integration.

**Our JavaScript Jukebox should:**

+ Display at least one song on the page when the page loads

+ Give the user the ability to play that song, without using the "built-in" play button. This could be through a different button, through clicking or mousing over an image on the page, or any other device of our choosing.

+ Give the user the ability to stop that song without using the "built-in" stop button. Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.

+ Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders

+ The whole Jukebox should be backed by an object called Jukebox with methods to play,  stop, and load songs.

**Extra Challenge:**

Playlist of songs, allows the user to queue up the next song
Feature to request a random song

**What I have done:**

+ I created a previous, play/pause, and next button the the user could use to play, pause or go forward or backward through the songs.

+ The ability for a user to add up to 6 more songs which I store along with the 6 already uploaded songs in a directory called audio.

+ I created a select dropdown so the user could click on an individual song instead of just sorting sequentially through the songs with the prev or next button. I set the dropdown to `overflow: auto` to the parent `#list` (select element), ` white-space: nowrap`
    and `overflow: hidden` to the option element (both required for text-overflow), and `white-space: initial` to the `.selected` class assigned to the option element.

+ I added my famous sticky footer code that I re-use in virtually all of my projects. Adapted from **Philip Walton**, creator of **Flexbox**. Visit his website `Solved By Flexbox` here: [Solved By Flexbox](https://philipwalton.github.io/solved-by-flexbox/).

+ I had two different functionalities/logics going on because I wanted to emulate the **iTunes** player. There, you have the next, previous, and play/pause buttons at the top to the left, and then you have your various playlists, were you can click on any individual song. I think that's the way people mostly interact these days with their players, but I also think it's very important to get the more complex logic involved in switching from clicking on the individual songs in a playlist and then the next and previous buttons.

+ Lastly, I wanted to extract data attributes from my unordered list of songs regarding track information and printing it to the document. This was very tricky, because the data from the right song had to appear both by clicking on an individual song and clicking on the prev or next button. 

**Update 3.4.18:** The data attributes work perfectly both when clicking on either an individual song or when clicking on the next or previous buttons. However, I wanted to be able to potentially have a very long list of songs without actually taking up much space on the page, so I tried out the select element with a dropdown of options. This turned out to not be optimal at all. That's because it did not work on mobile. The next and previous buttons were fine, but not selecting individual songs in the select dropdown. It only worked in **Firefox** of all the browsers! In addition, the select dropdown looked different in each browser! **Firefox** usually is the first browser I end up having problems with. This time it was **Chrome** and **Safari** that proved to be my base cases with which I had to make Firefox compatible.

So I switched back to implementing an unordered list of songs. This time, I decided to add a vertical scroll bar to `emulate` a dropdown. I had to make a few tweaks here and there because the scrollbar behavior, given my css, was not being interpreted in the same way by **Safari**, **Firefox**, or **Chrome**. In **Chrome and **Safari** (again), I was getting a horizontal scrollbar. Whereas in **Firefox**, I was getting the vertical scrollbar I wanted! So I had to replace my implementation of columns, `columns: 1` which was directly on my unordered list element with **CSS Grid**: `grid-template-columns: 1(fr)`. Not even **Flexbox**, or `display: block` along with `margin: 0 auto` were able to do the trick for me given my CSS. I kept all the styling I had added that was specific to the select dropdown, because it still applied to **mobile**.

The only other difference there was in my **JS** for the `playList` event listener. It the addition of the conditional (line 424, jukebox2.js):

```
if (elem && elem.nodeName == "LI") {
    console.log(e.target.id + " was clicked");
}
```

I had originally intended it to double check that my `li`s were being read as **option elements**. Now I kept it so I could make sure that my `li`s were being interpreted as clicked when I clicked on them.

But the biggest difference between when I originally couldn't access my data attributes within my `playList` **event listener** was (re)setting the `data attributes` in the `this.loadNextSong()` method. I found out later, after some inoptimal implementations, that it was not necessary to implement a setAttribute() in the `this.loadPrevSong()` method because it was already done in `this.loadNextSong()`. Doing it again in `this.loadPrevSong()` would be redundant because with `this.loadPrevSong()`, we are traversing backwards over `li`s on which `setAttribute()` was already applied. Initially I set the `getAttribute()` method on the `li`s (and later `select options`), and received `null` when I clicked on an individual song. Then I remembered that an **NYCDA** academic coordinator/success coach who is also a developer (and musician!), Sam Lubin, told me that he (re)sets his `data attributes` whenever he wants to do something with them in local scope. And that got me to make the move to `setAttribute()` in `this.loadNextSong()`. Now everything works like a charm both on desktop and in mobile across browsers. 

**3.11.18:** Today I added a **search by text** input to the App. Two days ago, I removed the **shuffle** button. It was wreaking havoc on my **previous** and **next** buttons. It caused them to shuffle the songs as well. But things still were not behaving 100% as expected. I noticed that after further observing and finally understanding what was happening in the `unordered list` with the `id` of `#list`. The data for the songs was being updated by the click of the buttons via the first `<li></li>` in the `<ul></ul>` with `id` of `#list`. That was why the **first song** in the **playlist** was never played by the `next button`. It was also why sometimes the **prev** and **next** buttons did not play the songs in sequence. 

I came to realize that I had to take out the first `<li></li>` and place it by itself in `#list`. That way, `#list` had its own encapsulated `<li></li>`. 

Then I created a new `div` in which I placed the complete list of songs (`<li></li>`s). Now there was no more shifting up and down of song `li`s within the playlist (now coantained within the `div` the `id` of `#songdiv` instead of the original `ul` `#list`). Now if I click on the **previous** or **next** button, the songs are played in sequence either forward or backward. If I click on the **play/pause** button, it either continues with the current song or pauses the current song. If I click on the **stop** button after I click on the **play/pause** button, it rewinds the current song back to the beginning as evidenced when I click on the **play/pause** button right after. If I click on the **next** button and then click on the **stop** button, I am taken to the next song when I click on the **next** button again. Conversely, when I click on the **previous** button and then on the **stop** button, I am taken to the ***next*** previous song when I click on the **previous** button again.

If I click on an individual song and then click on the **next** button, it resumes playing in sequence from wherever it left off from its previous click. If I had previously been taken to song number 2, I now would be taken to song number 3. Same with the **previous** button. It too resumes playing in sequence from wherever it left off from its previous click. If I had previously been taken to song number 5, I now would be taken to song number 4, etc.

As for the **search** functionality, the ***user*** can conduct a **text input** ***search*** by **trackId**, **songName**, **artist**, or song **duration**. The user can **reset** his/her **search** by clicking on the **reset** button to the right of the **search** input field. The **reset** button ***clears*** the **search** input field and ***resets*** the list of songs to its previous state. That includes any ***new songs*** that have been added locally by the user. The **added songs** are only lost on **re-load/refreshing** of the **page**.

Last but not least, was the issue of the ***look*** of the **Jukebox** ***buttons***. When I had **previous**, **stop**, **play/pause**, **shuffle**, and **next** buttons containing different types of icons and which all resided in one container, the buttons looked pretty much the same across browsers. There were a few little differences here and there that I was willing to overlook. The **submit** button did not pose a problem, because it was unto itself at the bottom of the page. However, when I removed the **shuffle** button from within the `buttons-div`, and added a **search** input with a **reset** button, things changed. Suddenly the differences between the buttons in the `buttons-div` became glaring on **mobile**. The **stop** button looked so much shorter than the rest of the buttons in the `buttons-div`. 

Because I had not set an ***explicit*** **width** or **height** to the **previous**, **stop**, **play/pause**, **next**, and **reset** buttons, as well as some other explicit styling (I previously didn't need to), when I made structural changes, those omissions revealed themselves.

The **previous**, **stop**, **play/pause**, and **next** buttons rendered very wide in **Safari** on **iOS**. The button **icons**, which were from various sources, were not centered on **mobile** on either **Android** or **iOS**. They were ***almost*** centered on **web**.

The **reset** button did not align with the **search** input on **web** or **mobile**, and it was not the same height either.

I fixed the **button** ***width*** problem on **iOS** by ***explicitly*** setting a **width** and **height** to the **buttons**. I was using **Google material icons** for my **stop** and **reset** buttons, and they rendered the best and most consistently. Using them as my base case, I removed the other icons which I had gotten from [toptal.com](toptal.com/designers/htmlarrows/symbols/) and replaced them with the corresponding ***Google*** **material icons**. I saw an immediate improvement. The buttons at least were starting to look more consistent across browsers. However, I was not done yet. I had to make sure that I got rid of the **user-agent styling** for the `button` **element** and replaced it with my own `custom CSS`. I did this by applying the same `custom CSS` to both the `button` **element** and the respective `ids` of the `buttons` for starters.

First I had to make sure that the **reset** button aligned with the **search** input. Originally I had placed them in a `div` and wasn't able to get the two elements to align properly. That way I could not tell whether the **reset** button was the same height as the **search** input. I finally decided to change the `div` **element** to a `fieldset` **element**, and do a `global reset` of `padding: 0` and `margin: 0`. I styled the `fieldset` with the following:

```
fieldset.search-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 0;
    border: none;
}
```

I styled the **reset** button, along with next, previous, play, and stop, with the following:

```
#next,
#prev,
#play,
#stop,
#reset {
    font-size: 2rem;
    height: 50px;
    max-width: 40px;
    width: 50%;
    border-radius: 5px;
    border: 1px solid white;
    color: #ffc600;
    background: none;
    margin: 0 3px 0;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    display: inline-block;
}
```

But then I added the following to the **reset** button separately:

```
#reset {
    vertical-align: top;
    margin-bottom: 0;
}
```

I didn't want to set the other buttons to `vertical-align: top` because I was setting them to `display: inline-block`. When you set a ***button*** to inline-block, it's not a good idea to ***set*** the `vertical-align` **property** on it. I set the `vertical-align` **property** on the **reset** button because it did not reside in the `buttons-div` with the other buttons. It was the only way I could make the **reset** button align horizontally with the **search** input. It didn't result in adverse side effects on either **web** or **mobile**. I also made sure that I set the `text-align` **property** to `center` to the two ***parents***, `fieldset` and `buttons-div`.

Last of all, as shown in the custom button styling above, I had to add custom styling to the border of the buttons. The **user agent styling** for the ***borders*** of `buttons` varies drastically across **browsers** and **mobile devices** (Android vs iOS). Once I set the border to a custom style, the border looked exactly the same everywhere.

I can't emphasize enough how important it is to do **cross-browser compatibility testing** to make sure that your app looks the same everywhere. It is not enough to do a virtual device check in a browser's **Developer Tools**. More often than not, everyhing seems just fine when I do a device check in **Chrome DevTools**, **Safari** or **Firefox Responsive Mode**. Then when I check on my ***actual*** **iPhone** or **Google Pixel2**, things look very different!
















