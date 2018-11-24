const MdLoader = class extends Github {
    constructor(id, repo, target) {
        super(id, repo);
        this._target = target;
    }
    _loaded(v) {
        this._target.innerHTML = this._parseMD(v);
    }
    _parseMD(v) {
        return d64(v).split('\n').map(v => {
            let i = 3;
            while(i--) {
                if(v.startsWith('#'.repeat(i + 1))) return `<h${i + 1}>${v.substr(i + 1)}</h${i + 1}>`;
            }
            return v;
        }).join('<br>');
    }
};


const d64 = (v) => decodeURIComponent(escape(
    atob(v).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
)
);
