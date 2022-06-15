const init = () => {
    const form =document.querySelector('form');
    form.addEventListener('submit',event => {
        event.preventDefault();
        const input=document.querySelector('input#searchByID');
        fetch(' http://localhost:3000/movies')
        .then(response =>response.json())
        .then(data =>{
            const foundData=data.find(item => item.id==input.value);
            const title=document.querySelector('#movieDetails h4');
            const summary=document.querySelector('#movieDetails p')
            title.innerText=foundData.title;
            summary.innerText=foundData.summary;
            form.reset()
        })
      
    })
}

document.addEventListener('DOMContentLoaded', init);