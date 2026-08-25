/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i =0; i<= nums.length-1; i++){
        let secound_number = target - nums[i] ;
        
        if(map.has(secound_number)){
            return[map.get(secound_number),i];
        }
       map.set(nums[i],i);
    }
};