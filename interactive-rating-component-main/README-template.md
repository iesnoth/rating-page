# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
5/6/22
  I started by reading through all the materials, then rereading them because I'm a serial skimmer.
  I then went through the html file, assigning ids and classes were I thought it would help in the css. I made the rating numbers and "submit" links all <buttons> initially.
  I put all the thank-you text into its own html page so it wouldn't show up on the same page as the rating numbers.

5/7/22
  I worked on matching the colors in the style guide to the elements (I'm p sure a color is missing), and figuring out how to use the svg files. I'm sure there's an easier way to link the svg, but after failing a few times, I ended up copying and pasting it all into the HTML file, which worked just as well.
  I googled a lot today, including the aforementioned svg questions, how to make circles, and how to use google fonts in CSS.
  Got stuck on how to center the submit icon in the #text. Also, it's very hard for me to type 'submit' in one go apparently.

5/12/22
  Finally figured out the submit button by messing with margins and changing the size of the #text div. Not sure if it fixed it for mobile, but it looks good on desktop, so yes!
  I've decided to figure out all the css issues before moving on to programming the buttons.
  I copy-pasted some base code on a different function into the js, to see if I can reverse engineer/coopt it to work with the buttons.
  I need to figure out how to store the integer data from when the button is pressed to carry over to the thank you html page. T.T
  I don't know what I'm doing.

5/15/22
  Gave all the buttons ids to hopefully fix the sizing problem (5 was the right size, but they were being squished as it went to one). Hopefully this will also give me more control on each individual button.
  Finished the placement of the buttons using display:flex and justify-content. It still looks a bit wider than the original, but the text is all the right place, so I don't know what else to do about that.
  I fixed all the numbers so they light up when hovered/clicked.
  I realized the #text background had a gradient, so I fixed that up. P sure there's a color missing from the style guide.

### Built with

- VSCode


### What I learned

5/7 I figured out on my own how to change the links' colors based on whether they'd been visited or not. <3

5/13 I learned a little about position and how to experiment with css in the browser.

5/15 Unlike with links, you can change the color of clicked buttons with the :focus state.
Started to learn how to make gradients, could learn more.
Started to learn about SVGs


To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

https://www.youtube.com/watch?v=Clv_YhMWoFk Helped me learn how to scale SVGs

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
