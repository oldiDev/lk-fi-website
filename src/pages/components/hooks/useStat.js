var statistics = {};
export const useStatistics = () => ({
    get: () => {
        return statistics;
    },
    set: (values = [{}]) => {
        statistics = {
            HitList: values.map(f => f = [new Date(f.date), f.Hit, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Hit) + ' км/ч']),
            JumpList: values.map(f => f = [new Date(f.date), f.Jump, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Jump) + ' см']),
            ReactionList: values.map(f => f = [new Date(f.date), f.Reaction, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Reaction) + ' мс']),
            SpeedList: values.map(f => f = [new Date(f.date), f.Speed, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Speed) + ' км/ч']),
            SharpshootingList: values.map(f => f = [new Date(f.date), f.sharpshooting, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.sharpshooting) + '%']),
            FullList: values.map(f => f = [new Date(f.date), f.Hit, f.Speed, f.Jump, f.Reaction, f.SharpshootingList])
        }
    }
})
