import $ from 'jquery';
import 'slick-carousel';

const BlockRev = class BlockRev {
    constructor(){}
    initButtons() {
        document.addEventListener('DOMContentLoaded', function() {
            // Находим элементы слайдеров и кнопок
            const slider1 = document.querySelector('.js_main_rev');
            const slider2 = document.querySelector('.js_main_rev2');
            const button1 = document.querySelectorAll('.block_rev__button')[0];
            const button2 = document.querySelectorAll('.block_rev__button')[1];
        
            // Функция переключения видимости слайдеров
            function showSlider(sliderToShow, sliderToHide, buttonToActivate, buttonToDeactivate) {
                sliderToShow.style.opacity = '1';
                sliderToShow.style.visibility = 'visible';
                sliderToShow.style.position = 'relative';
        
                sliderToHide.style.opacity = '0';
                sliderToHide.style.visibility = 'hidden';
                sliderToHide.style.position = 'absolute';
        
                buttonToActivate.classList.add('isActive');
                buttonToDeactivate.classList.remove('isActive');
            }
        
            // По умолчанию показываем первый слайдер, скрываем второй
            showSlider(slider1, slider2, button1, button2);
        
            // Добавляем обработчики событий на кнопки
            button1.addEventListener('click', function() {
                showSlider(slider1, slider2, button1, button2);
            });
        
            button2.addEventListener('click', function() {
                showSlider(slider2, slider1, button2, button1);
            });
        });        
    }
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_rev').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 980,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                    },
                ]
            });
            $('.js_main_rev2').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 980,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 680,
                        settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                        }
                    },
                ]
            });
        });
    }
    init() {
        this.initButtons();
        this.initSlider();
    }
}

export default BlockRev;