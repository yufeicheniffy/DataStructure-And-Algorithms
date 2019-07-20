//测试集合
var test = require('./LinkList.js');

//判断链表是否成环
//快慢指针法： 时间O(N) 空间O（1）
//思路： 只要成环就变成追击问题。快指针就会追上慢指针。

function isCircle(linkList) {
    let fastIndex = linkList.headnode;
    let slowIndex = linkList.headnode;
    while (fastIndex.next !== null && fastIndex.next.next !== null) { //遍历一边
        fastIndex = fastIndex.next.next; //快指针
        slowIndex = slowIndex.next;//慢指针
        if (fastIndex === slowIndex) {
            return true;
        }
    }
    return false;
}

//返回circle开始处的节点
//hash表： 时间O(n) 空间 O(n)
//思路： 遍历，第一个重复的节点就是环开始的地方。
function circleIndex(linkList) {
    let cv = linkList.headnode;
    let hash = new Set();
    hash.add(cv);
    while (cv && cv.next) {
        cv = cv.next;
        if (hash.has(cv)) {
            return cv;
        }
        hash.add(cv);
    }
    return null;
}

//返回circle开始处的节点
//快慢指针法；时间O(n) 空间O（1）
//思路： 首先用快慢指针判断是否成环，记录下第一次相遇的点。
//然后可以推出相遇的点到成环点距离等于出发点到成环点距离（快指针是幔指针两倍速度）。
function circleIndex2(linkList) {
    function hasCircle(linkList) {
        let fastIndex = linkList.headnode;
        let slowIndex = linkList.headnode;
        while (fastIndex && fastIndex.next && fastIndex.next.next) {
            fastIndex = fastIndex.next.next;
            slowIndex = slowIndex.next;
            if (fastIndex === slowIndex) {
                return fastIndex;
            }
        }
        return null
    }

    let meetPoint = hasCircle(linkList);
    if (!meetPoint) {
        return null;
    }
    let point1 = linkList.headnode;
    let point2 = meetPoint;
    while (point1 !== point2) {
        point1 = point1.next;
        point2 = point2.next;
    }
    return point1;
}

console.log("circle:" + circleIndex2(test.nodeListCircle))
console.log("no circle:" + circleIndex2(test.nodeListNoCircle))