const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, order) => sum+order.likes,0)
}



module.exports = {
    dummy,
    totalLikes

}