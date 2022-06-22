export = Client;
/**
 *
 * @constructor
 */
declare function Client(): void;
declare class Client {
    closeBrokers(brokers: any): void;
    _createMessageHandler(consumer: any, stateValidator: any): (err: any, type: any, message: any) => any;
    sendFetchRequest(consumer: any, payloads: any, fetchMaxWaitMs: any, fetchMinBytes: any, maxTickMessages: any): void;
    sendProduceRequest(payloads: any, requireAcks: any, ackTimeoutMs: any, cb: any): void;
    sendOffsetCommitRequest(group: any, payloads: any, cb: any): void;
    sendOffsetCommitV2Request(group: any, generationId: any, memberId: any, payloads: any, cb: any, ...args: any[]): void;
    sendOffsetFetchV1Request(group: any, payloads: any, cb: any, ...args: any[]): void;
    setCoordinatorIdAndSendOffsetFetchV1Request(group: any, payloads: any, cb: any): void;
    coordinatorId: string;
    sendOffsetFetchRequest(group: any, payloads: any, cb: any): void;
    sendOffsetRequest(payloads: any, cb: any): void;
    refreshBrokerMetadata(): void;
    sendWhenReady(broker: any, correlationId: any, request: any, decode: any, cb: any): void;
    sendGroupRequest(encode: any, decode: any, requestArgs: any): any;
    sendGroupCoordinatorRequest(groupId: any, cb: any, ...args: any[]): void;
    sendJoinGroupRequest(groupId: any, memberId: any, sessionTimeout: any, groupProtocol: any, cb: any, ...args: any[]): void;
    sendSyncGroupRequest(groupId: any, generationId: any, memberId: any, groupAssignment: any, cb: any, ...args: any[]): void;
    sendHeartbeatRequest(groupId: any, generationId: any, memberId: any, cb: any, ...args: any[]): void;
    sendLeaveGroupRequest(groupId: any, memberId: any, cb: any, ...args: any[]): void;
    /**
     * Fetches metadata information for a topic
     * This includes an array containing a each zookeeper node, their nodeId, host name, and port. As well as an object
     * containing the topic name, partition, leader number, replica count, and in sync replicas per partition.
     *
     * @param {Array} topics An array of topics to load the metadata for
     * @param {Client~loadMetadataForTopicsCallback} cb Function to call once all metadata is loaded
     */
    loadMetadataForTopics(topics: any[], cb: any): any;
    createTopics(topics: any, isAsync: any, cb: any): any;
    addTopics(topics: any, cb: any): void;
    nextId(): number;
    correlationId: number;
    nextSocketId(): number;
    refreshBrokers(): void;
    refreshMetadata(topicNames: any, cb: any): any;
    send(payloads: any, encoder: any, decoder: any, cb: any): void;
    sendToBroker(payloads: any, encoder: any, decoder: any, cb: any): any;
    checkMetadatas(payloads: any): any[];
    hasMetadata(topic: any, partition: any): any;
    updateMetadatas(metadatas: any): void;
    removeTopicMetadata(topics: any, cb: any): void;
    payloadsByLeader(payloads: any): any;
    leaderByPartition(topic: any, partition: any): any;
    brokerForLeader(leader: any, longpolling: any): any;
    getBrokers(longpolling: any): any;
    reconnectBroker(oldSocket: any): void;
    handleReceivedData(socket: any): void;
    invokeResponseCallback(socket: any, correlationId: any, resp: any): void;
    queueCallback(socket: any, id: any, data: any): void;
    unqueueCallback(socket: any, id: any): any;
    clearCallbackQueue(socket: any, error: any): void;
}
