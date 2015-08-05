# drag_image
## 检测一下自己学习的html5的拖拽效果
>html的拖拽效果原理：
1. 在拖拽源设置draggable为true
2. 设置ondragstart事件
3. 在被拖放目标上设置ondrop事件和ondragover事件  
  
>js部分代码  
  

    function drag(event){
      event.dataTransfer.setData('Text',event.target.id)//此处需在拖放源上设置id
    }
    function drop(event){
    var data=event.dataTransfer.getData('Text');
    event.target.appendChild(document.getElementById(data));
    event.preventDefault;//此处应该阻止浏览器的默认事件
    }
    function allowDrag(event){
    event.preventDefault;
    }

