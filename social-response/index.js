const moment = require('moment');
const getRandomNumber = require('../utility/getRandomNumber');

const generateInsights = (platform) => {
    const insightsArr = [];
    for (let increment = 0; increment <= 6; increment++) {
        const insight = {
            views: getRandomNumber(1, 100000),
            likes: getRandomNumber(1000, 5000),
            date: moment().subtract(increment, 'days'),
            fansCount: getRandomNumber(1, 10000),
        };

        if (platform === 'twitter') {
            insight.retweets = getRandomNumber(0, 500);
        }
        insightsArr.push(insight);
    }

    return insightsArr;
};

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a requests.');

    const responseObj = [
        {
            username: 'facebook-user',
            platform: 'facebook',
            insights: generateInsights('facebook'),
        },
        {
            username: 'twitter-user',
            platform: 'twitter',
            insights: generateInsights('twitter'),
        },
        {
            username: 'instagram-user',
            platform: 'instagram',
            insights: generateInsights('instagram'),
        },
    ];
    context.res = {
        body: responseObj,
    };
}