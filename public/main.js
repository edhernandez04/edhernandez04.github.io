app = document.getElementById('app')

let topDiv = document.createElement('div')
  topDiv.id = 'topDiv'
  topDiv.className = 'row'
  
  let avatar = document.createElement('div')
    avatar.id = 'avatar'
    avatar.innerHTML = `<img src='./assets/avatar.jpg' class='avatar'>`

  let info = document.createElement('div')
    info.id = 'info'
    info.innerHTML = `<img src='./assets/contact.png' class='contactCard'>`
  
topDiv.append(avatar, info)

let displayBlock = document.createElement('div')
  displayBlock.id = 'displayBlock'
  displayBlock.className = 'displayBlock'

let pBpreview = document.createElement('div')
  pBpreview.id = 'pBpreview'
  pBpreview.innerHTML = `
      Native New Yorker from The Bronx. 
      I enjoy being nice to people for no reason, golfing, football, & listening to loud music.
      The hardest working person in the universe and I make sure to have fun doing it. Watch for the future projects. 
      Thanks for stopping by!
  `
displayBlock.append(pBpreview)

let projectBlock = document.createElement('div')
  projectBlock.id = 'projectBlock'

  let LinkUpCard = document.createElement('div')
    LinkUpCard.className = 'logo'
    LinkUpCard.innerHTML = `<img src='./assets/LinkUp.png' id='LinkUpCard'>`

  let LifeTourCard = document.createElement('div')
    LifeTourCard.className = 'logo'
    LifeTourCard.innerHTML = `<img src='./assets/LifeTour.png' id='LifeTourCard'>`

  let IntelliTrakCard = document.createElement('div')
    IntelliTrakCard.className = 'logo'
    IntelliTrakCard.innerHTML = `<img src='./assets/Intellitrak.png' id='IntellitrakCard'>`

  let PuppyLinkCard = document.createElement('div')
    PuppyLinkCard.className = 'logo'
    PuppyLinkCard.innerHTML = `<img src='./assets/PuppyLink.png' id='PuppyLinkCard'>`

projectBlock.append(LinkUpCard, LifeTourCard, IntelliTrakCard, PuppyLinkCard)

  let LinkUpHomePage = document.createElement('div')
    LinkUpHomePage.id = 'linkuphome'
    LinkUpHomePage.innerHTML = `<img src='./assets/LinkUp/homepage.png' className='page-image'>`
  let LinkUpLogin = document.createElement('div')
    LinkUpLogin.id = 'linkuplogin'
    LinkUpLogin.innerHTML = `<img src='./assets/LinkUp/login.png' className='page-image'>`
  let LinkUpCrud = document.createElement('div')
    LinkUpCrud.id = 'LinkUpCrud'
    LinkUpCrud.innerHTML = `<img src='./assets/LinkUp/crud.png' className='page-image'>`
  let LinkUpMulti = document.createElement('div')
    LinkUpMulti.id = 'LinkUpMulti'
    LinkUpMulti.innerHTML = `<img src='./assets/LinkUp/mulitusers.png' className='page-image'>`
  let LinkUpChat = document.createElement('div')
    LinkUpChat.id = 'LinkUpChat'
    LinkUpChat.innerHTML = `<img src='./assets/LinkUp/chat.png' className='page-image'>`

  let LifeTourUserpage = document.createElement('div')
    LifeTourUserpage.id = 'LifeTourUserpage'
    LifeTourUserpage.innerHTML = `<img src='./assets/LifeTour/homepage.png' className='page-image'>`
  let LifeTourLogin = document.createElement('div')
    LifeTourLogin.id = 'LifeTourLogin'
    LifeTourLogin.innerHTML = `<img src='./assets/LifeTour/login.png' className='page-image'>`
  let LifeTourTour = document.createElement('div')
    LifeTourTour.id = 'LifeTourTour'
    LifeTourTour.innerHTML = `<img src='./assets/LifeTour/tourpage.png' className='page-image'>`
  let LifeTourHome = document.createElement('div')
    LifeTourHome.id = 'LifeTourHome'
    LifeTourHome.innerHTML = `<img src='./assets/LifeTour/home.png' className='page-image'>`

  let IntellitrakCarshow = document.createElement('div')
    IntellitrakCarshow.id = 'IntellitrakCarshow'
    IntellitrakCarshow.innerHTML = `<img src='./assets/IntelliTrak/carshow.png' className='page-image'>`
  let IntellitrakHome = document.createElement('div')
    IntellitrakHome.id = 'IntellitrakHome'
    IntellitrakHome.innerHTML = `<img src='./assets/IntelliTrak/home.png' className='page-image'>`
  let IntellitrakInv = document.createElement('div')
    IntellitrakInv.id = 'IntellitrakInv'
    IntellitrakInv.innerHTML = `<img src='./assets/IntelliTrak/inventory.png' className='page-image'>`
  let IntellitrakPerf = document.createElement('div')
    IntellitrakPerf.id = 'IntellitrakPerf'
    IntellitrakPerf.innerHTML = `<img src='./assets/IntelliTrak/performance.png' className='page-image'>`

  let PuppLinkBShow = document.createElement('div')
    PuppLinkBShow.id = 'PuppLinkBShow'
    PuppLinkBShow.innerHTML = `<img src='./assets/PuppyLink/breedershow.png' className='page-image'>`
  let PuppyLinkDShow = document.createElement('div')
    PuppyLinkDShow.id = 'PuppyLinkDShow'
    PuppyLinkDShow.innerHTML = `<img src='./assets/PuppyLink/dogshow.png' className='page-image'>`
  let PuppyLinkPShow = document.createElement('div')
    PuppyLinkPShow.id = 'PuppyLinkPShow'
    PuppyLinkPShow.innerHTML = `<img src='./assets/PuppyLink/petshow.png' className='page-image'>`
  let PuppyLinkUser = document.createElement('div')
    PuppyLinkUser.id = 'PuppyLinkUser'
    PuppyLinkUser.innerHTML = `<img src='./assets/PuppyLink/userprofile.png' className='page-image'>`

app.append(topDiv, displayBlock, projectBlock)

document.getElementById('projectRow').addEventListener('click', event => {
  logoToggle();
  removePrevDiv();
  switch (event.target.id) {
    case 'LinkUpCard': 
      event.target.className = 'selectedcard'
      displayBlock.append(LinkUpShow)
      LinkUpShow.append(LinkUpHomePage, LinkUpLogin, LinkUpCrud, LinkUpMulti, LinkUpChat)
      break;
    
    case 'LifeTourCard':
      event.target.className = 'selectedcard'
      displayBlock.append(LifeTourUserpage, LifeTourLogin, LifeTourTour, LifeTourHome)
      break;

    case 'IntellitrakCard':
      event.target.className = 'selectedcard'
      displayBlock.append(IntellitrakCarshow, IntellitrakHome, IntellitrakInv, IntellitrakPerf)
      break;
    
    case 'PuppyLinkCard':
      event.target.className = 'selectedcard'
      displayBlock.append(PuppLinkBShow, PuppyLinkDShow, PuppyLinkPShow, PuppyLinkUser)
      break;
  }
})

function removePrevDiv(){
  if (document.getElementById('pBpreview')){
    document.getElementById('pBpreview').remove()
  }
  if (document.getElementById('LinkUpShow')){
    document.getElementById('LinkUpShow').remove()
  } else if (document.getElementById('LifeTourShow')){
    document.getElementById('LifeTourShow').remove()
  } else if (document.getElementById('IntellitrakShow')){
    document.getElementById('IntellitrakShow').remove()
  } else if (document.getElementById('PuppyLinkShow')){
    document.getElementById('PuppyLinkShow').remove()
  }
}

function logoToggle(){
  if (document.getElementById('LinkUpCard').className === 'selectedcard'){
    document.getElementById('LinkUpCard').className = ''
    document.getElementById('LifeTourCard').className = ''
    document.getElementById('IntellitrakCard').className = ''
    document.getElementById('PuppyLinkCard').className = ''
  } else if (document.getElementById('LifeTourCard').className === 'selectedcard'){
    document.getElementById('LinkUpCard').className = ''
    document.getElementById('LifeTourCard').className = ''
    document.getElementById('IntellitrakCard').className = ''
    document.getElementById('PuppyLinkCard').className = ''
  } else if (document.getElementById('IntellitrakCard').className === 'selectedcard'){
    document.getElementById('LinkUpCard').className = ''
    document.getElementById('LifeTourCard').className = ''
    document.getElementById('IntellitrakCard').className = ''
    document.getElementById('PuppyLinkCard').className = ''
  } else if (document.getElementById('PuppyLinkCard').className === 'selectedcard'){
    document.getElementById('LinkUpCard').className = ''
    document.getElementById('LifeTourCard').className = ''
    document.getElementById('IntellitrakCard').className = ''
    document.getElementById('PuppyLinkCard').className = ''
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

document.getElementById('displayBlock').addEventListener('click', event => {
  switch (event.target.parentElement.parentElement.id) {
    case 'LinkUpShow':
      let LinkUpModal = document.createElement('div')
        LinkUpModal.id = "overlay"
        app.append(LinkUpModal)
        on()
        LinkUpModal.innerHTML = `
        <div class="container">
          <iframe width="600" height="350" src="https://www.youtube.com/embed/K0Y9VCCvfh0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
      break;  

    case 'LifeTourShow':
      let LifeTourModal = document.createElement('div')
        LifeTourModal.id = "overlay"
        app.append(LifeTourModal)
        on()
        LifeTourModal.innerHTML = `
        <div class="container">
          <iframe width="600" height="350" src="https://www.youtube.com/embed/e2d8cwx4wrw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
      break;

    case 'IntellitrakShow':
      let IntellitrakModal = document.createElement('div')
        IntellitrakModal.id = "overlay"
        app.append(IntellitrakModal)
        on()
        IntellitrakModal.innerHTML = `
        <div class="container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5km27Qy2KZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
      break;
    
    case 'PuppyLinkShow':
      let PuppyLinkModal = document.createElement('div')
        PuppyLinkModal.id = "overlay"
        app.append(PuppyLinkModal)
        on()
        PuppyLinkModal.innerHTML = `
        <div class="container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lhKQdcUUUNo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`
      break;
  }
})

app.addEventListener('click', event => {
  if (event.target.id === 'overlay'){
    event.target.remove()
  };

})

