const Topic = require('../models/topic.js');

exports.creatTopic = async(topicInfo) => {
    if(!topicInfo){
        return {}
    }
    return await Topic.create(topicInfo)
}


exports.getTopicsAndCount = async(activePage,onePageCount,order) =>{
    if(!activePage || !order){
        return [];
    }
    let topics = await Topic.findAndCountAll({
        offset: (activePage - 1) * onePageCount,
        limit: onePageCount,
        order: [order],
    })
    return topics;
}























