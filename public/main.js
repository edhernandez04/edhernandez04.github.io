app = document.getElementById('app')

let topDiv = document.createElement('div')
  topDiv.id = 'topDiv'
  topDiv.className = 'top-div'

let titleContainer = document.createElement('div')
  titleContainer.id = 'title-container'
  
  let avatarRow = document.createElement('div')
    avatarRow.id = 'avatar-row'
    avatarRow.className = 'row'
  
  let avatarColumn = document.createElement('div')
    avatarColumn.id = 'avatar'
    avatarColumn.className = 'col'
    avatarColumn.innerHTML = `<img src='./assets/avatar.jpg' class='avatar'>`

  let info = document.createElement('div')
    info.id = 'info'
    info.className = 'col'
    info.innerHTML = `<img src='./assets/contact.png' class='contactCard'>`
  
topDiv.append(titleContainer)
titleContainer.append(avatarRow)
avatarRow.append(avatarColumn, info)

let displayBlock = document.createElement('div')
  displayBlock.id = 'displayBlock'
  displayBlock.className = 'displayBlock'

let pBpreview = document.createElement('div')
  pBpreview.id = 'pBpreview'
  pBpreview.innerHTML = `
      Native New Yorker from The Bronx. 
      <br> I enjoy being nice to people for no reason, golfing, football, & listening to loud music.
      <br> The hardest working person in the universe and I make sure to have fun doing it. Watch for the future projects. 
      <br> Thanks for stopping by!
  `
displayBlock.append(pBpreview)

let projectBlock = document.createElement('div')
  projectBlock.id = 'projectBlock'

let projectRow = document.createElement('div')
  projectBlock.id = 'projectRow'
  projectRow.className = 'row'

let LinkUp = document.createElement('div')
  LinkUp.id = 'LinkUp'
  LinkUp.className = 'col'

  let LinkUpCard = document.createElement('div')
    LinkUpCard.className = 'logo'
    LinkUpCard.innerHTML = `<img src='./assets/LinkUp.png' id='LinkUpCard'>`

let LifeTour = document.createElement('div')
  LifeTour.id = 'LifeTour'
  LifeTour.className = 'col'

  let LifeTourCard = document.createElement('div')
    LifeTourCard.className = 'logo'
    LifeTourCard.innerHTML = `<img src='./assets/LifeTour.png' id='LifeTourCard'>`

let IntelliTrak = document.createElement('div')
  IntelliTrak.id = 'IntelliTrak'
  IntelliTrak.className = 'col'

  let IntelliTrakCard = document.createElement('div')
    IntelliTrakCard.className = 'logo'
    IntelliTrakCard.innerHTML = `<img src='./assets/Intellitrak.png' id='IntellitrakCard'>`

let PuppyLink = document.createElement('div')
  PuppyLink.id = 'PuppyLink'
  PuppyLink.className = 'col'

  let PuppyLinkCard = document.createElement('div')
    PuppyLinkCard.className = 'logo'
    PuppyLinkCard.innerHTML = `<img src='./assets/PuppyLink.png' id='PuppyLinkCard'>`

projectBlock.append(projectRow)
projectRow.append(LinkUp, LifeTour, IntelliTrak, PuppyLink)
LinkUp.append(LinkUpCard)
LifeTour.append(LifeTourCard)
IntelliTrak.append(IntelliTrakCard)
PuppyLink.append(PuppyLinkCard)

let LinkUpShow = document.createElement('div')
  LinkUpShow.id = 'LinkUpShow'
  LinkUpShow.className = 'row'
    let LinkUpHomePage = document.createElement('div')
      LinkUpHomePage.id = 'linkuphome'
      LinkUpHomePage.className = 'project-images'
      LinkUpHomePage.innerHTML = `<img src='./assets/LinkUp/homepage.png' class='phone-image'>`
    let LinkUpLogin = document.createElement('div')
      LinkUpLogin.id = 'linkuplogin'
      LinkUpLogin.className = 'project-images'
      LinkUpLogin.innerHTML = `<img src='./assets/LinkUp/login.png' class='phone-image'>`
    let LinkUpCrud = document.createElement('div')
      LinkUpCrud.id = 'LinkUpCrud'
      LinkUpCrud.className = 'project-images'
      LinkUpCrud.innerHTML = `<img src='./assets/LinkUp/crud.png' class='phone-image'>`
    let LinkUpMulti = document.createElement('div')
      LinkUpMulti.id = 'LinkUpMulti'
      LinkUpMulti.className = 'project-images'
      LinkUpMulti.innerHTML = `<img src='./assets/LinkUp/mulitusers.png' class='phone-image'>`
    let LinkUpChat = document.createElement('div')
      LinkUpChat.id = 'LinkUpChat'
      LinkUpChat.className = 'project-images'
      LinkUpChat.innerHTML = `<img src='./assets/LinkUp/chat.png' class='phone-image'>`

let LifeTourShow = document.createElement('div')
  LifeTourShow.id = 'LifeTourShow'
  LifeTourShow.className = 'row'
    let LifeTourUserpage = document.createElement('div')
      LifeTourUserpage.id = 'LifeTourUserpage'
      LifeTourUserpage.className = 'project-images'
      LifeTourUserpage.innerHTML = `<img src='./assets/LifeTour/homepage.png' class='page-image'>`
    let LifeTourLogin = document.createElement('div')
      LifeTourLogin.id = 'LifeTourLogin'
      LifeTourLogin.className = 'project-images'
      LifeTourLogin.innerHTML = `<img src='./assets/LifeTour/login.png' class='page-image'>`
    let LifeTourTour = document.createElement('div')
      LifeTourTour.id = 'LifeTourTour'
      LifeTourTour.className = 'project-images'
      LifeTourTour.innerHTML = `<img src='./assets/LifeTour/tourpage.png' class='page-image'>`
    let LifeTourHome = document.createElement('div')
      LifeTourHome.id = 'LifeTourHome'
      LifeTourHome.className = 'project-images'
      LifeTourHome.innerHTML = `<img src='./assets/LifeTour/home.png' class='page-image'>`

let IntellitrakShow = document.createElement('div')
  IntellitrakShow.id = 'IntellitrakShow'
  IntellitrakShow.className = 'row'
    let IntellitrakCarshow = document.createElement('div')
      IntellitrakCarshow.id = 'IntellitrakCarshow'
      IntellitrakCarshow.className = 'project-images'
      IntellitrakCarshow.innerHTML = `<img src='./assets/IntelliTrak/carshow.png' class='page-image'>`
    let IntellitrakHome = document.createElement('div')
      IntellitrakHome.id = 'IntellitrakHome'
      IntellitrakHome.className = 'project-images'
      IntellitrakHome.innerHTML = `<img src='./assets/IntelliTrak/home.png' class='page-image'>`
    let IntellitrakInv = document.createElement('div')
      IntellitrakInv.id = 'IntellitrakInv'
      IntellitrakInv.className = 'project-images'
      IntellitrakInv.innerHTML = `<img src='./assets/IntelliTrak/inventory.png' class='page-image'>`
    let IntellitrakPerf = document.createElement('div')
      IntellitrakPerf.id = 'IntellitrakPerf'
      IntellitrakPerf.className = 'project-images'
      IntellitrakPerf.innerHTML = `<img src='./assets/IntelliTrak/performance.png' class='page-image'>`

let PuppyLinkShow = document.createElement('div')
  PuppyLinkShow.id = 'PuppyLinkShow'
  PuppyLinkShow.className = 'row'
    let PuppLinkBShow = document.createElement('div')
      PuppLinkBShow.id = 'PuppLinkBShow'
      PuppLinkBShow.className = 'project-images'
      PuppLinkBShow.innerHTML = `<img src='./assets/PuppyLink/breedershow.png' class='page-image'>`
    let PuppyLinkDShow = document.createElement('div')
      PuppyLinkDShow.id = 'PuppyLinkDShow'
      PuppyLinkDShow.className = 'project-images'
      PuppyLinkDShow.innerHTML = `<img src='./assets/PuppyLink/dogshow.png' class='page-image'>`
    let PuppyLinkPShow = document.createElement('div')
      PuppyLinkPShow.id = 'PuppyLinkPShow'
      PuppyLinkPShow.className = 'project-images'
      PuppyLinkPShow.innerHTML = `<img src='./assets/PuppyLink/petshow.png' class='page-image'>`
    let PuppyLinkUser = document.createElement('div')
      PuppyLinkUser.id = 'PuppyLinkUser'
      PuppyLinkUser.className = 'project-images'
      PuppyLinkUser.innerHTML = `<img src='./assets/PuppyLink/userprofile.png' class='page-image'>`

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
      displayBlock.append(LifeTourShow)
      LifeTourShow.append(LifeTourUserpage, LifeTourLogin, LifeTourTour, LifeTourHome)
      break;

    case 'IntellitrakCard':
      event.target.className = 'selectedcard'
      displayBlock.append(IntellitrakShow)
      IntellitrakShow.append(IntellitrakCarshow, IntellitrakHome, IntellitrakInv, IntellitrakPerf)
      break;
    
    case 'PuppyLinkCard':
      event.target.className = 'selectedcard'
      displayBlock.append(PuppyLinkShow)
      PuppyLinkShow.append(PuppLinkBShow, PuppyLinkDShow, PuppyLinkPShow, PuppyLinkUser)
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

