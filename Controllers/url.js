
const URL = require("../Models/url");
const shortid = require("shortid");

async function handleGetUrl(req,res) {
    const shortId = req.params.shortId;
   const entry =  await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push : {
                visitedHistory : {
                    timestamp : Date.now()
                }
            }
        }
    )
    return res.redirect(entry.redirectUrl)
}

async function handlePostUrl(req,res) {
    const body = req.body;
    const id = shortid();
    if(!body.url) return res.status(400).json({error:"url should be their"});
    await URL.create({
        shortId : id,
        redirectUrl : body.url,
        visitedHistory : [],
    })
 

    return res.render("home",{shortid : id})

}

async function handleSingleUrlAnalytic(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})
    return res.json({totalClick:result.visitedHistory.length , analytic : result})
}

module.exports = {
    handlePostUrl,
    handleGetUrl,
    handleSingleUrlAnalytic
}