
        function addTask() {
            const task = document.getElementById('task');
            const taskText = task.value.trim();
            if (taskText !== '') {
                const taskList = document.getElementById('taskList');
                const listItem = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        listItem.classList.add('completed');
                    } else {
                        listItem.classList.remove('completed');
                    }
                });

                const span = document.createElement('span');
                span.textContent = taskText;

                listItem.appendChild(checkbox);
                listItem.appendChild(span);
                taskList.appendChild(listItem);

                task.value = '';
            }
        }
    