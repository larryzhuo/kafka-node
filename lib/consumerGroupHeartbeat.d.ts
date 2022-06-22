export = Heartbeat;
declare class Heartbeat {
    constructor(client: any, handler: any);
    client: any;
    handler: any;
    pending: boolean;
    send(groupId: any, generationId: any, memberId: any): void;
    verifyResolved(): boolean;
    canceled: boolean;
}
