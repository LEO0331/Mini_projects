

const GenerateId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';

    for(let i = 0; i < 6; i++) {
        id += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    id += '-';
    id += Math.floor(Math.random() * 900 + 100);

    return id;
} 

export default GenerateId;