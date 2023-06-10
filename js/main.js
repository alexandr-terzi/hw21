var add__input = document.querySelector('.add__input');
var add__btn = document.querySelector('.add__btn');
var items__cont = document.querySelector('.items__cont');

var localSt = JSON.parse(localStorage.getItem('localData')) || [];

function render() {
    items__cont.innerHTML = '';

    for (let i = 0; i < localSt.length; i++) {
        var pos = i;

        var item = document.createElement('div');
        item.classList.add('item');

        var item__text = document.createElement('div');
        item__text.classList.add('item__text');
        var message = document.createTextNode(localSt[i]);
        item__text.appendChild(message);

        var buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList.add('item__buttons__wrapper');

        var button1 = document.createElement('button');
        button1.classList.add('item__editBtn');
        var button1Name = document.createTextNode('edit');
        button1.appendChild(button1Name);
        button1.setAttribute('onclick', 'editItem(' + pos + ')');
        buttonsWrapper.appendChild(button1);

        var button2 = document.createElement('button');
        button2.classList.add('item__delBtn');
        var button2Name = document.createTextNode('del');
        button2.appendChild(button2Name);
        button2.setAttribute('onclick', 'delItem(' + pos + ')');
        buttonsWrapper.appendChild(button2);

        item.appendChild(item__text);
        item.appendChild(buttonsWrapper);
        items__cont.appendChild(item);
    }
}

render();

function addItem() {
    var item = add__input.value;
    localSt.push(item);
    add__input.value = '';
    render();
    saveInLocalSt();
}

add__btn.onclick = addItem;

function delItem(pos) {
    localSt.splice(pos, 1);
    render();
    saveInLocalSt();
}

function editItem(pos) {
    var newText = prompt('Enter new text for the item', localSt[pos]);
    if (newText !== null) {
        localSt[pos] = newText;
        render();
        saveInLocalSt();
    }
}

function saveInLocalSt() {
    localStorage.setItem('localData', JSON.stringify(localSt));
}
