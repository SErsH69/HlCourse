const BlockTabs = class BlockTabs {
    constructor(){}
    tabsInit() {
        document.addEventListener('DOMContentLoaded', function() {
            const tabTitles = document.querySelectorAll('.block_tabs__tit');
        
            tabTitles.forEach(function(title) {
                title.addEventListener('click', function() {
                    const parentItem = this.closest('.block_tabs__item');
                    parentItem.classList.toggle('isActive');
                });
            });
        });
    }
    init() {
        this.tabsInit();
    }
}

export default BlockTabs;