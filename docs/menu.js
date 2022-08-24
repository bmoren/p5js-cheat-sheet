// The menu's option arrtibute should be the ISO code associated with the language & HTML page
document.write(`
<nav id="page-header">
  <ul id="language-selection">
    <li id="print"> 🖨 </li>
    <li> | </li>
    <select id="dropdownmenu" onchange="window.location = this.value + '.html' ">
    <option value="index"> English </option>
    <option value="ca"> Català </option>
    <option value="es"> Español </option>
    <option value="fr"> Français </option>
    <option value="it"> Italiano </option>
    <option value="de"> Deutsch </option>
    <option value="nl"> Nederlands </option>
    <option value="zh"> 中文（简体） </option>
    <option value="zh-tw"> 中文（繁體） </option>
    <option value="ja"> 日本語 </option>
    <option value="ko"> 한국어 </option>
    <option value="id"> Indonesia </option>
    <option value="pt"> Português </option>
    </select>
    <li> | </li>
    <li><a href="https://p5js.org/reference/">p5js Reference</a></li>
  </ul>
</nav>

<style>
  #print:hover{cursor:pointer;}
</style>

`)

//select/toggle the correct language from the dropdown after making a selection (there might be a better way to do this?)
//If path points to a directory, user agent will open the "index.html"
//file in it, but will not append it to the window's path name. So treat
//"" as "index.html"
var path = window.location.pathname.split("/").pop()
if(path === ""){
  path = "index.html";
}
var lang = path.split(".")[0]
// console.log( lang );
document.querySelector(`option[value=${lang}]`).selected = true


//warning for printing to use chrome
document.getElementById('print').addEventListener('click', function(){

  let browser = navigator.userAgent.split(')').reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0]

  console.log(browser)
  if(browser != "Chrome"){
    alert('The p5.js cheatsheet prints with best results from Chrome! \n You might consider printing from the PDF available on github for better results! \n https://github.com/bmoren/p5js-cheat-sheet')
  }
  print();
})
