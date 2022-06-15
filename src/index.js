const init = () => {
    const form =document.querySelector('form');
    form.addEventListener('submit',event => {
        event.preventDefault();
        const input=document.querySelector('input#searchByID');
        fetch(' http://localhost:3000/movies')
        .then(response =>response.json())
        .then(data =>{
            const foundData=data.find(item => item.id==input.value);
            const 
        })
    })
}

document.addEventListener('DOMContentLoaded', init);