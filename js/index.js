function drag(event){
  event.dataTransfer.setData('Text',e.target.id);
}
function drop(event){
  var data=event.dataTransfer.getDate('Text');
  event.target.appendChild(document.getElementById(data));
  event.preventDefault;
}
function allowDrag(event){
  event.preventDefault;
}
