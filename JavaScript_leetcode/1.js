//测试集合
var test = require('./LinkList.js');

//判断链表是否成环
//快慢指针法： 时间O(N) 空间O（1）

function isCircle(linkList){
    let fastIndex=linkList.headnode;
    let slowIndex=linkList.headnode;
    while(fastIndex.next.next!==null&&slowIndex.next!==null){ //遍历一边
        fastIndex=fastIndex.next.next; //快指针
        slowIndex=slowIndex.next;//慢指针
        if(fastIndex===slowIndex){
            return true;
        }
    }
    return false;
}

console.log("circle:"+isCircle(test.nodeListCircle))
console.log("no circle:"+isCircle(test.nodeListNoCircle))