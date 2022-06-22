export = Consumer;
declare function Consumer(client: any, topics: any, options: any): void;
declare class Consumer {
    constructor(client: any, topics: any, options: any);
    fetchCount: number;
    client: any;
    options: any;
    ready: boolean;
    paused: any;
    id: number;
    payloads: any;
    encoding: any;
    buildPayloads(payloads: any): any;
    connect(): void;
    init(): void;
    updateOffsets(topics: any, initing: any): void;
    commit: typeof autoCommit;
    autoCommit: typeof autoCommit;
    fetch(): void;
    fetchOffset(payloads: any, cb: any): void;
    addTopics(topics: any, cb: any, fromOffset: any): void;
    removeTopics(topics: any, cb: any): void;
    close(force: any, cb: any): void;
    setOffset(topic: any, partition: any, offset: any): void;
    pause(): void;
    resume(): void;
    pauseTopics(topics: any): void;
    pausedPayloads: any[];
    resumeTopics(topics: any): void;
}
declare function autoCommit(force: any, cb: any, ...args: any[]): any;
declare class autoCommit {
    constructor(force: any, cb: any, ...args: any[]);
    committing: boolean;
}
