export = Producer;
/** @inheritdoc */
declare function Producer(client: any, options: any, customPartitioner: any): void;
declare namespace Producer {
    const PARTITIONER_TYPES: {
        default: number;
        random: number;
        cyclic: number;
        keyed: number;
        custom: number;
    };
}
