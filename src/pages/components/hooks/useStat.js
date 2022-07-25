var statistics = {};
function declOfNum(n) {  
    const text_forms = ["удар", "удара", "ударов"]
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}
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
            SpeedList: values.map(f => f = [new Date(f.date), f.Speed, f.date.split('-').reverse().join('.') + '\n' + Number(f.Speed).toFixed(3) + ' км/ч']),
            SpeedList2: values.map(f => f = [new Date(f.date), f.Speed2, f.date.split('-').reverse().join('.') + '\n' + Number(f.Speed2).toFixed(3) + ' c']),
            SpeedList_s_razbegu: values.map(f => f = [new Date(f.date), f.Speed_s_razbega, f.date.split('-').reverse().join('.') + '\n' + Number(f.Speed_s_razbega).toFixed(3) + ' км/ч']),
            SpeedList_s_razbegu2: values.map(f => f = [new Date(f.date), f.Speed_s_razbega2, f.date.split('-').reverse().join('.') + '\n' + Number(f.Speed_s_razbega2).toFixed(3) + ' c']),
            SharpshootingList: values.map(f => f = [new Date(f.date), f.sharpshooting, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.sharpshooting) + '%']),
            AgilityList: values.map(f => f = [new Date(f.date), f.Agility, f.date.split('-').reverse().join('.') + '\n' + Number(f.Agility).toFixed(3) + ' c']),
            FootSkillList: values.map(f => f = [new Date(f.date), f.FootSkill, f.date.split('-').reverse().join('.') + '\n' + Number(f.FootSkill).toFixed(2) + ' c']),
            FootSkillList_hits: values.map(f => f = [new Date(f.date), f.FootSkill2, f.date.split('-').reverse().join('.') + '\n' + Math.round(f.FootSkill2) + ' ' + declOfNum(f.FootSkill2)]),
            FullList: values.map(f => f = [new Date(f.date), f.Hit, f.Speed, f.Jump, f.Reaction, f.SharpshootingList])
        }
    }
})
