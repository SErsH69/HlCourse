const BlockWhy = class BlockWhy {
    constructor(){}
    tabsInit() {
        document.addEventListener('DOMContentLoaded', function() {
            const tabTitles = document.querySelectorAll('.block_why__tit');
        
            tabTitles.forEach(function(title) {
                title.addEventListener('click', function() {
                    const parentItem = this.closest('.block_why__item');
                    parentItem.classList.toggle('isActive');
                });
            });
        });
    }
    init() {
        this.tabsInit();
    }
}

export default BlockWhy;