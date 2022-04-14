var statistics = {};
export const useStatistics = () => ({
    get: () => {
        return statistics;
    },
    set: (values = [{}]) => {
        statistics = {
            HitList: values.map(f => f = [new Date(f.date), f.Hit, f.date.split('-').reverse().join('.')]),
            JumpList: values.map(f => f = [new Date(f.date), f.Jump, f.date.split('-').reverse().join('.')]),
            ReactionList: values.map(f => f = [new Date(f.date), f.Reaction, f.date.split('-').reverse().join('.')]),
            SpeedList: values.map(f => f = [new Date(f.date), f.Speed, f.date.split('-').reverse().join('.')]),
            SharpshootingList: values.map(f => f = [new Date(f.date), f.sharpshooting, f.date.split('-').reverse().join('.')]),
            FullList: values.map(f => f = [new Date(f.date), f.Hit, f.Speed, f.Jump, f.Reaction, f.SharpshootingList])
        }
    }
})
