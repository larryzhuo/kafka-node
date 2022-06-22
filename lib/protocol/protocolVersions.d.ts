declare namespace API_MAP {
    const produce: (typeof p.encodeProduceRequest | typeof p.decodeProduceResponse)[][];
    const fetch: (typeof p.encodeFetchRequest)[][];
    const offset: (typeof p.encodeOffsetRequest)[][];
    const metadata: (typeof p.encodeMetadataRequest)[][];
    const leader: any;
    const stopReplica: any;
    const updateMetadata: any;
    const controlledShutdown: any;
    const offsetCommit: (typeof p.encodeOffsetCommitV1Request)[][];
    const offsetFetch: (typeof p.encodeOffsetFetchV1Request)[][];
    const groupCoordinator: (typeof p.encodeGroupCoordinatorRequest)[][];
    const joinGroup: (typeof p.encodeJoinGroupRequest)[][];
    const heartbeat: (typeof p.encodeGroupHeartbeatRequest)[][];
    const leaveGroup: (typeof p.encodeLeaveGroupRequest)[][];
    const syncGroup: (typeof p.encodeJoinGroupRequest)[][];
    const describeGroups: (typeof p.encodeDescribeGroups)[][];
    const listGroups: (typeof p.encodeListGroups)[][];
    const saslHandshake: (typeof p.encodeSaslHandshakeRequest)[][];
    const apiVersions: (typeof p.encodeVersionsRequest)[][];
    const createTopics: (typeof p.encodeCreateTopicRequest)[][];
    const deleteTopics: any;
    const describeConfigs: (typeof p.encodeDescribeConfigsRequest)[][];
    const saslAuthenticate: any[][];
}
import p = require("./protocol");
export { API_MAP as apiMap };
export declare const maxSupport: any;
export declare const baseSupport: any;
