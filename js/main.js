const eventsMain = [
    {
        title: "Day Trading Idea and Strategy",
        description: "Business",
        date: new Date(2024, 2, 18, 19, 0), // MON, MAR 18 - 7:00 PM PDT
        image: "../assets/img/events/event_1.png",
        type: "offline",
        attendees: 1,
        category: "Business",
        distance: 5
    },
    {
        title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
        description: "Business",
        date: new Date(2024, 2, 19, 17, 0), // TUE, MAR 19 - 5:00 PM PDT
        image: "../assets/img/events/event_2.png",
        type: "offline",
        attendees: 41,
        category: "Business",
        distance: 25
    },
    {
        title: "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
        description: "Technology",
        date: new Date(2024, 2, 13, 18, 0), // WED, MAR 13 - 6:00 PM PDT
        image: "../assets/img/events/event_3.png",
        type: "online",
        attendees: 40,
        category: "Technology",
        distance: 0
    },
    {
        title: "INFORMS San Francisco Chapter In-Person Event",
        description: "Health and Wellbeing",
        date: new Date(2024, 2, 28, 17, 0), // THU, MAR 28 - 5:00 PM PDT
        image: "../assets/img/events/event_4.png",
        type: "offline",
        attendees: 41,
        category: "Health and Wellbeing",
        distance: 50
    },
    {
        title: "AI Wednesdays - Meet and Greet!",
        description: "Technology",
        date: new Date(2024, 2, 13, 18, 30), // WED, MAR 13 - 6:30 PM PDT
        image: "../assets/img/events/event_5.png",
        type: "offline",
        attendees: 29,
        category: "Technology",
        distance: 5
    },
    {
        title: "ROS By-The-Bay March 2024",
        description: "Social Activities",
        date: new Date(2024, 2, 21, 18, 0), // THU, MAR 21 - 6:00 PM PDT
        image: "../assets/img/events/event_6.png",
        type: "online",
        attendees: 51,
        category: "Social Activities",
        distance: 0
    },
    {
        title: "Free Christian Singles' Dinner",
        description: "Hobbies and Passions",
        date: new Date(2024, 2, 29, 18, 0), // FRI, MAR 29 - 6:00 PM PDT
        image: "../assets/img/events/event_7.png",
        type: "offline",
        attendees: 11,
        category: "Hobbies and Passions",
        distance: 10
    },
    {
        title: "In-person: Deep Dive into RAG Architectures (Food served)",
        description: "Hobbies and Passions",
        date: new Date(2024, 2, 14, 17, 0), // THU, MAR 14 - 5:00 PM PDT
        image: "../assets/img/events/event_8.png",
        type: "offline",
        attendees: 16,
        category: "Hobbies and Passions",
        distance: 50
    }
];

const onlineEvents = [
    {
        title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
        description: "Business",
        date: new Date(2024, 2, 14, 18, 0), // THU, MAR 14 - 6:00 PM PDT
        image: "../assets/img/events/event_1_1.png",
        type: "online",
        attendees: 3,
        category: "Business",
        distance: 25
    },
    {
        title: "Vision Pro Developers Online Meetup",
        description: "Technology",
        date: new Date(2024, 2, 13, 19, 0), // WED, MAR 13 - 7:00 PM PDT
        image: "../assets/img/events/event_1_2.png",
        type: "online",
        attendees: 51,
        category: "Technology",
        distance: 0
    },
    {
        title: "Significant Musical Moments",
        description: "Hobbies and Passions",
        date: new Date(2024, 2, 13, 18, 0), // WED, MAR 13 - 6:00 PM PDT
        image: "../assets/img/events/event_1_3.png",
        type: "online",
        attendees: 16,
        category: "Hobbies and Passions",
        distance: 10
    },
    {
        title: "FREE Webinar: Introduction to Power BI",
        description: "Technology",
        date: new Date(2024, 2, 14, 17, 30), // THU, MAR 14 - 5:30 PM PDT
        image: "../assets/img/events/event_1_4.png",
        type: "online",
        attendees: 33,
        category: "Technology",
        distance: 0
    }
];



document.addEventListener('DOMContentLoaded', function () {

    // Принудительная прокрутка в начало страницы при загрузке
    window.scrollTo(0, 0);

    function displayToEventsInfoMain(arrayData, id) {

        // Инициализируем контейнер для мероприятий
        const listEventsInfoNear = document.getElementById(id);
        listEventsInfoNear.innerHTML = '';

        arrayData.forEach(element => {

            // Карточка мероприятия
            const eventItem = document.createElement('div');
            // Класс для стилизации карточки мероприятия
            eventItem.classList.add('event-info-main');

            // Создаем внутренние элементы карточки мероприятия

            // Картинка
            const eventImage = document.createElement('img');
            eventImage.src = element.image;
            eventImage.alt = element.title;
            eventImage.classList.add('event-image-main');

            // Контейнер для описания мероприятия
            const eventDescriptions = document.createElement('div');
            eventDescriptions.classList.add('event-descriptions-main')

            // Информация о названии мероприятия
            const eventTitle = document.createElement('h3');
            eventTitle.textContent = element.title;

            // Информация о дате и времени мероприятия
            const itemDate = document.createElement('div');
            itemDate.classList.add('item-date-main');
            const eventDate = document.createElement('p');
            // получаем дату и время для вывода на экран
            const formattedDate = getInputAndSetDate(element.date);
            eventDate.textContent = formattedDate;
            itemDate.appendChild(eventDate);

            // Информация о категории мероприятия и если есть, дистанции
            const itemCategory = document.createElement('div');
            itemCategory.classList.add('item-category-main');
            const eventCategory = document.createElement('p');
            eventCategory.textContent = element.category;
            itemCategory.appendChild(eventCategory);

            // Информация о дистанции мероприятия
            const eventDistance = document.createElement('p');
            // eventDistance.textContent = `(${element.distance} km)`;

            // Информация о типе мероприятия
            const eventType = document.createElement('div');
            element.type ? element.type : '';
            if (element.type === 'online') {
                eventType.classList.add('event-online-main');
                const typeTitle = document.createElement('div');
                typeTitle.classList.add('type-title')
                typeTitle.textContent = 'Online Event';
                eventType.appendChild(typeTitle);
            } else if (element.type === 'offline') {
                eventDistance.textContent = `(${element.distance} km)`;
                // Добавляем инфо о расстоянии 
                itemCategory.appendChild(eventDistance);
            }

            // Информация о посещаемости мероприятия
            const eventAttendees = document.createElement('p');
            eventAttendees.classList.add('event-attendees-main');
            if (!element.attendees) {
                eventAttendees.classList.add('event-attendees-hidden');
            } else {
                // Создаем текстовый узел для посещаемости
                const attendeesCount = document.createTextNode(`${element.attendees} `);

                // Создаем <span> для смены текста
                const attendeesText = document.createElement('span');
                attendeesText.classList.add('attendees-text');
                attendeesText.textContent = ' going'; // Значение по умолчанию

                // Добавляем содержимое в 'p'
                eventAttendees.appendChild(attendeesCount);
                eventAttendees.appendChild(attendeesText);
            }

            // Информация о стоимости мероприятия
            const eventPay = document.createElement('p');
            eventPay.classList.add('event-pay');
            if (!element.pay) {
                eventPay.textContent = 'Free';
            } else {
                eventPay.textContent = `${element.pay} Euro`;
            }

            // Добавляем информацию о посещаемости и стоимости в контейнер
            const itemOther = document.createElement('div');
            itemOther.classList.add('item-other-main');
            itemOther.appendChild(eventAttendees);
            itemOther.appendChild(eventPay);

            // Добавляем все элементы в 'div'eventDescriptions
            eventDescriptions.appendChild(eventTitle);
            eventDescriptions.appendChild(itemCategory);
            eventDescriptions.appendChild(itemDate);
            eventDescriptions.appendChild(itemOther);
            eventDescriptions.appendChild(eventType);


            // Добавляем элементы в карточку мероприятия
            eventItem.appendChild(eventImage);
            eventItem.appendChild(eventDescriptions);

            // Добавляем карточки в список 
            listEventsInfoNear.appendChild(eventItem);
        });


    };

    // Функция для обновления текста в <span>
    function updateAttendeesText() {
        document.querySelectorAll(".attendees-text").forEach(span => {
            span.textContent = window.innerWidth < 420 ? 'attendees' : 'going';
        });
    }

    // Функция для вывода даты и времени задачи на экран
    function getInputAndSetDate(inputDate) {

        const date = new Date(inputDate);

        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        const dayOfWeek = days[date.getDay()]; // например, "TUE"
        const month = months[date.getMonth()]; // например, "MAR"
        const day = date.getDate(); // 19
        const year = date.getFullYear(); // 2024

        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");

        // Конвертация у 12-часовой формат
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Перетворення 0 -> 12

        // Получение таймзоны в сокращенном формате
        const timeZone = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

        const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year} · ${hours}:${minutes} ${ampm} ${timeZone}`;

        return formattedDate;
    }


    displayToEventsInfoMain(eventsMain, 'eventsNear');
    displayToEventsInfoMain(onlineEvents, 'eventsOnline');

    // Визываем функцию для смены текста о посещении при изменении экрана после отрисовки
    updateAttendeesText();

    // Добавляем обработчик изменения размера экрана
    window.addEventListener("resize", updateAttendeesText);




});




