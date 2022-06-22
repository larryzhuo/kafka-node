export = HighLevelProducer;
/** @inheritdoc */
declare function HighLevelProducer(client: any, options: any, customPartitioner: any): void;
declare namespace HighLevelProducer {
    const PARTITIONER_TYPES: {
        default: number;
        random: number;
        cyclic: number;
        keyed: number;
        custom: number;
    };
}
