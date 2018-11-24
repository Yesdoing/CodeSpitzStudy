const Loader = class {
    constructor(id, repo) {
        this._git = new Github(id, repo);
        this._router = new Map;
    }

    add(ext, f, ...arg) {
        ext.toLowerCase().split(',').forEach(v => this._router.set(v, [f, ...arg]));
    }

    load(v) {
        const ext = v.toLowerCase().split('.').pop();
        if(!this._router.has(ext)) return;
        this._git.setParser(...this._router.get(ext));
        this._git.load(v);
    }
}