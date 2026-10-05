type SingleSimResponse<T extends theoryType = theoryType> = {
    responseType: "single";
    result: simResult<T>;
}

type ChainSimResponse = {
    responseType: "chain";
    results: simResult[];
    deltaTau: number;
    averageRate: number;
    totalTime: number;
}

type PubTableResponse = {
    responseType: "pub_table";
    cap: number;
    step: number;
    start: number;
    pub_table: [number, number][];
}

type StepSimResponse = {
    responseType: "step";
    results: simResult[];
}

type SimAllResponse = {
responseType: "all";
sigma: number;
stratType: SettingsSimAllStratsMode;
completedCTs: SettingsCompletedCTsMode;
results: simAllResult[];
}

type NoPubStepLog = {
    rho: number;
    time: number;
    multi: number;
}

type NoPubSimResponse = {
    responseType: "no_pub";
    theory: theoryType;
    strat: string;
    startRho: number;
    finalRho: number;
    startMulti: number;
    finalMulti: number;
    totalTime: number;
    stepLogs: NoPubStepLog[];
}

type SimResponse = 
    SingleSimResponse
    | ChainSimResponse
    | StepSimResponse
    | ComparisonSimResponse
    | AmountSimResponse
    | TimeSimResponse
    | SimAllResponse
    | StepChainResponse
    | PubTableSimResponse
    | NoPubSimResponse;