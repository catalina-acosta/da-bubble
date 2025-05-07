export interface MessageInterface {
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