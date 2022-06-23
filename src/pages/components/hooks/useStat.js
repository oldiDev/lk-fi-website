var statistics = {};
export const useStatistics = () => ({
    get: () => {
        return statistics;
    },
    set: (values = [{}]) => {
        statistics = {
            HitList: values.map(f => f = [new Date(f.date), f.Hit, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Hit) + ' км/ч']),
            JumpList: values.map(f => f = [new Date(f.date), f.Jump, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Jump) + ' см']),
            JumpList2: values.map(f => f = [new Date(f.date), f.Jump2, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Jump2) + ' см']),
            ReactionList: values.map(f => f = [new Date(f.date), f.Reaction, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Reaction) + ' мс']),
            SpeedList: values.map(f => f = [new Date(f.date), f.Speed, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Speed) + ' км/ч']),
            SpeedList2: values.map(f => f = [new Date(f.date), f.Speed2, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Speed2) + ' c']),
            SpeedList_s_razbegu: values.map(f => f = [new Date(f.date), f.Speed_s_razbega, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Speed_s_razbega) + ' км/ч']),
            SpeedList_s_razbegu2: values.map(f => f = [new Date(f.date), f.Speed_s_razbega2, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.Speed_s_razbega2) + ' c']),
            SharpshootingList: values.map(f => f = [new Date(f.date), f.sharpshooting, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.sharpshooting) + '%']),
            FullList: values.map(f => f = [new Date(f.date), f.Hit, f.Speed, f.Jump, f.Reaction, f.SharpshootingList])
        }
    }
})
