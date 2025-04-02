const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}]

   
    const welcomeStudent = users.map(function(user){return`hello ${user.firstName}` })
    console.log(welcomeStudent);
    
    const FullStack =  users.filter(function(user)
    {return user.role.includes('Full')} ).map(function(lastName){
       return lastName.lastName
    } )
    console.log(FullStack);

    
    