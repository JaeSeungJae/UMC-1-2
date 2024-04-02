const inputElement = document.getElementById('inputValue');

function test() {
    const value = inputElement.value;
    if (value) {
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task'); // 스타일링을 위한 클래스 추가

        // p 태그를 생성하여 텍스트 라벨로 사용합니다.
        let textLabel = document.createElement('p');
        textLabel.textContent = value;
        taskContainer.appendChild(textLabel);

        let newButton = document.createElement('button');
        newButton.textContent = '완료';
        newButton.addEventListener('click', function() {
            test2(textLabel.textContent);
            taskContainer.remove();
        });
        taskContainer.appendChild(newButton);
        let buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(taskContainer);
        inputElement.value = '';
    }
}

function test2(value) {
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task'); // 스타일링을 위한 클래스 추가

    let textLabel = document.createElement('p');
    textLabel.textContent = value;
    taskContainer.appendChild(textLabel);

    let newButton = document.createElement('button');
    newButton.textContent = '삭제';
    newButton.addEventListener('click', function() {
        taskContainer.remove();
    });
    taskContainer.appendChild(newButton);
    let buttonContainer = document.getElementById('buttonContainer2');
    buttonContainer.appendChild(taskContainer);
}