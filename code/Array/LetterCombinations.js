/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    let map = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6: ['m','n','o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u','v'],
        9: ['w','x','y','z']
    }
    let combine = (arr_1, arr_2) => {
        const arr = []
        for (let i = 0, len = arr_1.length; i < len; i ++) {
            for (let j = 0, len = arr_2.length; j < len; j ++) {
                arr.push(`${arr_1[i]}${arr_2[j]}`)
            }
        }
        return arr
    }
    return digits.split('').map(v => {
        const res = map[v]
        return res ? res : null
    }).filter((v) => v != null ).reduce((res, p) =>{
        return  res.length === 0 ? p : combine(res,p)
    },[])
};

export default letterCombinations