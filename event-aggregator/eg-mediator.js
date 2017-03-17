/**
 * Created by shenyin.sy on 17/3/17.
 */

// MenuItem（菜单，事件聚合者）和MyWorkflow（中介者）并没有直接关系
// 所以通过事件menu:click:XXX来通知，当MyWorkflow收到通知后，可以
// 在doStuff中通知相关的对象，完成某些工作流程

"use strict"



const EventEmitter = require('events');


class EventAggregator extends EventEmitter {
    constructor() {
        super();
        this.prefix = "menu:click:";
    }
    clickedIt(menuName){
        this.emit(this.prefix + menuName);
    }
}

var eventAggregator = new EventAggregator();

//模拟一个菜单
var MenuItem ={

    _menuItemName: "foo",
    get menuItemName() {
        return this._menuItemName;
    },
    set menuItemName(val) {
        this._menuItemName = val
    },
    clickedIt: function(e){
        console.log(`clickedIt : ${e}`);
        // assume this triggers "menu:click:foo"
        eventAggregator.emit("menu:click:" + this.menuItemName);
    }

};
// ... somewhere else in the app

var MyWorkflow = function(){
    eventAggregator.on("menu:click:foo", this.doStuff.bind(this));
    this.tasks=[];
};
MyWorkflow.prototype.addTask = function(task){
    this.tasks.push(task);
}

MyWorkflow.prototype.doStuff = function(){
    // instantiate multiple objects here.
    // set up event handlers for those objects.
    // coordinate all of the objects into a meaningful workflow.
    for(let i = 0; i < this.tasks.length; i++){
        console.log(`do task : ${this.tasks[i]}`);

    }

};

function run() {
    //myWorkflow是一个中介者，他会通知task去做任务，并且只关心"menu:click:foo"事件
    var myWorkflow = new MyWorkflow();
    myWorkflow.addTask(1);
    myWorkflow.addTask(2);
    myWorkflow.addTask(3);

    //事件发生
    MenuItem.clickedIt("模拟点击菜单项");
    // MenuItem1.clickedIt("模拟点击菜单项1");
    // MenuItem2.clickedIt("模拟点击菜单项2");

}

run();