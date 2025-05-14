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
        time: 1746525600000, // 2025-05-06T10:00:00Z
        formattedTime: '10:00',
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
        time: 1746526500000, // 2025-05-06T10:15:00Z
        formattedTime: '10:15',
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
        time: 1746526800000, // 2025-05-06T10:20:00Z
        formattedTime: '10:20',
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
        time: 1746439200000, // 2025-05-05T14:00:00Z
        formattedTime: '14:00',
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
        time: 1746440100000, // 2025-05-05T14:15:00Z
        formattedTime: '14:15',
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
        time: 1746440400000, // 2025-05-05T14:20:00Z
        formattedTime: '14:20',
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
        time: 1746618000000, // 2025-05-07T09:00:00Z
        formattedTime: '09:00',
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
        time: 1746618900000, // 2025-05-07T09:15:00Z
        formattedTime: '09:15',
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
        time: 1746619200000, // 2025-05-07T09:20:00Z
        formattedTime: '09:20',
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
        time: 1746351600000, // 2025-05-04T15:00:00Z
        formattedTime: '15:00',
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
        time: 1746352200000, // 2025-05-04T15:10:00Z
        formattedTime: '15:10',
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
        time: 1746352500000, // 2025-05-04T15:15:00Z
        formattedTime: '15:15',
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
        time: 1746260400000, // 2025-05-03T11:00:00Z
        formattedTime: '11:00',
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
        time: 1746261300000, // 2025-05-03T11:15:00Z
        formattedTime: '11:15',
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
        time: 1746261600000, // 2025-05-03T11:20:00Z
        formattedTime: '11:20',
        reactions: [
            { emoji: '😊', counter: 2 }
        ]
    }
];