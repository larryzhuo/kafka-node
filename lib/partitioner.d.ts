export function DefaultPartitioner(): void;
export class DefaultPartitioner {
    getPartition(partitions: any): any;
}
export function CyclicPartitioner(): void;
export class CyclicPartitioner {
    c: number;
    getPartition(partitions: any): any;
}
export function RandomPartitioner(): void;
export class RandomPartitioner {
    getPartition(partitions: any): any;
}
export function KeyedPartitioner(): void;
export class KeyedPartitioner {
    hashCode(stringOrBuffer: any): number;
    getPartition(partitions: any, key: any): any;
}
export function CustomPartitioner(partitioner: any): void;
export class CustomPartitioner {
    constructor(partitioner: any);
    getPartition: any;
}
