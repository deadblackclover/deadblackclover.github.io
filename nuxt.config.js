module.exports = {
    head: {
        titleTemplate: 'DEADBLACKCLOVER',
        meta: [
            {charset: 'utf-8'},
            {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}
        ]
    },
    css: [
        {src:'~/assets/css/main.css'},
        {src:'~/assets/css/animate.css'}
    ],
    generate: {
        dir: 'public'
    }
}