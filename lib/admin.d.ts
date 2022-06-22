export = Admin;
declare function Admin(kafkaClient: any): void;
declare class Admin {
    constructor(kafkaClient: any);
    client: KafkaClient;
    RESOURCE_TYPES: typeof resources.RESOURCE_TYPES;
    ready: boolean;
    listGroups(cb: any): void;
    listTopics(cb: any): void;
    /**
     * listTopics包装成async
     * @returns
     */
    listTopicsWrapper(): Promise<any>;
    describeGroups(consumerGroups: any, cb: any): void;
    createTopics(topics: any, cb: any): void;
    /**
     * async wrapper
     * @param {*} topics
     * @returns
     */
    createTopicsWrapper(topics: any): Promise<any>;
    describeConfigs(payload: any, cb: any): void;
}
import KafkaClient = require("./kafkaClient");
import resources = require("./resources");
