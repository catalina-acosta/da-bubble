export interface UserInterface {
    id?: string;
    fullname: string;
    name: string;
    lastname: string;
    email: string;
    avatar: string;
    status: boolean;
    privateMessages?: [
        {
            userId: string,
            messages: [
                {
                    text: string,
                    date: string,
                    time: number,
                    reactions: [{
                        emoji: string, 
                        counter: number
                    }
                    ]
                }
            ]
        }
    ]
}
