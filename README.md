# [a p5js cheat sheet for beginners!](https://bmoren.github.io/p5js-cheat-sheet/)

This is a [web based cheat sheet](https://bmoren.github.io/p5js-cheat-sheet/) to help folks get started with [p5.js](http://p5js.org)! The cheat sheet is fully formatted for printing on a single sheet of paper for easy reference, classroom, and workshop usage. There are several translations available:

+ [English](https://bmoren.github.io/p5js-cheat-sheet/)
  + Translation by: [Ben Moren](https://github.com/bmoren)
+ [French](https://bmoren.github.io/p5js-cheat-sheet/fr.html)
  + Translation by: [@rich-gg](https://github.com/rich-gg)
+ [Japanese](https://bmoren.github.io/p5js-cheat-sheet/ja.html)
  + Translation by: [Takawo Shunsuke](https://twitter.com/takawo)
+ [German](https://bmoren.github.io/p5js-cheat-sheet/de.html)
   + Translation by: [Philipp Lehmann](https://github.com/philipp-lehmann)
+ [Nederlands](https://bmoren.github.io/p5js-cheat-sheet/nl.html)
  + Translation by: [Vincent Sijben](https://github.com/vincentsijben)
+ [Korean](https://bmoren.github.io/p5js-cheat-sheet/ko.html)
  + Translation by: [Yi donghoon](https://github.com/icq4ever)
+ [Italian](https://bmoren.github.io/p5js-cheat-sheet/it.html)
  + Translation by: [Antonio Belluscio](https://codesthesia.net)
+ [Español](https://bmoren.github.io/p5js-cheat-sheet/es.html)
  + Translation by: [Andy Valdés Valdés](https://andyvaldesvaldes.com/)
+ [Indonesia](https://bmoren.github.io/p5js-cheat-sheet/id.html)
  + Translation by: [Zul Hilmi](https://github.com/hilmizul)
+ [Portuguese](https://bmoren.github.io/p5js-cheat-sheet/pt.html)
  + Translation by: [Felipe Turcheti](https://github.com/fturcheti)

There are also pre-compiled PDF's available within this repository for each translation for folks who would like to get off-line ASAP, or who would like an immediate copy of a cheat sheet.

# Making a new translation!

I'm looking for help translating this cheat sheet into as many languages as possible! If you can assist, please reach out via in the issues tab or via the [p5.js forum post](https://discourse.processing.org/t/a-p5-js-cheat-sheet-for-beginners/8236/7)!

### If you're not comfortable with HTML & Git:
No worries! – Please respond to (or open) the associated language issue with the translations for each cheatsheet section and a contributor will implement and confirm them with you before pushing them live!

### If you are comfortable with HTML & making git pull requests:
+ clone the repository
+ navigate to the `docs` folder
+ copy `index.html` & rename to `langcode.html` (where langcode is the [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language you are translating.
+ make all translation changes inside of the  `<code class="language-javaScript"></code>` tags
+ make all translation changes to the `terms` JSON object at the bottom of the HTML page.
+ add your name as the translator + a link to yourself in the `<footer>` section
+ make a pull request against the repository!

### bonus tasks (if you have time or are able)
#### update the readme:
+ add a link to the new translation in the readme.md
+ add your name as the translator + link to the readme.md

#### update the menu:
+ in the `docs` folder, find the `menu.js` file and add a link to the translation page

#### add a pdf:
+ export a pdf and add to the root (print to PDF in *^chrome*), please name it `p5cheatsheet-▵LC.pdf`
+ verify that it will all fit on one page, if there is overflow, some minor custom CSS may need to be implemented.

*^it's critical that it's in chrome, for best rendering and color accuracy*
*▵ the LC here refers to Language Code, please use the appropriate [ISO 639-1 code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for the language you are translating*

---

[Creative Commons BY NC SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

With thanks to past cheat sheets like [Ryo Sakai's p5.js sheet](https://twitter.com/ryodejaneiro/status/827314983948210176) !

Special thanks to [Kenneth Lim](https://github.com/limzykenneth) for initializing the HTML version which will make this cheat sheet much easier to translate.
