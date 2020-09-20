new Vue({
    el: '#app',
    data: {
        name: '',
        url: '',
    },
    methods: {
        create_nURL() {
            const body = {
                name: this.name,
                url: this.url
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
            // fetch('/api/url').then({
            //     method: 'POST',
            //     body: JSON.stringify(body),
            //     headers: {
            //         'content-type': 'application/json'
            //     }
            // }).then(response => {
            //     console.log(response);
            //     return response.json();
            // }).then(result => {
            //     console.log(result);
            // });
            // console.log(this.name, this.url)

            // fetch('*/api/url').then(response) {
            //     if (response.ok) {
            //         return response.json();
            //     }


        }
    }
});