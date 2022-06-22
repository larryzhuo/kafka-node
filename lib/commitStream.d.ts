export = CommitStream;
declare class CommitStream {
    constructor(client: any, topics: any, groupId: any, options: any);
    options: any;
    client: any;
    topicPartionOffsets: any;
    committing: boolean;
    groupId: any;
    autoCommit: any;
    autoCommitMsgCount: any;
    autoCommitIntervalMs: any;
    autoCommitIntervalTimer: number;
    messageCount: number;
    /**
     * Extend Transform::on() to act as a pipe if someone consumes data from us.
     */
    on(eventName: any, ...args: any[]): void;
    /**
     * Extend Transform::pipe() to act as a pipe if someone consumes data from us.
     */
    pipe(...args: any[]): void;
    _transform(data: any, encoding: any, done: any): any;
    buildTopicData(topicPartions: any): any;
    /**
     * @param {Object} topics - An object containing topic offset data keyed by
     *   topic with keys for partion containing the offset last seen.
     */
    updateOffsets(topics: any, initing: any): void;
    /**
     * Clear the autocommit interval of this commitStream if set.
     */
    clearInterval(): void;
    commit(cb: any): any;
}
