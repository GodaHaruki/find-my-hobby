const jobs = {
    "programmer": {
        name: "プログラマー",
        description: "プログラマーはインキャ"
    },
    "soundcreater": {
        name: "サウンドクリエーター",
        description: "さうんどくりえーたーは"
    },
} as const;

export interface ResultProps {
    jobname: keyof typeof jobs
};

function Result(props: ResultProps){
    return (
        <>
        <h1>当選！あなたには{jobs[props.jobname].name}が向いています！</h1>
        </>
    );
}

export default Result;