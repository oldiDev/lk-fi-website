var statistics = {};
export const useStatistics = ()=>({
    get:()=>{
        return statistics;
    },
    set:(values=[{}])=>{
            statistics = {
                HitList:values.map(f=>f=[new Date(f.date), f.Hit]),
                JumpList:values.map(f=>f=[new Date(f.date), f.Jump]),
                ReactionList:values.map(f=>f=[new Date(f.date),f.Reaction]),
                SpeedList:values.map(f=>f=[new Date(f.date), f.Speed]),
                FullList:values.map(f=>f=[new Date(f.date),f.Hit, f.Speed ,f.Jump ,f.Reaction])
            }
    }
})
