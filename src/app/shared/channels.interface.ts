import { MessageInterface } from "./message.interface";

export interface ChannelInterface {
    id?: string;
    channelName: string;
    description: string;
    userCreators: string;
    members?: string[];
    messages?: MessageInterface[];
}