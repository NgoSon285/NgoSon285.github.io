let todoList =[];
let display = $('<ul class="styleUl"></ul>').appendTo('body');
$('#new-item').on('click', addItem);
function render()
{
    dispaly.empty();
    let itemList=todoList.map(function(item){
        return $(`<li>${item} <i class="fas fa-trash-alt>"onclick ="removeItem(this)"</i>`).appendTo(dispaly);
    })
}
