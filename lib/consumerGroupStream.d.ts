export = ConsumerGroupStream;
declare class ConsumerGroupStream {
    constructor(options: any, topics: any);
    autoCommit: any;
    consumerGroup: ConsumerGroup;
    messageBuffer: any;
    commitQueue: {};
    emit(event: any, value: any, ...args: any[]): void;
    _read(): void;
    _reading: any;
    commit(message: any, force: any, callback: any): any;
    commitQueued(commits: any, force: any, callback: any): any;
    committing: boolean;
    autoCommitTimer: number;
    transmitMessages(): void;
    close(callback: any): void;
    _destroy(): void;
}
import ConsumerGroup = require("./consumerGroup");
