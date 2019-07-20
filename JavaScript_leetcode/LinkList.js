function Node(value) {
    this.value = value;
    this.next = null;
}

function NodeList(array) {
    this.headnode = new Node(array[0]);
    this.circleList = false;
    this.length = array.length;
    let curerntNode = this.headnode;
    for (let i = 1; i < array.length; i++) {
        curerntNode.next = new Node(array[i]);
        curerntNode = curerntNode.next;
    }
    this.endnode = curerntNode;

    this.viewAll = function () {
        let currentNode = this.headnode;
        for (let i = 0; i < this.length; i++) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        if(this.circleList){
            console.log("this is a circle!")
    }

}

this.indexNode = function (index) {
    let currentNode = this.headnode;
    for (let i = 0; i <= index; i++) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

this.addCircle = function (source, arrayCircle) {
    this.circleList = true;
    let newNodeList = new NodeList(arrayCircle);
    newNodeList.endnode.next = this.indexNode(source);
    this.endnode.next=newNodeList.headnode;
    this.length+=arrayCircle.length;
}
}

var nodeListNoCircle = new NodeList([1, 2, 3, 4, 5,6,7,8,9,10]);
var nodeListCircle= new NodeList([1, 2, 3, 4, 5,6,7]);
nodeListCircle.addCircle(2,[5,6,7,89])
module.exports.nodeListNoCircle = nodeListNoCircle ;
module.exports.nodeListCircle=nodeListCircle ;
