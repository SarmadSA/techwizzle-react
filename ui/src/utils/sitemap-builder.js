import Sitemap from 'react-router-sitemap';

const router = require('../components/Routes').default;

(
    new Sitemap(router)
        .build('https://www.techwizzle.com')
        .save('./sitemap.xml')
);