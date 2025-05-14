export interface MessageInterface {
    id?: string;
    senderId: string;
    receiverId: string;
    channelId?: string;
    text: string;
    date: string;
    time: number;
    formattedTime: string;
    reactions: [
        {
            emoji: string;
            counter: number;
        }
    ]

}