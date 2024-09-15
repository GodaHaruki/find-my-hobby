export interface jobs {
    [name: string]: {
        description: React.ReactNode
    }
};

const jobs: jobs = {
    "programmer": {
        description: "プログラマーはインキャ"
    },
    "soundcreater": {
        description: "さうんどくりえーたーは"
    }
};

interface ResultProps {
    jobname: string
};

function Result(props: ResultProps){
    return (
        <>
        <h1>当選！あなたには{jobs[props.jobname].description}が向いています！</h1>
        </>
    );
}

export default Result;