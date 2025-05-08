export const users = [
    {
        fullname: 'Maximilian Müller',
        name: 'Maximilian',
        lastname: 'Müller',
        email: 'max.mueller@example.com',
        avatar: 'assets/avatars/Avatar1.svg',
        status: true,
    },
    {
        fullname: 'Anna Schmidt',
        name: 'Anna',
        lastname: 'Schmidt',
        email: 'anna.schmidt@example.com',
        avatar: 'assets/avatars/Avatar2.svg',
        status: true,
    },
    {
        fullname: 'Lukas Fischer',
        name: 'Lukas',
        lastname: 'Fischer',
        email: 'lukas.fischer@example.com',
        avatar: 'assets/avatars/Avatar3.svg',
        status: false,
    },
    {
        fullname: 'Sophia Wagner',
        name: 'Sophia',
        lastname: 'Wagner',
        email: 'sophia.wagner@example.com',
        avatar: 'assets/avatars/Avatar4.svg',
        status: true,
    },
    {
        fullname: 'Felix Becker',
        name: 'Felix',
        lastname: 'Becker',
        email: 'felix.becker@example.com',
        avatar: 'assets/avatars/Avatar5.svg',
        status: false,
    },
    {
        fullname: 'Steffen Hoffmann',
        name: 'Steffen',
        lastname: 'Hoffmann',
        email: 'steffen.hoffmann@example.com',
        avatar: 'assets/avatars/Avatar6.svg',
        status: true,
    }
];

export const messages = [
    // Felix to Steffen
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'NsJ0o0lAuQVfQ7r28lRr',
        channelId: '',
        text: 'Hey Steffen, hast du die neuen Zahlen für das Projekt?',
        date: '2025-05-06',
        time: 1000,
        reactions: [
            { emoji: '👍', counter: 2 }
        ]
    },
    {
        senderId: 'NsJ0o0lAuQVfQ7r28lRr',
        receiverId: '74izbWVB9XFaPrkOl2IW',
        channelId: '',
        text: 'Ja, ich schicke sie dir gleich. Brauchst du noch etwas?',
        date: '2025-05-06',
        time: 1015,
        reactions: [
            { emoji: '✅', counter: 1 }
        ]
    },
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'NsJ0o0lAuQVfQ7r28lRr',
        channelId: '',
        text: 'Das wäre super, danke dir!',
        date: '2025-05-06',
        time: 1020,
        reactions: [
            { emoji: '👏', counter: 1 }
        ]
    },

    // Felix to Maximilian
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'QscAwZYx3EJdem6n5l2c',
        channelId: '',
        text: 'Hi Max, wie läuft es mit dem Design für die neue Seite?',
        date: '2025-05-05',
        time: 1400,
        reactions: [
            { emoji: '🤔', counter: 1 }
        ]
    },
    {
        senderId: 'QscAwZYx3EJdem6n5l2c',
        receiverId: '74izbWVB9XFaPrkOl2IW',
        channelId: '',
        text: 'Hey Felix, ich bin fast fertig. Ich schicke dir später einen Entwurf.',
        date: '2025-05-05',
        time: 1415,
        reactions: [
            { emoji: '👍', counter: 3 }
        ]
    },
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'QscAwZYx3EJdem6n5l2c',
        channelId: '',
        text: 'Perfekt, danke dir!',
        date: '2025-05-05',
        time: 1420,
        reactions: [
            { emoji: '👏', counter: 2 }
        ]
    },

    // Felix to Sophia
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'gGUdTt5YJBczhJi2tZTe',
        channelId: '',
        text: 'Hallo Sophia, hast du Zeit, die Präsentation durchzugehen?',
        date: '2025-05-07',
        time: 900,
        reactions: [
            { emoji: '📅', counter: 1 }
        ]
    },
    {
        senderId: 'gGUdTt5YJBczhJi2tZTe',
        receiverId: '74izbWVB9XFaPrkOl2IW',
        channelId: '',
        text: 'Hi Felix, klar, wie wäre es um 14 Uhr?',
        date: '2025-05-07',
        time: 915,
        reactions: [
            { emoji: '👍', counter: 2 }
        ]
    },
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'gGUdTt5YJBczhJi2tZTe',
        channelId: '',
        text: 'Passt perfekt, danke!',
        date: '2025-05-07',
        time: 920,
        reactions: [
            { emoji: '✅', counter: 1 }
        ]
    },

    // Felix to Lukas
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'tv4YZclfgtdOaPbtUs5W',
        channelId: '',
        text: 'Hey Lukas, kannst du mir die Dokumentation für das Backend schicken?',
        date: '2025-05-04',
        time: 1500,
        reactions: [
            { emoji: '📄', counter: 1 }
        ]
    },
    {
        senderId: 'tv4YZclfgtdOaPbtUs5W',
        receiverId: '74izbWVB9XFaPrkOl2IW',
        channelId: '',
        text: 'Klar, ich schicke sie dir gleich.',
        date: '2025-05-04',
        time: 1510,
        reactions: [
            { emoji: '👍', counter: 2 }
        ]
    },
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'tv4YZclfgtdOaPbtUs5W',
        channelId: '',
        text: 'Super, danke dir!',
        date: '2025-05-04',
        time: 1515,
        reactions: [
            { emoji: '👏', counter: 1 }
        ]
    },

    // Felix to Anna
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'uBgn2NrkD4GCSh9tKsQQ',
        channelId: '',
        text: 'Hi Anna, hast du die Änderungen im Dokument gesehen?',
        date: '2025-05-03',
        time: 1100,
        reactions: [
            { emoji: '👀', counter: 1 }
        ]
    },
    {
        senderId: 'uBgn2NrkD4GCSh9tKsQQ',
        receiverId: '74izbWVB9XFaPrkOl2IW',
        channelId: '',
        text: 'Ja, ich habe sie gesehen. Sieht gut aus!',
        date: '2025-05-03',
        time: 1115,
        reactions: [
            { emoji: '👍', counter: 3 }
        ]
    },
    {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: 'uBgn2NrkD4GCSh9tKsQQ',
        channelId: '',
        text: 'Danke für das Feedback!',
        date: '2025-05-03',
        time: 1120,
        reactions: [
            { emoji: '😊', counter: 2 }
        ]
    }
];