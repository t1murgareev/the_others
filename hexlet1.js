const getGirlFriends = (users) => {
     const ar = users.map((user) => user.friends).flat()
     const newAr = ar.filter((user) => user.gender === 'female')
     return newAr
};


const users = [

     {
   
       name: 'Tirion',
   
       friends: [
   
         { name: 'Mira', gender: 'female' },
   
         { name: 'Ramsey', gender: 'male' },
   
       ],
   
     },
   
     { name: 'Bronn', friends: [] },
   
     {
   
       name: 'Sam',
   
       friends: [
   
         { name: 'Aria', gender: 'female' },
   
         { name: 'Keit', gender: 'female' },
   
       ],
   
     },
   
     {
   
       name: 'Rob',
   
       friends: [
   
         { name: 'Taywin', gender: 'male' },
   
       ],
   
     },
   
];

console.log(getGirlFriends(users));