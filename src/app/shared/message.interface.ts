export interface MessageInterface {
    id?: string;
    senderId: string;
    receiverId: string;
    channelId?: string;
    text: string;
    date: string;
    time: number;
    reactions: [
        {
            emoji: string;
            counter: number;
        }
    ]

}