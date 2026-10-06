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

// NoPubSimResponse 정의 추가 (StepSimResponse와 동일한 형식)
type NoPubSimResponse = {
    responseType: "no_pub";
    results: simResult[];
}

// 하단 SimResponse 유니온 타입에 | NoPubSimResponse 추가
type SimResponse =
    | SimAllResponse
    | SingleSimResponse
    | ChainSimResponse
    | StepSimResponse
    | PubTableResponse
    | NoPubSimResponse;