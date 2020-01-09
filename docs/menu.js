document.write(`

<header id="page-header">
  <ul id="language-selection">
    <li id="print"> 🖨 </li>
    <li> | </li>
    <li><a href="index.html">English</a></li>
    <li><a href="es.html">Español</a></li>
    <li><a href="fr.html">Français</a></li>
    <li><a href="it.html">Italiano</a></li>
    <li><a href="de.html">Deutsche</a></li>
    <li><a href="nl.html">Nederlands</a></li>
    <li><a href="zh.html">中文</a></li>
    <li><a href="ja.html">日本語</a></li>
    <li><a href="ko.html">한국어</a></li>
    <li><a href="id.html">Indonesia</a></li>
    <li><a href="pt.html">Português</a></li>
    <li> | </li>
    <li><a href="https://p5js.org/reference/">p5js Reference</a></li>
  </ul>
</header>

<style>
  #print:hover{cursor:pointer;}
</style>

`)


document.getElementById('print').addEventListener('click', function(){
  // print();

  let browser = navigator.userAgent.split(')').reverse()[0].match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0]

  console.log(browser)
  if(browser != "Chrome"){
    alert('The p5.js cheatsheet prints with best results from Chrome! \n You might consider printing from the PDF available on github for better results! \n https://github.com/bmoren/p5js-cheat-sheet')
  }
  print();
})
