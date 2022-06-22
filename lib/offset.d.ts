export = Offset;
declare function Offset(client: any): void;
declare class Offset {
    constructor(client: any);
    client: any;
    ready: any;
    fetch(payloads: any, cb: any): void;
    buildPayloads(payloads: any): any;
    buildOffsetFetchV1Payloads(payloads: any): any;
    commit(groupId: any, payloads: any, cb: any): void;
    fetchCommits: (groupId: any, payloads: any, cb: any) => void;
    fetchCommitsV1(groupId: any, payloads: any, cb: any): void;
    fetchLatestOffsets(topics: any, cb: any): void;
    fetchEarliestOffsets(topics: any, cb: any): void;
}
