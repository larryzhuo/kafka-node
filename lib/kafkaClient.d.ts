export = KafkaClient;
declare function KafkaClient(options: any): void;
declare class KafkaClient {
    constructor(options: any);
    options: any;
    sslOptions: any;
    ssl: boolean;
    clientId: any;
    noAckBatchOptions: any;
    brokers: {};
    longpollingBrokers: {};
    topicMetadata: {};
    correlationId: number;
    _socketId: number;
    /**
     * @type {Map<any, Map<any, any>>}
     */
    cbqueue: Map<any, Map<any, any>>;
    brokerMetadata: {};
    clusterMetadata: {};
    ready: boolean;
    _timeouts: any;
    initialHosts: any;
    connect(): void;
    connecting: boolean;
    connectToBrokers(hosts: any, callback: any): void;
    connectToBroker(broker: any, callback: any): void;
    getController(callback: any): any;
    getBroker(host: any, port: any, longpolling: any): any;
    setupBroker(host: any, port: any, longpolling: any, brokers: any): any;
    getAvailableBroker(callback: any): any;
    refreshBrokers(): void;
    refreshBrokerMetadata(callback: any): void;
    refreshingMetadata: boolean;
    loadMetadataFrom(broker: any, cb: any): void;
    setBrokerMetadata(brokerMetadata: any): void;
    brokerMetadataLastUpdate: number;
    setClusterMetadata(clusterMetadata: any): void;
    setControllerId(controllerId: any): void;
    /**
     * 刷新完 metadata 之后，都会缓存到 this.topicMetadata 变量中
     * @param {*} metadatas
     * @param {*} replaceTopicMetadata
     */
    updateMetadatas(metadatas: any, replaceTopicMetadata: any): void;
    getMetadatas(): {};
    brokerForLeader(leader: any, longpolling: any): any;
    wrapTimeoutIfNeeded(socketId: any, correlationId: any, callback: any, overrideTimeout: any): any;
    queueCallback(socket: any, id: any, data: any): void;
    getApiVersions(broker: any, cb: any): any;
    getListGroups(callback: any): any;
    getDescribeGroups(groups: any, callback: any): any;
    close(callback: any): void;
    closing: boolean;
    initializeBroker(broker: any, callback: any): any;
    saslAuth(broker: any, callback: any): void;
    createBroker(host: any, port: any, longpolling: any): BrokerWrapper;
    isValidBroker({ host, port }: {
        host: any;
        port: any;
    }): any;
    deleteDisconnected(broker: any): void;
    clearCallbackQueue(socket: any, error: any): void;
    /**
     * Fetches metadata for brokers and cluster.
     * This includes an array containing each node (id, host and port).
     * Depending on kafka version, additional cluster information is available (controller id).
     * @param {loadMetadataCallback} cb Function to call once metadata is loaded.
     */
    loadMetadata(callback: any): void;
    /**
     * Fetches metadata for brokers and cluster.
     * This includes an array containing each node (id, host and port). As well as an object
     * containing the topic name, partition, leader number, replica count, and in sync replicas per partition.
     * Depending on kafka version, additional cluster information is available (controller id).
     * @param {Array} topics List of topics to fetch metadata for. An empty array ([]) will fetch all topics.
     * @param {loadMetadataCallback} callback Function to call once metadata is loaded.
     */
    loadMetadataForTopics(topics: any[], callback: loadMetadataCallback): any;
    /**
     * Creates one or more topics.
     * @param {Array} topics Array of topics with partition and replication factor to create.
     * @param {createTopicsCallback} callback Function to call once operation is completed.
     */
    createTopics(topics: any[], callback: createTopicsCallback, ...args: any[]): any;
    topicExists(topics: any, callback: any): void;
    waitUntilReady(broker: any, callback: any): void;
    _clearTimeout(timeoutId: any): void;
    _clearAllTimeouts(): void;
    _createTimeout(fn: any, timeout: any): number;
    sendRequest(request: any, callback: any): void;
    /**
     * Sends a request to a specific broker by id
     */
    sendRequestToBroker(brokerId: any, requestType: any, args: any, callback: any): any;
    leaderLessPayloads(payloads: any): any;
    verifyPayloadsHasLeaders(payloads: any, callback: any): any;
    wrapControllerCheckIfNeeded(requestType: any, requestArgs: any, callback: any): any;
    sendControllerRequest(requestType: any, args: any, callback: any): void;
    sendFetchRequest(consumer: any, payloads: any, fetchMaxWaitMs: any, fetchMinBytes: any, maxTickMessages: any, callback: any, ...args: any[]): void;
    sendWhenReady(broker: any, correlationId: any, request: any, decode: any, cb: any): void;
    sendProduceRequest(payloads: any, requireAcks: any, ackTimeoutMs: any, callback: any): void;
    handleReceivedData(socket: any): any;
    describeConfigs(payload: any, callback: any): any;
    /**
     * Sends a request to any broker in the cluster
     */
    sendRequestToAnyBroker(requestType: any, args: any, callback: any): void;
}
import BrokerWrapper = require("./wrapper/BrokerWrapper");
