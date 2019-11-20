document.write(`

<header id="page-header">
  <ul id="language-selection">
    <li><a href="index.html">English</a></li>
    <li><a href="fr.html">Français</a></li>
    <li><a href="de.html">Deutsche</a></li>
    <li><a href="ja.html">日本語</a></li>
    <li><a href="nl.html">Nederlands</a></li>
    <li> | </li>
    <li><a href="https://p5js.org/reference/">p5js Reference</a></li>
    <li> | </li>
    <li id="print"> 🖨 </li>

  </ul>
</header>

<style>
  #print:hover{cursor:pointer;}
</style>

`)


document.getElementById('print').addEventListener('click', function(){
  print()
})
