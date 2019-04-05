const url = 'https://swapi.co/api/people/1/';

const funk = async function(){
    const fetched = await fetch(url);
    const data = await fetched.json();
    for (const key in data) {
        document.write(`${key}: ${data[key]}`);
        document.write("<br>");
    }
}
funk();
