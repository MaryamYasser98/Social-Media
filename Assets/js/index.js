

let All_links = document.querySelectorAll('.menu-item');

let link_notification = document.querySelector('#message-notifications');
let message_block = document.querySelector('.messages');

let All_message = document.querySelectorAll('.message');
let SearchBarInput_message = document.querySelector('#message-search');

let theme_link = document.querySelector('#theme');
let theme_block = document.querySelector('.customize-theme');
let Font_Sizes = document.querySelectorAll('.choose-size span');
let Colors = document.querySelectorAll('.choose-color span');
let bg_1 = document.querySelector('.bg-1');
let bg_2 = document.querySelector('.bg-2');
let bg_3 = document.querySelector('.bg-3');

let root = document.querySelector(':root');


// To active link and appeare notification block
All_links.forEach(link=>{
    link.addEventListener('click' , ()=>{

        All_links.forEach(item=>{
            item.classList.remove('active');
        })

        link.classList.add('active');

        if(link.id != 'notification'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })//end of on click
})//end of foreach


// To appeare message block
link_notification.addEventListener('click',()=>{
    message_block.style.boxShadow = '0 0 1rem var(--color-primary)';
    link_notification.querySelector('.notification-count').style.display = 'none';

    //to remove shadow after some times
    setTimeout(()=>{
        message_block.style.boxShadow='none'
    },2000)
})




//Filter message by search bar
SearchBarInput_message.addEventListener('keyup', ()=>{

    let val = SearchBarInput_message.value.toLocaleLowerCase();
    // console.log(val)

    All_message.forEach((MS)=>{
        let name = MS.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            MS.style.display = 'flex'
        }
        else{
            MS.style.display ='none'
        }
    })
})




// Open and Close theme Model
theme_link.addEventListener('click' , ()=>{

    theme_block.style.display='grid'
});

theme_block.addEventListener('click', function(e){

    if(e.target.classList.contains('customize-theme')){
        theme_block.style.display='none';
    }
})




//theme -- font size change
Font_Sizes.forEach((f)=>{

    let fontSize;

   f.addEventListener('click' , ()=>{

     //to remove active
   Font_Sizes.forEach((size)=>{
    size.classList.remove('active')
   })

    //to add active
    f.classList.add('active')

    if(f.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left' , '5.4rem')
        root.style.setProperty('----sticky-top-right' , '5.4rem')
    }
    else if(f.classList.contains('font-size-2')){
        fontSize = '13px'
        root.style.setProperty('----sticky-top-left' , '5.4rem')
        root.style.setProperty('----sticky-top-right' , '-7rem')
    }
    else if(f.classList.contains('font-size-3')){
        fontSize = '16px'
        root.style.setProperty('----sticky-top-left' , '-2rem')
        root.style.setProperty('----sticky-top-right' , '-17rem')
    }
    else if(f.classList.contains('font-size-4')){
        fontSize = '19px'
        root.style.setProperty('----sticky-top-left' , '-5rem')
        root.style.setProperty('----sticky-top-right' , '-25rem')
    }
    else if(f.classList.contains('font-size-5')){
        fontSize = '22px'
        root.style.setProperty('----sticky-top-left' , '-12rem')
        root.style.setProperty('----sticky-top-right' , '-35rem')
    }


    document.querySelector('html').style.fontSize = fontSize;

   })//end of on click

    
}) //end foreach




//theme -- Color change
Colors.forEach((color)=>{

    color.addEventListener('click' , function(){

        Colors.forEach((c)=>{
            c.classList.remove('active')
        })

        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    }
        
    )//end on click
})


//theme -- background color change
let darkColor;
let whiteColor;
let lightColor;

function changeBGColor(){
    root.style.setProperty('--light-color-bg',lightColor)
    root.style.setProperty('--dark-color-bg',darkColor)
    root.style.setProperty('--white-color-bg',whiteColor)
}

bg_1.addEventListener('click', ()=>{

    bg_1.classList.add('active');
    bg_2.classList.remove('active')
    bg_3.classList.remove('active')
    
   window.location.reload();
})

bg_2.addEventListener('click', ()=>{
    darkColor = '95%';
    whiteColor = '20%';
    lightColor = '15%';

    bg_2.classList.add('active');
    bg_1.classList.remove('active')
    bg_3.classList.remove('active')

    changeBGColor();
   
})

bg_3.addEventListener('click', ()=>{
    darkColor = '95%';
    whiteColor = '10%';
    lightColor = '0%';

    bg_3.classList.add('active');
    bg_1.classList.remove('active')
    bg_2.classList.remove('active')
    
    changeBGColor();
   
})
