var newFragment = $('<li>');
var textnode =newFragment.before('hello');
var textnode1=newFragment.prepend('<p>hello</p>')
$('ul').append(textnode);
newFragment.prepend('<h1>h1</h1>')
newFragment.append('h2')
newFragment.before('<li>cá</li>')
newFragment.after('<li>chim</li>')