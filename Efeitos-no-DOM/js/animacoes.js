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

function initScrollSuave() {
    const LinksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        //FORMA ALTERNATIVA
        const topo = section.offsetTop
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        })
    }

    LinksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}
initScrollSuave()

function inniteAnimacaoScroll() {
    const section = document.querySelectorAll('.js-scroll')
    const windowsMetade = window.innerHeight * 0.6

    function animaScroll() {
        section.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top - windowsMetade
            if (sectionTop < 0) {
                section.classList.add('ativo')
            }
        })
    }

    window.addEventListener('scroll', animaScroll)
}
inniteAnimacaoScroll()