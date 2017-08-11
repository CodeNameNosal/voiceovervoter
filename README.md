# README

<h1>Voiceover Voter</h1>
<h2>A fun application for audiobook fans and promotional tool for voiceover actors.</h2>

<h5>Developed by</h5>
<a href="https://github.com/CodeNameNosal">Michelle Nosal</a>

<h5>See it in action:</h5>
<a href="https://voiceovervoter.herokuapp.com">Hosted at Heroku</a>

<h5>Introduction</h5>
<p>As an avid audiobook listener, I wanted to build something that would do more than just highlight an interest of mine. I wanted to give other audiobook fans a fun and interactive tool that hasn't been seen before, while also creating an opportunity for real impact on the industry by unobtrusive promotion of actual voiceover actors.</p>

<h5>Features</h5>
<ul>
<li>Users can create and update their own personal account.</li>
<li>Users can sign in/out of their account</li>
<li>Users can add a book to be displayed upon the root index page.</li>
<li>Books will display it's cover upon creation</li>
<li>Users can edit and delete their books from the main page.</li>
<li>Users can edit and delete specific books from the page for that book.</li>
<li>Users can search for books by either title or author.</li>
<li>Users can generate randomized voiceover samples.</li>
<li>Users can save the voiceover samples with commentary to their books with a live update</li>
<li>Users can delete a book's samples with a live update</li>
</ul>

<h5>API's</h5>
<ul>
<a href="https://voicebunny.com/api/">VoiceBunny</a>
<p>VoiceBunny maintains a database of voiceover actors, with including an actor's booking url and sample soundclips.</p>
<a href="https://www.goodreads.com/api">Goodreads</a>
<p>Goodreads maintains a database of books, which includes book cover url's.</p>
</ul>

<h5>Technologies</h5>
<ul>
<li>Backend: Rails 5.1.2</li>
<li>Frontend: React.js and Embedded Ruby</li>
<li>User Authentication: Devise</li>
<li>Styling: Foundation</li>
<li>Database: PostgreSQL</li>
<li>Gems to assist with API's: `faraday` and `faraday_middleware` for VoiceBunny, `goodreads` for Goodreads</li>
<li>Secrets management: `dotenv`</li>
</ul>

<h5>Running Voiceover Voter locally</h5>
<ul>
<li>You will need developer keys from both VoiceBunny (for narrator information) and Goodreads (for book covers)</li>
<li>Install Ruby.2.3.3</li>
<li>Download or clone `https://github.com/CodeNameNosal/voiceovervoter`</li>
<li>Navigate to the root directory `voiceovervoter`</li>
<li>Run `bundle install && npm install && rake db:setup`</li>
<li>In separate terminals, run `rails server` and `npm start`</li>
<li>Visit <a href='http://localhost:3000/'>http://localhost:3000/</a> from your browser</li>
<li>Tests may be run with `rake` and `npm test`. You must got to <a href='http://localhost:9876/'>http://localhost:9876/</a> for Javascript testing</li>
</ul>
