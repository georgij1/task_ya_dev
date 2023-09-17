alert('Этот сайт не является сайтом яндекса. Это просто свёрстанный макет для Яндекса')

let i = 0

console.log(document.querySelector('.image_slider_1'))
console.log(document.querySelector('.image_slider_2'))
console.log(document.querySelector('.image_slider_3'))
console.log(document.querySelector('.image_slider_4'))

document.querySelector('.arrow_next').addEventListener('click', () => {
    console.log('next')

    if (i < 3) {
        i++
        console.log('plus - ', 'i - ', i)

        if (i === 0) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('block')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('none')

            document.querySelector('.arrow_back').classList.remove('not_blur_arrow')
        }

        else if (i === 1) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('block')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('none')

            document.querySelector('.arrow_back').classList.add('not_blur_arrow')
        }

        else if (i === 2) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('block')
            document.querySelector('.image_slider_4').classList.add('none')
        }

        else if (i === 3) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('block')

            document.querySelector('.arrow_next').classList.add('blur_arrow')
        }

        else {
            console.log('warning')
        }
    }

    console.log("i", i)
})

document.querySelector('.arrow_back').addEventListener('click', () => {
    console.log('back')

    if (i > 0) {
        i--
        console.log('minus - ', 'i - ', i)

        if (i === 0) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('block')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('none')

            document.querySelector('.arrow_back').classList.remove('not_blur_arrow')
        }

        else if (i === 1) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('block')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('none')
        }

        else if (i === 2) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('block')
            document.querySelector('.image_slider_4').classList.add('none')

            document.querySelector('.arrow_next').classList.remove('blur_arrow')
        }

        else if (i === 3) {
            document.querySelector('.image_slider_1').classList.remove('block')
            document.querySelector('.image_slider_2').classList.remove('block')
            document.querySelector('.image_slider_3').classList.remove('block')
            document.querySelector('.image_slider_4').classList.remove('block')

            document.querySelector('.image_slider_1').classList.remove('none')
            document.querySelector('.image_slider_2').classList.remove('none')
            document.querySelector('.image_slider_3').classList.remove('none')
            document.querySelector('.image_slider_4').classList.remove('none')

            document.querySelector('.image_slider_1').classList.add('none')
            document.querySelector('.image_slider_2').classList.add('none')
            document.querySelector('.image_slider_3').classList.add('none')
            document.querySelector('.image_slider_4').classList.add('block')
        }

        else {
            console.log('warning')
        }
    }

    console.log("i", i)
})