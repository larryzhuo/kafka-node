declare function _exports(name: any): {
    debug: any;
    info: any;
    warn: any;
    error: any;
};
declare namespace _exports {
    function setLoggerProvider(provider: any): void;
}
export = _exports;
