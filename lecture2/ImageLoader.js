const ImageLoader = class extends Github {
    constructor(id, repo, target) {
        super(id, repo);
        this._target = target;
    }
    _loaded(v){
        this._target.src = 'data:text/plain;base64,' + v;
    }
}

//const img = (v, el) => el.src = 'data:text/plain;base64,' + v;
