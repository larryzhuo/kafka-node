export = ConsumerGroupRecovery;
declare function ConsumerGroupRecovery(consumerGroup: any): void;
declare class ConsumerGroupRecovery {
    constructor(consumerGroup: any);
    consumerGroup: any;
    options: any;
    tryToRecoverFrom(error: any, source: any): void;
    lastError: any;
    clearError(): void;
    getRetryTimeout(error: any): any;
    _timeouts: any;
    _retryIndex: number;
}
