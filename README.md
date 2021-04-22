<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
  <h3 align="center">UBC Health & Wellbeing Revamp Assignment</h3>

<!-- USAGE EXAMPLES -->
## Overview

I was tasked to revamp the "Talk to a health professional" and "Health topics" sections of the UBC health and Wellbeing website(https://students.ubc.ca/health)

### Requirement 1: Making a card layout for the "Talk to a health professional" section
<ul>
  <li>Bootstrap framework</li>
  <li>I decided to utilize one of Bootstrap's main features which was their grid system</li>
  <br>
  <p>Bootstrap's built in grid system is one of their key features and it's fairly simple to implement especially when designing a card layout. 
  What makes it so great and easy is that it is already built with flexbox and has all of the responsive features.
  This allowed me to create a 3x3 grid system to incorporate the layout where I was able to add in the card feature as well.
  Since it's built on flexbox already, the responsiveness is there when you adjust the window size. Therefore, the grid and card layout will stack on top of each other accordingly.</p>
</ul>

### Requirement 2: Replace the list items with content from Medical Daily’s RSS feed using JavaScript/PHP

<ul>
  <li>Parsing RSS feed with JavaScript</li>
  <br>
  <p>I decided to use JavaScript to parse the RSS feed since I was more famililar with the language and syntax compared to PHP. While trying to write a script to parse the RSS data,
I ran into the same problem multiple times. After doing some research, it was brought to my attention that it is a well known problem regarding CORS security when trying to retrieve data from an RSS feed. 
I wasn't sure if that was the case for me or if I was doing something wrong. However, after doing some more digging around on Stack Overflow, I managed to find a workaround that produced the results that I needed.
This alternative solution involved using another third party API that converts the RSS feed into JSON data. That was when I was able to parse the information that I needed to replace and populate the Health topics list.

<br>
<p>The second problem that I faced was populating the data that I needed into a list format. I am not sure if my solution is ideal, but I managed to produce the results I was looking for.
In the JavaScript file, you will see on the bottom inside a for loop that I mainly used the JavaScript DOM to produce the grid system and list format. When the RSS data in JSON format is parsed and stored into an array,
I can grab the data that I needed (title, content) while using the DOM to render out the list with populated data.
<br>
<br>
One thing I did change in this section was to make the width of the list bigger to fill up some unused white space compared the original design. I decided to make this change because I assumed that I would be working with larger pieces of content that was coming from the RSS feed. I wanted to allocate the space accordingly.
<br>
<br>
This solution from my point of view didn't seem ideal. I'm assuming there is an easier way but this was just my thought process and approach to the problem.
</ul>


## Recommendations

<p>I would definitely incorporate a card layout with some of the sections of the health page. After scrolling through the whole page, I found it difficult and overwhelming at times looking for certain things because each section looks very similar.

</p>

## Challenges

<ul>
  <li>Debugging the RSS feed parsing</li>
  <li>Populating RSS data into HTML that is rendered through JavaScript DOM</li>
</ul>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=flat-square
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=flat-square
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=flat-square
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=flat-square
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=flat-square
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
[product-screenshot]: images/screenshot.png
