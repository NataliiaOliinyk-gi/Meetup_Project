const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 74,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 2, 14, 11),
        image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    },
];

document.addEventListener('DOMContentLoaded', function () {

    // Принудительная прокрутка в начало страницы при загрузке
    window.scrollTo(0, 0);


    //Функция для отрисовки мероприятий

    function displayToEventsInfo(arrayData) {

        // Инициализируем контейнер для мероприятий
        const listEventsInfo = document.getElementById('eventsInfo');
        listEventsInfo.innerHTML = '';

        arrayData.forEach(element => {

            // Карточка мероприятия
            const eventItem = document.createElement('div');
            eventItem.classList.add('event-info');

            // Создаем внутренние элементы карточки мероприятия

            // Картинка
            const eventImageBox = document.createElement('div');
            eventImageBox.classList.add('event-image-box');
            const eventImage = document.createElement('img');
            eventImage.src = element.image;
            eventImage.alt = element.title;
            eventImage.classList.add('event-image');
            eventImageBox.appendChild(eventImage);

            // Контейнер для описания мероприятия
            const eventDescriptions = document.createElement('div');
            eventDescriptions.classList.add('event-descriptions')

            // Информация о дате и времени мероприятия
            const eventDate = document.createElement('p');
            eventDate.classList.add('event-date');
            // получаем дату и время для вывода на экран
            const formattedDate = getInputAndSetDate(element.date);
            eventDate.textContent = formattedDate;

            // Информация о названии мероприятия
            const eventTitle = document.createElement('h5');
            eventTitle.classList.add('event-title-h5');
            eventTitle.textContent = element.title;

            // Информация о категории мероприятия
            const eventCategory = document.createElement('p');
            eventCategory.textContent = element.category;

            //Создаем дополнительный див для оформления информации о категории и если есть, дистанции
            const itemCategory = document.createElement('div');
            itemCategory.classList.add('item-category');
            itemCategory.appendChild(eventCategory);

            // Информация о типе мероприятия
            const eventType = document.createElement('div');

            // Информация о дистанции мероприятия
            const eventDistance = document.createElement('p');

            element.type ? element.type : '';
            if (element.type === 'online') {
                eventType.classList.add('event-online');
                const typeTitle = document.createElement('div');
                typeTitle.classList.add('title-p')
                typeTitle.textContent = 'Online Event';
                eventType.appendChild(typeTitle);
            } else if (element.type === 'offline') {
                eventDistance.textContent = `(${element.distance} km)`;
                // Добавляем инфо о расстоянии 
                itemCategory.appendChild(eventDistance);
            }

            // Информация о посещаемости мероприятия
            const eventAttendees = document.createElement('p');
            eventAttendees.classList.add('event-attendees');
            if (!element.attendees) {
                eventAttendees.classList.add('event-attendees-hidden');
            } else {
                eventAttendees.textContent = `${element.attendees} attendees`;
            }


            // Добавляем все элементы в 'div' eventDescriptions
            eventDescriptions.appendChild(eventDate);
            eventDescriptions.appendChild(eventTitle);
            eventDescriptions.appendChild(itemCategory);
            eventDescriptions.appendChild(eventType);
            eventDescriptions.appendChild(eventAttendees);

            // Добавляем элементы в карточку мероприятия
            eventItem.appendChild(eventImageBox);
            eventItem.appendChild(eventDescriptions);

            // Добавляем карточки в список 
            listEventsInfo.appendChild(eventItem);
        });


    };


    // Функция для вывода даты и времени мероприятия на экран
    function getInputAndSetDate(inputDate) {

        const date = new Date(inputDate);

        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        const dayOfWeek = days[date.getDay()]; // Например, "TUE"
        const month = months[date.getMonth()]; // Например, "MAR"
        const day = date.getDate(); // 19

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");

        // Конвертация у 12-часовой формат
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        // Получение таймзоны в сокращенном формате
        const timeZone = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

        const formattedDate = `${dayOfWeek}, ${month} ${day} · ${hours}:${minutes} ${ampm} ${timeZone}`;

        return formattedDate;
    }


    // Получаем элементы Select
    const selectType = document.getElementById('selectType');
    const selectDistance = document.getElementById('selectDistance');
    const selectCategory = document.getElementById('selectCategory');
    const selectDay = document.getElementById('selectDay');

    // для вывода на экран сообщения, что поиск ничего не нашел
    const displayInfoBox = document.getElementById('displayInfo');

    let type = 'any_type';
    let distance = 'any_distance';
    let category = 'any_category';
    let date = 'any_date';



    // Обработчик события для типа мероприятия
    selectType.addEventListener('change', function (event) {
        const selectedValue = event.target.value;

        if (selectedValue == 'any_type') {
            selectDistance.value = 'any_distance';
            distance = 'any_distance';
        };

        if (selectedValue == 'online') {
            selectDistance.disabled = true;
            selectDistance.value = 'any_distance';
            distance = 'any_distance';
        } else {
            selectDistance.disabled = false;
        }
        type = selectedValue;

        filterEvents();
    });

    // Обработчик события для расстояния
    selectDistance.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        distance = selectedValue;

        if (selectedValue == 'any_distance') {
            selectType.value = 'any_type';
            type = 'any_type';
        };
        filterEvents();
    });

    // Обработчик события для категории
    selectCategory.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        category = selectedValue;
        filterEvents();
    });

    // Обработчик события для даты
    selectDay.addEventListener('change', function (event) {
        const selectedValue = event.target.value;
        date = selectedValue;
        filterEvents();
    });


    function filterEvents() {

        // Фильтрация по типу мероприятия

        let typeEvents = [];

        if (distance != 'any_distance') {
            typeEvents = eventsStore.filter(element => {
                selectType.value = 'offline'
                return element.type == 'offline';
            });
        } else if (type == 'any_type') {
            typeEvents = eventsStore;
        } else {
            typeEvents = eventsStore.filter(element => {
                return element.type == `${type}`;
            });
        };

        // Фильтрация по дистанции мероприятия

        let distanceEvents = [];

        if (distance == 'any_distance' || type == 'online') {
            distanceEvents = typeEvents;
        } else {
            distanceEvents = typeEvents.filter(element => {
                return element.distance <= distance;
            });
        };

        // Фильтрация по категории мероприятия

        let categoryEvents = []

        if (category == 'any_category') {
            categoryEvents = distanceEvents;
        } else {
            categoryEvents = distanceEvents.filter(element => {
                return element.category == `${category}`;
            });

        };

        // Фильтрация по дате мероприятия

        let dateEvents = [];

        if (date == 'any_date') {
            dateEvents = categoryEvents;
        } else {
            dateEvents = categoryEvents.filter(element => {
                return element.date.getTime() == Date.parse(date);
            });
        };

        // Если поиск ничего не нашел
        if (dateEvents.length === 0) {
            displayInfo();
        } else {
            displayInfoBox.classList.add('display-info--hidden');
        }

        displayToEventsInfo(dateEvents);
    };



    // Функция для вывода на экран сообщения, что поиск ничего не нашел

    function displayInfo() {
        displayInfoBox.innerHTML = '';

        const message = document.createElement('h3');
        message.textContent = 'No events matching the specified criteria were found.';
        displayInfoBox.appendChild(message);

        // Создаем кнопку для сброса фильтров
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset criteria';
        resetButton.classList.add('reset-button');
        displayInfoBox.appendChild(resetButton);

        resetButton.addEventListener('click', () => {

            selectType.value = 'any_type';
            selectDistance.value = 'any_distance';
            selectCategory.value = 'any_category';
            selectDay.value = 'any_date';

            type = 'any_type';
            distance = 'any_distance';
            category = 'any_category';
            date = 'any_date';

            displayInfoBox.classList.add('display-info--hidden');
            displayToEventsInfo(eventsStore);
        });

        displayInfoBox.classList.remove('display-info--hidden');
    };

    //Обработчик события закрытия карты
    document.getElementById('mapClose').addEventListener('click', () => {
        document.getElementById('searchMap').style.display = 'none';
    });


    // Выводим на экран мероприятия
    displayToEventsInfo(eventsStore);







});

