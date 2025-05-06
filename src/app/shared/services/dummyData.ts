export const users = [
    {
        fullname: 'Maximilian Müller',
        name: 'Maximilian',
        lastname: 'Müller',
        email: 'max.mueller@example.com',
        avatar: 'assets/avatars/Avatar1.svg',
        status: true,
        privateMessages: [
            {
                userId: 'TeXHAm8UEVJaKcpKEvnR',
                messages: [
                    {
                        text: 'Hallo Anna, hast du die Präsentation für das Meeting vorbereitet?',
                        date: '2025-05-05',
                        time: 1620,
                        reactions: [
                            { emoji: '👍', counter: 3 },
                            { emoji: '😂', counter: 1 }
                        ]
                    },
                    {
                        text: 'Ja, ich habe sie gestern Abend fertiggestellt.',
                        date: '2025-05-05',
                        time: 1630,
                        reactions: [
                            { emoji: '👏', counter: 2 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        fullname: 'Anna Schmidt',
        name: 'Anna',
        lastname: 'Schmidt',
        email: 'anna.schmidt@example.com',
        avatar: 'assets/avatars/Avatar2.svg',
        status: true,
        privateMessages: [
            {
                userId: 'gMlJPp9ndRwYQvN0J3aP',
                messages: [
                    {
                        text: 'Max, kannst du mir bitte die neuesten Zahlen schicken?',
                        date: '2025-05-06',
                        time: 1015,
                        reactions: [
                            { emoji: '📊', counter: 2 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        fullname: 'Lukas Fischer',
        name: 'Lukas',
        lastname: 'Fischer',
        email: 'lukas.fischer@example.com',
        avatar: 'assets/avatars/Avatar3.svg',
        status: false,
        privateMessages: []
    },
    {
        fullname: 'Sophia Wagner',
        name: 'Sophia',
        lastname: 'Wagner',
        email: 'sophia.wagner@example.com',
        avatar: 'assets/avatars/Avatar4.svg',
        status: true,
        privateMessages: [
            {
                userId: 'gMlJPp9ndRwYQvN0J3aP',
                messages: [
                    {
                        text: 'Können wir das Design für die neue Seite morgen besprechen?',
                        date: '2025-05-05',
                        time: 1545,
                        reactions: [
                            { emoji: '👍', counter: 4 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        fullname: 'Felix Becker',
        name: 'Felix',
        lastname: 'Becker',
        email: 'felix.becker@example.com',
        avatar: 'assets/avatars/Avatar5.svg',
        status: false,
        privateMessages: []
    },
    {
        fullname: 'Steffen Hoffmann',
        name: 'Steffen',
        lastname: 'Hoffmann',
        email: 'steffen.hoffmann@example.com',
        avatar: 'assets/avatars/Avatar6.svg',
        status: true,
        privateMessages: [
            {
                userId: 'tG693f5shSIqSJLWtkRT',
                messages: [
                    {
                        text: 'Ich habe die Änderungen im Dokument vorgenommen.',
                        date: '2025-05-06',
                        time: 1130,
                        reactions: [
                            { emoji: '✅', counter: 3 }
                        ]
                    },
                    {
                        text: 'Perfekt, danke Mia!',
                        date: '2025-05-06',
                        time: 1145,
                        reactions: [
                            { emoji: '❤️', counter: 2 }
                        ]
                    }
                ]
            }
        ]
    }
];