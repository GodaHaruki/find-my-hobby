interface jobs {
    [name: string]: {
        jobname: React.ReactNode
        description: React.ReactNode
    }
};

const jobs: jobs = {
    "programmer": {
        jobname: "プログラマー",
        description: "プログラマーはインキャ"
    },
    "soundcreater": {
        jobname: "サウンドクリエーター",
        description: "さうんどくりえーたーは"
    }
};

export interface ResultProps {
    jobname: keyof typeof jobs
};

function Result(props: ResultProps){
    return (
        <>
        <h1>当選！あなたには{jobs[props.jobname].jobname}が向いています！</h1>
        </>
    );
}

export default Result;