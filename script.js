const applicantForm = document.getElementById('test')
applicantForm.addEventListener('submit', handleFormSubmit)
const btn = document.querySelector('.submitButton')
btn.addEventListener("click", changeText)
let correctAnswersCount=0
const checkedAnswer=Array.from(document.querySelectorAll('.checkedAnswer'))
const correctAnswers=[
['answer0', '4'],
['answer1','2'],
['answer2', '14'],
['answer3', '13'],
['answer4', '15']]

function changeText()
{
    btn.innerHTML='Отправлено!'
}

function serializeForm(formNode) {
    let data = new FormData(formNode)
    data=Array.from(data.entries())
    return data
    //checker(data)
}

async function sendAnswers(data) {
    console.log('1')
    return await fetch('api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data'},
        body: {}
    })
}


async function handleFormSubmit(event) {
    event.preventDefault()
    const data = serializeForm(event.target)
    const response = await sendAnswers(data)
}

function checker(data){
    for (let i = 0; i<data.length-1; i++){
        if(data[i][0]===correctAnswers[i][0] && data[i][1]===correctAnswers[i][1]){
            correctAnswersCount++
            checkedAnswer[i].innerHTML='Верно'
            checkedAnswer[i].style="color: green";
        }
        else{
            checkedAnswer[i].innerHTML='Неверно'
            checkedAnswer[i].style="color: red";
        }
    }
    btn.innerHTML=`Количество баллов: ${correctAnswersCount}`
    correctAnswersCount=0
}
