(function() {
    'use strict';

    Vue.config.devtools = true;
    
    var img_bg = new Vue({
        el: '#img_bg',
        data: {
            BackgroundImage: 'img/top_background.png'
        }
    })

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: "You loaded this page on " + new Date().toLocaleDateString()
        }
    })

    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })

    var app4 = new Vue({
        el: '#app-4',
        data: {
            todos: [
                { text: 'Learn JavaScript'},
                { text: 'Learn Vue'},
                { text: 'Build somothing awesome'}
            ]
        }
    })

    var app5 = new Vue({
        el: '#app-5',
        data: {
            message: 'Hello Vue.js!'
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    })

    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })


})();