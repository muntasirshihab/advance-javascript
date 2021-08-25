const students =[
    {id:21, name:'Omar Sani'},
    {id:31, name:'kader molla'},
    {id:41, name:'dip Jol'},
    {id:71, name:'cool dude'}
]

const names = students.map(s => s.name);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);