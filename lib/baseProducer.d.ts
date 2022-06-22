export = BaseProducer;
/**
 * Provides common functionality for a kafka producer
 *
 * @param {Client} client A kafka client object to use for the producer
 * @param {Object} [options] An object containing configuration options
 * @param {Number} [options.requireAcks=1] Configuration for when to consider a message as acknowledged.
 *      <li>0 = No ack required</li>
 *      <li>1 = Leader ack required</li>
 *      <li>-1 = All in sync replicas ack required</li>
 *
 * @param {Number} [options.ackTimeoutMs=100] The amount of time in milliseconds to wait for all acks before considered
 *      the message as errored
 * @param {Number} [defaultPartitionType] The default partitioner type
 * @param {Object} [customPartitioner] a custom partitinoer to use of the form: function (partitions, key)
 * @constructor
 */
declare function BaseProducer(client: Client, options?: {
    requireAcks?: number;
    ackTimeoutMs?: number;
}, defaultPartitionerType: any, customPartitioner?: any): void;
declare class BaseProducer {
    /**
     * Provides common functionality for a kafka producer
     *
     * @param {Client} client A kafka client object to use for the producer
     * @param {Object} [options] An object containing configuration options
     * @param {Number} [options.requireAcks=1] Configuration for when to consider a message as acknowledged.
     *      <li>0 = No ack required</li>
     *      <li>1 = Leader ack required</li>
     *      <li>-1 = All in sync replicas ack required</li>
     *
     * @param {Number} [options.ackTimeoutMs=100] The amount of time in milliseconds to wait for all acks before considered
     *      the message as errored
     * @param {Number} [defaultPartitionType] The default partitioner type
     * @param {Object} [customPartitioner] a custom partitinoer to use of the form: function (partitions, key)
     * @constructor
     */
    constructor(client: Client, options?: {
        requireAcks?: number;
        ackTimeoutMs?: number;
    }, defaultPartitionerType: any, customPartitioner?: any);
    ready: boolean;
    client: Client;
    requireAcks: number;
    ackTimeoutMs: number;
    partitioner: any;
    connect(): void;
    /**
     * Sends a new message or array of messages to a topic/partition
     * This will use the
     *
     * @see Client#sendProduceRequest for a more low level way to send messages to kafka
     *
     * @param {Array.<BaseProducer~sendPayload>} payloads An array of topic payloads
     * @param {BaseProducer~sendCallback} cb A function to call once the send has completed
     */
    send(payloads: any, cb: any): void;
    /**
     * async wrapper
     * @param {*} payloads
     */
    sendWrapper(payloads: any): Promise<any>;
    buildPayloads(payloads: any, topicMetadata: any): any;
    createTopics(topics: any, async: any, cb: any): any;
    close(cb: any): void;
}
declare namespace BaseProducer {
    export { PARTITIONER_TYPES };
}
declare namespace PARTITIONER_TYPES {
    const _default: number;
    export { _default as default };
    export const random: number;
    export const cyclic: number;
    export const keyed: number;
    export const custom: number;
}
