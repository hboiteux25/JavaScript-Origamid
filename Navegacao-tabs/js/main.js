function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach(section => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach(intemMenu => {
            intemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

function initeActiveAccordion() {
    const accordionItemList = document.querySelectorAll('.js-accordion dt')
    const ativoClass = 'ativo'

    function activeAccordion() {
        this.classList.toggle(ativoClass)
        this.nextElementSibling.classList.toggle(ativoClass)
    }

    accordionItemList.forEach(item => {
        item.addEventListener('click', activeAccordion)
    })
}
initeActiveAccordion()