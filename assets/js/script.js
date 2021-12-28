document.querySelector('#menu-img').addEventListener('click',()=>{
  
  //Mudando o tamanho do aside
  document.querySelector('aside').classList.toggle('open');
  document.querySelector('aside').classList.toggle('closed');

  //Mudando os estados do restante
  document.querySelector('#vet-logo').classList.toggle('none')
  document.querySelector('#search-area').classList.toggle('none')
  let textList = document.querySelectorAll('.menu-texts');
  textList.forEach(function(item){
    item.classList.toggle('none');
  })
  document.querySelector('.user-image').classList.toggle('none')
  document.querySelector('.user-description').classList.toggle('none')
  document.querySelector('.user-name').classList.toggle('none')




  


})