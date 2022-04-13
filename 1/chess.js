function drawBoard() {
    let board = document.querySelector('.board')
    let block
    let flag = true
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (j == 0) flag = !flag;
            block = document.createElement('div')
            if (flag) {
                block.classList = 'block black'
            } else {
                block.classList = 'block white'
            }
            board.appendChild(block);
            flag = !flag;
        }
    }
}

drawBoard()