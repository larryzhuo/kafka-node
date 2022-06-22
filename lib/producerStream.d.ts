export = ProducerStream;
declare class ProducerStream {
    constructor(options: any);
    client: KafkaClient;
    producer: any;
    sendPayload(payload: any, callback: any): void;
    close(callback: any): void;
    _write(message: any, encoding: any, callback: any): void;
    _writev(chunks: any, callback: any): void;
}
import KafkaClient = require("./kafkaClient");
