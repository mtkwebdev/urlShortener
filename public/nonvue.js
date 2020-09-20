const aname = document.querySelector('.name');
const aurl = document.querySelector('.url');
const aform = document.querySelector('.form');

aname.value = '';
aurl.value = '';

const create_nURL = () => {
    const body = {
        name: aname,
        url: aurl
    };

    const toPost = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json'
        }
    };


    fetch('/api/url', toPost).then(response => {
        console.log(response);
        return response.json();
    }).then(result => {
        console.log(result);
    });
    console.log(this.name, this.url)

};

aform.addEventListener('submit', (e) => {
    e.preventDefault()
    create_nURL();
})