import IMask from 'imask';

const Modals = class Modals {
    constructor({modalsSelector, modalsOpenerSelector, openedClass}){
        this.modalsSelector = modalsSelector;
        this.modalsOpenerSelector = modalsOpenerSelector;
        this.openedClass = openedClass;
    }
    openModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.add(this.openedClass);
    }
    closeModal(id) {
        if (!document.querySelector(`[${this.modalsSelector}="${id}"]`)) return;
        document.querySelector(`[${this.modalsSelector}="${id}"]`).classList.remove(this.openedClass);
        
        
        const modal = document.querySelector(`[${this.modalsSelector}="${id}"]`);
        if (!modal) return;
    }
    addClickListener() {
        document.addEventListener('click', (event) => {
            if (event.target.dataset.modalId) {
                event.preventDefault();
                this.openModal(event.target.dataset.modalId);
            }
            if (!event.target.dataset.modalId && event.target.dataset.modal) {
                event.preventDefault();
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
            if (event.target.closest('.modal__closer')) {
                event.preventDefault();
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    addKeyupListener() {
        document.addEventListener('keyup', (event) => {
            if (event.keyCode === 27 && document.querySelector(`[${this.modalsSelector}].isOpened`)) {
                this.closeModal(document.querySelector(`[${this.modalsSelector}].isOpened`).dataset.modal);
            }
        })
    }
    inputMusk() {
        document.addEventListener("DOMContentLoaded", function() {
            const phoneInputs = document.querySelectorAll('input[type="tel"]');
            phoneInputs.forEach((phoneInput) => {
            
                let phoneMask = new IMask(phoneInput, {
            
                    mask: "+{7} (000) 000-00-00",
            
                  });
            }); 
        });              
    }
    init() {
        this.inputMusk();
        if (!this.modalsSelector && this.modalsOpenerSelector) return;
        this.addClickListener();
        this.addKeyupListener();
    }
}

export default Modals;