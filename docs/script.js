const dragAndDrop = () => {
    const card = document.querySelector('.js_card');
    const cells = document.querySelectorAll('.js_cell');

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');//this это наша двигающаяся карточка
        }, 0);
    };

    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (e) {
        e.preventDefault();
    };

    const dragEnter = function (e) {
        e.preventDefault();
        this.classList.add('hovered'); //this это текущая ячейка из 4
    };

    const dragLeave = function () {
        this.classList.remove('hovered');
    };

    const dragDrop = function () {
        this.append(card);
        this.classList.remove('hovered');
    };

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', dragDrop);
    });

    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
};

dragAndDrop();