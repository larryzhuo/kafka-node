export = ConsumerStream;
declare function ConsumerStream(client: any, topics: any, options: any): void;
declare class ConsumerStream {
    constructor(client: any, topics: any, options: any);
    highWaterMark: any;
    fetchInFlight: boolean;
    fetchCount: number;
    client: any;
    options: any;
    ready: boolean;
    payloads: any;
    encoding: any;
    emittedMessages: number;
    messageBuffer: any;
    _reading: boolean;
    close: any;
    _emit: any;
    emit(...args: any[]): void;
    /**
     * Implements the abstract Readable::_read() method.
     */
    _read(): void;
    /**
     * Buffers the received message then checks to see if we should send.
     *
     * Messages are fetched from Kafka with a size limit and not a message
     * count while node.js object streams have a limit in object count. As
     * a result we maintain an internal buffer (this.messageBuffer) from
     * which we push messages onto the stream as appropriate in
     * this.transmitMessages().
     *
     * @param {Object} message - An Kafka message object.
     */
    handleMessage(message: any): void;
    transmitMessages(): void;
    /**
     * Fetch messages from kafka if appropriate.
     */
    fetch(): void;
    /**
     * The decode callback is invoked as data is decoded from the response.
     */
    decodeCallback(err: any, type: any, message: any): void;
    connect(): void;
    updateOffsets(topics: any, initing: any): void;
    init(): void;
    buildPayloads(payloads: any): any;
    createCommitStream(options: any): CommitStream;
}
import CommitStream = require("./commitStream");
