const request = require('request');
const cheerio = require('cheerio');

request('https://www.smzdm.com/youhui/',(err,res) => {
    if(!err) {
        const body = res.body;
        const $ = cheerio.load(body, {decodeEntities:false});
        cheerio.prototype.removeTagText = function() {
            const html = this.html();
            // <span>11111</span>
            return html.replace(/<.*>.*<\/.*>/g, '')
        }
        $('.list.list_preferential ')
        .each(function () {
            const price = $('.itemName .red', this)
            .text().trim();
            //js 中的 innerHTML
            // <span></span> 以及其他html标签
            let title = $('.itemName a',this).removeTagText();
            const img = $('img',this).attr('src');
            const desc = $('.lrInfo',this).text().trim();
            console.log({
                title,
                price,
                img,
                desc
            })
        })
    }
})