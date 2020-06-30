const todolist = [
    'HP',
    'DELL',
    'ASUS'
];
var newitem=document.getElementById('new-item');
let ul =document.createElement('ul');
ul.classList.add('styleUl');
let dispaly = document.getElementsByTagName('body')[0].appendChild(ul);
newitem.addEventListener('click',additem);
function additem()
{
    let input =document.getElementById('text-value')
    let textvalue=input.value;
    if(textvalue!='')
    {
        todolist.push(textvalue);
    }
    else
    {
        alert('Chưa có tên công việc')
    }
    render(todolist);
    input.value='';
}
function render(list)
{
    let itemList =list.map(function(item){
        return `<li>
                    ${item} <i class="fas fa-trash-alt" >onclick ="removeItem(this)" </i> <i class="fas fa-pencil-alt" onclick = "editItem(this)"></i>
                </li>`
    }).join('');
    dispaly.innerHTML=itemList;
    document.getElementById('new-item')
}
render(todolist);


function removeItem(obj)
{
    for (let i = 0; i < todolist.length; i++) {
        if (todolist[i]== obj.parentNode.innerText)
        {
            todolist.splice(i,1);
        }       
    }
    render(todolist);
}
function editItem(obj)
{
    let editText=document.getElementById('editItem');
    for (let i = 0; i < todolist.length; i++) 
    {
        if(todolist[i]== obj.parentNode.innerText)
        {
            editTex.value=todolist[i];
            editTex.disabled=false;
            index=i;
        }
        
    }
    document.getElementById('button-save').addEventListener('click',saveItemhasedit);
}
function saveItemhasedit()
{
    let editText=document.getElementById('editItem');
    for (let i = 0; i < todolist.length; i++) 
    {
        if(index==i)
        {
            editTex.value=todolist[i];
        }
        
    }
}