let group = {
    title: 'Java Ashkelon 2020',
    students: ['Anna', 'Anna', 'Elena','Irina', 'Yuliia','Irina', 'Elina'],
    showList: function (){
        const show = (name) =>{
            console.log(`${this.title}: ${name}`);
        }
        this.students.forEach(show);
    }
}

group.showList();
let newGroup = group;
group = null;
console.log('================');
newGroup.showList();

for(var i=0; i<10; i++)
{
    setTimeout
    (console.log.bind(0,i), 1000);
};