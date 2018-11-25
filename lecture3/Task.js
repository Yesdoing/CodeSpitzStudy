const Task = class {
    constructor(title, date){
        if(!title) throw "invaild title";
        this._title = title;
        this._date = date;
        this._isComplete = false;
        this._list = [];
    }
    isComplete() { return this._isComplete };
    toggle() { this._isComplete = !this._isComplete; }
    add(title, date=null) { this._list.push(new Task(title, date));}
    remove(task) { 
        const list = this._list;
        if(list.includes(task)) list.splice(list.indexOf(task), 1);
    }
    byTitle(stageGroup=true) { return this.list('title', stageGroup); }
    byDate(stageGroup = true) { return this.list('date', stageGroup); }
    list(sort, stageGroup = true) {
        const list = this._list, f = (a, b) => a['_'+sort] > b['_'+sort];
        const map = task => task.list(sort, stageGroup);
        return {
            task: this,
            list: !stageGroup ? [...list].sort(f).map(map) : [
                ...list.filter(v => !v.isComplete()).sort(f).map(map),
                ...list.filter(v => v.isComplete()).sort(f).map(map)
            ]
        };
    }
};

