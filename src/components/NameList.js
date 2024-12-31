import React from 'react';
import Person from './Person';

function NameList()
{
    const persons = [{
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React',
    }, {
        id: 1,
        name: 'Gargy',
        age: 30,
        skill: 'Laravel',
    }, {
        id: 1,
        name: 'Diana',
        age: 30,
        skill: 'Web Development',
    }];
    const PersonList = persons.map(person=> <Person person = {person} />)
    return(
        <div>
            { PersonList }
        </div>
    )
}

export default NameList