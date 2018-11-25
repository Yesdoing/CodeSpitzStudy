const TaskList = class {
    constructor(title) {
        if(!title) throw "invaild title";
        this._title = title;
        this._list = [];
    }   
    add(title, date) {this._list.push(Task.get(title, date));}
    remove(task) {
        const list = this._list;
        if(list.includes(task)) list.splice(list.indexOf(task), 1);
    }
    byTitle(stageGroup = true) {return this._getList(Sort.title, stageGroup);}
    byDate(stageGroup = true) { return this._getList(Sort.date, stageGroup); }
    _getList(sort, stageGroup) {
        const list = this._list;
        return !stageGroup ? [...list].sort(sort) : [
            ...list.filter( v => !v.isComplete()).sort(sort),
            ...list.filter( v => v.isComplete()).sort(sort)
        ];
    }
}