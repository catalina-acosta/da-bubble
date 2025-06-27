import { ChannelInterface } from '../channels.interface';

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

export const channels: ChannelInterface[] = [
    {
    id: 'Rpzj68Z78taQ1nQOlteZ',
    channelName: 'Marketing',
    description: 'Marketing-Team: Felix, Anna, Steffen',
    userCreators: '74izbWVB9XFaPrkOl2IW', // Felix
    members: [
        '74izbWVB9XFaPrkOl2IW', // Felix
        'uBgn2NrkD4GCSh9tKsQQ', // Anna
        'NsJ0o0lAuQVfQ7r28lRr', // Steffen
    ],
    messages: [
        {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: '',
        channelId: 'Rpzj68Z78taQ1nQOlteZ',
        text: 'Willkommen im Marketing-Channel! Lasst uns die neue Kampagne besprechen.',
        date: '2025-05-01',
        time: 1746105600000,
        formattedTime: '09:00',
        reactions: []
        },
        {
        senderId: 'uBgn2NrkD4GCSh9tKsQQ',
        receiverId: '',
        channelId: 'Rpzj68Z78taQ1nQOlteZ',
        text: 'Ich habe schon ein paar Ideen für Social Media.',
        date: '2025-05-01',
        time: 1746109200000,
        formattedTime: '10:00',
        reactions: []
        },
        {
        senderId: 'NsJ0o0lAuQVfQ7r28lRr',
        receiverId: '',
        channelId: 'Rpzj68Z78taQ1nQOlteZ',
        text: 'Super! Ich kann die Zahlen für die letzte Kampagne liefern.',
        date: '2025-05-01',
        time: 1746112800000,
        formattedTime: '11:00',
        reactions: []
        }
    ]
    },
    {
    id: 'SKSauVnNYAXyHUrSppxL',
    channelName: 'Backend',
    description: 'Backend-Entwicklung: Felix, Lukas, Steffen, Max',
    userCreators: 'tv4YZclfgtdOaPbtUs5W', // Lukas
    members: [
        '74izbWVB9XFaPrkOl2IW', // Felix
        'tv4YZclfgtdOaPbtUs5W', // Lukas
        'NsJ0o0lAuQVfQ7r28lRr', // Steffen
        'QscAwZYx3EJdem6n5l2c', // Max
    ],
    messages: [
        {
        senderId: 'tv4YZclfgtdOaPbtUs5W',
        receiverId: '',
        channelId: 'SKSauVnNYAXyHUrSppxL',
        text: 'Das neue API-Endpoint ist jetzt live.',
        date: '2025-05-02',
        time: 1746192000000,
        formattedTime: '11:00',
        reactions: []
        },
        {
        senderId: 'NsJ0o0lAuQVfQ7r28lRr',
        receiverId: '',
        channelId: 'SKSauVnNYAXyHUrSppxL',
        text: 'Ich teste es gleich mal mit den aktuellen Daten.',
        date: '2025-05-02',
        time: 1746195600000,
        formattedTime: '12:00',
        reactions: []
        },
        {
        senderId: 'QscAwZYx3EJdem6n5l2c',
        receiverId: '',
        channelId: 'SKSauVnNYAXyHUrSppxL',
        text: 'Funktioniert super, danke Lukas!',
        date: '2025-05-02',
        time: 1746199200000,
        formattedTime: '13:00',
        reactions: []
        }
    ]
    },
    {
    id: 'iBx4QvNXfnMiY8hW43vc',
    channelName: 'Projektleitung',
    description: 'Projektleitung: Felix, Anna, Steffen, Max, Sophia',
    userCreators: 'uBgn2NrkD4GCSh9tKsQQ', // Anna
    members: [
        '74izbWVB9XFaPrkOl2IW', // Felix
        'uBgn2NrkD4GCSh9tKsQQ', // Anna
        'NsJ0o0lAuQVfQ7r28lRr', // Steffen
        'QscAwZYx3EJdem6n5l2c', // Max
        'gGUdTt5YJBczhJi2tZTe', // Sophia
    ],
    messages: [
        {
        senderId: 'uBgn2NrkD4GCSh9tKsQQ',
        receiverId: '',
        channelId: 'iBx4QvNXfnMiY8hW43vc',
        text: 'Hier koordinieren wir alle Aufgaben für das Projekt.',
        date: '2025-05-03',
        time: 1746278400000,
        formattedTime: '09:00',
        reactions: []
        },
        {
        senderId: 'gGUdTt5YJBczhJi2tZTe',
        receiverId: '',
        channelId: 'iBx4QvNXfnMiY8hW43vc',
        text: 'Ich habe das Protokoll vom letzten Meeting hochgeladen.',
        date: '2025-05-03',
        time: 1746282000000,
        formattedTime: '10:00',
        reactions: []
        },
        {
        senderId: 'QscAwZYx3EJdem6n5l2c',
        receiverId: '',
        channelId: 'iBx4QvNXfnMiY8hW43vc',
        text: 'Danke Sophia! Ich schaue es mir gleich an.',
        date: '2025-05-03',
        time: 1746285600000,
        formattedTime: '11:00',
        reactions: []
        }
    ]
    },
    {
    id: 'oglFl3WrVU746OdH3q2r',
    channelName: 'Design',
    description: 'Design-Team: Felix, Max, Sophia',
    userCreators: 'QscAwZYx3EJdem6n5l2c', // Max
    members: [
        '74izbWVB9XFaPrkOl2IW', // Felix
        'QscAwZYx3EJdem6n5l2c', // Max
        'gGUdTt5YJBczhJi2tZTe', // Sophia
    ],
    messages: [
        {
        senderId: 'QscAwZYx3EJdem6n5l2c',
        receiverId: '',
        channelId: 'oglFl3WrVU746OdH3q2r',
        text: 'Ich habe einen neuen Entwurf für das Dashboard erstellt.',
        date: '2025-05-04',
        time: 1746369600000,
        formattedTime: '13:00',
        reactions: []
        },
        {
        senderId: 'gGUdTt5YJBczhJi2tZTe',
        receiverId: '',
        channelId: 'oglFl3WrVU746OdH3q2r',
        text: 'Sieht richtig gut aus!',
        date: '2025-05-04',
        time: 1746373200000,
        formattedTime: '14:00',
        reactions: []
        },
        {
        senderId: '74izbWVB9XFaPrkOl2IW',
        receiverId: '',
        channelId: 'oglFl3WrVU746OdH3q2r',
        text: 'Ich habe noch ein paar kleine Anmerkungen, schicke ich dir gleich.',
        date: '2025-05-04',
        time: 1746376800000,
        formattedTime: '15:00',
        reactions: []
        }
    ]
    }
];